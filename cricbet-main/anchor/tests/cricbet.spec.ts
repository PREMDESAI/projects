import * as anchor from '@coral-xyz/anchor'
import {Program} from '@coral-xyz/anchor'
import {Keypair} from '@solana/web3.js'
import {Cricbet} from '../target/types/cricbet'

describe('cricbet', () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env()
  anchor.setProvider(provider)
  const payer = provider.wallet as anchor.Wallet

  const program = anchor.workspace.Cricbet as Program<Cricbet>

  const cricbetKeypair = Keypair.generate()

  it('Initialize Cricbet', async () => {
    await program.methods
      .initialize()
      .accounts({
        cricbet: cricbetKeypair.publicKey,
        payer: payer.publicKey,
      })
      .signers([cricbetKeypair])
      .rpc()

    const currentCount = await program.account.cricbet.fetch(cricbetKeypair.publicKey)

    expect(currentCount.count).toEqual(0)
  })

  it('Increment Cricbet', async () => {
    await program.methods.increment().accounts({ cricbet: cricbetKeypair.publicKey }).rpc()

    const currentCount = await program.account.cricbet.fetch(cricbetKeypair.publicKey)

    expect(currentCount.count).toEqual(1)
  })

  it('Increment Cricbet Again', async () => {
    await program.methods.increment().accounts({ cricbet: cricbetKeypair.publicKey }).rpc()

    const currentCount = await program.account.cricbet.fetch(cricbetKeypair.publicKey)

    expect(currentCount.count).toEqual(2)
  })

  it('Decrement Cricbet', async () => {
    await program.methods.decrement().accounts({ cricbet: cricbetKeypair.publicKey }).rpc()

    const currentCount = await program.account.cricbet.fetch(cricbetKeypair.publicKey)

    expect(currentCount.count).toEqual(1)
  })

  it('Set cricbet value', async () => {
    await program.methods.set(42).accounts({ cricbet: cricbetKeypair.publicKey }).rpc()

    const currentCount = await program.account.cricbet.fetch(cricbetKeypair.publicKey)

    expect(currentCount.count).toEqual(42)
  })

  it('Set close the cricbet account', async () => {
    await program.methods
      .close()
      .accounts({
        payer: payer.publicKey,
        cricbet: cricbetKeypair.publicKey,
      })
      .rpc()

    // The account should no longer exist, returning null.
    const userAccount = await program.account.cricbet.fetchNullable(cricbetKeypair.publicKey)
    expect(userAccount).toBeNull()
  })
})
