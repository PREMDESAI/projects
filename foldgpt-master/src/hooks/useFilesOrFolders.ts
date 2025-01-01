import { create } from "zustand"


interface FileOrFolder {
    id: string
    name: string
    type: 'file' | 'folder'
}


interface FilesOrFoldersStore {
    filesOrFolders: FileOrFolder[]
    setFilesOrFolders: (filesOrFolders: FileOrFolder[]) => void
    fetchFilesOrFolders: () => void
}
export const useFilesOrFolders = create<FilesOrFoldersStore>((set) => ({
    filesOrFolders: [
        {
            id: '1',
            name: 'Web Dev Folder',
            type: 'folder',
            parentId: 'null',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '2',
            name:'Website Cost Evaluation',
            type: 'file',
            parentId: '1',
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    ],
    setFilesOrFolders: (filesOrFolders) => set({ filesOrFolders }),
    fetchFilesOrFolders: async () => {
        const response = await fetch('/api/filesOrFolders')
        const filesOrFolders = await response.json()
        set({ filesOrFolders })
    }
}))