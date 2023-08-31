import {
  Box,
  Button,
  Flex,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsFillBrightnessLowFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../Logo";
import { ProfileMenu } from "../ProfileMenu";
import { useState, useEffect } from "react";
import { SendFormLinkModal } from "@modules/forms/components/Form/FormBuilder/sendFormLink";
import { useAppState } from "@store/index";
import { CustomTooltipWithIcon } from "@modules/forms/components/Form/FormBuilder/dragAndDropList";
import { AiOutlineLink } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";
import { useAuth } from "@modules/auth/hooks";

interface Props {
  children: React.ReactNode;
  href: string;
}

const NavLink = (props: Props) => {
  const { children, href } = props;

  return (
    <Box
      as="a"
      p={2}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("#dbceff", "gray.700"),
      }}
      color={useColorModeValue("#6d63fc", "white")}
      href={href}
    >
      {children}
    </Box>
  );
};

export function Navbar() {
  const [state] = useAppState();
  const location = useLocation();

  const { getAccount } = useAuth();
  // console.log(state);

  useEffect(() => {
    const getCurrentAccount = async () => {
      await getAccount();
    };
    if (!state.userProfile?.id) {
      getCurrentAccount();
    }
  }, [state.userProfile?.id]);

  const { colorMode, toggleColorMode } = useColorMode();
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal && (
        <SendFormLinkModal openModal={openModal} setOpenModal={setOpenModal} />
      )}
      <Box
        zIndex={999}
        position="fixed"
        width="100%"
        backdropFilter="blur(20px)"
        // background={useColorModeValue("rgba(255, 255, 255, 0.9)", "#140031")}
        px={6}
        transition="background-color 0.3s ease"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Flex>
            <Stack align={"center"} direction={"row"} spacing={7}>
              <Link to="/">
                <Logo />
              </Link>
              {location.pathname === "/" && (
                <>
                  <NavLink href="#Overview">Overview</NavLink>
                  <NavLink href="#how_it_works">How it works</NavLink>
                  <NavLink href="#feature">Features</NavLink>
                </>
              )}
            </Stack>
          </Flex>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              {state.userProfile?.id &&
                location.pathname.includes("/forms/create/") && (
                  <>
                    <CustomTooltipWithIcon
                      icon={<AiOutlineLink />}
                      label="Copy Link"
                      color="#fff"
                    />

                    <Button
                      colorScheme="purple"
                      rightIcon={<RiSendPlaneFill size={17} />}
                      onClick={() => setOpenModal(true)}
                    >
                      Send
                    </Button>
                  </>
                )}

              <Button
                onClick={toggleColorMode}
                bg={"#a390fe"}
                color={"#fff"}
                _hover={{ bg: "#6d63fc" }}
              >
                {colorMode === "light" ? (
                  <MdDarkMode />
                ) : (
                  <BsFillBrightnessLowFill />
                )}
              </Button>

              {!location.pathname.includes("/forms/create") && (
                <Button colorScheme="purple">
                  <Link to="/forms">Get Started</Link>
                </Button>
              )}
              {!state.userProfile?.id ? (
                <Button
                  variant="outline"
                  colorScheme="purple"
                  rightIcon={<FiLogIn />}
                >
                  <Link to="/login">Sign In</Link>
                </Button>
              ) : (
                <ProfileMenu />
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
