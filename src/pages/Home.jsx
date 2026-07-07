import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";

export default function Home({ onStartAct1, onStartAct2, onStartAct3 }) {
  return (
    <Box textAlign="center" py={12} px={6}>
      <Heading as="h1" size="2xl" mb={4}>
        Toxic Match ☣️💘
      </Heading>
      <Text fontSize="xl" mb={8} maxW="3xl" mx="auto">
        A story-driven AI security learning experience that teaches data poisoning,
        evidence verification, and algorithmic trust through an interactive
        narrative.
      </Text>
      <VStack spacing={4}>
        <Button colorScheme="teal" size="lg" onClick={onStartAct1}>
          Start Act 1
        </Button>
        <Button colorScheme="orange" size="lg" onClick={onStartAct2}>
          Start Act 2
        </Button>
        <Button colorScheme="pink" size="lg" onClick={onStartAct3}>
          Start Act 3
        </Button>
      </VStack>
    </Box>
  );
}
