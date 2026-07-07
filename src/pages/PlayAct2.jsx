import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";

export default function PlayAct2({ onBack, onGoAct3 }) {
  return (
    <Box textAlign="center" py={12} px={6}>
      <Heading as="h2" size="xl" mb={4}>
        Act 2: Mixed Signals
      </Heading>
      <Text fontSize="lg" mb={8} maxW="3xl" mx="auto">
        Compatibility scores begin changing, private conversations are leaked,
        and manipulated evidence turns contestants against one another.
      </Text>
      <VStack spacing={4}>
        <Button colorScheme="orange" size="lg" onClick={onGoAct3}>
          Move to Act 3
        </Button>
        <Button variant="outline" size="lg" onClick={onBack}>
          Back to Home
        </Button>
      </VStack>
    </Box>
  );
}
