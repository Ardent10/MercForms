import { Stack } from "@chakra-ui/react";
import { InputField } from "@modules/common/Form";

interface IUserDetailsProps {
  control: any;
  textColor: string;
  bgColor: string;
}

export const UserDetails = ({
  control,
  textColor,
  bgColor,
}: IUserDetailsProps) => {
  return (
    <Stack
      id="form_header"
      mt={5}
      rounded={"2xl"}
      shadow={"xl"}
      p={5}
      w={"50vw"}
      bg={bgColor}
      direction={'row'}
    >
      <InputField
        name="userFullName"
        required
        control={control}
        type="text"
        placeholder="Enter your name"
        disable={false}
        inputHeadingType="Bold"
        inputHeadingLabel="Name"
      />
      <InputField
        name="email"
        control={control}
        required
        type="text"
        placeholder="Enter your email"
        disable={false}
        inputHeadingType="Bold"
        inputHeadingLabel="Email"
      />
    </Stack>
  );
};
