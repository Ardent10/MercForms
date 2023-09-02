import { useEffect, useState } from "react";
import { globalApiCallHelper } from "@utils/helperFunctions/globalApiCallHelper";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAppState } from "@store/index";

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
      image?: string;
    }[];
  }[];
};

export function useForms() {
  const [forms, setForms] = useState<FormValues[]>([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();
  const [state, dispatch] = useAppState();
  const navigate = useNavigate();

  // Function to fetch all forms
  const fetchAllForms = async () => {
    try {
      const userId = state?.userProfile?.id;
      const data = await globalApiCallHelper({
        api: `/forms/getAllforms/?userId=${userId}`,
        method: "GET",
      });

      if (data.length > 0) {
        dispatch({ type: "setAllForms", payload: data });
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching forms:", error);
    }
  };

  // Function to create a new form
  const createForm = async (newForm: FormValues) => {
    try {
      const createdForm = await globalApiCallHelper({
        api: "/forms/create",
        method: "POST",
        body: JSON.stringify({ userId: state.userProfile.id, ...newForm }),
      });

      if (createdForm) {
        dispatch({
          type: "setAllForms",
          payload: [...state.allForms, createdForm],
        });
        toast({
          title: "Form Created",
          description: "Your form has been created successfully",
          status: "success",
          position: "top-right",
          duration: 5000,
          isClosable: true,
        });
        navigate("/forms");
      } else {
        toast({
          title: "Form Creation Failed",
          description: "Your form could not be created",
          status: "error",
          position: "top-right",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error creating form:", error);
    }
  };

  const createFormResponse = async (formResponse: any) => {
    try {
      const savedFormResponse = await globalApiCallHelper({
        api: "/forms/save-response",
        method: "POST",
        body: JSON.stringify({ userId: state.userProfile.id, ...formResponse }),
      });

      if (savedFormResponse) {
        toast({
          title: "Form Response Saved",
          description: "Your response has been saved successfully",
          status: "success",
          position: "top-right",
          duration: 5000,
          isClosable: true,
        });
        navigate("/forms");
      } else {
        toast({
          title: "Form response failed",
          description: "Your form response could not be saved",
          status: "error",
          position: "top-right",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log("Create Form Response: ", error);
    }
  };

  const sendFormInvite = async (
    formUrl: string,
    reciever_email: string,
    subject: string,
    message: string
  ) => {
    try {
      const sendFormLinkInvite = await globalApiCallHelper({
        api: "/forms/form-invite",
        method: "POST",
        body: JSON.stringify({
          url: formUrl,
          email: reciever_email,
          subject,
          message,
        }),
      });

      if (sendFormLinkInvite) {
        toast({
          title: "Form link Sent Successfully",
          description: `Your form link sent to ${reciever_email} successfully`,
          status: "success",
          position: "top-right",
          duration: 5000,
          isClosable: true,
        });
        navigate("/forms");
      } else {
        toast({
          title: "Form link invite failed",
          status: "error",
          position: "top-right",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log("Form Link Invite Error: ", error);
    }
  };

  // Function to update a form
  const updateForm = async (id: string, updatedForm: FormValues) => {
    try {
      const updatedFormData = await globalApiCallHelper({
        api: `/forms/${id}`,
        method: "PUT",
        body: JSON.stringify(updatedForm),
      });
      //   const updatedForms = forms.map((form) =>
      //     form._id === id ? updatedFormData : form
      //   );
      //   setForms(updatedForms);
    } catch (error) {
      console.error("Error updating form:", error);
    }
  };

  // Function to delete a form
  const deleteForm = async (id: string) => {
    try {
      await globalApiCallHelper({
        api: `/forms/${id}`,
        method: "DELETE",
      });
      //   const updatedForms = forms.filter((form) => form._id !== id);
      //   setForms(updatedForms);
    } catch (error) {
      console.error("Error deleting form:", error);
    }
  };

  return {
    forms,
    loading,
    fetchAllForms,
    createForm,
    updateForm,
    deleteForm,
    createFormResponse,
    sendFormInvite,
  };
}
