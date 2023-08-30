/* eslint-disable react-hooks/rules-of-hooks */
import {
  Accordion,
  Button,
  Container,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import { BsTextParagraph } from "react-icons/bs";
import { ImCheckboxChecked } from "react-icons/im";
import { IoMdRadioButtonOn } from "react-icons/io";

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

  const toast = useToast();
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

  const onSubmit = handleSubmit((data) => {
    console.log(data);

    toast({
      title: "Form Created",
      description: "Your form has been created successfully",
      status: "success",
      position: "top-right",
      duration: 5000,
      isClosable: true,
    });
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

// import {
//   Accordion,
//   AccordionButton,
//   AccordionIcon,
//   AccordionItem,
//   AccordionPanel,
//   Box,
//   Button,
//   Checkbox,
//   Container,
//   Divider,
//   Flex,
//   FormLabel,
//   Grid,
//   GridItem,
//   IconButton,
//   Radio,
//   Stack,
//   Switch,
//   Tag,
//   TagLabel,
//   TagRightIcon,
//   Text,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import { CutsomTooltip, Selector } from "@modules/common";
// import { InputField } from "@modules/common/Form";
// import { TextAreaInput } from "@modules/common/Form/textAreaInput";
// import { useState } from "react";
// import { Controller, useFieldArray, useForm } from "react-hook-form";
// import {
//   AiFillEye,
//   AiOutlineImport,
//   AiOutlinePlusCircle,
// } from "react-icons/ai";
// import { BsImage, BsTextParagraph } from "react-icons/bs";
// import { FaRegTrashAlt } from "react-icons/fa";
// import { GoVideo } from "react-icons/go";
// import { GrFormClose } from "react-icons/gr";
// import { HiOutlinePhoto } from "react-icons/hi2";
// import { ImCheckboxChecked } from "react-icons/im";
// import { IoMdRadioButtonOn } from "react-icons/io";
// import { MdContentCopy, MdTitle } from "react-icons/md";
// import { TbSection } from "react-icons/tb";
// import { Styles } from "./index.styles";

// const iconData = [
//   {
//     title: "Add Question",
//     icon: <AiOutlinePlusCircle size={25} />,
//     onClick: () => {
//       // Define the action for this icon's click event
//     },
//   },
//   {
//     title: "Import Questions",
//     icon: <AiOutlineImport size={25} />,
//     onClick: () => {
//       // Define the action for this icon's click event
//     },
//   },
//   {
//     title: "Add Title",
//     icon: <MdTitle size={25} />,
//     onClick: () => {
//       // Define the action for this icon's click event
//     },
//   },
//   {
//     title: "Add Image",
//     icon: <BsImage size={25} />,
//     onClick: () => {
//       // Define the action for this icon's click event
//     },
//   },
//   {
//     title: "Add Video",
//     icon: <GoVideo size={25} />,
//     onClick: () => {
//       // Define the action for this icon's click event
//     },
//   },
//   {
//     title: "Add Section",
//     icon: <TbSection size={25} />,
//     onClick: () => {
//       // Define the action for this icon's click event
//     },
//   },
// ];

{
  /* <Stack
  bg={bgColor}
  rounded={"xl"}
  shadow={"2xl"}
  minHeight={"10vh"}
  position={"absolute"}
  right={"20vw"}
  py={1}
>
  {iconData.map((item, index) => (
    <CutsomTooltip
      key={index}
      label={item.title}
      placement="right"
      color={iconHoverColor}
    >
      <Box
        key={index}
        as={Button}
        variant="ghost"
        onClick={item.onClick}
        transition="background-color 0.3s"
        color={useColorModeValue("#6d63fc", "#fff")}
        _hover={{
          color: iconHoverColor,
          bgColor: iconHoverBgColor,
        }}
      >
        {React.cloneElement(item.icon, {
          _hover: { color: iconHoverColor },
        })}
      </Box>
    </CutsomTooltip>
  ))}
</Stack> */
}

// {
//   fields.map((question, questionIndex) => (
//     <AccordionItem key={question.id} border="none">
//       <Stack mt={5} rounded={"2xl"} bg={bgColor}>
//         <AccordionButton
//           id="question_preview"
//           p={5}
//           _hover={{
//             bgColor: "#dbceff",
//             borderRadius: "16px 16px 0 0",
//             border: "none",
//           }}
//         >
//           <Flex pl={5} direction={"column"} flex="1" textAlign="left">
//             <Box
//               sx={styles.accordionBoxStyles}
//               justifyContent={"space-between"}
//             >
//               <Text id="question" fontSize={"lg"} color={textColor}>
//                 {watchAllFields.questions[questionIndex].questionText}
//               </Text>
//               <Tag
//                 size={"md"}
//                 borderRadius="full"
//                 variant="solid"
//                 colorScheme="purple"
//               >
//                 <TagLabel>Preview</TagLabel>
//                 <TagRightIcon as={AiFillEye} />
//               </Tag>
//             </Box>
//             <Stack pt={5} id="question_choices" display={"block"}>
//               {watchAllFields.questions[questionIndex].choices.map(
//                 (choice, choiceIndex) =>
//                   watchAllFields.questions[questionIndex].answerType ===
//                   "Multiple Choice" ? (
//                     <Radio
//                       key={choiceIndex}
//                       value={choice.choiceText}
//                       colorScheme="purple"
//                       isDisabled
//                     >
//                       {choice.choiceText}
//                     </Radio>
//                   ) : watchAllFields.questions[questionIndex].answerType ===
//                     "Checkboxes" ? (
//                     <Checkbox isDisabled key={choiceIndex} colorScheme="purple">
//                       {choice.choiceText}
//                     </Checkbox>
//                   ) : (
//                     <Textarea
//                       key={choiceIndex}
//                       placeholder="Enter your answer..."
//                       size="lg"
//                       isDisabled
//                     />
//                   )
//               )}
//             </Stack>
//           </Flex>
//           <AccordionIcon />
//         </AccordionButton>
//         <Divider />
//         <AccordionPanel>
//           <Stack direction={"column"} px={6}>
//             <Box sx={styles.accordionBoxStyles}>
//               <Box w={"60%"} pr={3} alignItems={"end"}>
//                 <InputField
//                   name={`questions[${questionIndex}].questionText`}
//                   control={control}
//                   type="text"
//                   placeholder="Enter your Question*"
//                   disable={false}
//                   inputHeadingType="Bold"
//                   inputHeadingLabel="Question"
//                   required
//                 />
//               </Box>
//               <Box p={"0 0 10px"} flex={1} display={"flex"} alignItems={"end"}>
//                 <CustomTooltipWithIcon
//                   icon={<HiOutlinePhoto />}
//                   label="Add Image"
//                   color="#fff"
//                 />
//                 <Box flex={1} pl={2}>
//                   <Selector
//                     name={`questions[${questionIndex}].answerType`}
//                     inputHeadingType="Bold"
//                     control={control}
//                     title="Answer Type"
//                     placeHolder="Select Type"
//                     disable={false}
//                     fontSize={14}
//                     defaultLabel="Multiple Choice"
//                     color="#4b4b4b"
//                     required={true}
//                     data={QuestionType}
//                     setOption={setAnswerType}
//                   />
//                 </Box>
//               </Box>
//             </Box>
//             <Divider />

//             {/* Choice Form is separated to make the nested Choice array and return to react hook form */}
//             <ChoicesForm
//               control={control}
//               questionIndex={questionIndex}
//               answerType={answerType}
//             />

//             <Divider />
//             <Stack id="question-actions" direction={"row"} maxW="full">
//               <Box sx={styles.questionActionsStyle}>
//                 <CustomTooltipWithIcon
//                   label="Duplicate"
//                   icon={<MdContentCopy />}
//                   color="#fff"
//                   onClick={() =>
//                     append({
//                       questionText: question.questionText,
//                       answerType: question.answerType,
//                       isRequired: question.isRequired,
//                       choices: question.choices,
//                     })
//                   }
//                 />
//                 <CustomTooltipWithIcon
//                   label="Delete"
//                   icon={<FaRegTrashAlt />}
//                   onClick={() => remove(questionIndex)}
//                   color="#fff"
//                 />
//                 <FormLabel htmlFor={`questions[${questionIndex}].isRequired`}>
//                   Required:
//                 </FormLabel>
//                 <Controller
//                   name={`questions.${questionIndex}.isRequired`}
//                   control={control}
//                   defaultValue={false}
//                   render={({ field }) => (
//                     <Switch
//                       id={`questions[${questionIndex}].isRequired`}
//                       colorScheme="purple"
//                       onChange={(e) => {
//                         field.onChange(e.target.checked);
//                       }}
//                     />
//                   )}
//                 />
//               </Box>
//             </Stack>
//           </Stack>
//         </AccordionPanel>
//       </Stack>
//     </AccordionItem>
//   ));
// }
