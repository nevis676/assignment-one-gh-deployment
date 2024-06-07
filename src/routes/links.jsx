import { motion as m } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'


export default function Links() {
    return (
        <m.div animate={{ opacity: 1, y: "0%" }} initial={{ opacity: 1, y: "150%" }} transition={{ duration: 1 }} exit={{ opacity: 0 }} className="h-full w-full flex flex-col absolute bg-one text-text">
            <h1 className="text-4xl sm:text-5xl mt-20 lg:mt-24 lg:text-8xl">Links</h1>
            <div className="h-[60%] lg:space-y-20 my-20 lg:w-2/3 mx-auto no-scrollbar flex flex-col items-center overflow-scroll overscroll-none m-5" >
                <SocialLink network="github" name="GitHub" link="https://github.com/nevis676" />
                <SocialLink side="right" network="youtube" name="YouTube" link="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygULcmljayBhc3RsZXk%3D" />
                <SocialLink network="linkedin" name="LinkedIn" link="https://nz.linkedin.com/" />
                <SocialLink notalink="true" side="right" network="email" name="fake@email.com" link="https://mail.google.com/" />
            </div>
        </m.div>
    )
}

function SocialLink(props) {
    return (
        <div>
            {
                props.notalink == "true" ?
                    (<p className={`flex items-center left-0 ${props.side ? 'flex-row-reverse' : ''}  h-24 `}>
                        <SocialIcon style={{ height: 70, width: 70 }} network={props.network} />
                        <h2 className='my-auto ml-2 mr-2 lg:text-7xl'>{props.name}</h2>
                    </p>) :
                    (<a href={props.link} className={`flex items-center ${props.side ? 'flex-row-reverse' : ''}  h-24 `}>
                        <SocialIcon style={{ height: 70, width: 70 }} network={props.network} />
                        <h2 className='my-auto ml-2 mr-2 lg:text-7xl'>{props.name}</h2>
                    </a>)
            }
        </div>
    )
}