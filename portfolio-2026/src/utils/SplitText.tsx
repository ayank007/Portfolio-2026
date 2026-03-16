const SplitText = (props: any) => {
    const layer = props.layer ? props.layer : 1
    if (layer == 1) {
        return (
            props.children.split('').map((letter: String, key: number) => {
                return (
                    <span key={key} className='letter'>
                        {letter}
                    </span>
                )
            })
        )
    } else {
        return (
            props.children.split('').map((letter: String, key: number) => {
                return (
                    <span key={key} className='letter'>
                        <span>
                            {letter}
                        </span>
                    </span>
                )
            })
        )
    }
}

export default SplitText