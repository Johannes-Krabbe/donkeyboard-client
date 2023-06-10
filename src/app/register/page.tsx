"use client";
import { request } from "@/utils/axios";
import { useRouter } from "next/navigation";
import { useState, useEffect, ChangeEvent } from "react";
import { useToken } from "@/hooks/token";

import {
  Stack,
  Input,
  Center,
  Flex,
  Button,
  InputGroup,
  InputRightElement,
  Box,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Logo from "@/components/logo";
import Navbar from "@/components/navbar";

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

export default function Signup() {
  const { token, setToken } = useToken();
  const { push } = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [submitFormLoading, setSubmitFormLoading] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);

  async function handleSubmit(event: any) {
    if (!submitFormLoading) {
      setSubmitFormLoading(true);
      event?.preventDefault();
      const values = {
        username: username,
        email: email,
        password: password,
        bio: bio,
      };

      try {
        const res = await request.post(`/auth/register`, values);

        console.log(res.data.token);
        setToken(res.data.token);
        push("/");
      } catch (e: any) {
        setErrorMessage(e.response.data.message);
        console.error(e);
        setTimeout(() => {
          setSubmitFormLoading(false);
        }, 500);
      }
    }
  }

  function handleCheckEmail(input: any) {
    if (input.match("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$", "u") != null) {
      setEmail(input);
      setErrorMessage("");
      setEmailInvalid(false);
    } else {
      setErrorMessage("Please enter a valid email address");
      setEmailInvalid(true);
    }
    checkEmptyEmail(input);
  }

  function checkEmptyEmail(input: any) {
    if (input === "") {
      setEmailInvalid(false);
      setErrorMessage("");
    }
  }

  return (
    <main>
      <Navbar />
      <Center>
        <Flex
          h="calc(100vh - 80px)"
          w="100vw"
          justify="center"
          align="center"
          direction="column"
          bg="gray.700"
        >
          <Logo />
          <Flex>
            <Stack
              spacing={5}
              w={400}
              mt={20}
              direction="column"
              justifyItems="center"
            >
              <Input
                placeholder="Username"
                type="username"
                errorBorderColor="#BC2424"
                bg="gray.600"
                focusBorderColor="RGBA(0, 0, 0, 0.0)"
                variant="filled"
                textColor="white"
                _focus={{ bg: "gray.500" }}
                _hover={{ bg: "gray.500" }}
                _placeholder={{ color: "gray.100" }}
                required
                onChange={(e) => setUsername(e.target.value)}
              ></Input>
              <Input
                placeholder="Email"
                type="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                isInvalid={emailInvalid}
                errorBorderColor="#BC2424"
                bg="gray.600"
                focusBorderColor="RGBA(0, 0, 0, 0.0)"
                variant="filled"
                textColor="white"
                _focus={{ bg: "gray.500" }}
                _hover={{ bg: "gray.500" }}
                _placeholder={{ color: "gray.100" }}
                required
                onBlur={(e) => handleCheckEmail(e.target.value)}
                onFocus={(e) => {
                  setEmailInvalid(false);
                  setErrorMessage("");
                }}
              />

              <PasswordInput onChange={(e) => setPassword(e.target.value)} />

              <Input
                placeholder="Hello there! I am using Donkeyboard"
                type="bio"
                defaultValue="Hello there! I am using Donkeyboard"
                errorBorderColor="#BC2424"
                bg="gray.600"
                focusBorderColor="RGBA(0, 0, 0, 0.0)"
                variant="filled"
                textColor="white"
                _focus={{ bg: "gray.500" }}
                _hover={{ bg: "gray.500" }}
                _placeholder={{ color: "gray.100" }}
                onChange={(e) => setBio(e.target.value)}
              ></Input>

              <Box onClick={handleSubmit} onSubmit={handleSubmit}>
                {!submitFormLoading ? <SubmitForm /> : <SubmitFormLoading />}
              </Box>
              <div style={{ height: "24px" }}>
                <p style={{ color: "#BC2424" }}>
                  {errorMessage ??
                    "Something went wrong. Please try again later."}
                </p>
              </div>
            </Stack>
          </Flex>
        </Flex>
      </Center>
    </main>
  );
}
