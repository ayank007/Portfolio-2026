import { useLang } from '../App'
import Experience from '../components/Experience'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import ScrollReveal from '../utils/ScrollReveal'

const Home = () => {
    const { data } = useLang()

    return (
        <>
            <ScrollReveal />
            <Hero data={data.hero} />
            <Projects />
            <Experience />
        </>
    )
}

export default Home