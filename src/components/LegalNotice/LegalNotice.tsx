import { Box, Heading, Text, VStack, Button, HStack } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import { useLanguage } from "../../contexts/LanguageContext";
import impressumContent from "../../translations/impressum.json";
import ReactCountryFlag from "react-country-flag";

function LegalNotice() {
  const headingColor = useColorModeValue("teal.700", "teal.300");
  const textColor = useColorModeValue("gray.700", "gray.200");

  const { language, toggleLanguage } = useLanguage();

  const content = impressumContent[language];

  const buttonBg = useColorModeValue("gray.200", "gray.700");
  const buttonColor = useColorModeValue("gray.700", "gray.200");
  const buttonHoverBg = useColorModeValue("gray.300", "gray.600");

  return (
    <VStack align="flex-start" gap={4} p={4}>
      <HStack justifyContent="space-between" width="100%" alignItems="center">
        <Heading as="h2" size="lg" color={headingColor}>
          {content.title}
        </Heading>
        <Button
          onClick={toggleLanguage}
          bg={buttonBg}
          color={buttonColor}
          _hover={{ bg: buttonHoverBg }}
          size="sm"
          borderRadius="md"
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
      </HStack>
      <Box color={textColor}>
        <Text fontWeight="bold" mb={2}>
          {content.section_provider_title}
        </Text>
        <Text>{content.name}</Text>
        {/* WICHTIG: Hier muss eine ladungsfähige Adresse angegeben werden. */}
        {/* Für private Portfolio-Seiten ist dies oft die private Wohnadresse. */}
        {/* Ein reines Postfach ist in der Regel NICHT ausreichend. */}
        {/* Bitte konsultiere bei Unsicherheiten eine Rechtsberatung. */}
        <Text>{content.address_line1}</Text>
        <Text>{content.address_line2}</Text>
        <Text mb={4}>{content.country}</Text>

        <Text fontWeight="bold" mb={2}>
          {content.section_contact_title}
        </Text>
        <Text>{content.phone}</Text>
        <Text>{content.email}</Text>
        <Text mb={4}>{content.website}</Text>

        <Text fontWeight="bold" mb={2}>
          {content.section_liability_title}
        </Text>
        <Text mb={4}>{content.liability_text}</Text>

        <Text fontWeight="bold" mb={2}>
          {content.section_copyright_title}
        </Text>
        <Text mb={4}>{content.copyright_text}</Text>
      </Box>
    </VStack>
  );
}

export default LegalNotice;
