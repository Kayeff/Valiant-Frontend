import { motion, useInView } from "motion/react";
import Button from "./Button";
import { useRef } from "react";

function Section({
  number,
  title,
  subtitle,
  description,
  buttonText,
  children,
}) {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen flex items-center justify-center desktop:px-10"
    >
      <div className="w-full flex flex-col items-center justify-center gap-5 desktop:gap-10 p-5">
        <div className="flex flex-col items-center">
          {number && (
            <div className="overflow-hidden p-2">
              <motion.p
                initial={{ y: 50 }}
                animate={{ y: inView ? 0 : 50 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="text-xl small-laptop:text-5xl tracking-tighter text-night/10 leading-5 font-semibold"
              >
                {number}
              </motion.p>
            </div>
          )}
          {title && (
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 50 }}
                animate={{ y: inView ? 0 : 50 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="text-5xl desktop:text-8xl tracking-tighter text-center uppercase"
              >
                {title}
              </motion.h1>
            </div>
          )}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="tracking-tight text-center"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
        {description && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="tracking-tight text-center text-xl desktop:text-4xl"
          >
            {description}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="w-full flex items-center justify-center"
        >
          {children}
        </motion.div>
        {buttonText && (
          <div className="flex items-center justify-center">
            <Button>{buttonText}</Button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Section;
