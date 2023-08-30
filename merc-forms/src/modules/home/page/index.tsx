import { Stack } from "@chakra-ui/react";
import { Footer } from "@modules/common";
import { useAppState } from "../../../store";
import { Features, Hero } from "../components";
import { HowItWorks } from "../components/HowItWorks";

export function Home() {
  const [state] = useAppState();
  // console.log(state);
  return (
    <>
      <Stack
        align={"center"}
        w="full"
        py={{ base: 8, md: 10 }}
        justify="center"
        textAlign="center"
      >
        <Hero />
        <HowItWorks />
        <Features />
      </Stack>
      <Footer />
    </>
  );
}

{
  /* <Flex
  px={10}
  align={"center"}
  w={"full"}
  height={"100vh"}
  bgImage="url('/assets/features/feature1.svg')"
  bgSize="cotain"
  bgPosition="center"
  bgRepeat="no-repeat"
>
  <Box
    flex={1}
    justifyContent="center"
    alignItems="center"
    bg={useColorModeValue("white", "purple.200")}
    rounded="2xl"
    shadow="lg"
    position="relative"
  >
    <Image
      src="/assets/features/feature2.png"
      alt="feature image"
      width="100%"
    />
  </Box>

  <Box flex="1">
    <Box textAlign={"left"} px={50}>
      <Heading fontSize={46} fontWeight={500}>
        Craft online forms effortlessly, just like composing a document.
      </Heading>
      <Text fontSize={25}>
        Select from multiple question types, drag-and-drop to reorder questions,
        and customize values as easily as pasting a list.
      </Text>
    </Box>
  </Box>
</Flex>; */
}
