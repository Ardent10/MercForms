import { Container, Heading, Stack, Text } from "@chakra-ui/react";

export const EventRegistrationForm = () => {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        spacing={{ base: 10, md: 12 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          display="flex"
          justifyContent="center"
          textAlign="center"
          height={"10vh"}
          fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
        >
          <Text
            bgGradient="linear-gradient(to right, #8172fd, #c0afff)"
            bgClip="text"
          >
            Event Registration Form
          </Text>
        </Heading>
      </Stack>
    </Container>
  );
};
