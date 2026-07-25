import { useEffect, useState } from "react";
import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

function EpisodeCard({
  episodeLabel,
  title,
  subtitle,
  description,
  themes,
  onClick,
  isDisabled = false,
  buttonText,
}) {
  const themeList = Array.isArray(themes)
    ? themes
    : String(themes)
        .split(",")
        .map((theme) => theme.trim())
        .filter(Boolean);

  return (
    <Box
      bg="white"
      borderRadius="2xl"
      boxShadow="xl"
      overflow="hidden"
      transition="all 0.2s ease"
      h="100%"
      display="flex"
      flexDirection="column"
      _hover={{
        transform: isDisabled ? "none" : "translateY(-6px)",
        boxShadow: isDisabled ? "xl" : "2xl",
      }}
    >
      <Box position="relative" bg="white">
        <Box
          h={{ base: "180px", md: "210px" }}
          bg="linear-gradient(135deg, #fff1f6 0%, #fff8fb 48%, #fef2f2 100%)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          px={6}
          textAlign="center"
        >
          <VStack spacing={1}>
            <Text fontSize="sm" color="pink.600" fontWeight="semibold">
              {episodeLabel}
            </Text>
            <Heading size="lg" color="gray.800">
              {title}
            </Heading>
            <Text color="pink.600" fontWeight="semibold">
              {subtitle}
            </Text>
          </VStack>
        </Box>
        <Badge
          position="absolute"
          top={4}
          left={4}
          bg="pink.500"
          color="white"
          px={3}
          py={1}
          borderRadius="full"
          boxShadow="md"
          textTransform="none"
        >
          {episodeLabel}
        </Badge>
      </Box>

      <VStack align="start" spacing={4} p={6} flex="1" w="full">
        <Box flex="1" w="full">
          <Text color="gray.600">{description}</Text>
        </Box>

        <Box w="full">
          <Text fontWeight="semibold" fontSize="sm" color="gray.600" mb={2}>
            Themes:
          </Text>

          <Wrap spacing={2}>
            {themeList.map((theme) => (
              <WrapItem key={theme}>
                <Badge
                  bg="pink.100"
                  color="pink.700"
                  px={2}
                  py={0.5}
                  borderRadius="full"
                  textTransform="none"
                  fontSize="0.7rem"
                  fontWeight="medium"
                >
                  {theme}
                </Badge>
              </WrapItem>
            ))}
          </Wrap>
        </Box>

        <Button
          bg="pink.500"
          color="white"
          _hover={{ bg: "pink.600" }}
          _active={{ bg: "pink.700" }}
          onClick={onClick}
          isDisabled={isDisabled}
          alignSelf="start"
        >
          {buttonText}
        </Button>
      </VStack>
    </Box>
  );
}

