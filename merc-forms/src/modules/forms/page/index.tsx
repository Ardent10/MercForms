import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CutsomTooltip, Layout, Navbar } from "@modules/common";
import { HiDocumentPlus } from "react-icons/hi2";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

const templates = [
  {
    id: 1,
    image: <HiDocumentPlus size={80} color={"white"} />,
    color: "linear-gradient(to right, #8172fd, #c0afff)",
    title: "Create Form",
    link: "/forms/create",
  },
  {
    id: 2,
    imageSrc: "/assets/templates/template1.png",
    color: "blue",
    title: "Event Registration",
    link: "/forms/templates/event-registration",
  },
  {
    id: 3,
    imageSrc: "/assets/templates/template2.png",
    color: "blue",
    title: "Contact Form",
    link: "/forms/templates/contact-form",
  },
  {
    id: 4,
    title: "Part Invitation",
    imageSrc: "/assets/templates/template3.png",
    color: "blue",
    link: "/forms/templates/party-invitation",
  },
];

export const Forms = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if the current route is the Forms page ("/forms")
  const isFormsPage = location.pathname === "/forms";

  // Function to create a new form
  const createForm = ({ nestedRoute }: any) => {
    const id = uuid();
    navigate(nestedRoute + "/" + id);
  };

  return (
    <>
    <Navbar />
      <Outlet />
      {isFormsPage && (
        <Layout>
          <Container maxW={"5xl"}>
            <Stack
              textAlign={"center"}
              spacing={{ base: 10, md: 12 }}
              py={{ base: 20, md: 36 }}
            >
              <Heading
                display="flex"
                justifyContent="center"
                textAlign="center"
                height={"10vh"}
                fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
              >
                <Text
                  bgGradient="linear-gradient(to right, #8172fd, #c0afff)"
                  bgClip="text"
                >
                  Unique Design
                </Text>
                &nbsp; / Templates
              </Heading>

              <Text color={"gray.500"}>
                Explore our extensive library of pre-built form templates or
                unleash your creativity by crafting custom forms from scratch.
                Simplify data collection with ease.
              </Text>

              <SimpleGrid column={4} minChildWidth="180px" spacing="40px">
                {templates.map((template, id) => (
                  // <Link to={template.link} key={template.id}>
                  <CutsomTooltip
                    label={template.title}
                    placement={"top"}
                    color="white"
                  >
                    <Box
                      // key={id}
                      onClick={() => createForm({ nestedRoute: template.link })}
                      cursor="pointer"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      bgGradient="linear-gradient(to right, #8172fd, #c0afff)"
                      rounded="2xl"
                      shadow="lg"
                      h={200}
                      p={3}
                      transform={{ base: "none", md: "skewX(-7deg)" }}
                      _hover={{
                        transform: "scale(1.05)",
                        transition: "all .2s ease",
                      }}
                    >
                      {template.image !== undefined ? (
                        template.image
                      ) : (
                        <Image
                          src={template.imageSrc}
                          borderRadius="10px"
                          h={"100%"}
                        />
                      )}
                    </Box>
                  </CutsomTooltip>
                  // </Link>
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Layout>
      )}
    </>
  );
};
