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
    <Box textAlign="center" py={12} px={6} maxW="4xl" mx="auto">
      <Badge colorScheme="pink" mb={3}>
        Act 3 • {act?.name || "The Reveal"}
      </Badge>
      <Heading as="h2" size="xl" mb={4}>
        {act?.name || "The final decision is about trust, not romance."}
      </Heading>
      <Text fontSize="lg" mb={8} maxW="3xl" mx="auto">
        {act?.intro || "Gemma uncovers the poisoned data feeding the show’s matchmaking system."}
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
        <Box borderWidth="1px" borderRadius="md" p={5} mb={6} textAlign="left">
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
        <Button colorScheme="pink" size="lg" onClick={onBack}>
          Return to the home screen
        </Button>
      </VStack>
    </Box>
  );
}
