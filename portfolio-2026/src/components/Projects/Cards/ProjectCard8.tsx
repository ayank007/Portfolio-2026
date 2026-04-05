// FutNote
const ProjectCard8 = ({ data }: any) => {

    return (
        <div className="project project8">
            <div className="view">
                <div className="night">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="shooting_star"></div>
                    ))}
                </div>

                <div
                    className="imgbg absolute inset-0 flex1">
                    <p className="text-2xl text-white text-center">Working On It</p>
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

export default ProjectCard8;