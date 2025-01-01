import { create } from "zustand"

interface Prompt {
    id: string
    title: string
    prompt: string
    category: string
}


interface PromptStore {
    prompts: Prompt[]
    setPrompts: (prompts: Prompt[]) => void 
    fetchPrompts: () => void
}

export const usePrompts = create<PromptStore>((set) => ({
    prompts: [{
        id: '1',
        title: 'Copy functionality',
        prompt: 'You are an experienced web developer. Give me code to implement copy functionality.',
        category: 'coding',
    },
    {
        id: '2',
        title: 'Create a blog post',
        prompt: 'You are an experienced writer. Create a blog post on the topic of AI.',
        category: 'writing',
    },
    {
        id: '3',
        title: 'Optimize SEO in website',
        prompt: 'You are an SEO expert. Write list of tasks we can do to make our website SEO optimized.',
        category: 'seo',
    }],
    setPrompts: (prompts) => set({ prompts }),
    fetchPrompts: async () => {
        const response = await fetch('/api/prompts')
        const prompts = await response.json()
        set({ prompts })
    }
}))