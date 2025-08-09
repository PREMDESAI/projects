use anchor_lang::prelude::*;

declare_id!("FqzkXZdwYjurnUKetJCAvaUw5WAqbwzU6gZEwydeEfqS");

#[program]
pub mod voting {
    use super::*;

    pub fn initialize_poll(ctx: Context<InitializePoll>, poll_id: u64, description: String, poll_start: u64, poll_end: u64 ) -> Result<()> {
        let poll = &mut ctx.accounts.poll;
        poll.poll_id = poll_id;
        poll.description = description;
        poll.poll_start = poll_start;
        poll.poll_end = poll_end;
        poll.candidate_amount = 0;
        Ok(())
    }

    pub fn initialize_candidate(ctx: Context<InitializeCandidate>, candidate_name: String, poll_id: u64) -> Result<()> {
        let candidate = &mut ctx.accounts.candidate;
        candidate.candidate_name = candidate_name;
        candidate.candidate_votes += 1;
        Ok(())
    }

    pub fn vote(ctx: Context<Vote>, _poll_id: u64, _candidate: String) -> Result<()> {
        let candidate_account = &mut ctx.accounts.candidate_account;
        let current_time = Clock::get()?.unix_timestamp;

        if current_time > (ctx.accounts.poll_account.poll_voting_end as i64) {
            return Err(ErrorCode::VotingEnded.into());
        }

        if current_time <= (ctx.accounts.poll_account.poll_voting_start as i64) {
            return Err(ErrorCode::VotingNotStarted.into());
        }

        candidate_account.candidate_votes += 1;

        Ok(())
    }
}


#[derive(Accounts)]
#[instruction(candidate_name: String, poll_id: u64)]
pub struct InitializeCandidate<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,

    #[account(seeds = [poll_id.to_le_bytes().as_ref()], bump)]
    pub poll: Account<'info, Poll>,

    #[account(
        init,
        payer = signer,
        space = 8 + CandidateAccount::INIT_SPACE,
        seeds = [poll_id.to_le_bytes().as_ref(), candidate_name.as_bytes()],
        bump
    )]
    pub candidate: Account<'info, CandidateAccount>,
    pub system_program: Program<'info, System>
}

#[derive(Accounts)]
#[instruction(poll_id: u64)]
pub struct InitializePoll<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,

    #[account(init, payer = signer, space = 8 + Poll::INIT_SPACE, seeds = [poll_id.to_le_bytes().as_ref()], bump)]

    pub poll: Account<'info, Poll>,
    pub system_program: Program<'info, System>
}


#[derive(Accounts)]
#[instruction(poll_id: u64, candidate: String)]
pub struct Vote<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,

    #[account(
        mut,
        seeds = [b"poll".as_ref(), poll_id.to_le_bytes().as_ref()],
        bump,
    )]
    pub poll_account: Account<'info, PollAccount>,

    #[account(
        mut,
        seeds = [poll_id.to_le_bytes().as_ref(), candidate.as_ref()],
        bump)]
    pub candidate_account: Account<'info, CandidateAccount>,
}




#[account]
#[derive(InitSpace)]
pub struct Poll {
    pub poll_id: u64,
    #[max_len(280)]
    pub description: String,
    pub poll_start: u64,
    pub poll_end: u64,
    pub candidate_amount: u64
}

#[account]
#[derive(InitSpace)]
pub struct CandidateAccount {
    #[max_len(32)]
    pub candidate_name: String,
    pub candidate_votes: u64
}



#[account]
#[derive(InitSpace)]
pub struct PollAccount{
    #[max_len(32)]
    pub poll_name: String,
    #[max_len(280)]
    pub poll_description: String,
    pub poll_voting_start: u64,
    pub poll_voting_end: u64,
    pub poll_option_index: u64,
}

#[error_code]
pub enum ErrorCode {
    #[msg("Voting has not started yet")]
    VotingNotStarted,
    #[msg("Voting has ended")]
    VotingEnded,
}


