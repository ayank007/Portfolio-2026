import SquareBubbleCanvas from './squareBubbleCanvas'
import bankbuddy from '../../../assets/projects/bankbuddy2.webp'
import mikasa from '../../../assets/projects/mikasa.webp'

const ProjectCard4 = ({ data }: any) => {
    const removeSkeleton = (img: HTMLImageElement) => {
        img.parentElement?.classList.remove('skeleton')
    }
    return (
        <div className="project project4">
            <SquareBubbleCanvas class1="view">
                <div
                    className="imgbg absolute rounded overflow-hidden w-[180px] top-20 -left-6">
                    <img
                        loading='lazy'
                        src={mikasa}
                        alt="mikasa"
                        className="w-full h-full"
                        onLoad={(e) => removeSkeleton(e.currentTarget)}
                    />
                </div>
                <div
                    className="imgbg absolute rounded skeleton overflow-hidden -bottom-1 -right-12 w-[300px] max-w-[115%]">
                    <img
                        src={bankbuddy}
                        loading='lazy'
                        className="w-full h-full"
                        alt="bankbuddy"
                        onLoad={(e) => removeSkeleton(e.currentTarget)}
                    />
                </div>
            </SquareBubbleCanvas>
            <div className="texts">
                <h3>{data.title}</h3>
                <p>
                    {data.desc}
                </p>
            </div>
        </div>
    )
}

export default ProjectCard4;