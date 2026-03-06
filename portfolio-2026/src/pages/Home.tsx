import { useLang } from '../App'
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
        </>
    )
}

export default Home