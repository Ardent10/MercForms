import { useAppState } from "@store/index";
import { globalApiCallHelper } from "@utils/helperFunctions/globalApiCallHelper";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

interface SignupProps {
  email: string;
  password: string;
  username: string;
  location: string;
  dob: string;
  firstName: string;
  lastName: string;
}
interface LoginProps {
  email: string;
  password: string;
}

export function useAuth() {
  const toast = useToast();
  const navigate = useNavigate();
  const [state, dispatch] = useAppState();

  const Signup = async ({
    email,
    password,
    username,
    location,
    dob,
    firstName,
    lastName,
  }: SignupProps) => {
    try {
      dispatch({
        type: "setIsLoading",
        payload: {
          isLoading: true,
        },
      });

      const res = await globalApiCallHelper({
        api:"/auth/register",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          username,
          location,
          dob,
          firstName,
          lastName,
        }),
      });
      console.log("Signup res", res);
      if (res) {
        toast({
          title: "Account Created Successfully",
          position: "top-right",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("/login");
      } else {
        navigate("/signup");
      }
      dispatch({
        type: "setIsLoading",
        payload: {
          isLoading: false,
        },
      });
    } catch (error) {
      toast({
        title: "Account Creation Failed",
        position: "top-right",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      dispatch({
        type: "setIsLoading",
        payload: {
          isLoading: false,
        },
      });
    }
  };

  const Login = async ({ email, password }: LoginProps) => {
    try {
      dispatch({
        type: "setIsLoading",
        payload: {
          isLoading: true,
        },
      });

      const res = await globalApiCallHelper({
        api: "/auth/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      console.log("Login res", res);

      if (res._doc) {
        localStorage.setItem("auth_token", res.accessToken);

        toast({
          title: "Logged In Successfully",
          description: "Welcome to MercForms.",
          position: "top-right",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        dispatch({
          type: "setUserProfile",
          payload: {
            firstName: res._doc.firstName,
            lastName: res._doc.lastName,
            email: res._doc.email,
            username: res._doc.username,
            location: res._doc.location,
            dob: res._doc.dob,
            id: res._doc._id,
          },
        });
        navigate("/");
      } else {
        toast({
          title: "Login Failed",
          description: "Please check your credentials.",
          position: "top-right",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
      dispatch({
        type: "setIsLoading",
        payload: {
          isLoading: false,
        },
      });
    } catch (error: any) {
      toast({
        title: "Login Failed",
        description: "Please check your credentials.",
        position: "top-right",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const getAccount = async () => {
    try {
      const authToken = localStorage.getItem("auth_token");

      if (!authToken) {
        console.log("Access token not found.");
      }

      const res = await globalApiCallHelper({
        api: "/auth/getAccount",
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      });

      if (res?._id) {
        dispatch({
          type: "setUserProfile",
          payload: {
            firstName: res.firstName,
            lastName: res.lastName,
            email: res.email,
            username: res.username,
            location: res.location,
            dob: res.dob,
            id: res._id,
          },
        });
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log("Get Account ERROR: ", error);
    }
  };

  const Logout = async () => {
    try {
      localStorage.removeItem("auth_token");
      toast({
        title: "Logged Out Successfully",
        position: "top-right",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/login");
    } catch (error) {
      toast({
        title: "Logout Failed",
        position: "top-right",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return {
    Signup,
    Login,
    Logout,
    getAccount,
  };
}
