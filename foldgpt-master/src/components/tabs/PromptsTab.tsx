import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {
    RiClipboardLine,
} from 'react-icons/ri'
import { usePrompts } from '../../hooks/usePrompts'
import { promptCategories } from '../../data/prompt-categories'

const PromptsTab = () => {
    const [activeCategory, setActiveCategory] = useState('all')
    const { prompts } = usePrompts()
    

    return (
        <div>
            <div className="flex items-center justify-between">
                {promptCategories.map((category) => (
                    <div
                        onClick={() => {
                            setActiveCategory(category.slug)
                        }}
                        key={category.slug}
                        className={` flex rounded-md p-1 gap-1 px-2 items-center justify-center cursor-pointer  transition-all duration-300 ${activeCategory === category.slug ? 'bg-violet-600 !text-[white] hover:bg-violet-800' : 'bg-zinc-800 hover:bg-zinc-700'}`}
                    >
                        <div
                            className={`${activeCategory === category.slug ? 'text-[white]' : 'text-violet-400'} text-md`}
                        >
                            {category.icon}
                        </div>
                        <span
                            className={`${activeCategory === category.slug ? 'text-[white]' : 'text-zinc-400'} text-sm`}
                        >
                            {category.name}
                        </span>
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-2 mt-2">
                {(activeCategory === 'all'
                    ? prompts
                    : [...prompts].filter((item) => item.category === activeCategory)
                ).map((prompt) => (
                    <PromptCard
                        key={prompt.title}
                        prompt={prompt}
                        icon={
                            promptCategories.find(
                                (category) => category.slug === prompt.category
                            )?.icon
                        }
                    />
                ))}
            </div>
        </div>
    )
}

const PromptCard = ({
    prompt,
    icon,
}: {
    prompt: {
        title: string
        category: string
        prompt: string
    }
    icon: React.ReactNode
}) => {

    const handleCopy = (e: React.MouseEvent<HTMLDivElement|SVGElement>) => {
        e.preventDefault()
        navigator.clipboard.writeText(prompt.prompt)
        toast.success('Prompt copied to clipboard')
    }

    return (
        <div
            onContextMenu={handleCopy}
            className="flex items-center justify-between hover:bg-zinc-700 transition-all duration-300 cursor-pointer gap-2 p-2 px-3 rounded-md bg-zinc-800"
        >
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <div className="text-lg">{icon}</div>
                    <p className="text-md font-semibold">{prompt.title}</p>
                </div>
                <p className="text-sm line-clamp-1 text-zinc-400">
                    {prompt.prompt}
                </p>
            </div>
            <div className="flex items-center gap-1">
                <RiClipboardLine onClick={handleCopy} className="text-zinc-400 text-xl cursor-pointer hover:text-violet-400" />
            </div>
        </div>
    )
}
export default PromptsTab
