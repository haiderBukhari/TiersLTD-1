import { Builder } from "../components/Builder"
import { Frame } from "../components/Frame"
import { Hero } from "../components/Hero"
import { NewsLetter } from "../components/NewsLetter"

const Home = () => {
    return (
        <>
            <Hero />
            <Frame />
            <Builder />
            <NewsLetter />
        </>
    )
}

export default Home