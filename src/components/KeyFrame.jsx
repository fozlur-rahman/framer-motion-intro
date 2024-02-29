import { motion } from "framer-motion";
const KeyFrame = () => {
    return (
        <>
            <motion.div
                className="bg-green-500 border w-32 h-32"
                animate={{
                    borderRadius: ["20%", "50%", "50%"],
                    rotate: [0, 90, 180, 270],
                }}
                transition={{ duration: 2 }}
            />
        </>
    );
};

export default KeyFrame;
