import { motion } from "framer-motion";

const TransitionAnimation = () => {
    return (
        <div className="flex flex-col space-y-5">
            <motion.div
                initial={{ opacity: 0, x: "-100vh" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque autem
                    exercitationem beatae ipsa libero alias!
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: "-100vh" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", duration: 1 }}
            >
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque autem
                    exercitationem beatae ipsa libero alias!
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: "-10vh" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", bounce: 0.7, duration: 1 }}
            >
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque autem
                    exercitationem beatae ipsa libero alias!
                </p>
            </motion.div>
        </div>
    );
};

export default TransitionAnimation;
