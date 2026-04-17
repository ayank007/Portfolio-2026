import { Link, useLocation, useNavigate } from "@tanstack/react-router"
import { AnimToggler } from "../../context/pageTransition"
import { NavpageToggler } from "../../context/openNavpage"

const Link2 = ({ to, hash, children, className, onClick, ...props }: any) => {
    // 1. Safely extract Navpage Context
    const navCtx: any = NavpageToggler() || {}
    const toggleNavpage = navCtx.toggleNavpage || (() => { })
    const navpageStatus = navCtx.navpageStatus || false

    // 2. Safely extract Anim Context (This prevents the TypeError crash!)
    const animCtx: any = AnimToggler() || {}
    const toggleAnimStatus = animCtx.toggleAnimStatus || (() => { })

    const location = useLocation()
    const navigate = useNavigate()

    // --- SCENARIO A: Cross-Page Navigation (e.g., /fun-projects -> /#AboutMe) ---
    const handleCrossPageClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        if (onClick) onClick(e)

        // Start the page transition animation
        toggleAnimStatus()

        // Wait 1 second for the animation to finish, THEN navigate and close the menu
        setTimeout(() => {
            navigate({
                to: to || "/",
                hash: hash
            })

            if (navpageStatus) {
                toggleNavpage()
            }
        }, 1000)
    }

    // --- SCENARIO B: Same-Page Navigation (e.g., / -> /#AboutMe) ---
    const handleSamePageClick = (e: any) => {
        if (onClick) onClick(e)

        // If we are already on the home page, we don't need the 1-second timeout.
        // Just close the menu immediately and let TanStack jump to the section.
        if (navpageStatus) {
            toggleNavpage()
        }
    }

    // Determine which scenario we are in:
    if (location.pathname !== (to || '/')) {
        // Cross-page: We use an <a> tag to act as a proper bridge
        return (
            <a
                href={hash ? `${to}#${hash}` : to}
                onClick={handleCrossPageClick}
                className={className}
                {...props}
            >
                {children}
            </a>
        )
    }

    // Same-page: We use TanStack's Link
    return (
        <Link
            to={to}
            hash={hash}
            onClick={handleSamePageClick}
            className={className}
            {...props}
        >
            {children}
        </Link>
    )
}

export default Link2