import * as Icons from 'react-icons/fa6'
import {
    motion as m
} from "framer-motion";

export default function WorkHistory() {

    return (
        <>
            <m.div animate={{ opacity: 1, y: "0%" }} initial={{ opacity: 1, y: "150%" }} transition={{ duration: 1 }} exit={{ opacity: 0 }} className="h-full w-full flex flex-col absolute bg-two text-text">
                <h1 className="text-4xl sm:text-5xl mt-20 lg:mt-24 lg:text-8xl">Work History</h1>
                <div className="h-[60%] md:h-[40%] lg:h-[70%] lg:w-2/3 mx-auto no-scrollbar overflow-scroll overscroll-none m-5 " >
                    <WorkHistoryCard name="Caltex Savoy" area="Invercargill, Southland" position="Forecourt Attendant" starttime="2022" endtime="current" icon={<Icons.FaGasPump />} />
                    <WorkHistoryCard name="New Zealand Couriers" area="Cromwell, Otago" position="Relief Driver/Depot Worker" starttime="2019" endtime="2021" side="flex-row-reverse" icon={<Icons.FaVanShuttle />} />
                    <WorkHistoryCard name="BP2GO" area="Cromwell, Otago" position="Forecourt Attendant" starttime="2016" endtime="2019" icon={<Icons.FaGasPump />} />
                </div>
            </m.div>
        </>
    );
}

function WorkHistoryCard(props) {
    return (
        <>
            <div className={`h-full flex flex-col items-center justify-center`}>
                <div className={`flex h-full w-full justify-center items-center ${props.side ?? ''}`}>
                    <div id="date-bar" className={`flex flex-col justify-center items-center h-full w-1/5 lg:w-1/2  text-text`}>
                        <div className='text-2xl sm:text-4xl lg:text-5xl'>{props.starttime}</div>
                        <hr className='bg-text border-text border-2 w-full'/>
                        <div className='text-2xl sm:text-4xl lg:text-5xl'>{props.endtime}</div>
                    </div>
                    <div id="work-card" className={` h-2/3 w-2/3 lg:w-1/2 p-5 rounded-lg flex flex-col items-center justify-center`}>
                        <h2 className='text-6xl sm:text-9xl lg:text-[12rem]'>{props.icon}</h2>
                        <h3 className='text-2xl sm:text-4xl lg:text-7xl'>{props.name}</h3>
                        <h4 className='text-xl sm:text-3xl lg:text-6xl'>{props.position}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}