import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Link,
} from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
function Education() {
  const cardBg = useColorModeValue("white", "gray.700");
  const headingColor = useColorModeValue("teal.700", "teal.300");
  const boldTextColor = useColorModeValue("gray.800", "gray.200");
  const normalTextColor = useColorModeValue("gray.600", "gray.400");
  const innerCardBg = useColorModeValue("gray.100", "gray.800");
  const innerCardShadow = useColorModeValue("sm", "md");

  return (
    <Card.Root w="100%" bg={cardBg} borderRadius="lg" boxShadow="dark-lg">
      <CardHeader pb={0}>
        <Heading as="h2" size="2xl" mb={4} color={headingColor}>
          Education
        </Heading>
      </CardHeader>
      <CardBody pt={2}>
        <HStack gap={8} justify="center" align="flex-start" wrap="wrap">
          {/* EAE Business School */}
          <VStack
            align="center"
            gap={2}
            p={4}
            borderRadius="md"
            bg={innerCardBg}
            boxShadow={innerCardShadow}
          >
            <Link href="https://www.eae.es/en" target="_blank">
              <Image
                src="eae_business_school_logo.png"
                alt="EAE Business School Logo"
                boxSize="100px"
                objectFit="contain"
                borderRadius="full"
              />
            </Link>
            <Text fontWeight="bold" color={boldTextColor} textAlign="center">
              EAE Business School
            </Text>
            <Text fontSize="sm" color={normalTextColor} textAlign="center">
              Master of Business Administration - MBA
            </Text>
            <Text fontSize="sm" color={normalTextColor} textAlign="center">
              Nov. 2022–Mai 2024
            </Text>
          </VStack>
          {/* Universidad Metropolitana (VE) */}
          <VStack
            align="center"
            gap={2}
            p={4}
            borderRadius="md"
            bg={innerCardBg}
            boxShadow={innerCardShadow}
          >
            <Link href="https://www.unimet.edu.ve/" target="_blank">
              <Image
                src="unimet_ve_logo.png"
                alt="Universidad Metropolitana Logo"
                boxSize="100px"
                objectFit="contain"
                borderRadius="full"
              />
            </Link>
            <Text fontWeight="bold" color={boldTextColor} textAlign="center">
              Universidad Metropolitana (VE)
            </Text>
            <Text fontSize="sm" color={normalTextColor} textAlign="center">
              Engineer's degree, Chemical Engineering
            </Text>
            <Text fontSize="sm" color={normalTextColor} textAlign="center">
              2016–2020
            </Text>
          </VStack>
        </HStack>
      </CardBody>
    </Card.Root>
  );
}

export default Education;
