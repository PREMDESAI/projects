#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;

declare_id!("ENJ3Sa9vWbDH9bSJudJM9vnLczz79dGjc4SFL52yDmo6");

pub const ANCHOR_DESCRIMINATOR_SIZE: usize = 8;

#[program]
pub mod voting {
    use super::*;

    pub fn initialize_poll(
        ctx: Context<InitializePoll>,
        poll_id: u64,
        description: String,
        poll_start: u64,
        poll_end: u64,
    ) -> Result<()> {
        let poll = &mut ctx.accounts.poll;
        poll.id = poll_id;
        poll.description = description;
        poll.start_time = poll_start;
        poll.end_time = poll_end;

        Ok(())
    }
}

#[derive(Accounts)]
#[instruction(poll_id: u64)]
pub struct InitializePoll<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,

    #[account(
        init,
        payer = signer,
        space = ANCHOR_DESCRIMINATOR_SIZE + Poll::INIT_SPACE,
        seeds = [poll_id.to_le_bytes().as_ref()],
        bump,
    )]
    pub poll: Account<'info, Poll>,

    pub system_program: Program<'info, System>,
}

#[account()]
#[derive(InitSpace)]
pub struct Poll {
    pub id: u64,

    #[max_len(280)]
    pub description: String,
    pub start_time: u64,
    pub end_time: u64,
    pub candidate_amount: u64,
}
