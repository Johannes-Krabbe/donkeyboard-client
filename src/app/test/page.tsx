"use client";
import { request } from "@/utils/axios";
import { useRouter } from "next/navigation";
import { useState, useEffect, ChangeEvent } from "react";
import { useToken } from "@/hooks/token";
import { theme } from "../theme";
import {
  ChakraProvider,
  Stack,
  Input,
  Center,
  Flex,
  Button,
  FormControl,
  Heading,
  InputGroup,
  InputRightElement,
  Box,
  Alert,
  AlertIcon,
  Image,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

function PasswordInput({
  onChange,
}: {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        required
        pr="4.5rem"
        type={show ? "text" : "password"}
        bg="gray.600"
        focusBorderColor="RGBA(0, 0, 0, 0.0)"
        variant="filled"
        placeholder="Password"
        textColor="white"
        _focus={{ bg: "gray.500" }}
        _hover={{ bg: "gray.500" }}
        _placeholder={{ color: "gray.100" }}
        onChange={onChange}
      />
      <InputRightElement width="3.5rem">
        <Button
          h="1.75rem"
          size="sm"
          bg="RGBA(0, 0, 0, 0.00)"
          color="gray.200"
          _hover={{ bg: "RGBA(0, 0, 0, 0.00)", color: "gray.100" }}
          onClick={handleClick}
        >
          {show ? <ViewOffIcon boxSize={5} /> : <ViewIcon boxSize={5} />}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

function SubmitForm() {
  return (
    <Button
      bg="RGBA(0, 0, 0, 0.0)"
      w={400}
      _hover={{ bg: "gray.900" }}
      _active={{ bg: "gray.800" }}
      textColor="white"
    >
      Log In
    </Button>
  );
}

function SubmitFormLoading() {
  return (
    <Button
      isLoading
      w={400}
      bg="RGBA(0, 0, 0, 0.0)"
      _hover={{ bg: "gray.900" }}
      textColor="white"
    >
      Log In
    </Button>
  );
}

export default function LoginTest() {
  const { token, setToken } = useToken();
  const { push } = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [submitFormLoading, setSubmitFormLoading] = useState(false);

  //const handleClick = () => setSubmitFormLoading(!submitFormLoading);

  const handleSubmit = async (event: any) => {
    let err;

    if (!email) {
      return (
        <Stack>
          <Alert>
            <AlertIcon />
            E-Mail is required!
          </Alert>
        </Stack>
      );
    } else if (!password) {
      err = "Password is required!";
    } else {
      setSubmitFormLoading(!submitFormLoading);
      event?.preventDefault();
      const values = {
        email: email,
        password: password,
      };

      try {
        const res = await request.post(`/auth/login`, values);

        console.log(res.data.token);
        setToken(res.data.token);
        push("/");
      } catch {
        (err: any) => console.error(err);
      }
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Center>
        <Flex
          h="calc(100vh - 40px + 40px)"
          w="100vw"
          justify="center"
          align="center"
          direction="column"
          bg="gray.700"
        >
          <Heading
            fontSize={100}
            bgGradient="linear(to-l, #FFD500, #84FF00)"
            bgClip="text"
            mb={10}
            alignSelf="center"
          >
            Donkeyboard
          </Heading>
          <Image alt="donkeyboard logo" src={"logo_dark_yellow.png"} />
          <Flex>
            <Stack spacing={5} w={400} direction="column" justifyItems="center">
              <Input
                isInvalid={true}
                errorBorderColor="red.500"
                bg="gray.600"
                focusBorderColor="RGBA(0, 0, 0, 0.0)"
                variant="filled"
                placeholder="Email"
                type="email"
                textColor="white"
                _focus={{ bg: "gray.500" }}
                _hover={{ bg: "gray.500" }}
                _placeholder={{ color: "gray.100" }}
                required
                onChange={(e) => setEmail(e.target.value)}
              />

              <PasswordInput onChange={(e) => setPassword(e.target.value)} />

              <Box onClick={handleSubmit} onSubmit={handleSubmit}>
                {!submitFormLoading ? <SubmitForm /> : <SubmitFormLoading />}
              </Box>
              <div style={{ height: "24px" }}>
                <p style={{ color: "red" }}>{errorMessage ?? "&nbsp;&nbsp;"}</p>
              </div>
            </Stack>
          </Flex>
        </Flex>
      </Center>
    </ChakraProvider>
  );
}
