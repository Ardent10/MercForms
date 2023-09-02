import { Container, Stack } from "@chakra-ui/react";
import { FormResponse } from "../components";
import { useAppState } from "@store/index";
import { useLocation, useParams } from "react-router-dom";

export const SubmitFormResponse = () => {
  const { formId } = useParams();
  const [state] = useAppState();

  const matchingForm = state?.allForms?.find(
    (form: any) => form._id === formId
  );

  return (
    <Container maxW={"full"} px={0}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 10, md: 12 }}
        pt={20}
        px={0}
      >
        <FormResponse currentForm={matchingForm} />
      </Stack>
    </Container>
  );
};
