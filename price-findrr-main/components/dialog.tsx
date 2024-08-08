"use client"
import { Button } from "@/components/ui/button"
import { DialogTrigger, DialogContent, Dialog } from "@/components/ui/dialog"
import { MdOutlineMail } from "react-icons/md";
import { CiInboxIn } from "react-icons/ci";
import { FormEvent, useState } from "react";
import { setEmail } from "@/server/actions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export function DialogModal({id} : {id: string}) {
  const [loading, setLoading] = useState(false)
  const [emailInput, setEmailInput] = useState("")
  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setEmail(id, emailInput)
    toast.success("Tracking...")
    setLoading(false)
    setEmailInput("")
  }
  return (
    <Dialog>
      <ToastContainer />
      <DialogTrigger asChild>
        <Button className="inline-flex h-10 w-3/4 items-center justify-center rounded-md bg-zinc-800 px-8 text-md font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50">
          Track 
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[97vw] max-w-md rounded border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-950">
        <div className="text-lg text-zinc-900 font-semibold flex items-center gap-1 md:gap-3"> <MdOutlineMail /> Enter your email to recieve updates</div>
        <div className="text-sm text-slate-600 font-semibold flex items-center gap-1 md:gap-3">Recieve price updates right in your inbox <CiInboxIn className="text-lg"/></div>
        <form className="w-full" onSubmit={handleSubmit}>
          <input value={emailInput} onChange={(e) => setEmailInput(e.target.value)} type="email" placeholder="xyz@gmail.com" className="flex p-2 md:p-4 rounded-lg shadow-xs text-base text-gray-500 focus:outline-none"/>
          <button type="submit" className="bg-zinc-900 rounded-lg shadow-xs px-5 py-2 md:py-2 mt-2 w-full text-white text-base font-semibold hover:opacity-90 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40">{loading ? "Tracking..." : "Track"}</button>
        </form>
      </DialogContent>
    </Dialog>
  )
}