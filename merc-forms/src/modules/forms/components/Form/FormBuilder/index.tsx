/* eslint-disable react-hooks/rules-of-hooks */
import {
  Accordion,
  Button,
  Container,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsTextParagraph } from "react-icons/bs";
import { ImCheckboxChecked } from "react-icons/im";
import { IoMdRadioButtonOn } from "react-icons/io";

import { useForms } from "@modules/forms/hooks";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { AiFillEye } from "react-icons/ai";
import { DragAndDropList } from "./dragAndDropList";
import { FormHeader } from "./header";

const QuestionType = [
  {
    label: "Paragraph",
    icon: <BsTextParagraph color="#6d63fc" />,
  },
  {
    label: "Checkboxes",
    icon: <ImCheckboxChecked color="#6d63fc" />,
  },
  {
    label: "Multiple Choice",
    icon: <IoMdRadioButtonOn color="#6d63fc" />,
  },
];

type FormValues = {
  form_title: string;
  form_description: string;
  questions: {
    questionText: string;
    questionImageUrl?:string;
    answerType: string;
    paragraphAnswer?: string;
    isRequired: boolean;
    choices: {
      choiceText?: string;
      imageUrl?: string;
    }[];
  }[];
};

export const FormBuilder = () => {
  const [isOpenAccordion, setOpenedAccordion] = useState([]);
  const { createForm } = useForms();

  const { handleSubmit, control, setValue, watch } = useForm<FormValues>({
    defaultValues: {
      form_title: "Untitled Document",
      form_description: "Untitled Description",
      questions: [
        {
          questionText: "Untitled Question 1",
          answerType: "Multiple Choice",
          isRequired: false,
          choices: [{ choiceText: "Option 1" }],
        },
      ],
    },
    mode: "onBlur",
  });

  const { fields, append, remove, update } = useFieldArray({
    name: "questions",
    control,
  });

  // Watch All the fields for dynamic changes
  const watchAllFields = watch();

  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("#000", "#fff");

  const onSubmit = handleSubmit(async (data) => {
    console.log("Form data", data);
    await createForm(data);
  });

  return (
    <Container maxW={"100vw"} position={"relative"}>
      <Button
        position={"absolute"}
        right={"15vw"}
        mt={2}
        colorScheme="purple"
        rightIcon={<AiFillEye />}
        onClick={() => setOpenedAccordion([])}
      >
        Preview
      </Button>
      <form onSubmit={onSubmit}>
        <FormHeader control={control} textColor={textColor} bgColor={bgColor} />

        <Container
          id="formBuilder-Input-container"
          w={"full"}
          maxW={"50vw"}
          px={0}
        >
          {/* All the accordionItems can be dragged to re-order the array. */}
          <Accordion
            allowMultiple
            onChange={(expanded: any) => {
              setOpenedAccordion(expanded);
            }}
            index={isOpenAccordion}
          >
            <DragAndDropList
              fields={fields}
              remove={remove}
              bgColor={bgColor}
              textColor={textColor}
              control={control}
              watchAllFields={watchAllFields}
              append={append}
              setValue={setValue}
            />
          </Accordion>
          <Flex align={"center"} flex={1} justifyContent={"end"} gap={5}>
            <Button
              mt={2}
              variant="outline"
              colorScheme="purple"
              _hover={{ bg: "purple.500" }}
              color={"white"}
              onClick={() =>
                append({
                  questionText: `Untitled Question ${fields.length + 1}`,
                  answerType: "Multiple Choice",
                  paragraphAnswer: "",
                  isRequired: false,
                  choices: [{ choiceText: "Option 1" }],
                })
              }
            >
              Add New Question
            </Button>
            <Button mt={2} colorScheme="purple" type="submit">
              Create
            </Button>
          </Flex>
        </Container>
      </form>
    </Container>
  );
};
