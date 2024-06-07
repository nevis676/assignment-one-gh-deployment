import { motion as m } from 'framer-motion'

export default function About() {
    return (
        <m.div animate={{ opacity: 1, y: "0%" }} initial={{ opacity: 1, y: "150%" }} transition={{ duration: 1 }} exit={{ opacity: 0 }} className="h-full w-full flex flex-col absolute bg-two text-text">
            <h1 className="text-4xl sm:text-5xl mt-20 lg:mt-24 lg:text-8xl">About me</h1>
            <div className="h-[60%] lg:space-y-20 my-20 lg:w-2/3 mx-auto no-scrollbar flex flex-col items-center overflow-scroll overscroll-none m-5" >
                <h2 className='text-2xl sm:text-4xl lg:text-7xl'>Hi, I'm Nevis.</h2>
                <br/>
                <p className='lg:text-5xl'>I'm currently in my final year of studying for a Bachelor of IT at Southern Institute of Technology.</p>
                <br/>
                <h2 className='text-2xl sm:text-4xl lg:text-7xl'>A bit about me</h2>
                <br/>
                <p className='lg:text-5xl'>I've been playing the geetar for about 7 years now, when I'm not playing you could probably find me searching the country for good views. I also tell people I go to the gym.</p>
            </div>
        </m.div>
    )
}