import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";

export default function PlayAct3({ onBack }) {
  return (
    <Box textAlign="center" py={12} px={6}>
      <Heading as="h2" size="xl" mb={4}>
        Act 3: Toxic Reveal
      </Heading>
      <Text fontSize="lg" mb={8} maxW="3xl" mx="auto">
        Gemma discovers that false information has been inserted into the Matchmaker
        system and must decide whether Rex is responsible or being framed.
      </Text>
      <VStack spacing={4}>
        <Button colorScheme="pink" size="lg" onClick={onBack}>
          Back to Home
        </Button>
      </VStack>
    </Box>
  );
}
