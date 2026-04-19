import { Link, useLocation, useNavigate } from "@tanstack/react-router"
import { NavpageToggler } from "../../context/openNavpage"

const Link2 = ({ to, hash, children, className, onClick, ...props }: any) => {
    // 1. Safely extract Navpage Context
    const navCtx: any = NavpageToggler() || {}
    const toggleNavpage = navCtx.toggleNavpage || (() => { })
    const navpageStatus = navCtx.navpageStatus || false

    const location = useLocation()
    const navigate = useNavigate()

    const handleCrossPageClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        if (onClick) onClick(e)

        navigate({
            to: to || "/",
            hash: hash
        })

        if (navpageStatus) {
            toggleNavpage()
        }
    }
    const handleSamePageClick = (e: any) => {
        if (onClick) onClick(e)

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