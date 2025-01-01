import React, { useState, useCallback } from 'react'
import {
    RiFoldersLine,
    RiFileTextLine,
    RiAddLine,
    RiDeleteBinLine,
    RiArrowDownSLine,
    RiArrowRightSLine,
    RiCloseLine,
    RiUser3Line,
    RiMore2Line,
    RiCollapseDiagonalLine,
    RiExpandDiagonal2Line,
} from 'react-icons/ri'
import { toggleSidebar } from '../../utils'
import FolderOptions from '../popups/OptionsPopup'
import OptionsPopup from '../popups/OptionsPopup'
import TooltipProvider from '../TooltipProvider'
import { useFilesOrFolders } from '../../hooks/useFilesOrFolders'

interface FileSystemItem {
    id: string
    name: string
    type: 'folder' | 'file'
    children?: FileSystemItem[]
    isExpanded?: boolean
}



const FoldersTab: React.FC = () => {
    const {filesOrFolders, setFilesOrFolders}=useFilesOrFolders();
    const [selectedItems, setSelectedItems] = useState<string[]>([])
    const [searchTerm, setSearchTerm] = useState('')
    const [allExpanded, setAllExpanded] = useState(false)
    const [selectedFolderOrFile, setSelectedFolderOrFile] =
        useState<FileSystemItem | null>(null)

    const toggleFolder = useCallback((id: string) => {
        const newFilesOrFolders=filesOrFolders;
        newFilesOrFolders.forEach((item)=>{
            if(item.id===id){
                item.isExpanded=!item.isExpanded;
            }
        })
        setFilesOrFolders(newFilesOrFolders)
    }, [filesOrFolders, setFilesOrFolders])
                

    const handleCheckboxChange = useCallback((id: string) => {
        setSelectedItems((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        )
    }, [])

    const handleDelete = useCallback(() => {
        setData((prevData) => {
            const deleteItems = (items: FileSystemItem[]): FileSystemItem[] => {
                return items.filter((item) => {
                    if (selectedItems.includes(item.id)) {
                        return false
                    }
                    if (item.children) {
                        item.children = deleteItems(item.children)
                    }
                    return true
                })
            }
            return deleteItems(prevData)
        })
        setSelectedItems([])
    }, [selectedItems])

    const handleAddFolder = useCallback(() => {
        const newFolder: FileSystemItem = {
            id: Date.now().toString(),
            name: 'New Folder',
            type: 'folder',
            isExpanded: false,
            children: [],
        }
        setData((prevData) => [...prevData, newFolder])
    }, [])

    const renderItem = useCallback(
        (item: FileSystemItem) => (
            <div
                key={item.id}
                onContextMenu={(e) => {
                    e.preventDefault()
                    setSelectedFolderOrFile(item)
                }}
                className={`mb-2 p-1 px-2 rounded-md cursor-pointer ${selectedFolderOrFile?.id === item.id ? 'bg-zinc-800' : ''}`}
            >
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        checked={selectedItems.includes(item.id)}
                        onChange={() => handleCheckboxChange(item.id)}
                        className="mr-2"
                    />
                    <div className="flex relative text-sm items-center w-full">
                        {item.type === 'folder' && (
                            <span
                                onClick={() => toggleFolder(item.id)}
                                className="mr-2 cursor-pointer"
                            >
                                {allExpanded || item.isExpanded ? (
                                    <RiArrowDownSLine />
                                ) : (
                                    <RiArrowRightSLine />
                                )}
                            </span>
                        )}
                        {item.type === 'folder' ? (
                            <RiFoldersLine className="mr-2 h-[25px] w-[25px]" />
                        ) : (
                            <RiFileTextLine className="mr-2 h-[25px] w-[25px]" />
                        )}
                        {searchTerm !== '' &&
                        item.name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ? (
                            <p className="w-full">
                                {item.name.slice(
                                    0,
                                    item.name.indexOf(searchTerm)
                                )}
                                <span className="bg-violet-600">
                                    {searchTerm}
                                </span>
                                {item.name.slice(
                                    item.name.indexOf(searchTerm) +
                                        searchTerm.length
                                )}
                            </p>
                        ) : (
                            <span className="w-full">{item.name}</span>
                        )}

                        <RiMore2Line
                            onClick={() => {
                                if (selectedFolderOrFile) {
                                    setSelectedFolderOrFile(null)
                                } else {
                                    setSelectedFolderOrFile(item)
                                }
                            }}
                            className="text-zinc-400 rotate-90 text-lg w-[20px] h-[20px] cursor-pointer hover:text-violet-400 hover:bg-zinc-800 rounded-md"
                        />

                        {selectedFolderOrFile &&
                            selectedFolderOrFile.id === item.id && (
                                <OptionsPopup
                                    hideDropdown={() =>
                                        setSelectedFolderOrFile(null)
                                    }
                                    onDelete={() => {
                                        handleCheckboxChange(item.id)
                                        setSelectedFolderOrFile(null)
                                    }}
                                />
                            )}
                    </div>
                </div>
                {item.type === 'folder' &&
                    (allExpanded || item.isExpanded) &&
                    item.children && (
                        <div className="ml-6 mt-2">
                            {item.children.map(renderItem)}
                        </div>
                    )}
            </div>
        ),
        [selectedFolderOrFile, selectedItems, allExpanded, searchTerm, handleCheckboxChange, toggleFolder]
    )

    return (
        <div className="w-full">
            <div className="flex items-center justify-end gap-2 mb-2">
                <TooltipProvider text={allExpanded ? 'Collapse' : 'Expand'}>
                    {allExpanded ? (
                        <RiCollapseDiagonalLine
                            onClick={() => setAllExpanded(true)}
                            className="text-zinc-400 transition-all duration-300 text-xl w-[30px] h-[30px] cursor-pointer hover:text-violet-400 bg-zinc-800 rounded-xl p-2"
                        />
                    ) : (
                        <RiExpandDiagonal2Line
                            onClick={() => setAllExpanded(false)}
                            className="text-zinc-400 transition-all duration-300 text-xl w-[30px] h-[30px] cursor-pointer hover:text-violet-400 bg-zinc-800 rounded-xl p-2"
                        />
                    )}
                </TooltipProvider>

                <TooltipProvider text="Add">
                    <RiAddLine
                        onClick={handleAddFolder}
                        className="text-zinc-400 text-xl w-[30px] h-[30px] cursor-pointer hover:text-violet-400 bg-zinc-800 rounded-xl p-2"
                    />
                </TooltipProvider>
                <TooltipProvider text="Delete">
                    <RiDeleteBinLine
                        onClick={handleDelete}
                        className="text-zinc-400 text-xl w-[30px] h-[30px] cursor-pointer hover:text-violet-400 bg-zinc-800 rounded-xl p-2"
                    />
                </TooltipProvider>
            </div>

            <input
                className="block p-3 w-full rounded-md pl-4 bg-zinc-800 placeholder:opacity-50 text-xs"
                type="text"
                placeholder="Search files/folders by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="mt-4">{data.map(renderItem)}</div>
        </div>
    )
}

export default FoldersTab
