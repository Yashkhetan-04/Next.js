import Link from "next/link"

const About = () => {
    return(
        <div>
            <h1>This is About Page</h1>
            <Link href='/'>Go to Home Page</Link>
            <br />
            <br />
            <Link href='/about/aboutCollage'>GO to About Collage.</Link>
            <br />
            <br />
            <Link href='/about/aboutStudent'>GO to About Student.</Link>
        </div>
    )
}

export default About