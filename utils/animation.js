import gsap from "gsap"
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime"

export const animatePageIn = () => {
    const coverin = document.getElementById("slide-in")
    
    if (coverin) {
        const tl = gsap.timeline()

        tl.set([coverin], {
            yPercent: 0,
        }).to([coverin], {
            yPercent: 100
        })
    }
}

export const animatePageOut = (href, router) => {
    const coverin = document.getElementById("slide-in")
    
    if (coverin) {
        const tl = gsap.timeline()

        tl.set([coverin], {
            yPercent: -100,
        }).to([coverin], {
            yPercent: 0,
            onComplete: () =>{
                router.push(href)
            }
        })
    }
}