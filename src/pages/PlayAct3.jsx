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

export default function PlayAct3({ onBack }) {
  const [act, setAct] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState(null);

  useEffect(() => {
    fetch("/api/story/3")
      .then((response) => response.json())
      .then((data) => setAct(data))
      .catch(() => setAct(null));
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
      <Badge colorScheme="pink" mb={3}>
        Episode 3 • {act?.name || "The Reveal"}
      </Badge>
      <Heading as="h2" size="xl" mb={4}>
        {act?.name || "The final recalculation exposes the operative."}
      </Heading>
      <Text fontSize="lg" mb={8} maxW="3xl" mx="auto">
        {act?.intro ||
          "The fake credentials trigger Cyber Steel’s monitoring system, and Gemma and Rex reveal they were using the match to expose the operative instead of each other."}
      </Text>

      <Stack spacing={3} mb={8}>
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
        <Box
          borderWidth="1px"
          borderColor="whiteAlpha.200"
          borderRadius="24px"
          p={5}
          mb={6}
          textAlign="left"
          bg="whiteAlpha.50"
        >
          <Text fontWeight="bold" mb={2}>
            Final takeaway
          </Text>
          <Text>
            {selectedChoice === "investigate" && act?.lesson}
            {selectedChoice === "report" && act?.lesson}
          </Text>
        </Box>
      )}

      <VStack spacing={4}>
        <Button
          colorScheme="pink"
          size="lg"
          onClick={onBack}
          w="full"
          maxW="320px"
        >
          Return to the home screen
        </Button>
      </VStack>
    </Box>
  );
}
