import { RiLockPasswordLine, RiLogoutBoxLine, RiMagicLine, RiMailLine, RiUser3Line } from 'react-icons/ri'

const AccountTab = () => {
   const user:null | {
    name:string,
    icon:string,
    email:string,
    id:string
   }={
    name:'Ram goel',
    icon:'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww',
    email:'ramgoel@gmail.com',
    id:'1234567890'
   }

   if(user){
    return(
        <div>
            
            <div className='flex items-center gap-2'>
                <img src={user?.icon} alt={user?.name} className='w-10 h-10 rounded-full' />
            <div>
                <h2 className='text-xl font-semibold'>{user?.name}</h2>
                <p className='text-sm text-zinc-400 opacity-80'>{user?.email}</p>
            </div>
            </div>
           <div className='flex flex-col gap-2 mt-4'>
           <button className='flex items-center hover:bg-zinc-700 bg-zinc-800 transition-all duration-300 hover:border-transparent h-[35px] text-sm rounded-md p-2 justify-center gap-2'>
                <RiLogoutBoxLine />
            Logout
        </button>
        <button className='flex items-center hover:bg-violet-700 transition-all duration-300 hover:border-transparent h-[35px] bg-violet-600 text-sm rounded-md p-2 justify-center gap-2'>
                <RiMagicLine />
            Upgrade to Pro
        </button>
           </div>
        </div>
    )
   }
  return (
    <div className='text-sm flex flex-col gap-3'>
        Please enter your email, and we'll send you a link to sign in.

            <input className='block p-3 rounded-md bg-zinc-800 placeholder:opacity-50'  type="email" placeholder='Email' />
            <button className='flex items-center hover:bg-zinc-800 hover:border-transparent h-[45px] rounded-md p-2 justify-center gap-2'>
                <RiMailLine />
            Sign in with Email
        </button>
    </div>
  )
}

export default AccountTab