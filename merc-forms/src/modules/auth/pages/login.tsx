"use client";

import {
  Box,
  Checkbox,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputField } from "@modules/common/Form";
import { PrimaryButton } from "@modules/common/PrimaryButton";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { LoginSchema } from "../../../utils/validations/validations";
import { OAuth } from "../components/OAuth";

export function Login() {
  const defaultValues = {
    email: "zakariya@mercforms.com",
    password: "Test@123",
  };

  const { handleSubmit, control } = useForm({
    defaultValues,
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    alert(JSON.stringify(data));
    console.log(data);
  });

  return (
    <Stack
      minH={"100vh"}
      minW={"100vw"}
      direction={{ base: "column", md: "row" }}
      bgImage={"url('assets/auth/bg.svg')"}
      bgSize="cover"
      bgPosition={"left"}
      bgRepeat="no-repeat"
    >
      <Flex p={3} flex={{ base: 1, md: "50%" }}>
        <Image
          alt={"Login Image"}
          objectFit={"contain"}
          src={"/logo.png"}
          width={100}
          height={100}
        />
        <Stack
          spacing={4}
          pl={5}
          w={"full"}
          maxW={"md"}
          align={"center"}
          justify={"center"}
        >
          <Stack>
            <Heading textAlign="center" fontSize={"5xl"} color={"#6d63fc"}>
              Welcome Back
            </Heading>
            <Text textAlign="center">
              Transform Data into Insights with MercForms.
            </Text>
          </Stack>

          <OAuth label="Login With Google" onClick={() => {}} />

          <form onSubmit={onSubmit}>
            <SimpleGrid minChildWidth="350px" spacing={4}>
              <Box>
                <InputField
                  name="email"
                  control={control}
                  type="email"
                  placeholder="Enter Email*"
                  disable={false}
                  inputHeadingType="Bold"
                  inputHeadingLabel="Email"
                  required
                />
              </Box>
              <Box>
                <InputField
                  name="password"
                  control={control}
                  type="password"
                  placeholder="Enter Password*"
                  disable={false}
                  inputHeadingType="Bold"
                  inputHeadingLabel="Password"
                  required
                />
              </Box>
              <Box>
                <Checkbox colorScheme="purple" name="remember" defaultChecked>
                  Remember me
                </Checkbox>
              </Box>
              <Box>
                <PrimaryButton
                  type="submit"
                  title="Create Account"
                  width="100%"
                  height={50}
                  fontSize={16}
                  fontWeight={600}
                  borderRadius="10px"
                  padding="0px"
                  borderColor="#6d63fc"
                  showLoaderonBtn={false}
                />
              </Box>
            </SimpleGrid>
          </form>
          <Text>
            Don't have an account? <Link to="/signup">Signup</Link>
          </Text>
        </Stack>
      </Flex>
      <Flex
        flex={{ base: 1, md: "50%" }}
        // bg={"#eae8ff"}
      >
        <Image
          alt={"Login Image"}
          objectFit={"contain"}
          src={"/signup-hero.png"}
        />
        <Text
          position="absolute" // Use absolute positioning
          bottom={0} // Align at the bottom
          right={0} // Align at the right
          fontSize={24}
          fontWeight={900}
          color={"#6d63fc"}
          textAlign="center"
          padding={4} // Add some padding for spacing
          backgroundColor="rgba(255, 255, 255, 0.7)" // Add a background color for better visibility>
        >
          MercForms.
        </Text>
      </Flex>
    </Stack>
  );
}
