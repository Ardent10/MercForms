import { CircularProgress, Text, VStack } from "@chakra-ui/react";

export const Loader = () => {
  return (
    <VStack align={"center"}>
      <CircularProgress isIndeterminate color="purple.400" />
      <Text
        bgGradient="linear-gradient(to right, #8172fd, #c0afff)"
        bgClip="text"
        fontWeight={600}
        fontSize={"xl"}
      >
        Loading...
      </Text>
    </VStack>
  );
};
