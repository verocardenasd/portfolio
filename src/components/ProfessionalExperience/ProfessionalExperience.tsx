import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  List,
  ListItem,
  Text,
  VStack,
  Icon,
  HStack,
  Image,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MdCheckCircle } from "react-icons/md";
import { useColorModeValue } from "../ui/color-mode";
import { useLanguage } from "../../contexts/LanguageContext";
import professionalexperienceContent from "../../translations/professionalexperience.json";

const MotionLink = motion(Link);

function ProfessionalExperience() {
  const { language } = useLanguage();
  const content = professionalexperienceContent[language];
  const cardBg = useColorModeValue("white", "gray.700");
  const headingColor = useColorModeValue("teal.700", "teal.300");
  const boldTextColor = useColorModeValue("gray.800", "gray.200");
  const normalTextColor = useColorModeValue("gray.600", "gray.400");
  const listItemColor = useColorModeValue("gray.700", "gray.300");
  const checkIconColor = useColorModeValue("green.500", "green.300");

  return (
    <Card.Root w="100%" bg={cardBg} borderRadius="lg">
      {" "}
      <CardHeader pb={0} marginBottom={6}>
        <Heading as="h2" size="2xl" color={headingColor}>
          {content.title}
        </Heading>
      </CardHeader>
      <CardBody pt={2}>
        <VStack gap={6} align="flex-start">
          {/* RTM GROUP BV - Planning Engineer */}
          <Box>
            <MotionLink
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              href="https://group-rtm.com/"
              target="_blank"
              display="inline-block"
            >
              <HStack align="center" gap={2}>
                <Image
                  src="rtm_group_bv_logo.png"
                  alt="RTM Group Logo"
                  boxSize="30px"
                  borderRadius="md"
                />
                <Text fontWeight="bold" color={boldTextColor}>
                  RTM GROUP BV
                </Text>
              </HStack>
            </MotionLink>
            <Text fontSize="sm" color={normalTextColor}>
              {content.timeRTM}
            </Text>
            <Text fontSize="sm" color={normalTextColor}>
              {content.countryRTM}
            </Text>
            <Text fontWeight="bold" color={boldTextColor} mt={2} marginLeft={4}>
              {content.titleRTM}
            </Text>
            <Text fontSize="sm" color={normalTextColor} marginLeft={4}>
              {content.dateRTM}
            </Text>

            <Text fontWeight="bold" color={boldTextColor} mt={2} marginLeft={4}>
              {content.titleRTM2}
            </Text>
            <Text fontSize="sm" color={normalTextColor} marginLeft={4}>
              {content.dateRTM2}
            </Text>
            <List.Root gap={0} mt={1}>
              {" "}
              <ListItem color={listItemColor}>
                <Icon as={MdCheckCircle} color={checkIconColor} />{" "}
                {content.descriptionRTM1}
              </ListItem>
              <ListItem color={listItemColor}>
                <Icon as={MdCheckCircle} color={checkIconColor} />{" "}
                {content.descriptionRTM2}
              </ListItem>
            </List.Root>
          </Box>

          {/* Cognizant - Content Moderator */}
          <Box>
            <MotionLink
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              href="https://www.cognizant.com/de/de"
              target="_blank"
              display="inline-block"
            >
              <HStack align="center" gap={2}>
                <Image
                  src="cognizant_logo.png"
                  alt="Cognizant Logo"
                  boxSize="30px"
                  borderRadius="md"
                />
                <Text fontWeight="bold" color={boldTextColor}>
                  {content.titleCognizant}
                </Text>
              </HStack>
            </MotionLink>
            <Text fontSize="sm" color={normalTextColor}>
              {content.timeCognizant}
            </Text>
            <Text fontSize="sm" color={normalTextColor}>
              {content.dateCognizant}
            </Text>
            <Text fontSize="sm" color={normalTextColor}>
              {content.countryHU}
            </Text>
            <List.Root gap={0} mt={1}>
              {" "}
              <ListItem color={listItemColor}>
                <Icon as={MdCheckCircle} color={checkIconColor} />{" "}
                {content.descriptionCognizant1}
              </ListItem>
              <ListItem color={listItemColor}>
                <Icon as={MdCheckCircle} color={checkIconColor} />{" "}
                {content.descriptionCognizant2}
              </ListItem>
            </List.Root>
          </Box>

          {/* Total - Planning and Economic Analyst */}
          <Box>
            <MotionLink
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              href="https://totalenergies.de/"
              target="_blank"
              display="inline-block"
            >
              <HStack align="center" gap={2}>
                <Image
                  src="totalenergies_logo.png"
                  alt="Total Logo"
                  boxSize="30px"
                  borderRadius="md"
                />
                <Text fontWeight="bold" color={boldTextColor}>
                  {content.titleTotal}
                </Text>
              </HStack>
            </MotionLink>
            <Text fontSize="sm" color={normalTextColor}>
              {content.timeTotal}
            </Text>
            <Text fontSize="sm" color={normalTextColor}>
              {content.dateTotal}
            </Text>
            <Text fontSize="sm" color={normalTextColor}>
              {content.countryVE}
            </Text>
            <List.Root gap={0} mt={1}>
              {" "}
              <ListItem color={listItemColor}>
                <Icon as={MdCheckCircle} color={checkIconColor} />{" "}
                {content.descriptionTotal1}
              </ListItem>
              <ListItem color={listItemColor}>
                <Icon as={MdCheckCircle} color={checkIconColor} />{" "}
                {content.descriptionTotal2}
              </ListItem>
            </List.Root>
          </Box>

          {/* Aurora Studio - Software Programmer */}
          <Box>
            <MotionLink
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              href="#"
              target="_blank"
              display="inline-block"
            >
              <HStack align="center" gap={2}>
                <Image
                  src="aurora_studio_tech_logo.png"
                  alt="Aurora Studio Logo"
                  boxSize="30px"
                  borderRadius="md"
                />
                <Text fontWeight="bold" color={boldTextColor}>
                  {content.titleAS}
                </Text>
              </HStack>
            </MotionLink>
            <Text fontSize="sm" color={normalTextColor}>
              {content.timeAS}
            </Text>
            <Text fontSize="sm" color={normalTextColor}>
              {content.dateAS}
            </Text>
            <Text fontSize="sm" color={normalTextColor}>
              {content.countryVE}
            </Text>
            <List.Root gap={0} mt={1}>
              {" "}
              <ListItem color={listItemColor}>
                <Icon as={MdCheckCircle} color={checkIconColor} />{" "}
                {content.descriptionAS1}
              </ListItem>
              <ListItem color={listItemColor}>
                <Icon as={MdCheckCircle} color={checkIconColor} />{" "}
                {content.descriptionAS2}
              </ListItem>
            </List.Root>
          </Box>

          {/* Inmuno XXI Laboratory - Project Development Engineer */}
          <Box>
            <MotionLink
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              href="https://inmuno21.com/en/"
              target="_blank"
              display="inline-block"
            >
              <HStack align="center" gap={2}>
                <Image
                  src="ImmunoXXL_Laboratory.png"
                  alt="Inmuno XXI Logo"
                  boxSize="30px"
                  borderRadius="md"
                />
                <Text fontWeight="bold" color={boldTextColor}>
                  {content.titleLab}
                </Text>
              </HStack>
            </MotionLink>
            <Text fontSize="sm" color={normalTextColor}>
              {content.timeLab}
            </Text>
            <Text fontSize="sm" color={normalTextColor}>
              {content.dateLab}
            </Text>
            <Text fontSize="sm" color={normalTextColor}>
              {content.countryVE}
            </Text>
            <List.Root gap={0} mt={1}>
              {" "}
              <ListItem color={listItemColor}>
                <Icon as={MdCheckCircle} color={checkIconColor} />{" "}
                {content.descriptionLab1}
              </ListItem>
            </List.Root>
          </Box>
        </VStack>
      </CardBody>
    </Card.Root>
  );
}

export default ProfessionalExperience;
