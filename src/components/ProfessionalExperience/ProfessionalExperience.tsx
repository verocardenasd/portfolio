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

const MotionLink = motion(Link);

function ProfessionalExperience() {
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
          Professional Experience
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
              Fulltime · 3 Years 7 Month
            </Text>
            <Text fontSize="sm" color={normalTextColor}>
              Germany
            </Text>
            <Text fontWeight="bold" color={boldTextColor} mt={2} marginLeft={4}>
              Planing Engineer
            </Text>
            <Text fontSize="sm" color={normalTextColor} marginLeft={4}>
              Sept. 2024–Today · 11 Month
            </Text>

            <Text fontWeight="bold" color={boldTextColor} mt={2} marginLeft={4}>
              Junior Engineering
            </Text>
            <Text fontSize="sm" color={normalTextColor} marginLeft={4}>
              Jan. 2022–Aug. 2024 · 2 Years 8 Month
            </Text>
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
                  Content Moderator
                </Text>
              </HStack>
            </MotionLink>
            <Text fontSize="sm" color={normalTextColor}>
              Cognizant · Full time
            </Text>
            <Text fontSize="sm" color={normalTextColor}>
              Sept. 2020–Jan. 2022 · 1 Year 5 Month
            </Text>
            <Text fontSize="sm" color={normalTextColor}>
              Budapest, Hungary
            </Text>
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
                  Planning and Economic Analyst
                </Text>
              </HStack>
            </MotionLink>
            <Text fontSize="sm" color={normalTextColor}>
              Total · Internship
            </Text>
            <Text fontSize="sm" color={normalTextColor}>
              March 2019–Oct. 2019 · 8 Month
            </Text>
            <Text fontSize="sm" color={normalTextColor}>
              Caracas, Distrikt Capital, Venezuela
            </Text>
            <List.Root gap={0} mt={1}>
              {" "}
              <ListItem color={listItemColor}>
                <Icon as={MdCheckCircle} color={checkIconColor} />
                Planning and Economics Analysis.
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
                  Software Developer
                </Text>
              </HStack>
            </MotionLink>
            <Text fontSize="sm" color={normalTextColor}>
              Aurora Studio · Part time
            </Text>
            <Text fontSize="sm" color={normalTextColor}>
              Oct. 2018–March 2019 · 6 Month
            </Text>
            <Text fontSize="sm" color={normalTextColor}>
              Caracas, Distrikt Capital, Venezuela
            </Text>
            <List.Root gap={0} mt={1}>
              {" "}
              <ListItem color={listItemColor}>
                <Icon as={MdCheckCircle} color={checkIconColor} />
                Web pages front-end development.
              </ListItem>
              <ListItem color={listItemColor}>
                <Icon as={MdCheckCircle} color={checkIconColor} />
                Web Development and JavaScript, HTML and CSS.
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
                  Project Development Engineer
                </Text>
              </HStack>
            </MotionLink>
            <Text fontSize="sm" color={normalTextColor}>
              Inmuno XXI Laboratory · Internship
            </Text>
            <Text fontSize="sm" color={normalTextColor}>
              Jan. 2018–Oct. 2018 · 10 Month
            </Text>
            <Text fontSize="sm" color={normalTextColor}>
              Caracas, Distrikt Capital, Venezuela
            </Text>
            <List.Root gap={0} mt={1}>
              {" "}
              <ListItem color={listItemColor}>
                <Icon as={MdCheckCircle} color={checkIconColor} />
                Development of optimization projects in the customer service
                process, sample analysis process and delivery of results
                process.
              </ListItem>
            </List.Root>
          </Box>
        </VStack>
      </CardBody>
    </Card.Root>
  );
}

export default ProfessionalExperience;
