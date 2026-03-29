import mikasa from '../../../assets/projects/mikasa.png'

const ProjectCard6 = ({ data }: any) => {
    const removeSkeleton = (img: HTMLImageElement) => {
        img.parentElement?.classList.remove('skeleton')
    }
    return (
        <div className="project project6">
            <div className="view">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
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
            </div>
            <div className="texts">
                <h3>{data.title}</h3>
                <p>
                    {data.desc}
                </p>
            </div>
        </div>
    )
}

export default ProjectCard6;