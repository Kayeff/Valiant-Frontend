import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function Credentials({ cred }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, +cred.title, {
      duration: 4,
      delay: 0.2,
    });

    return () => controls.stop();
  }, [count, cred.title]);

  return (
    <motion.div
      className="border-r border-night/20 p-10 flex flex-col items-center gap-4 nth-[3]:border-none"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.h1 className="text-8xl tracking-tight">{rounded}</motion.h1>
      <p className="tracking-tight">{cred.desc}</p>
    </motion.div>
  );
}
