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

export default function PlayAct2({ onBack, onGoEpisode3 }) {
  const [act, setAct] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState(null);

  useEffect(() => {
    fetch("/api/story/2")
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
                <Badge colorScheme="pink">Episode 2</Badge>
                <Badge colorScheme="purple">Situationship</Badge>
              </HStack>

              <Heading size="lg">{act?.name || "Trouble in Paradise"}</Heading>

              <Text color="gray.500" fontSize="sm">
                Gemma and Rex decide to feed the operative believable decoys.
              </Text>
            </VStack>

            <Button
              variant="outline"
              colorScheme="pink"
              borderRadius="full"
              onClick={onBack}
            >
              🏠 Return Home
            </Button>
          </HStack>

          <Stack gap={3}>
            <Text color="gray.700">
              {act?.intro ||
                "Gemma realizes the dating game is a social-engineering trap, tells Rex the truth, and they start feeding the operative fake credentials and decoy files."}
            </Text>
          </Stack>

          <Box>
            <Text fontWeight="semibold" color="gray.700" mb={2}>
              Vocabulary
            </Text>

            <Box display="flex" flexWrap="wrap" gap={2}>
              <Badge colorScheme="pink" px={3} py={1} borderRadius="full">
                social engineering
              </Badge>
              <Badge colorScheme="pink" px={3} py={1} borderRadius="full">
                honeytokens
              </Badge>
              <Badge colorScheme="pink" px={3} py={1} borderRadius="full">
                traceability
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
              What you learn
            </Text>
            <Text color="gray.700">
              {selectedChoice === "audit" && act?.lesson}
              {selectedChoice === "screenshot" && act?.lesson}
              {!selectedChoice &&
                "Traceable bait can expose an attacker when the information looks useful enough to be acted on."}
            </Text>
          </Box>

          <Stack gap={3}>
            <Text fontWeight="semibold" color="gray.700">
              How should they counter the attack?
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
              onClick={onGoEpisode3}
              disabled={!selectedChoice}
            >
              Reveal Episode 3
            </Button>
          </VStack>
        </Stack>
      </Box>
    </Box>
  );
}
