
import project4 from '../../../assets/projects/project4.webp'
import front from '../../../assets/projects/Front1.webp'
import BoxCanvas from "./boxCanvas"

const ProjectCard2 = ({ data }: any) => {
    const removeSkeleton = (img: HTMLImageElement) => {
        img.parentElement?.classList.remove('skeleton')
    }
    return (
        <div className="project project2">
            <BoxCanvas class1="view">
                <div className="imgbg absolute rounded skeleton overflow-hidden"
                    style={{ width: '280px', top: '15px', right: '-70px' }} >
                    <img src={front}
                        loading="lazy"
                        alt="Freelancing Project Fitmylan"
                        className="w-full h-full"
                        onLoad={(e) => removeSkeleton(e.currentTarget)}
                    />
                </div>
                <div
                    className="imgbg absolute rounded skeleton overflow-hidden"
                    style={{ width: '240px', bottom: '10px', left: '-35px' }}>
                    <img
                        src={project4}
                        loading="lazy"
                        className="w-full h-full"
                        alt="Freelancing Project Teacher"
                        onLoad={(e) => removeSkeleton(e.currentTarget)}
                    />
                </div>
            </BoxCanvas>
            <div className="texts">
                <h3>{data.title}</h3>
                <p>{data.desc}</p>
            </div>
        </div>
    )
}

export default ProjectCard2;