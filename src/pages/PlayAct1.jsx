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
    id: "source",
    title: "Check where the profile came from",
    detail:
      "You trace the profile back to an unverified upload and realize the bio was edited after the episode began.",
  },
  {
    id: "timing",
    title: "Compare timestamps on the screenshots",
    detail:
      "The evidence shifts by the minute, which suggests someone is swapping context in real time.",
  },
  {
    id: "trust",
    title: "Trust the matchmaker and move on",
    detail:
      "The system stays confident, but that confidence is exactly what makes the manipulation harder to spot.",
  },
];

export default function PlayAct1({ onGoHome, onGoAct2 }) {
  const [selectedChoice, setSelectedChoice] = useState(null);

  return (
    <Box textAlign="center" py={12} px={6} maxW="4xl" mx="auto">
      <Badge colorScheme="teal" mb={3}>
        Act 1 • Second Chance
      </Badge>
      <Heading as="h2" size="xl" mb={4}>
        The profile looks right until it doesn’t.
      </Heading>
      <Text fontSize="lg" mb={8} maxW="3xl" mx="auto">
        Gemma arrives on Toxic Match and finds Rex paired with her again. The
        matchmaker says they are 98% compatible, but his account details feel
        like they have been rearranged to create a convincing lie.
      </Text>

      <Stack spacing={3} mb={8}>
        {choices.map((choice) => (
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
            {selectedChoice === "source" &&
              "You uncover the first clue: the profile changed after the episode started, which makes the system’s confidence suspect."}
            {selectedChoice === "timing" &&
              "You spot inconsistent timestamps and begin to see how evidence can be edited to fit a story."}
            {selectedChoice === "trust" &&
              "You learn that trusting the system without verification is exactly how poisoned evidence slips through."}
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
