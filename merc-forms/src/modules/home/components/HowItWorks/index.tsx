import {
  AspectRatio,
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export function HowItWorks() {
  return (
    <Container
      id="how_it_works"
      height="100%"
      p={{ base: 3, lg: 16 }}
      maxW={"full"}
      bgImage={"url(assets/features/feature1.svg)"}
      bgSize="contain"
      bgPosition="center"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack
        maxW={{ base: "full", lg: "50vw" }}
        align={"center"}
        alignItems="center"
        justifyContent="center"
      >
        <Box flex="1" py={5} textAlign={"center"}>
          <Heading fontWeight={500}>How does MercForms works?</Heading>
        </Box>
        <Center
          bg={useColorModeValue("#dbceff", "purple.200")}
          rounded="2xl"
          shadow="lg"
          p={4}
          w={"full"}
        >
          <AspectRatio w={"full"} ratio={16 / 9}>
            <iframe
              src="https://www.loom.com/embed/ed4946ae030c46b99486dc32d35b7ddf?sid=e4f075a7-59a5-4eed-a68a-ceae062eea65?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
              allowFullScreen
              title="MercForms demo video"
              allow="autoplay; encrypted-media"
              style={{ borderRadius: "16px" }}
            />
          </AspectRatio>
        </Center>
        <Box flex="1" py={5} textAlign={"center"} px={50}>
          <Text fontSize={{ base: 15, lg: 25 }}>
            MercForms simplifies the form creation process. Choose from various
            question types, effortlessly rearrange questions using
            drag-and-drop, and customize options as easily as copying and
            pasting a list.
          </Text>
        </Box>
      </Stack>
    </Container>
  );
}
