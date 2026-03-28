import gemBid from '../../../assets/projects/gemBid.png'
import wordHighlighter from '../../../assets/projects/wordHighlighter.png'
import mapScrapper from '../../../assets/projects/mapScrapper.jpg'
import gem48 from '../../../assets/projects/gem48.png'
import ghost from '../../../assets/projects/ghost.png'
import SnowCanvas from './snowCanvas'

const ProjectCard3 = ({ data }: any) => {
    const removeSkeleton = (img: HTMLImageElement) => {
        img.parentElement?.classList.remove('skeleton')
    }
    return (
        <div className="project project3">
            <SnowCanvas class1="view">
                <img src={gem48} className="w-8 absolute top-60 left-20 z-10" alt="" />
                <img src={ghost} className="w-10 absolute top-3 z-10 right-5" alt="" />
                <img src={wordHighlighter} className="absolute w-16 top-44 z-10 right-6" alt="wordHighlighter" />
                <div
                    className="imgbg absolute bottom-4 rounded-lg -left-20 skeleton overflow-hidden"
                    style={{ width: "350px" }}>
                    <img
                        loading='lazy'
                        src={gemBid}
                        className="w-full h-full"
                        alt="Gem Biding extension"
                        onLoad={(e) => removeSkeleton(e.currentTarget)}
                    />
                </div>
                <div
                    className="imgbg absolute top-8 left-10 rounded-lg skeleton overflow-hidden">
                    <img
                        loading='lazy'
                        src={mapScrapper}
                        alt="Details scrapper"
                        onLoad={(e) => removeSkeleton(e.currentTarget)}
                    />
                </div>
            </SnowCanvas>
            <div className="texts">
                <h3>{data.title}</h3>
                <p>
                    {data.desc}
                </p>
            </div>
        </div>
    )
}

export default ProjectCard3;