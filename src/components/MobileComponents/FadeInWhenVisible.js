import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const FadeInWhenVisible = ({ children, delay = 0, yOffset = 50 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        margin: "-20% 0px -20% 0px",
        once: false
    });

    return (
        <motion.div
            ref={ref}
            animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : yOffset
            }}
            initial={{ opacity: 0, y: yOffset }}
            transition={{
                duration: 0.6,
                delay: isInView ? delay : 0,
                ease: "easeOut"
            }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInWhenVisible; 