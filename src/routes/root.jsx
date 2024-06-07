import { Outlet, Link } from "react-router-dom";
import { animate, motion as m, useAnimate } from 'framer-motion'
// import Switch from "../components/switch";

export default function Root() {
    return (
        <>
            <m.div initial={{opacity: 0}} animate={{ opacity: 1}} transition={{ duration: 2, ease: "easeInOut" }}>
                <main id="root" className="h-screen w-screen flex">
                    <div id="outlet-wrapper" className="flex flex-col text-center">
                        <Outlet />
                    </div>
                    <footer id="footer-wrapper" className=" z-50 self-end h-1/6 lg:h-1/5 flex w-full p-2 lg:px-48 lg:pb-24">
                        <Footer />
                    </footer>
                </main>
            </m.div>
        </>
    )
}



function Footer() {
    const FooterElement = ({ d }) => {
        return (
            <Link to={d.link} className={`text-2xl sm:text-3xl lg:text-6xl flex h-1/3 items-center ${d.side ?? 'flex-row-reverse'}`}><m.span className={`mx-2 mt-1 w-4 h-4 lg:mx-8 lg:h-10 lg:mt-2 lg:w-10 ${d.text ? 'bg-text' : 'bg-transparent'} rounded-full`} />{d.text}</Link>
        )
    }

    return (
        <>
            <div id="left-side-footer" className=" flex-col h-full content-between w-1/2">
                <FooterElement d={{ text: "home", side: "left", link: "/" }} />
                <FooterElement d={{ text: "work history", side: "left", link: "/workhistory" }} />
                <FooterElement d={{ text: "projects", side: "left", link: "/projects" }} />
            </div>
            <div id="right-side-footer" className=" flex-col h-full content-evenly text-right w-1/2">
                <FooterElement d={{ text: "about me", link: "/about" }} />
                <FooterElement d={{ }} />
                <FooterElement d={{ text: "links", link: "/links" }} />
            </div>
        </>
    )
}