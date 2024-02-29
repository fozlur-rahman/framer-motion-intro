import { motion } from "framer-motion";

const Simple = () => {
    return (
        <>
            <motion.div
                className="w-32 h-32 rounded-full mx-auto bg-red-400"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            />
        </>
    );
};

export default Simple;
