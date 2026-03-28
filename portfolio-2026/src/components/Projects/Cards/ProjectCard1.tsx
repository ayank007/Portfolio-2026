import ArrowCanvas from "./arrowCanvas"
import SS_portfolio from '../../../assets/projects/portfolio.png'

const ProjectCard1 = ({ data }: any) => {
    const removeSkeleton = (img: HTMLImageElement) => {
        img.parentElement?.classList.remove('skeleton')
    }
    return (
        <div className="project project1">
            <ArrowCanvas class1="view flex1">
                <div className="imgbg absolute w-4/5 rounded skeleton overflow-hidden">
                    <img src={SS_portfolio}
                        loading="lazy"
                        onLoad={(e) => removeSkeleton(e.currentTarget)}
                        alt="Online Interactive Resume"
                    />
                </div>
            </ArrowCanvas>

            <div className="texts">
                <h3>{data.title}</h3>
                <p>{data.desc}</p>
            </div>
        </div>
    )
}

export default ProjectCard1