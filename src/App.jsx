import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Project from './components/Project'
import ContactForm from './components/ContactForm'

const App = () => {
    return (
        <>

            <div className='min-h-screen w-full overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
                <div className=''>
                    <Navbar />
                    <Hero />
                    <About />
                    <Technologies />
                    <Project />
                    <ContactForm />
                </div>
            </div>
        </>
    )
}

export default App