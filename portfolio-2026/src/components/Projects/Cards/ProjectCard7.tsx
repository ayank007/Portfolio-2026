// Reel Bhejo
const ProjectCard7 = ({ data }: any) => {

    return (
        <div className="project project7">
            <div className="view">
                <div
                    className="imgbg absolute inset-0 flex1">
                    <p className="text-2xl text-black text-center">In Progress</p>
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