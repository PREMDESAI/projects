import * as anchor from '@coral-xyz/anchor'
import { Program } from '@coral-xyz/anchor'
import { Keypair, PublicKey } from '@solana/web3.js'
import { Voting } from '../target/types/voting'

describe('voting', () => {
    // Configure the client to use the local cluster.
    const provider = anchor.AnchorProvider.env()
    anchor.setProvider(provider)
    const payer = provider.wallet as anchor.Wallet

    const program = anchor.workspace.Voting as Program<Voting>

    const pollId = new anchor.BN(2);
    const description = "What is your favourite code editor?";
    const pollStart = new anchor.BN(0);
    const pollEnd = new anchor.BN(1742214369);

    it('Initialize Poll', async () => {
        const [pollPda, _pollBump] = await PublicKey.findProgramAddress(
            [pollId.toArrayLike(Buffer, 'le', 8)],
            program.programId
        );

        await program.methods
            .initializePoll(pollId, description, pollStart, pollEnd)
            .accounts({
                signer: payer.publicKey,
            })
            .rpc()

        const currentPoll = await program.account.poll.fetch(pollPda);

        console.log(currentPoll);
    })
})
