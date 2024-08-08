import React from 'react'

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className='w-full min-h-screen overflow-y-visible bg-[#0B1120] z-10'>{children}</div>
  )
}

export default layout