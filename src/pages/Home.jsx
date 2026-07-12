import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Home({ onStartAct1, onStartAct2, onStartAct3 }) {
  const highlights = [
    "Data poisoning",
    "Digital evidence",
    "Algorithmic trust",
  ];

  return (
    <Box textAlign="center" py={12} px={6} maxW="4xl" mx="auto">
      <Badge colorScheme="purple" px={3} py={1} fontSize="0.9em" mb={4}>
        Interactive AI security story
      </Badge>
      <Heading as="h1" size="2xl" mb={4}>
        Toxic Match ☣️💘
      </Heading>
      <Text fontSize="xl" mb={6} maxW="3xl" mx="auto">
        Gemma and Rex are back in a reality-show drama where the matchmaker is
        feeding on manipulated signals, suspicious screenshots, and evidence
        that only looks trustworthy at first glance.
      </Text>

      <Flex justify="center" gap={3} wrap="wrap" mb={8}>
        {highlights.map((item) => (
          <Badge key={item} colorScheme="teal" px={3} py={1} fontSize="0.9em">
            {item}
          </Badge>
        ))}
      </Flex>

      <VStack spacing={4} mb={8}>
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

      <Box
        borderTop="1px solid"
        borderColor="whiteAlpha.300"
        my={6}
        mx="auto"
        w="full"
        maxW="2xl"
      />

      <HStack justify="center" spacing={4} flexWrap="wrap">
        <Box borderWidth="1px" borderRadius="md" px={4} py={3} minW="180px">
          <Text fontWeight="bold">Act 1</Text>
          <Text fontSize="sm">Question the profile</Text>
        </Box>
        <Box borderWidth="1px" borderRadius="md" px={4} py={3} minW="180px">
          <Text fontWeight="bold">Act 2</Text>
          <Text fontSize="sm">Trace the tampered evidence</Text>
        </Box>
        <Box borderWidth="1px" borderRadius="md" px={4} py={3} minW="180px">
          <Text fontWeight="bold">Act 3</Text>
          <Text fontSize="sm">Verify before you trust</Text>
        </Box>
      </HStack>
    </Box>
  );
}
