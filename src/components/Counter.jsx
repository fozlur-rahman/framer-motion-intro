import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
const Counter = () => {
    const count = useMotionValue(0);
    const roundedvalue = useTransform(count, Math.round);
    useEffect(() => {
        const animation = animate(count, 100, { duration: 1 });
        return animation.stop;
    }, [count]);
    return (
        <div>
            <motion.div>{roundedvalue}</motion.div>
        </div>
    );
};

export default Counter;
