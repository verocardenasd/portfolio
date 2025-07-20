import {
  Button,
  Box,
  Text,
  HStack,
  Icon,
  VStack,
  Link,
} from "@chakra-ui/react";
import { MdEmail, MdClose } from "react-icons/md";
import { useState } from "react";
import { useColorModeValue } from "../ui/color-mode";
import { motion } from "framer-motion";
import Constants from "../../core/const";

const MotionButton = motion(Button);

function ContactMe() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const bookmarkBg = useColorModeValue("teal.500", "teal.400");
  const bookmarkColor = useColorModeValue("white", "gray.800");
  const bookmarkHoverBg = useColorModeValue("teal.600", "teal.500");
  const bookmarkShadow = useColorModeValue("md", "lg");

  const modalOverlayBg = useColorModeValue(
    "rgba(0, 0, 0, 0.6)",
    "rgba(0, 0, 0, 0.8)"
  );
  const modalContentBg = useColorModeValue("white", "gray.700");
  const modalHeaderColor = useColorModeValue("gray.800", "gray.100");
  const modalBodyColor = useColorModeValue("gray.700", "gray.200");
  const emailColor = useColorModeValue("blue.600", "blue.300");
  const closeIconColor = useColorModeValue("gray.600", "gray.400");

  return (
    <>
      <MotionButton
        onClick={onOpen}
        bg={bookmarkBg}
        color={bookmarkColor}
        _hover={{ bg: bookmarkHoverBg }}
        boxShadow={bookmarkShadow}
        size="md"
        height="50px"
        px={3}
        borderRadius="md"
        clipPath="polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontWeight="bold"
        fontSize="lg"
        whileHover={{ width: "160px" }}
        transition={{ width: { duration: 0.2, ease: "easeOut" } }}
      >
        Contact Me
      </MotionButton>

      {isOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width={{ base: "100%", md: "100vw" }}
          height={{ base: "100%", md: "100vh" }}
          bg={modalOverlayBg}
          display="flex"
          alignItems="center"
          justifyContent="center"
          zIndex="modal"
          onClick={onClose}
        >
          <Box
            bg={modalContentBg}
            borderRadius="lg"
            boxShadow="xl"
            p={6}
            minW={{ base: "90%", sm: "400px", md: "500px" }}
            maxW="500px"
            position="relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <HStack justifyContent="space-between" alignItems="center" mb={4}>
              <Text fontSize="xl" fontWeight="bold" color={modalHeaderColor}>
                Contact Me
              </Text>
              <Icon
                as={MdClose}
                boxSize={6}
                color={closeIconColor}
                cursor="pointer"
                onClick={onClose}
                _hover={{ opacity: 0.7 }}
              />
            </HStack>

            {/* Modal Body */}
            <VStack gap={4} align="center">
              <Text fontSize="lg" color={modalBodyColor} textAlign="center">
                You can reach me via email:
              </Text>
              <HStack>
                <Icon as={MdEmail} color={emailColor} boxSize={5} />
                <Link
                  fontSize="xl"
                  fontWeight="bold"
                  color={emailColor}
                  href={`mailto:${Constants.email}`}
                  _hover={{ textDecoration: "underline" }}
                >
                  {Constants.email}
                </Link>
              </HStack>
            </VStack>
          </Box>
        </Box>
      )}
    </>
  );
}

export default ContactMe;
