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
      className="border-b tablet-p:border-r tablet-p:border-b-0 border-night/20 p-5 tablet-p:p-10 flex flex-col items-center gap-4 nth-[3]:border-none"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.h1 className="text-5xl tracking-tight">{rounded}</motion.h1>
      <p className="tracking-tight text-center text-sm tablet-p:text-lg">
        {cred.desc}
      </p>
    </motion.div>
  );
}
