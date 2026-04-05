import { Suspense, lazy } from 'react'
import { useLang } from '../App'
import Hero from '../components/Hero'
import ScrollReveal from '../utils/ScrollReveal'

// Lazy load components below the fold
const Projects = lazy(() => import('../components/Projects'))
const Experience = lazy(() => import('../components/Experience'))
const ArcSlider = lazy(() => import('../components/About/GalleryMarqee'))
const About = lazy(() => import('../components/About'))
const Contact = lazy(() => import('../components/Contact'))
const Footer = lazy(() => import('../components/Footer'))

const Home = () => {
    const context = useLang();
    if (!context) return null;
    const { data } = context;

    return (
        <>
            <Hero data={data.hero} />

            <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
                <ScrollReveal />
                <Projects data={data.projects} />
                <Experience data={data.career} />
                <ArcSlider data={data.about} />
                <About data={data.about} />
                <Contact data={data.contact} />
                <Footer data={data.footer} />
            </Suspense>
        </>
    )
}

export default Home