import * as anchor from '@coral-xyz/anchor';
import { Program } from '@coral-xyz/anchor';
import { Voting } from '../target/types/voting';
import { PublicKey } from '@solana/web3.js';
import { expect } from '@jest/globals';

describe('Voting', () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.Voting as Program<Voting>;

  it('initializePoll', async () => {
    const [pollAddress] = PublicKey.findProgramAddressSync(
      [Buffer.from("poll"), new anchor.BN(1).toArrayLike(Buffer, "le", 8)],
      program.programId
    );

    const tx = await program.methods.initializePoll(
      new anchor.BN(1),
      "test-poll",
      new anchor.BN(0),
      new anchor.BN(1759508293)
    )
    .accounts({
      signer: provider.wallet.publicKey,
      poll: pollAddress,
      systemProgram: anchor.web3.SystemProgram.programId
    })
    .rpc();

    expect(tx).toBeDefined();
  });

  it('initialize candidates', async () => {
    const pollIdBuffer = new anchor.BN(1).toArrayLike(Buffer, "le", 8);

    const [pollAddress] = PublicKey.findProgramAddressSync(
      [Buffer.from("poll"), pollIdBuffer],
      program.programId
    );

    const [smoothCandidateAddress] = PublicKey.findProgramAddressSync(
      [pollIdBuffer, Buffer.from("smooth")],
      program.programId
    );

    const [crunchyCandidateAddress] = PublicKey.findProgramAddressSync(
      [pollIdBuffer, Buffer.from("crunchy")],
      program.programId
    );

    const smoothTx = await program.methods.initializeCandidate(
      "smooth",
      new anchor.BN(1)
    ).accounts({
      signer: provider.wallet.publicKey,
      poll: pollAddress,
      candidate: smoothCandidateAddress,
      systemProgram: anchor.web3.SystemProgram.programId
    })
    .rpc();

    expect(smoothTx).toBeDefined();

    const crunchyTx = await program.methods.initializeCandidate(
      "crunchy",
      new anchor.BN(1)
    ).accounts({
      signer: provider.wallet.publicKey,
      poll: pollAddress,
      candidate: crunchyCandidateAddress,
      systemProgram: anchor.web3.SystemProgram.programId
    })
    .rpc();

    expect(crunchyTx).toBeDefined();
  });

  // Note: The vote instruction is not in the IDL, so we'll need to add it to the program first
  // it('vote', async () => {
  //   const pollIdBuffer = new anchor.BN(1).toArrayLike(Buffer, "le", 8);

  //   const [pollAddress] = PublicKey.findProgramAddressSync(
  //     [Buffer.from("poll"), pollIdBuffer],
  //     program.programId
  //   );

  //   const [candidateAddress] = PublicKey.findProgramAddressSync(
  //     [pollIdBuffer, Buffer.from("smooth")],
  //     program.programId
  //   );

  //   const tx = await program.methods.vote(
  //     new anchor.BN(1),
  //     "smooth"
  //   )
  //   .accounts({
  //     signer: provider.wallet.publicKey,
  //     poll: pollAddress,
  //     candidate: candidateAddress
  //   })
  //   .rpc();

  //   expect(tx).toBeDefined();
  // });
});