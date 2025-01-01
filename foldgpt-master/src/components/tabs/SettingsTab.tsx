import React from 'react'
import { RiSettings4Line } from 'react-icons/ri'

const SettingsTab = () => {
  return (
    <div>
        <div className='flex items-center gap-2'>
            <RiSettings4Line />
            <p>Settings</p>
        </div>
        <hr className='opacity-10 my-3' />
    </div>
  )
}

export default SettingsTab