import mikasa from '../../../assets/projects/mikasa.png'

const ProjectCard7 = ({ data }: any) => {
    const removeSkeleton = (img: HTMLImageElement) => {
        img.parentElement?.classList.remove('skeleton')
    }
    return (
        <div className="project project7">
            <div className="view">
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

export default ProjectCard7;