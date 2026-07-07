import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";

export default function PlayAct1({ onGoHome, onGoAct2 }) {
  return (
    <Box textAlign="center" py={12} px={6}>
      <Heading as="h2" size="xl" mb={4}>
        Act 1: Second Chance
      </Heading>
      <Text fontSize="lg" mb={8} maxW="3xl" mx="auto">
        Gemma arrives on Toxic Match and discovers that the Matchmaker has paired
        her with Rex, the suspicious romantic interest from Sexy-Phish.
      </Text>
      <VStack spacing={4}>
        <Button colorScheme="teal" size="lg" onClick={onGoAct2}>
          Move to Act 2
        </Button>
        <Button variant="outline" size="lg" onClick={onGoHome}>
          Back to Home
        </Button>
      </VStack>
    </Box>
  );
}
