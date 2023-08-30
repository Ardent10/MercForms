import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormLabel,
  IconButton,
  Radio,
  Stack,
  Switch,
  Tag,
  TagLabel,
  TagRightIcon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiOutlinePhoto } from "react-icons/hi2";
import { MdContentCopy } from "react-icons/md";

import { AiFillEye } from "react-icons/ai";
import { BsTextParagraph } from "react-icons/bs";
import { ImCheckboxChecked } from "react-icons/im";
import { IoMdRadioButtonOn } from "react-icons/io";

import { CutsomTooltip, Selector } from "@modules/common";
import { InputField } from "@modules/common/Form";
import { TextAreaInput } from "@modules/common/Form/textAreaInput";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { ChoicesForm } from "./choicesForm";
import { Styles } from "./index.styles";

interface IFormHeaderProps {
  control: any;
  textColor: string;
  bgColor: string;
}

export const FormHeader = ({ control, textColor, bgColor}:IFormHeaderProps) => {
  return (
    <Stack
      id='form_header'
      mt={5}
      borderTop={"10px solid #6d63fc"}
      rounded={"2xl"}
      p={5}
      w={"50vw"}
      bg={bgColor}
    >
      <InputField
        name="form_title"
        control={control}
        type="text"
        placeholder="Untitled Form"
        disable={false}
        inputHeadingType="Bold"
        inputHeadingLabel=""
        rest={{
          h: "50%",
          border: "none",
          color: textColor,
          _focusVisible: { outline: "none", border: "none" },
          fontWeight: 500,
          fontSize: "3xl",
        }}
      />
      <TextAreaInput
        name="paragraph_answer"
        control={control}
        placeholder="Untitled Description"
        size="lg"
        minRows={1}
        rest={{
          h: "50%",
          border: "none",
          color: textColor,
          _focusVisible: { outline: "none", border: "none" },
          fontSize: "xl",
        }}
      />
    </Stack>
  );
};
