import "./typeWriter.scss"

const TypeWriter = ({ data }: any) => {
    return (
        <>
            <span className="type">
                <span>
                    {data.map((intro: string, key: number) => {
                        return (
                            <span key={key}>
                                {intro.split(' ').map((introWord: string, _) => {
                                    return (
                                        " " + introWord + " "
                                    )
                                })}
                            </span>
                        )
                    })}
                    <span>creative &nbsp; developer &nbsp;</span>
                    <span>web &nbsp; designer &nbsp;</span>
                    <span>a &nbsp; problem &nbsp; solver &nbsp;</span>
                    <span>Software &nbsp;Engineer &nbsp;</span>
                </span>
            </span>
        </>
    )
}

export default TypeWriter