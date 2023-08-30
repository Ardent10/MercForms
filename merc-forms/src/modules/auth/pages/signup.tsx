"use client";

import {
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { PrimaryButton, Selector } from "@modules/common";
import { InputField } from "@modules/common/Form";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import LocationJson from "../../../utils/SampleData/Location.json";
import { dateTimeFormat } from "../../../utils/helperFunctions/globalDateTimeFormat";
import { SignupSchema } from "../../../utils/validations/validations";
import { OAuth } from "../components/OAuth";

export function Signup() {
  const defaultValues = {
    username: "Zakariya",
    email: "zakariya@mercforms.com",
    password: "Test@123",
    confirm_password: "Test@123",
    location: "India",
    agree_tnc: true,
    dob: "",
    firstName: "",
    lastName: "",
  };

  const { handleSubmit, control } = useForm({
    defaultValues,
    resolver: yupResolver(SignupSchema),
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
              Create Account
            </Heading>
            <Text textAlign="center">
              Signup Today and Transform Data into Insights
            </Text>
          </Stack>

          <OAuth label="Signup With Google" onClick={() => {}} />

          <form onSubmit={onSubmit}>
            <Grid
              templateRows="repeat(4, 1fr)"
              templateColumns="repeat(4, 1fr)"
              gap={3.5}
            >
              <GridItem colSpan={2}>
                <InputField
                  name="firstName"
                  control={control}
                  type="text"
                  placeholder="Enter First Name*"
                  disable={false}
                  inputHeadingType="Bold"
                  inputHeadingLabel="First Name"
                  required
                />
              </GridItem>
              <GridItem colSpan={2}>
                <InputField
                  name="lastName"
                  control={control}
                  type="text"
                  placeholder="Enter Last Name*"
                  disable={false}
                  inputHeadingType="Bold"
                  inputHeadingLabel="Last Name"
                  required
                />
              </GridItem>
              <GridItem colSpan={2}>
                <InputField
                  name="username"
                  control={control}
                  type="text"
                  placeholder="Enter Username*"
                  disable={false}
                  inputHeadingType="Bold"
                  inputHeadingLabel="Username"
                  required
                />
              </GridItem>
              <GridItem colSpan={2}>
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
              </GridItem>
              <GridItem colSpan={2}>
                <InputField
                  name="dob"
                  type="date"
                  control={control}
                  placeholder="Enter Your DOB*"
                  disable={false}
                  inputHeadingType="Bold"
                  inputHeadingLabel="Date Of Birth"
                  required
                  maxDate={dateTimeFormat({
                    dateTime: new Date(),
                    format: "YYYY-MM-DD",
                  })}
                />
              </GridItem>
              <GridItem colSpan={2}>
                <Selector
                  name="location"
                  inputHeadingType="Bold"
                  control={control}
                  title="Location"
                  placeHolder="Select Location"
                  disable={false}
                  fontSize={14}
                  color="#4b4b4b"
                  data={LocationJson}
                  required={true}
                />
              </GridItem>
              <GridItem colSpan={2}>
                <InputField
                  name="password"
                  control={control}
                  type="password"
                  placeholder="Password*"
                  disable={false}
                  inputHeadingType="Bold"
                  inputHeadingLabel="Password"
                  required
                />
              </GridItem>
              <GridItem colSpan={2}>
                <InputField
                  name="confirm_password"
                  control={control}
                  type="password"
                  placeholder="Password*"
                  disable={false}
                  inputHeadingType="Bold"
                  inputHeadingLabel="Confirm Password"
                  required
                />
              </GridItem>
            </Grid>

            <Stack spacing={6} pt={2}>
              <Checkbox colorScheme="purple" name="agree_tnc" defaultChecked>
                I agree to Term & Conditions.
              </Checkbox>
              <PrimaryButton
                type="submit"
                title="Create Account"
                width="100%"
                height={50}
                fontSize={16}
                fontWeight={600}
                borderRadius="10px"
                borderColor="#6d63fc"
                padding="0px"
                showLoaderonBtn={false}
              />
            </Stack>
          </form>
          <Text>
            Already a user? <Link to="/login">Login</Link>
          </Text>
        </Stack>
      </Flex>
      <Flex flex={{ base: 1, md: "50%" }}>
        <Image
          alt={"Login Image"}
          objectFit={"contain"}
          src={"/signup-hero.png"}
        />
        <Text
          position="absolute"
          bottom={0}
          right={0}
          fontSize={24}
          fontWeight={900}
          color={"#6d63fc"}
          textAlign="center"
          padding={4}
          backgroundColor="rgba(255, 255, 255, 0.7)"
        >
          MercForms.
        </Text>
      </Flex>
    </Stack>
  );
}
