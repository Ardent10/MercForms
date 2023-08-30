import {
  Avatar,
  AvatarBadge,
  Button,
  Center,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";

export function ProfileMenu() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"outline"}
        cursor={"pointer"}
        minW={0}
        p={"1px"}
        color={"#fff"}
        borderRadius="99%"
        border={useColorModeValue("3px solid #6d63fc ", "3px solid #fff")}
      >
        <Avatar
          size={"sm"}
          src={"https://zakariya-ardent10.vercel.app/images/profile3.png"}
        >
          <AvatarBadge boxSize="1.25em" bg="green.500" />
        </Avatar>
      </MenuButton>
      <MenuList alignItems={"center"}>
        <br />
        <Center>
          <Avatar
            size={"2xl"}
            src={"https://zakariya-ardent10.vercel.app/images/profile3.png"}
          />
        </Center>
        <br />
        <Center>
          <p>Username</p>
        </Center>
        <br />
        <MenuDivider />
        <MenuItem>Your Servers</MenuItem>
        <MenuItem>Account Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
}
