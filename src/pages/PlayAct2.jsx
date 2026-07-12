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

export default function PlayAct2({ onBack, onGoAct3 }) {
  const [act, setAct] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState(null);

  useEffect(() => {
    fetch("/api/story/2")
      .then((response) => response.json())
      .then((data) => setAct(data))
      .catch(() => setAct(null));
  }, []);

  return (
    <Box textAlign="center" py={12} px={6} maxW="4xl" mx="auto">
      <Badge colorScheme="orange" mb={3}>
        Act 2 • {act?.name || "Mixed Signals"}
      </Badge>
      <Heading as="h2" size="xl" mb={4}>
        {act?.name || "A romance show should feel simple. This one doesn’t."}
      </Heading>
      <Text fontSize="lg" mb={8} maxW="3xl" mx="auto">
        {act?.intro || "Compatibility scores change overnight, leaked private messages begin to circulate, and the contestants start doubting the evidence."}
      </Text>

      <Stack spacing={3} mb={8}>
        {act?.choices?.map((choice) => (
          <Button
            key={choice.id}
            variant={selectedChoice === choice.id ? "solid" : "outline"}
            colorScheme="orange"
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
            What you learn
          </Text>
          <Text>
            {selectedChoice === "audit" && act?.lesson}
            {selectedChoice === "screenshot" && act?.lesson}
          </Text>
        </Box>
      )}

      <VStack spacing={4}>
        <Button
          colorScheme="orange"
          size="lg"
          onClick={onGoAct3}
          disabled={!selectedChoice}
        >
          Reveal the final act
        </Button>
        <Button variant="outline" size="lg" onClick={onBack}>
          Back to Home
        </Button>
      </VStack>
    </Box>
  );
}
