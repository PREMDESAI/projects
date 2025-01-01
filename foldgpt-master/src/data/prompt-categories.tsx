import { RiLayoutGridLine, RiCodeSLine, RiChat1Line, RiFileTextLine, RiSearchLine } from "react-icons/ri";

export const promptCategories = [
    {
        name: 'All',
        icon: <RiLayoutGridLine />,
        slug: 'all',
    },
    {
        name: 'Coding',
        icon: <RiCodeSLine />,
        slug: 'coding',
    },
    {
        name: 'SMM',
        icon: <RiChat1Line />,
        slug: 'social-media',
    },
    {
        name: 'Writing',
        icon: <RiFileTextLine />,
        slug: 'writing',
    },
    {
        name: 'SEO',
        icon: <RiSearchLine />,
        slug: 'seo',
    },
]