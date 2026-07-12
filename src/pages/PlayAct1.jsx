import { useEffect, useState } from "react";
import {
  Badge,
  Box,
  Button,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function PlayAct1({ onGoHome, onGoAct2 }) {
  const [act, setAct] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState(null);

  useEffect(() => {
    fetch("/api/story/1")
      .then((response) => response.json())
      .then((data) => setAct(data))
      .catch(() => setAct(null));
  }, []);

  return (
    <Box textAlign="center" py={12} px={6} maxW="4xl" mx="auto">
      <Badge colorScheme="teal" mb={3}>
        Act 1 • {act?.name || "The Pairing"}
      </Badge>
      <Heading as="h2" size="xl" mb={4}>
        {act?.name || "The algorithm says they’re perfect for each other."}
      </Heading>
      <Text fontSize="lg" mb={8} maxW="3xl" mx="auto">
        {act?.intro ||
          "Gemma arrives at Perfect Match and discovers the algorithm has paired her with Rex."}
      </Text>

      <Stack spacing={3} mb={8}>
        {act?.choices?.map((choice) => (
          <Button
            key={choice.id}
            variant={selectedChoice === choice.id ? "solid" : "outline"}
            colorScheme="teal"
            onClick={() => setSelectedChoice(choice.id)}
            textAlign="left"
            justifyContent="flex-start"
            px={5}
            py={4}
            height="auto"
          >
            <Box textAlign="left">
              <Text fontWeight="bold">{choice.title}</Text>
              <Text fontSize="sm" mt={1} color="gray.400">
                {choice.detail}
              </Text>
            </Box>
          </Button>
        ))}
      </Stack>

      {selectedChoice && (
        <Box borderWidth="1px" borderRadius="md" p={5} mb={6} textAlign="left">
          <Text fontWeight="bold" mb={2}>
            Why this matters
          </Text>
          <Text>
            {selectedChoice === "profile" && act?.lesson}
            {selectedChoice === "timing" && act?.lesson}
          </Text>
        </Box>
      )}

      <VStack spacing={4}>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={onGoAct2}
          disabled={!selectedChoice}
        >
          Continue to Act 2
        </Button>
        <Button variant="outline" size="lg" onClick={onGoHome}>
          Back to Home
        </Button>
      </VStack>
    </Box>
  );
}
