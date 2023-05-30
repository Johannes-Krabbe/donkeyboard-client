import { Box, Flex, Button, Img } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

interface NavbarProps {
  height?: 40;
}

export default function Navbar({ height }: NavbarProps) {
  const { push } = useRouter();

  const navbarButtonmarginY = 5;
  const navbarButtonmarginRight = 5;

  return (
    <Flex h={height} bg="gray.700" justify="space-between">
      <Img
        src="assets/favicon.ico"
        boxSize={12}
        my={"auto"}
        ml={navbarButtonmarginRight}
        cursor="pointer"
        boxSizing="border-box"
        borderRadius={50}
        _hover={{
          outline: "3px solid transparent",
          outlineColor: "gray.200",
        }}
        onClick={(e) => push("/")}
      ></Img>
      <Flex justify="flex-end">
        <Box>
          <Button
            my={navbarButtonmarginY}
            mr={navbarButtonmarginRight}
            bg={"gray.100"}
            onClick={(e) => push("/login")}
          >
            Login
          </Button>
          <Button
            my={navbarButtonmarginY}
            mr={navbarButtonmarginRight}
            bg={"primary"}
            _hover={{ bg: "primary_hover" }}
            onClick={(e) => push("/register")}
          >
            Register
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}
