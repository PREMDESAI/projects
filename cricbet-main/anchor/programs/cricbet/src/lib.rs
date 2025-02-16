#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;

declare_id!("coUnmi3oBUtwtd9fjeAvSsJssXh5A5xyPbhpewyzRVF");

#[program]
pub mod cricbet {
    use super::*;

  pub fn close(_ctx: Context<CloseCricbet>) -> Result<()> {
    Ok(())
  }

  pub fn decrement(ctx: Context<Update>) -> Result<()> {
    ctx.accounts.cricbet.count = ctx.accounts.cricbet.count.checked_sub(1).unwrap();
    Ok(())
  }

  pub fn increment(ctx: Context<Update>) -> Result<()> {
    ctx.accounts.cricbet.count = ctx.accounts.cricbet.count.checked_add(1).unwrap();
    Ok(())
  }

  pub fn initialize(_ctx: Context<InitializeCricbet>) -> Result<()> {
    Ok(())
  }

  pub fn set(ctx: Context<Update>, value: u8) -> Result<()> {
    ctx.accounts.cricbet.count = value.clone();
    Ok(())
  }
}

#[derive(Accounts)]
pub struct InitializeCricbet<'info> {
  #[account(mut)]
  pub payer: Signer<'info>,

  #[account(
  init,
  space = 8 + Cricbet::INIT_SPACE,
  payer = payer
  )]
  pub cricbet: Account<'info, Cricbet>,
  pub system_program: Program<'info, System>,
}
#[derive(Accounts)]
pub struct CloseCricbet<'info> {
  #[account(mut)]
  pub payer: Signer<'info>,

  #[account(
  mut,
  close = payer, // close account and return lamports to payer
  )]
  pub cricbet: Account<'info, Cricbet>,
}

#[derive(Accounts)]
pub struct Update<'info> {
  #[account(mut)]
  pub cricbet: Account<'info, Cricbet>,
}

#[account]
#[derive(InitSpace)]
pub struct Cricbet {
  count: u8,
}
