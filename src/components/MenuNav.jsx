import { AnimatePresence, motion } from "framer-motion";
import { navbar_links } from "../navbar-links";

const listVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function MenuNav({ menuVisible, closeMenu, onExitComplete }) {
  return (
    <AnimatePresence mode="wait" onExitComplete={onExitComplete}>
      {menuVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="w-full min-h-screen p-3 flex flex-col items-center justify-between"
        >
          <div className="w-full flex items-center justify-end">
            <button
              onClick={closeMenu}
              className="p-2 bg-night cursor-pointer text-whitesmoke text-sm"
            >
              Close
            </button>
          </div>

          <motion.ul
            variants={listVariants}
            initial="initial"
            animate="animate"
            className="w-full flex flex-col gap-3 py-10"
          >
            {navbar_links.map((item) => (
              <motion.li
                key={item.id}
                variants={itemVariants}
                className="border-b border-night/20"
              >
                <a className="text-4xl tracking-tighter" href={item.href}>
                  {item.linkText}
                </a>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="w-full flex items-center justify-center"
          >
            <h1 className="tracking-tighter text-xl">
              <span className="uppercase">Valiant</span> Entech
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
