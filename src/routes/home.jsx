import { useState, useEffect } from 'react';
import { motion as m } from 'framer-motion';

export default function Home() {
    const [wordArray, setArray] = useState(['web_dev', 'proffessional', 'keyword', 'front-end', 'back-end', 'musician', 'cinema_enthusiast']);
    const [currentIndex, setIndex] = useState(0);
    const [currentText, setText] = useState('');
    const [arrayIndex, setArrayIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < wordArray[arrayIndex].length + 10) {
            const timeout = setTimeout(() => {
                setText(prevText => prevText + (wordArray[arrayIndex][currentIndex] ?? ''));
                setIndex(prevIndex => prevIndex + 1);
            }, 150);

            return () => clearTimeout(timeout);
        } else {
            setText('');
            setIndex(0);
            if (arrayIndex < wordArray.length - 1) {
                setArrayIndex(prevIndex => prevIndex + 1);
                console.log(arrayIndex);
            } else {
                setArrayIndex(0);
                console.log(arrayIndex);
            }
        }
    }, [currentIndex]);

    return (
        <m.div animate={{ opacity: 1, y: "0%" }} initial={{ opacity: 1, y: "150%" }} transition={{ duration: 1 }} exit={{ opacity: 0 }} className="h-full w-full flex flex-col absolute bg-one text-text">
            <h1 className="text-4xl sm:text-5xl mt-20 lg:mt-24 lg:text-8xl">Nevis Colloty-Spiers</h1>
            <h2 className="text-center text-3xl lg:text-6xl sm:text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{currentText}<span className={currentIndex % 2 === 0 ? 'text-transparent' : ''}>|</span></h2>
        </m.div>
    )
}