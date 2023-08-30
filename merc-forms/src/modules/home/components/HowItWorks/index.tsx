import {
  AspectRatio,
  Box,
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
      p={16}
      maxW={"full"}
      bgImage={"url(assets/features/feature1.svg)"}
      bgSize="contain"
      bgPosition="center"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack
        maxW={"5xl"}
        align={"center"}
        alignItems="center"
        justifyContent="center"
      >
        <Box flex="1" py={5} textAlign={"center"}>
          <Heading fontSize={46} fontWeight={500}>
            How does MercForms works?
          </Heading>
        </Box>
        <Flex
          w={"4xl"}
          bg={useColorModeValue("#dbceff", "purple.200")}
          rounded="2xl"
          shadow="lg"
          p={4}
        >
          <AspectRatio w={"full"} maxW="60vw" ratio={16 / 9}>
            <iframe
              src="https://www.loom.com/embed/ed4946ae030c46b99486dc32d35b7ddf?sid=e4f075a7-59a5-4eed-a68a-ceae062eea65?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
              allowFullScreen
              title="MercForms demo video"
              allow="autoplay; encrypted-media"
              style={{ borderRadius: "16px" }}
            />
          </AspectRatio>
        </Flex>
        <Box flex="1" py={5} textAlign={"center"} px={50}>
          <Text fontSize={25}>
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
