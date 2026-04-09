'use client'

import { motion } from "framer-motion"

interface InformationTextProps {
    text: string
}

export function InformationText({text}:InformationTextProps){
    return(
        <motion.div 
            className="text-justify mb-5"
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.7}}
            viewport={{once:true}}
        >
            {text.split('\n\n').map((paragraph, index) => (
                <p 
                    key={index}
                className="indent-5 mb-4">
                    {paragraph}
                </p>
            ))}
        </motion.div>
    )
}