export default function Home({
  onStartEpisode1,
  onStartEpisode2,
  onStartEpisode3,
}) {
  const [story, setStory] = useState(null);

  useEffect(() => {
    fetch("/api/story")
      .then((response) => response.json())
      .then((data) => setStory(data))
      .catch(() => setStory(null));
  }, []);

  return (
    <Box bg="pink.50" px={6} py={{ base: 8, md: 12 }} minH="100vh">
      <Container maxW="6xl">
        <VStack spacing={10}>
          <Box
            w="full"
            maxW="4xl"
            mx="auto"
            bg="white"
            borderRadius="3xl"
            boxShadow="xl"
            border="1px solid"
            borderColor="pink.100"
            px={{ base: 6, md: 10 }}
            py={{ base: 8, md: 10 }}
          >
            <VStack spacing={5} textAlign="center">
              <Image
                src="/images/poison-paradise-hero"
                alt="Poisoned Paradise homepage preview"
                w="100%"
                maxW={{ base: "280px", md: "420px" }}
                h={{ base: "180px", md: "260px" }}
                objectFit="contain"
                objectPosition="center center"
              />

              <Badge colorScheme="pink" px={4} py={1.5} rounded="full">
                Romance • Deception • Social Engineering
              </Badge>

              <Heading
                fontSize={{ base: "4xl", md: "6xl" }}
                color="pink.700"
                lineHeight="shorter"
              >
                Poisoned Paradise
              </Heading>

              <Text
                fontSize={{ base: "lg", md: "2xl" }}
                color="gray.700"
                maxW="3xl"
              >
                An episode-based AI security story about poisoned matches,
                social engineering, and choosing trust only after you verify the
                evidence.
              </Text>

              <Text color="gray.600" maxW="2xl">
                Gemma and Rex are pulled into a manipulated dating algorithm,
                then force the attacker to rely on traceable decoys,
                corroborated evidence, and monitored telemetry instead of
                deception.
              </Text>
            </VStack>
          </Box>

          <VStack spacing={4} textAlign="center" maxW="2xl">
            <Heading size="xl" color="pink.700">
              How It Works
            </Heading>
            <Text color="gray.600">
              Play through each episode, make choices, and click highlighted
              terms to learn how poisoned data, trust manipulation, and audit
              trails work in context.
            </Text>
          </VStack>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={8}
            w="full"
            alignItems="stretch"
          >
            <EpisodeCard
              episodeLabel="Episode 1"
              title="The Perfect Match"
              subtitle="The Pairing"
              description="Gemma keeps getting matched with Rex as the algorithm pushes suspiciously specific trust questions about his work, passwords, and security habits."
              themes="data poisoning, provenance, trust"
              onClick={onStartEpisode1}
              buttonText="Play Episode 1"
            />

            <EpisodeCard
              episodeLabel="Episode 2"
              title="Trouble in Paradise"
              subtitle="Countermeasure"
              description="Gemma realizes the romance is a social-engineering operation, tells Rex the truth, and they start feeding the operative fake credentials and decoy files."
              themes="social engineering, honeytokens, traceability"
              onClick={onStartEpisode2}
              buttonText="Play Episode 2"
            />

            <EpisodeCard
              episodeLabel="Episode 3"
              title="The Final Recalculation"
              subtitle="Damage Control"
              description="Cyber Steel’s monitoring exposes the attack path, and Gemma and Rex reveal they used the poisoned match to expose the operative instead of each other."
              themes="monitoring, corroboration, trust repair"
              onClick={onStartEpisode3}
              isDisabled={!onStartEpisode3}
              buttonText={onStartEpisode3 ? "Play Episode 3" : "Coming Soon"}
            />
          </SimpleGrid>

          <Box
            w="full"
            bg="white"
            borderRadius="2xl"
            boxShadow="lg"
            p={6}
            mt={{ base: 4, md: 8 }}
          >
            <VStack align="start" spacing={3}>
              <Heading size="md" color="pink.700">
                Learning Structure
              </Heading>
              <Text color="gray.700">
                Poisoned Paradise uses story-driven choices, red-flag
                recognition, and click-to-define cybersecurity vocabulary to
                make social engineering easier to recognize.
              </Text>
              <Text color="gray.600">
                The goal is to make cybersecurity awareness memorable,
                approachable, and useful in real life.
              </Text>
            </VStack>
          </Box>

          <Box
            w="full"
            bg="white"
            borderRadius="2xl"
            boxShadow="lg"
            p={6}
            border="1px solid"
            borderColor="pink.100"
          >
            <VStack align="start" spacing={4}>
              <Heading size="md" color="pink.700">
                Academic Foundation
              </Heading>

              <Text color="gray.700">
                Poisoned Paradise is grounded in research on social engineering,
                phishing awareness, romance scams, and the human factors that
                influence cybersecurity decisions. These sources shape the
                story, vocabulary, red flags, and interactive choices throughout
                the project.
              </Text>

              <Text color="gray.600">
                Akeiber explains how modern social engineering attacks combine
                technical tools with behavioral tactics such as phishing,
                impersonation, and manipulation. This supports the project’s
                focus on how attackers exploit psychology, trust, and emotion
                rather than relying only on technical vulnerabilities.
              </Text>

              <Text color="gray.600">
                Hatfield provides a framework for understanding how social
                engineering has evolved as a cybersecurity concept. This source
                helped guide the project’s use of terms such as phishing, scams,
                manipulation, and deception while showing why these attacks are
                effective against real people and organizations.
              </Text>

              <Text color="gray.600">
                Iovine’s article on romance scams connects directly to the
                romance-themed structure of Poisoned Paradise. It explains how
                scammers build emotional trust through dating apps and social
                media before asking for money, access, or personal information.
                This helped shape the project’s focus on charm, attachment, and
                warning signs.
              </Text>

              <Text color="gray.600">
                Wang, Sun, and Zhu provide a strong definition of social
                engineering and emphasize the role of human factors in
                cybersecurity. Their work helped inform the project’s vocabulary
                and its focus on how attackers exploit trust, authority,
                curiosity, deception, and emotional responses.
              </Text>
            </VStack>
          </Box>

          <Box
            w="full"
            bg="white"
            borderRadius="2xl"
            boxShadow="lg"
            p={6}
            border="1px solid"
            borderColor="pink.100"
          >
            <VStack align="start" spacing={3}>
              <Heading size="md" color="pink.700">
                Episode Overview
              </Heading>
              <Text color="gray.700">
                The three episodes follow a poisoned match, a deliberate counter
                deception, and a final recalculation that exposes the operative.
              </Text>
              <Text color="gray.600">
                Each episode keeps the drama of a reality dating show while
                teaching learners to verify provenance, preserve evidence, and
                use corroborated signals before trusting what looks convincing.
              </Text>
            </VStack>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} w="full">
            {story?.episodes?.map((episode) => (
              <Box
                key={episode.id}
                borderWidth="1px"
                borderRadius="md"
                px={4}
                py={3}
                bg="white"
                borderColor="pink.100"
                textAlign="left"
              >
                <Text fontWeight="bold" color="pink.700">
                  Episode {episode.id}
                </Text>
                <Text fontSize="sm" fontWeight="semibold" color="gray.700">
                  {episode.name}
                </Text>
                <Text fontSize="xs" mt={1} color="gray.500">
                  {episode.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
