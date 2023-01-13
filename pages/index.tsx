import Head from 'next/head'
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 bg-[rgb(36,36,36)] text-white z-0">
      <Head>
        <title>Create Next App</title>
      </Head>

        {/*  Header*/}
        <Header />
        {/*  Hero*/}
        <section id="hero" className="snap-start">
            <Hero />
        </section>
        {/*  About*/}
      <section id="about" className="snap-center">
        <About />
      </section>
        {/*  Experience*/}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
        {/*  Skills*/}
      <section id="skills" className="snap-center">
        <Skills/>
      </section>
        {/*  Projects*/}
      <section id="projects" className="snap-center">
        <Projects/>
      </section>
        {/*  Contact*/}
      <section id="contact" className="snap-end">
        <Contact/>
      </section>
    </div>
  )
}
