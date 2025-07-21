import { HStack, Link, Icon, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";
import { useColorModeValue } from "../ui/color-mode";
import ReactCountryFlag from "react-country-flag";
import { useLanguage } from "../../contexts/LanguageContext";

const MotionLink = motion(Link);

function SocialMedia() {
  const iconColor = useColorModeValue("gray.600", "gray.300");
  const buttonColor = useColorModeValue("gray.700", "gray.200");
  const { language, toggleLanguage } = useLanguage();

  return (
    /* Language buttton */
    <HStack gap={4} position="absolute" top="4" right="4" zIndex={999}>
      <Button
        onClick={toggleLanguage}
        bg="transparent"
        color={buttonColor}
        _hover={{ bg: "transparent" }}
        size="sm"
        fontWeight="bold"
      >
        {language === "de" ? (
          <HStack gap={1}>
            <ReactCountryFlag
              countryCode="GB"
              svg
              style={{ width: "1.5em", height: "1.5em" }}
            />
          </HStack>
        ) : (
          <HStack gap={1}>
            <ReactCountryFlag
              countryCode="DE"
              svg
              style={{ width: "1.5em", height: "1.5em" }}
            />
          </HStack>
        )}
      </Button>

      {/* Instagram */}
      <MotionLink
        href="https://www.instagram.com/verocardenasd"
        target="_blank"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
        color={iconColor}
        _hover={{
          color: "#E1306C",
        }}
        _focus={{
          boxShadow: "none",
          outline: "none",
        }}
      >
        <Icon as={FaInstagram} boxSize={6} />
      </MotionLink>

      {/* LinkedIn */}
      <MotionLink
        href="https://www.linkedin.com/in/mveronica-cardenas"
        target="_blank"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
        color={iconColor}
        _hover={{
          color: "#0A66C2",
        }}
        _focus={{
          boxShadow: "none",
          outline: "none",
        }}
      >
        <Icon as={FaLinkedinIn} boxSize={6} />{" "}
      </MotionLink>

      {/* Facebook */}
      <MotionLink
        href="https://www.facebook.com/your_facebook_id"
        target="_blank"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
        color={iconColor}
        _hover={{
          color: "#1877F2",
        }}
        _focus={{
          boxShadow: "none",
          outline: "none",
        }}
      >
        <Icon as={FaFacebookF} boxSize={6} />{" "}
      </MotionLink>

      {/* Github */}
      <MotionLink
        href="https://www.github.com/verocardenasd"
        target="_blank"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
        color={iconColor}
        _hover={{
          color: "#000000",
        }}
        _focus={{
          boxShadow: "none",
          outline: "none",
        }}
      >
        <Icon as={FaGithub} boxSize={6} />{" "}
      </MotionLink>
    </HStack>
  );
}

export default SocialMedia;
