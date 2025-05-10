import { motion } from "motion/react";

export default function Hero() {
  const sentence = "Engineering, tomorrow’s water.";
  const text = sentence.split(",").map((word, index) => (
    <span key={word} className="inline-block">
      <motion.span
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut", delay: index * 0.02 }}
        className="inline-block"
      >
        {word}
      </motion.span>
    </span>
  ));

  return (
    <section className="w-full h-[calc(100vh-60px)] flex flex-col relative heroBg">
      <div className="absolute top-0 left-0 w-full flex items-start justify-center">
        <div className="w-full flex items-start justify-center flex-col-reverse overflow-hidden tablet-p:flex-row p-3 py-5 bg-whitesmoke tablet-p:bg-transparent tablet-p:p-0 gap-3 tablet-p:gap-0">
          <div className="w-full tablet-p:w-1/2 flex flex-col gap-1 bg-whitesmoke tablet-p:p-6 desktop:p-10 tablet-p:gap-4">
            <h1 className="text-4xl tablet-p:text-6xl desktop:text-8xl tracking-tighter leading-9 tablet-p:leading-12 desktop:leading-20 overflow-hidden">
              {text}
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
              className="text-sm tracking-tighter text-end tablet-p:text-lg desktop:text-2xl"
            >
              with R.E.G.A.L Technology.
            </motion.p>
          </div>
          <div className="w-full items-center justify-start desktop:justify-end tablet-p:w-1/2 flex bg-whitesmoke tablet-p:p-6 desktop:p-10">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
              className="text-xs tracking-tighter uppercase font-medium tablet-p:text-lg desktop:text-2xl desktop:text-end"
            >
              Directing the spark of Nanobubbles & Ultrasound!
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
