import { Box, HStack, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { logoType } from "./Types/logoType";

const logos: logoType[] = [
  {
    src: "react.svg",
    alt: "React Logo",
    glowColor: "#33fff0",
  },
  {
    src: "Typescript_logo_2020.svg",
    alt: "TypeScript Logo",
    glowColor: "#6bccff",
  },
  {
    src: "Unofficial_JavaScript_logo_2.svg",
    alt: "JavaScript Logo",
    glowColor: "#edff6b",
  },
  {
    src: "CSS3_logo_and_wordmark.svg",
    alt: "CSS Logo",
    glowColor: "#6bccff",
  },
  {
    src: "HTML5_logo_and_wordmark.svg",
    alt: "HTML Logo",
    glowColor: "#ffcb6b",
  },
];

function TechStack() {
  return (
    <Box w="100%" p={4} borderRadius="lg" textAlign="center">
      <HStack gap={16} justify="center" wrap="wrap">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            initial={{
              x: -100,
              opacity: 0,
              filter: "drop-shadow(0 0 0px transparent)",
              scale: 1,
              rotate: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              filter: "drop-shadow(0 0 0px transparent)",
              scale: 1,
              ...(logo.alt === "React Logo" && { rotate: 360 }),
            }}
            whileHover={{
              filter: `drop-shadow(0 0 10px ${logo.glowColor}) drop-shadow(0 0 20px ${logo.glowColor}) drop-shadow(0 0 30px ${logo.glowColor})`,
              scale: 1.1,
            }}
            transition={{
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
              damping: 10,
              filter: { duration: 0.2 },
              scale: { duration: 0.2 },
              ...(logo.alt === "React Logo" && {
                rotate: { duration: 10, ease: "linear", repeat: Infinity },
              }),
            }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              boxSize="50px"
              borderRadius="md"
              objectFit="contain"
            />
          </motion.div>
        ))}
      </HStack>
    </Box>
  );
}

export default TechStack;
