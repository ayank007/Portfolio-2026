import './boxCanvas.scss'
const BoxCanvas = (props: any) => {
    return (
        <div id="BoxCanvas" className={props.class1}>
            <svg className='h-full top-0 absolute left-1/2 transform -translate-x-1/2' viewBox="0 0 88 167" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 73H31C14.4315 73 1 86.4315 1 103V167" stroke="white" strokeWidth="0.5" />
                <path d="M57 105H41C36.5817 105 33 108.582 33 113V167" stroke="white" strokeWidth="0.5" />
                <path d="M50 105H57C73.5685 105 87 91.5685 87 75L87 -4.29153e-06" stroke="white" strokeWidth="0.5" />
                <path d="M33 73H47C51.4183 73 55 69.4183 55 65L55 0" stroke="white" strokeWidth="0.5" />
            </svg>
            {props.children}

        </div>
    )
}

export default BoxCanvas