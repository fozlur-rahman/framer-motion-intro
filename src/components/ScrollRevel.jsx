import { motion } from "framer-motion";

const Box = ({ text }) => {
    return (
        <motion.div
            className="m-2 w-32 h-32 bg-green-300 rounded flex justify-center capitalize items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 2 } }}
            viewport={{}}
        >
            {text}
        </motion.div>
    );
};

const ScrollRevel = () => {
    const greetings = [
        "salam",
        "welcome",
        "good mornig",
        "good night",
        "dsf",
        "dsf",
        "sdf",
        "sd",
        "sdf",
    ];
    return (
        <div>
            {greetings.map((item, index) => (
                <Box key={index} text={item}></Box>
            ))}
        </div>
    );
};

export default ScrollRevel;
