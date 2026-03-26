import { useLang } from '../App'
import About from '../components/About'
import Experience from '../components/Experience'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import ScrollReveal from '../utils/ScrollReveal'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ArcSlider from '../components/About/GalleryMarqee'

const Home = () => {
    const { data } = useLang()

    return (
        <>
            <ScrollReveal />
            <Hero data={data.hero} />
            <Projects data={data.projects} />
            <Experience data={data.career} />
            <ArcSlider data={data.about} />
            <About data={data.about} />
            <Contact data={data.contact} />
            <Footer data={data.footer} />
        </>
    )
}

export default Home