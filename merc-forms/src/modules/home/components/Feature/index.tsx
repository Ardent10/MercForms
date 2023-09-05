/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// Define an array of features
const featuresData = [
  {
    heading: "Craft online forms effortlessly, just like composing a document.",
    text: "Select from multiple question types, drag-and-drop to reorder questions, and customize values as easily as pasting a list.",
    imageSrc: "/assets/features/feature1-img.png",
    bgImageSrc: "/assets/features/feature.svg",
    direction: "img-left-align",
  },
  {
    heading: "Send polished surveys and forms",
    text: "Customize colors, images, and fonts to adjust the look and feel or reflect your organization’s branding. And add custom logic that shows questions based on answers, for a more seamless experience.",
    imageSrc: "/assets/features/feature2-img.jpg",
    bgImageSrc: "/assets/features/feature4.svg",
    direction: "img-right-align",
  },
  {
    heading: "Analyze responses with automatic summaries",
    text: "See charts with response data update in real-time. Or open the raw data with Google Sheets for deeper analysis or automation.",
    imageSrc: "/assets/features/feature3-img.png",
    bgImageSrc: "/assets/features/feature3.svg",
    direction: "img-left-align",
  },
  {
    heading: "Create and respond to surveys from anywhere",
    text: "Access, create, and edit forms on-the-go, from screens big and small. Others can respond to your survey from wherever they are—from any mobile device, tablet, or computer.",
    imageSrc: "/assets/features/feature4-img.png",
    bgImageSrc: "/assets/features/feature.svg",
    direction: "img-right-align",
  },
];

interface FeatureProps {
  heading: string;
  text: string;
  imageSrc: string;
  bgImageSrc: string;
  direction: string;
}

function Feature({
  heading,
  text,
  imageSrc,
  bgImageSrc,
  direction,
}: FeatureProps) {
  return (
    <>
      {direction === "img-left-align" ? (
        <Flex
          id="feature"
          px={{ base: 5, lg: 10 }}
          w={"full"}
          h={"100vh"}
          align={"center"}
          bgSize="contain"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgImage={`url('${bgImageSrc}')`}
          direction={{ base: "column", md: "row" }}
          verticalAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
          gap={5}
        >
          <Box display={"block"}>
            <Box
              bg={useColorModeValue("white", "purple.200")}
              rounded="2xl"
              shadow="lg"
              position="relative"
              overflow="hidden"
              transform={{ base: "none", md: "skewX(8deg)" }}
            >
              <Image src={imageSrc} alt="feature image" width="100%" />
            </Box>
          </Box>

          <Box>
            <Box textAlign={{ base: "center", lg: "left" }} px={50}>
              <Heading fontWeight={500}>{heading}</Heading>
              <Text fontSize={{ base: 15, lg: 25 }}>{text}</Text>
            </Box>
          </Box>
        </Flex>
      ) : (
        <Flex
          id="feature"
          px={{ base: 5, lg: 10 }}
          align={"center"}
          h={"100vh"}
          w={"full"}
          bgImage={`url('${bgImageSrc}')`}
          bgSize="cover"
          bgPosition={"left"}
          bgRepeat="no-repeat"
          direction={{ base: "column", md: "row" }}
          display={"flex"}
          justifyContent={"center"}
          gap={5}
        >
          <Box flex={{ base: 0, lg: 1 }}>
            <Box textAlign={{ base: "center", lg: "left" }} px={50}>
              <Heading fontWeight={500}>{heading}</Heading>
              <Text fontSize={{ base: 15, lg: 25 }}>{text}</Text>
            </Box>
          </Box>
          <Box display={"block"} flex={{ base: 0, lg: 1 }}>
            <Box
              bg={useColorModeValue("white", "purple.200")}
              position="relative"
              overflow="hidden"
              transform={{ base: "none", md: "skewX(-7deg)" }}
            >
              <Image
                src={imageSrc}
                alt="feature image"
                width="100%"
                maxHeight={"80vh"}
                objectFit={"contain"}
              />
            </Box>
          </Box>
        </Flex>
      )}
    </>
  );
}

export function Features() {
  return (
    <>
      {featuresData.map((feature, index) => (
        <Feature key={index} {...feature} />
      ))}
    </>
  );
}
