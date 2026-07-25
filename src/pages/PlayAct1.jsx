import { useEffect, useState } from "react";
import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function PlayAct1({ onGoHome, onGoEpisode2 }) {
  const [act, setAct] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState(null);

  useEffect(() => {
    fetch("/api/story/1")
      .then((response) => response.json())
      .then((data) => setAct(data))
      .catch(() => setAct(null));
  }, []);

  return (
    <Box minH="100vh" bg="pink.50" display="flex" justifyContent="center" p={6}>
      <Box
        w="full"
        maxW="3xl"
        bg="white"
        borderRadius="2xl"
        boxShadow="xl"
        p={6}
      >
        <Stack gap={5}>
          <HStack justify="space-between" align="start" wrap="wrap">
            <VStack align="start" spacing={2}>
              <HStack spacing={3} wrap="wrap">
                <Badge colorScheme="pink">Episode 1</Badge>
                <Badge colorScheme="purple">The Pairing</Badge>
              </HStack>

              <Heading size="lg">{act?.name || "The Perfect Match"}</Heading>

              <Text color="gray.500" fontSize="sm">
                A poisoned match keeps circling Gemma back to Rex.
              </Text>
            </VStack>

            <Button
              variant="outline"
              colorScheme="pink"
              borderRadius="full"
              onClick={onGoHome}
            >
              🏠 Return Home
            </Button>
          </HStack>

          <Stack gap={3}>
            <Text color="gray.700">
              {act?.intro ||
                "Gemma arrives at Poisoned Paradise and discovers the algorithm keeps pairing her with Rex while probing his private life through suspicious trust questions."}
            </Text>
          </Stack>

          <Box>
            <Text fontWeight="semibold" color="gray.700" mb={2}>
              Vocabulary
            </Text>

            <Box display="flex" flexWrap="wrap" gap={2}>
              <Badge colorScheme="pink" px={3} py={1} borderRadius="full">
                provenance
              </Badge>
              <Badge colorScheme="pink" px={3} py={1} borderRadius="full">
                trust
              </Badge>
              <Badge colorScheme="pink" px={3} py={1} borderRadius="full">
                manipulation
              </Badge>
            </Box>
          </Box>

          <Box
            bg="pink.50"
            borderRadius="xl"
            p={4}
            border="1px solid"
            borderColor="pink.100"
          >
            <Text fontWeight="bold" color="pink.700">
              Why this matters
            </Text>
            <Text color="gray.700">
              {selectedChoice === "profile" && act?.lesson}
              {selectedChoice === "timing" && act?.lesson}
              {!selectedChoice &&
                "Choose a path to see how a poisoned match can look convincing while still being traceable back to its source."}
            </Text>
          </Box>

          <Stack gap={3}>
            <Text fontWeight="semibold" color="gray.700">
              What should Gemma do next?
            </Text>

            {act?.choices?.map((choice) => (
              <Button
                key={choice.id}
                variant={selectedChoice === choice.id ? "solid" : "outline"}
                colorScheme="pink"
                onClick={() => setSelectedChoice(choice.id)}
                textAlign="left"
                justifyContent="flex-start"
                px={5}
                py={4}
                height="auto"
                whiteSpace="normal"
              >
                <Box textAlign="left">
                  <Text fontWeight="bold">{choice.title}</Text>
                  <Text fontSize="sm" mt={1} color="gray.500">
                    {choice.detail}
                  </Text>
                </Box>
              </Button>
            ))}
          </Stack>

          <VStack spacing={4}>
            <Button
              colorScheme="purple"
              size="lg"
              onClick={onGoEpisode2}
              disabled={!selectedChoice}
            >
              Continue to Episode 2
            </Button>
          </VStack>
        </Stack>
      </Box>
    </Box>
  );
}
