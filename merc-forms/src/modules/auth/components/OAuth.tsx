import { Box, Divider, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { PrimaryButton } from "@modules/common/PrimaryButton";

interface OAuthProps {
  label: string;
  onClick: any;
}

export const OAuth = ({ label, onClick }: OAuthProps) => {
  return (
    <SimpleGrid columns={1} spacing={1} minWidth="300px">
      <PrimaryButton
        fontSize={12}
        fontWeight={500}
        color="#000"
        backgroundColor="#fff"
        title={label}
        type="button"
        borderColor="1px solid #000"
        borderRadius="8px"
        height={45}
        // showLoaderonBtn={true}
        buttonChild={
          <img
            src="/assets/google.svg"
            alt="google"
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
          />
        }
      />
      <Box width="100%">
        <Flex alignItems="center" justifyContent="center">
          <Divider flex={1} borderColor="blue" />
          <Text p={2}>or</Text>
          <Divider flex={1} borderColor="blue" />
        </Flex>
      </Box>
    </SimpleGrid>
  );
};
