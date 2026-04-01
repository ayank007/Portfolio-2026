import './RollingText.scss'
import SplitText from './SplitText'

const RollingText = (props: any) => {
    const title = props.title.replaceAll(' ', '\u00A0\u00A0');
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