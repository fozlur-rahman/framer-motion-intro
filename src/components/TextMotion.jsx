import { motion } from "framer-motion";
const TextMotion = () => {
    const message =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, sed!";
    const wordsArray = message.split(" ");
    return (
        <div>
            {wordsArray.map((word, index) => (
                <motion.span
                    className="text-xl text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: index / 10 }}
                    key={index}
                >
                    {word}
                </motion.span>
            ))}
        </div>
    );
};

export default TextMotion;
