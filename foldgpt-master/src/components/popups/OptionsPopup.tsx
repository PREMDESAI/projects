import { useEffect, useRef } from 'react'
import { RiDeleteBinLine, RiDragMove2Line, RiEditLine } from 'react-icons/ri'

const OptionsPopup = ({hideDropdown, onDelete}: {hideDropdown: () => void, onDelete: () => void}) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const optionsPopup = [
        {
            name: 'Move to',
            icon: <RiDragMove2Line />,
            onClick: () => {
                console.log('Rename');
            }
        },
        {
            name: 'Rename',
            icon: <RiEditLine />,
            onClick: () => {
                console.log('Rename');
            }
        },
        {
            name: 'Delete',
            icon: <RiDeleteBinLine />,
            specificColor: 'text-red-600',
            onClick: onDelete
        }
    ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        hideDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [hideDropdown]);


  return (
    <div ref={dropdownRef} className='p-1 absolute top-[23px] text-xs right-0 z-[100] bg-zinc-900 rounded-md border-[1px] flex flex-col gap-2 border-zinc-800'>
        {
            optionsPopup.map((option) => (
                <div onClick={option.onClick} className={`flex items-center hover:bg-zinc-800 cursor-pointer w-full rounded-sm p-1 gap-2 ${option.specificColor}`}>
                    {option.icon}
                    <span>{option.name}</span>
                </div>
            ))
        }
    </div>
  )
}

export default OptionsPopup