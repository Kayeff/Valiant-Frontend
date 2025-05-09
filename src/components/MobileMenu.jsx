import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import MenuNav from "./MenuNav";

export default function MobileMenu({ isVisible, closeMenu }) {
  const [shouldRender, setShouldRender] = useState(false);
  const [contentExited, setContentExited] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      setContentExited(false);
    } else {
      setContentExited(false);
    }
  }, [isVisible]);

  return (
    <AnimatePresence mode="wait">
      {shouldRender && isVisible && (
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: "0" }}
          exit={{
            y: "-100vh",
            transition: {
              duration: 0.5,
              ease: "easeInOut",
              delay: contentExited ? 0 : 0.1,
            },
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          onAnimationComplete={() => {
            if (!isVisible) setShouldRender(false);
          }}
          className="w-full bg-whitesmoke fixed top-0 left-0 z-50 text-black"
        >
          <MenuNav
            menuVisible={isVisible}
            closeMenu={closeMenu}
            onExitComplete={() => setContentExited(true)}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
