import { type ClassValue, clsx } from "clsx";;
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const toggleSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      if(sidebar.classList.contains('open')){
        sidebar.classList.add('close');
        sidebar.classList.remove('open');
      }else{
        sidebar.classList.add('open');
        sidebar.classList.remove('close');
      }
    }
}

export const isExtension = () => {
    return typeof chrome !== 'undefined' && chrome.tabs;
}

