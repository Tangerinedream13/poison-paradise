import { useEffect, useState } from "react";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Home({ onStartAct1, onStartAct2, onStartAct3 }) {
  const [backendStatus, setBackendStatus] = useState("checking...");
  const [story, setStory] = useState(null);
  const highlights = [
    "Data provenance",
    "Digital corroboration",
    "Algorithmic trust",
  ];

  useEffect(() => {
    fetch("/api/health")
      .then((response) => response.json())
      .then((data) => setBackendStatus(data.message))
      .catch(() => setBackendStatus("backend offline"));

    fetch("/api/story")
      .then((response) => response.json())
      .then((data) => setStory(data))
      .catch(() => setStory(null));
  }, []);

  return (
    <Box
      textAlign="center"
      py={12}
      px={6}
      maxW="6xl"
      mx="auto"
      borderWidth="1px"
      borderColor="whiteAlpha.200"
      bg="rgba(7, 12, 24, 0.78)"
      backdropFilter="blur(18px)"
      borderRadius="32px"
      boxShadow="0 24px 90px rgba(0, 0, 0, 0.45)"
    >
      <Badge colorScheme="purple" px={3} py={1} fontSize="0.9em" mb={4}>
        Interactive AI security episodes
      </Badge>
      <Heading as="h1" size="2xl" mb={4}>
        Poisoned Paradise 🌴💉
      </Heading>
      <Text fontSize="xl" mb={6} maxW="3xl" mx="auto">
        Gemma arrives at a glamorous island villa competition and discovers that
        the algorithm keeps pairing her with Rex while nudging suspicious trust
        questions into every date. What should be a steamy romance reality show
        becomes a reversal story about social engineering, fake evidence, and a
        couple using corroborated telemetry to turn the trap back on the
        attacker.
      </Text>

      <Box
        maxW="md"
        mx="auto"
        mb={8}
        borderWidth="1px"
        borderColor="whiteAlpha.200"
        borderRadius="24px"
        bg="whiteAlpha.50"
        p={5}
        textAlign="left"
      >
        <Text fontSize="sm" fontWeight="bold" mb={2}>
          Episode progress
        </Text>
        <Box
          h="8px"
          borderRadius="full"
          bg="whiteAlpha.200"
          overflow="hidden"
          mb={2}
        >
          <Box h="100%" w="33%" bg="purple.400" />
        </Box>
        <Text fontSize="sm" mt={2} color="gray.400">
          Three episodes • start with Episode 1 to begin the investigation
        </Text>
        <Text fontSize="xs" mt={3} color="gray.500">
          Backend status: {backendStatus}
        </Text>
      </Box>

      <Flex justify="center" gap={3} wrap="wrap" mb={8}>
        {highlights.map((item) => (
          <Badge key={item} colorScheme="teal" px={3} py={1} fontSize="0.9em">
            {item}
          </Badge>
        ))}
      </Flex>

      <VStack spacing={4} mb={8}>
        <Button colorScheme="teal" size="lg" onClick={onStartAct1}>
          Start Episode 1
        </Button>
        <Button colorScheme="orange" size="lg" onClick={onStartAct2}>
          Start Episode 2
        </Button>
        <Button colorScheme="pink" size="lg" onClick={onStartAct3}>
          Start Episode 3
        </Button>
      </VStack>

      <Box
        borderTop="1px solid"
        borderColor="whiteAlpha.300"
        my={6}
        mx="auto"
        w="full"
        maxW="2xl"
      />

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
        {story?.episodes?.map((episode) => (
          <Box
            key={episode.id}
            borderWidth="1px"
            borderColor="whiteAlpha.200"
            borderRadius="20px"
            px={4}
            py={4}
            minW="0"
            bg="whiteAlpha.50"
            textAlign="left"
          >
            <Text fontSize="sm" fontWeight="bold" color="whiteAlpha.800">
              Episode {episode.id}
            </Text>
            <Text fontSize="md" fontWeight="semibold" mt={1} mb={2}>
              {episode.name}
            </Text>
            <Text fontSize="xs" color="gray.300">
              {episode.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
