import { motion } from "framer-motion";
const ButtonTap = () => {
    return (
        <div>
            <motion.button
                className="bg-blue-300 rounded py-1 px-3"
                whileTap={{ scale: 0.75 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.25, transition: { yoyo: Infinity } }}
                // transition={{ duration: 0.5 }}
            >
                Tap me
            </motion.button>
        </div>
    );
};

export default ButtonTap;
