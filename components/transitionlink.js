"use client"

import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "@/utils/animation"

const TransitionLink = ({href, label}) =>{
    const router = useRouter()
    const pathname = usePathname()

    const handleClick = () => {
        if (pathname !== href) {
            animatePageOut(href, router)
        }
    }

    return (
        <button 
        className="text-slate-700 hover:text-blue-700 md:text-2xl"
        onClick = {handleClick}
        >
        {label}
        </button>
    )
}

export default TransitionLink

