import { motion as m } from 'framer-motion';

export default function Projects() {
    return (
        <>
            <m.div animate={{ opacity: 1, y: "0%" }} initial={{ opacity: 1, y: "150%" }} transition={{ duration: 1 }} exit={{ opacity: 0 }} className="h-full w-full flex flex-col absolute bg-one text-text">
                <h1 className="text-4xl sm:text-5xl mt-20 lg:mt-24 lg:text-8xl">Projects</h1>
                <div className="h-[60%] lg:w-2/3 mx-auto no-scrollbar flex flex-col items-center overflow-scroll overscroll-none m-5" >
                    <ProjectCard props={{ title: "SIT BIT Judge Program", desc: "Currently in the works, for our final year project at SIT our team is making a judge program to judge and mark learners code.", year: "2024" }} />
                </div>
            </m.div>
        </>
    )
}

function ProjectCard({ props }) {
    return (
        <>
            <div className='w-full text-lg text-left h-1/2 flex flex-col my-auto sm:px-20'>
                <h2 className='my-auto text-3xl sm:text-5xl lg:text-7xl'>{props.title}</h2>
                <p className='my-auto text-xl mt-2 sm:text-3xl lg:text-5xl'>{props.desc}</p>
                <p className='my-auto text-lg sm:text-2xl lg:text-5xl'>- {props.year}</p>
                <p className='text-center my-auto text-lg sm:text-2xl lg:text-5xl'>More to come!</p>
            </div>
        </>
    )
}