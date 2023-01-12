import ScrollIntoView from "react-scroll-into-view";
import { motion } from "framer-motion";
import * as FaIcon from "react-icons/fa";
import { useState } from "react";

function Header() {
  const Tags = [
    { content: "Home", hash: "hero" },
    { content: "Services", hash: "services" },
    { content: "About", hash: "about" },
    { content: "Project", hash: "project" },
    { content: "Contact", hash: "contact" },
  ];

  const [isOpen, setOpen] = useState(false);

  return (
    <header className="fixed bg-bodyColor flex text-white justify-between items-center p-6 w-[90%] max-w-screen-2xl left-1/2 -translate-x-1/2">
      <nav className="text-xl cursor-pointer">O.Wale</nav>

      <nav
        className="flex md:hidden text-white"
        onClick={() => setOpen(!isOpen)}
      >
        {!isOpen ? (
          <FaIcon.FaBars size="1.5rem" />
        ) : (
          <FaIcon.FaTimes size="1.5rem" />
        )}
      </nav>

      <nav
        className={`text-sm fixed z-20 bg-bodyColor h-screen w-1/2 md:flex items-center gap-4 justify-between ${
          isOpen
            ? "block pt-10 px-6 space-y-10 top-1/2 translate-y-6 left-0"
            : "hidden"
        } md:static md:inset-0 md:w-fit md:h-fit md:p-0 md:space-y-0 md:transform-none
        `}
      >
        {Tags.map((item, index) => (
          <ScrollIntoView smooth="true" selector={`#${item.hash}`} key={index}>
            <motion.div
              initial="offscreen"
              whileInView="link"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                offscreen: {
                  opacity: 0,
                  visibility: "hidden",
                },
                link: {
                  opacity: 1,
                  visibility: "visible",
                  transition: {
                    type: "spring",
                    delay: index / 4,
                    duration: 2,
                  },
                },
              }}
              className="cursor-pointer hover:text-firstColorSecond"
            >
              {item.content}
            </motion.div>
          </ScrollIntoView>
        ))}
        <motion.div
          initial="offscreen"
          whileInView="link"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            offscreen: {
              opacity: 0,
              visibility: "hidden",
            },
            link: {
              opacity: 1,
              visibility: "visible",
              transition: {
                type: "spring",
                delay: 1,
                duration: 2,
              },
            },
          }}
        >
          <a
            className="cursor-pointer border px-4 pt-2 pb-3 text-sm border-[#4c71d9] hover:border-transparent rounded-xl hover:bg-[#acbded] hover:text-[#262d3d]"
            download="Resume"
          >
            Resume
          </a>
        </motion.div>
      </nav>
    </header>
  );
}

export default Header;
