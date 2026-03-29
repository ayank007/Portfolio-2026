import { Link, useNavigate } from "@tanstack/react-router"
import { AnimToggler } from "../../context/pageTransition"

const Link1 = (props: any) => {
    const navigate = useNavigate()
    const { toggleAnimStatus }: any = AnimToggler()
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()

        toggleAnimStatus()
        window.scrollTo(0, 0)

        setTimeout(() => {
            navigate(props.to)
        }, 1000)
    }

    return <Link to={props.to} onClick={handleClick}>
        {props.children}
    </Link>
}

export default Link1