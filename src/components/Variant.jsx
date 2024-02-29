import { motion } from "framer-motion";

const shapeVariant = {
    initial: {
        opacity: 0,
        y: "-100vh",
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
            duration: 1,
            type: "spring",
        },
    },
};
const childVariant = {
    initial: {
        scale: 0,
        x: 0,
        y: 0,
    },
    animate: {
        scale: 2,
        transition: {
            delay: 2,
            duration: 1,
            type: "spring",
        },
    },
};

const Variant = () => {
    return (
        <div>
            <motion.div
                className="w-32 h-32 bg-green-500 rounded overflow-hidden flex justify-center items-center"
                variants={shapeVariant}
                initial="initial"
                animate="animate"
            >
                {" "}
                <motion.div
                    className="w-10 h-10 bg-red-500 rounded-full "
                    variants={childVariant}
                />{" "}
            </motion.div>
        </div>
    );
};

export default Variant;
