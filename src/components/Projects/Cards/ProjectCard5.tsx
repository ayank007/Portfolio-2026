// Travmaks
const ProjectCard5 = ({ data }: any) => {
    return (
        <div className="project project5">
            <div className="view flex1 overflow-hidden rounded-md">
                <div
                    className="imgbg">
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

export default ProjectCard5;