// Workally
const ProjectCard6 = ({ data }: any) => {
    return (
        <div className="project project6">
            <div className="view">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>

                <div
                    className="imgbg absolute inset-0 flex1">
                    <p className="text-2xl text-white text-center">No Thumbnail Available At This Moment</p>
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