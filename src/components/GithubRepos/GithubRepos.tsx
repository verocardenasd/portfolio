import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Link,
  Tag,
  TagLabel,
  Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { GoGitBranch } from "react-icons/go";
import { useColorModeValue } from "../ui/color-mode";

const MotionBox = motion(Box);

const getLanguageColor = (language: string) => {
  switch (language) {
    case "TypeScript":
      return "blue.400";
    case "JavaScript":
      return "yellow.400";
    case "React":
      return "cyan.400";
    case "CSS":
      return "purple.400";
    case "HTML":
      return "orange.400";
    case "PHP":
      return "purple.400";
    default:
      return "gray.400";
  }
};

function GitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const cardRootBg = useColorModeValue("white", "gray.700");
  const headingColor = useColorModeValue("teal.700", "teal.300");
  const repoCardBg = useColorModeValue("gray.100", "gray.800");
  const repoCardShadow = useColorModeValue("md", "dark-lg");
  const repoNameColor = useColorModeValue("gray.800", "gray.100");
  const repoDescriptionColor = useColorModeValue("gray.600", "gray.300");
  const iconAndCountColor = useColorModeValue("gray.500", "gray.400");
  const lastUpdatedColor = useColorModeValue("gray.500", "gray.500");
  const hoverRepoNameColor = useColorModeValue("teal.600", "teal.300");
  const normalTextColor = useColorModeValue("gray.600", "gray.400");

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.github.com/users/Jonas-dev1812/repos"
        );
        if (!response.ok) {
          throw new Error(`GitHub API Fehler: ${response.statusText}`);
        }
        const data = await response.json();
        setRepos(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return <Text color={normalTextColor}>Lade Repositories...</Text>;
  }

  if (error) {
    return <Text color="red.500">Error on loading Repositories: {error}</Text>;
  }

  return (
    <Card.Root w="100%" bg={cardRootBg} borderRadius="lg" boxShadow="dark-lg">
      <CardHeader pb={0}>
        <Heading as="h2" size="2xl" mb={4} color={headingColor}>
          My GitHub Repositories
        </Heading>
      </CardHeader>
      <CardBody pt={2}>
        <VStack gap={6} align="stretch">
          {repos.map((repo: any) => (
            <MotionBox
              key={repo.id}
              initial={{
                opacity: 0,
                y: 20,
                "--hover-opacity": 0,
              }}
              onClick={() => window.open(repo.html_url, "_blank")}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                scale: { duration: 0.2, ease: "easeOut" },
                boxShadow: { duration: 0.2, ease: "easeOut" },
                "--hover-opacity": { duration: 0.3, ease: "easeOut" },
              }}
              backgroundColor={repoCardBg}
              borderRadius="md"
              p={4}
              boxShadow={repoCardShadow}
              overflow="hidden"
              position="relative"
              whileHover={{
                scale: 1.03,
                boxShadow: `0 0 15px ${getLanguageColor(
                  repo.language
                )}, 0 0 25px ${getLanguageColor(repo.language)}`,
                "--hover-opacity": 0.5,
                cursor: "pointer",
              }}
              _after={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "md",
                backgroundColor: getLanguageColor(repo.language),
                opacity: "var(--hover-opacity)",
                zIndex: "base",
              }}
            >
              <Box position="relative" zIndex="overlay">
                <Link
                  href={repo.html_url}
                  target="_blank"
                  _hover={{ textDecoration: "none" }}
                >
                  <Heading
                    as="h3"
                    size="md"
                    color={repoNameColor}
                    mb={2}
                    _hover={{ color: hoverRepoNameColor }}
                  >
                    {repo.name}
                  </Heading>
                </Link>
                <Text fontSize="sm" color={repoDescriptionColor} mb={3}>
                  {repo.description}
                </Text>
                <HStack justify="space-between" align="center" wrap="wrap">
                  <HStack gap={4}>
                    <Tag.Root
                      size="sm"
                      variant="solid"
                      bg={getLanguageColor(repo.language)}
                    >
                      <TagLabel>{repo.language}</TagLabel>
                    </Tag.Root>
                    <HStack gap={1} color={iconAndCountColor}>
                      <Icon as={FaStar} />
                      <Text fontSize="sm">{repo.stargazers_count}</Text>
                    </HStack>
                    <HStack gap={1} color={iconAndCountColor}>
                      <Icon as={GoGitBranch} />
                      <Text fontSize="sm">{repo.forks_count}</Text>
                    </HStack>
                  </HStack>
                  <Text fontSize="xs" color={lastUpdatedColor}>
                    Last updated:{" "}
                    {new Date(repo.updated_at).toLocaleDateString()}
                  </Text>
                </HStack>
              </Box>
            </MotionBox>
          ))}
        </VStack>
      </CardBody>
    </Card.Root>
  );
}

export default GitHubRepos;
