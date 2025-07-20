import {
  Heading,
  HStack,
  Icon,
  Card,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";
import { motion, type Variants } from "framer-motion";
import { useColorModeValue } from "../ui/color-mode";
import { FaDumbbell, FaCode, FaPlane } from "react-icons/fa"; // Icons for hobbies

// Motion components for animations
// We will use motion.div directly for the circles
const MotionIcon = motion(Icon); // Keep MotionIcon for icon animation
const MotionHStack = motion(HStack); // Create Motion component from HStack

// Variants for the main container animation (HStack holding all circles)
const mainContainerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
      when: "beforeChildren", // Animate children after parent
      staggerChildren: 0.2, // Staggered animation for children
    },
  },
};

// Variants for each individual circle's initial appearance
const circleEnterVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

// Variants for the icon animation on hover
const iconVariants: Variants = {
  rest: { rotate: 0 }, // Ruhezustand: keine Rotation
  hover: {
    rotate: 360, // Beim Hovern: 360 Grad Rotation
    transition: {
      duration: 1.5, // Dauer einer Rotation
      repeat: Infinity, // Endlos wiederholen, solange gehovert wird
      ease: "linear", // Lineare Animation für kontinuierliche Rotation
    },
  },
};

// Data for hobbies
const hobbiesData = [
  {
    name: "Gym",
    icon: FaDumbbell,
    description: ["Triathlon: 3h 45min", "Half-marathon: 1h 35min"],
  },
  {
    name: "Programming",
    icon: FaCode,
    description: ["Building innovative solutions."],
  },
  {
    name: "Traveling",
    icon: FaPlane,
    description: ["Exploring new cultures and landscapes."],
  },
];

function Hobbies() {
  // Dynamic colors based on color mode
  const cardRootBg = useColorModeValue("white", "gray.700");
  const cardRootShadow = useColorModeValue("md", "dark-lg");
  const headingColor = useColorModeValue("teal.700", "teal.300");
  const iconColor = useColorModeValue("black", "white");

  const containerBg = useColorModeValue(
    "linear-gradient(130deg,rgba(252, 217, 237, 1) 0%, rgba(217, 231, 255, 1) 82%)",
    "linear-gradient(130deg,rgba(2, 0, 36, 1) 0%, rgba(0, 0, 158, 1) 82%)"
  );

  const box = {
    width: 200,
    height: 200,
    background: containerBg,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  };

  return (
    <Card.Root
      w="100%"
      bg={cardRootBg}
      borderRadius="lg"
      boxShadow={cardRootShadow}
    >
      <CardHeader pb={0}>
        <Heading as="h2" size="2xl" color={headingColor} mb={4}>
          My Hobbies
        </Heading>
      </CardHeader>
      <CardBody pt={2}>
        <MotionHStack
          gap={20}
          wrap="wrap"
          justify="center"
          variants={mainContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {hobbiesData.map((hobby, index) => (
            <motion.div
              style={box}
              whileHover={{
                scale: [null, 1.1, 1.6],
                transition: {
                  duration: 0.5,
                  times: [0, 0.6, 1],
                  ease: ["easeInOut", "easeOut"],
                },
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <MotionIcon // Animated icon
                as={hobby.icon}
                boxSize={20}
                color={iconColor}
                variants={iconVariants} // Icon-specific animation
                initial="rest"
                animate="rest" // Ensures the icon starts in the rest state
              />
            </motion.div>
          ))}
        </MotionHStack>
      </CardBody>
    </Card.Root>
  );
}

export default Hobbies;
