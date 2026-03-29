import { Link, useLocation, useNavigate } from "@tanstack/react-router"
import { AnimToggler } from "../../context/pageTransition"
import { NavpageToggler } from "../../context/openNavpage"

const Link2 = (props: any) => {
    const { toggleNavpage, navpageStatus }: any = NavpageToggler()
    const location = useLocation()
    const navigate = useNavigate()
    const { toggleAnimStatus }: any = AnimToggler()
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()

        toggleAnimStatus()

        setTimeout(() => {
            navigate({ to: "/" })
            if (navpageStatus) {
                toggleNavpage()
            }
        }, 1000)
    }

    const handleClick2 = () => {
        if (navpageStatus) {
            toggleNavpage()
        }
    }

    if (location.pathname != '/') {
        return <Link to={props.to} onClick={handleClick}>
            {props.children}
        </Link>
    }
    return <Link to={props.to} onClick={handleClick2}>{props.children}</Link>
}

export default Link2