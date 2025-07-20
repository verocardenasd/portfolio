import { Box, HStack } from "@chakra-ui/layout";
import { VStack, Container, Tabs, Icon, Text } from "@chakra-ui/react";
import Headline from "../Headline/Headline";
import ProfessionalExperience from "../ProfessionalExperience/ProfessionalExperience";
import GreetingText from "../GreetingText/GreetingText";
import TechStack from "../TechStack/TechStack";
import Education from "../Education/Education";
import GitHubRepos from "../GithubRepos/GithubRepos";
import {
  FaBriefcase,
  FaGithub,
  FaGraduationCap,
  FaHeart,
} from "react-icons/fa";
import SocialMedia from "../SocialMedia/SocialMedia";
import { useColorModeValue } from "../ui/color-mode";
import ContactMe from "../ContactMe/ContactMe";
import Hobby from "../Hobby/Hobby";
import Footer from "../Footer/Footer";

const AboutMe = () => {
  const containerBg = useColorModeValue(
    "linear-gradient(130deg,rgba(252, 217, 237, 1) 0%, rgba(217, 231, 255, 1) 82%)",
    "linear-gradient(130deg, #182848 0%, #4b6cb7 100%)"
  );

  const containerColor = useColorModeValue("gray.800", "gray.200");
  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <Container
      maxW="container.md"
      py={10}
      px={6}
      bg={containerBg}
      color={containerColor}
      borderRadius="xl"
      boxShadow="xl"
      my={10}
      position="relative"
    >
      <Box position="absolute" top="0.1" left="0.1" zIndex="tooltip">
        <ContactMe />
      </Box>
      <SocialMedia />
      <VStack gap={8} align="center" marginTop={5}>
        <HStack gap={50} align="center" justifyContent="center">
          <Headline />
          <GreetingText />
        </HStack>

        <TechStack />

        <Tabs.Root
          variant="enclosed"
          w="100%"
          colorScheme="teal"
          defaultValue={"ProfExp"}
        >
          <Tabs.List gap={1}>
            <Tabs.Trigger
              value="ProfExp"
              bg={cardBg}
              _selected={{
                color: useColorModeValue("teal.600", "teal.300"),
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
            >
              {" "}
              <HStack spacing={2}>
                <Icon as={FaBriefcase} />
                <Text>Professional Experience</Text>
              </HStack>
            </Tabs.Trigger>
            <Tabs.Trigger
              value="Education"
              bg={cardBg}
              _selected={{
                color: useColorModeValue("teal.600", "teal.300"),
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
            >
              {" "}
              <HStack spacing={2}>
                <Icon as={FaGraduationCap} />
                <Text>Education</Text>
              </HStack>
            </Tabs.Trigger>
            <Tabs.Trigger
              value="Hobby"
              bg={cardBg}
              _selected={{
                color: useColorModeValue("teal.600", "teal.300"),
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
            >
              {" "}
              <HStack spacing={2}>
                <Icon as={FaHeart} />
                <Text>Hobby</Text>
              </HStack>
            </Tabs.Trigger>
            <Tabs.Trigger
              value="GitHubRepos"
              bg={cardBg}
              _selected={{
                color: useColorModeValue("teal.600", "teal.300"),
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
            >
              {" "}
              <HStack spacing={2}>
                <Icon as={FaGithub} />
                <Text>GitHub Repos</Text>
              </HStack>
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="ProfExp">
            <ProfessionalExperience />
          </Tabs.Content>
          <Tabs.Content value="Education">
            <Education />
          </Tabs.Content>

          <Tabs.Content value="Hobby">
            <Hobby />
          </Tabs.Content>
          <Tabs.Content value="GitHubRepos">
            <GitHubRepos />
          </Tabs.Content>
        </Tabs.Root>

        <Footer />
      </VStack>
    </Container>
  );
};

export default AboutMe;
