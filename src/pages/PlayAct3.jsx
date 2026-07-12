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
    id: "frame",
    title: "Blame Rex and move on",
    detail:
      "This is the easiest answer, but it ignores the evidence trail and leaves the poisoning in place.",
  },
  {
    id: "investigate",
    title: "Trace the poisoned data back to its source",
    detail:
      "You identify the manipulated records and realize the system was fed false information before it ever made a recommendation.",
  },
  {
    id: "report",
    title: "Document everything and report the anomaly",
    detail:
      "This is the safest move. It protects the investigation and helps prevent the same manipulation from being repeated.",
  },
];

export default function PlayAct3({ onBack }) {
  const [selectedChoice, setSelectedChoice] = useState(null);

  return (
    <Box textAlign="center" py={12} px={6} maxW="4xl" mx="auto">
      <Badge colorScheme="pink" mb={3}>
        Act 3 • Toxic Reveal
      </Badge>
      <Heading as="h2" size="xl" mb={4}>
        The final decision is about trust, not romance.
      </Heading>
      <Text fontSize="lg" mb={8} maxW="3xl" mx="auto">
        Gemma uncovers the poisoned data feeding the Matchmaker. The question is
        no longer whether the system is wrong, but how to respond when the
        evidence is manipulated and the story is designed to make you react too
        quickly.
      </Text>

      <Stack spacing={3} mb={8}>
        {choices.map((choice) => (
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
            {selectedChoice === "frame" &&
              "A fast accusation may feel satisfying, but it leaves the poisoned source untouched and the system vulnerable to more manipulation."}
            {selectedChoice === "investigate" &&
              "You choose the safer path: verify the source, inspect the data, and learn why the recommendation was built on bad information."}
            {selectedChoice === "report" &&
              "You protect the integrity of the investigation by documenting what changed and making sure the evidence can be reviewed later."}
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
