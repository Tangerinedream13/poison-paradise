import { useEffect, useState } from "react";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Home({ onStartAct1, onStartAct2, onStartAct3 }) {
  const [backendStatus, setBackendStatus] = useState("checking...");
  const [story, setStory] = useState(null);
  const highlights = [
    "Data poisoning",
    "Digital evidence",
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
    <Box textAlign="center" py={12} px={6} maxW="4xl" mx="auto">
      <Badge colorScheme="purple" px={3} py={1} fontSize="0.9em" mb={4}>
        Interactive AI security story
      </Badge>
      <Heading as="h1" size="2xl" mb={4}>
        Perfect Match ☣️💘
      </Heading>
      <Text fontSize="xl" mb={6} maxW="3xl" mx="auto">
        Gemma arrives on a glamorous dating competition and discovers that the
        algorithm has paired her with Rex. What should be a romance reality show
        becomes a mystery about manipulated signals, suspicious evidence, and a
        system that may be feeding on bad data.
      </Text>

      <Box maxW="md" mx="auto" mb={8}>
        <Text fontSize="sm" fontWeight="bold" mb={2}>
          Story progress
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
          Three acts • start with Act 1 to begin the investigation
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
          Start Act 1
        </Button>
        <Button colorScheme="orange" size="lg" onClick={onStartAct2}>
          Start Act 2
        </Button>
        <Button colorScheme="pink" size="lg" onClick={onStartAct3}>
          Start Act 3
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

      <HStack justify="center" spacing={4} flexWrap="wrap">
        {story?.acts?.map((act) => (
          <Box
            key={act.id}
            borderWidth="1px"
            borderRadius="md"
            px={4}
            py={3}
            minW="180px"
          >
            <Text fontWeight="bold">Act {act.id}</Text>
            <Text fontSize="sm">{act.name}</Text>
            <Text fontSize="xs" mt={1} color="gray.400">
              {act.description}
            </Text>
          </Box>
        ))}
      </HStack>
    </Box>
  );
}
