import './squareBubbleCanvas.scss'

const SquareBubbleCanvas = (props:any) => {
    return (
        <div id="SquareBubbleCanvas" className={props.class1}>
            <svg className='h-full opacity-40' viewBox="0 0 147 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M146 0V10C146 57.4965 107.496 96 60 96H0" stroke="white"/>
                <path d="M146 154V144C146 96.5035 107.496 58 60 58H0" stroke="white"/>
                <path d="M108 0V10C108 36.5097 86.5097 58 60 58H0" stroke="white"/>
                <path d="M108 154V144C108 117.49 86.5097 96 60 96H0" stroke="white"/>
            </svg>
            <ul className="bg-bubbles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            {props.children}
        </div>
    )
}

export default SquareBubbleCanvas