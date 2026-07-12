import { useState } from "react";
import {
  Badge,
  Box,
  Button,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const choices = [
  {
    id: "audit",
    title: "Ask for the audit trail",
    detail:
      "The data provenance is the missing link. A real audit trail reveals whether evidence was altered.",
  },
  {
    id: "screenshot",
    title: "Verify the leaked screenshot independently",
    detail:
      "You cross-check the image with a second source and find the message is clipped to support a false narrative.",
  },
  {
    id: "panic",
    title: "Let the drama decide for you",
    detail:
      "The system keeps escalating the conflict, but panic is the perfect environment for bad decisions.",
  },
];

export default function PlayAct2({ onBack, onGoAct3 }) {
  const [selectedChoice, setSelectedChoice] = useState(null);

  return (
    <Box textAlign="center" py={12} px={6} maxW="4xl" mx="auto">
      <Badge colorScheme="orange" mb={3}>
        Act 2 • Mixed Signals
      </Badge>
      <Heading as="h2" size="xl" mb={4}>
        Every clue seems to point in a different direction.
      </Heading>
      <Text fontSize="lg" mb={8} maxW="3xl" mx="auto">
        Compatibility scores have started shifting, leaked private messages are
        circulating, and the contestants are turning on one another. The next
        step is to determine whether a human attacker or a compromised system is
        causing the chaos.
      </Text>

      <Stack spacing={3} mb={8}>
        {choices.map((choice) => (
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
            {selectedChoice === "audit" &&
              "You realize the best defense is to follow the trail of the data itself, not the drama around it."}
            {selectedChoice === "screenshot" &&
              "The screenshot is incomplete and misleading, proving how easy it is to weaponize context."}
            {selectedChoice === "panic" &&
              "You see the danger of letting emotion override verification. The system is not the only thing that can be manipulated."}
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
