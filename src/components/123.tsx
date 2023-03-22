import { motion } from "framer-motion";

export default function CC_08_While_drag() {
    return (
        <div>
            <motion.div
                style={{
                    width: 150,
                    height: 150,
                    borderRadius: 30,
                    backgroundColor: "#fff",
                    opacity: 0.7,
                }}
                drag
                whileHover={{ opacity: 1 }}
                whileTap={{
                    opacity: 1,
                    scale: 1.05,
                    boxShadow: "0px 5px 8px #222",
                }}
                whileDrag={{ scale: 1.1, boxShadow: "0px 10px 16px #222" }}
                transition={{ duration: 0.6 }}
            />
        </div>
    )
}