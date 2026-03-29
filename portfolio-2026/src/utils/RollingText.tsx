import './RollingText.scss'
import SplitText from './SplitText'

const RollingText = (props: any) => {
    const title = props.title
    return (
        <div className='rollingText'>
            <div>
                <SplitText>
                    {title}
                </SplitText>
            </div>
            <div>
                <SplitText>
                    {title}
                </SplitText>
            </div>
        </div>
    )
}

export default RollingText