"use client";
import { request } from "@/utils/axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useToken } from "@/hooks/token";
import {
  ChakraProvider,
  Stack,
  Input,
  Container,
  Center,
  Flex,
  Button,
  FormControl,
  color,
  background,
  Box,
} from "@chakra-ui/react";

export default function LoginTest() {
  return (
    <ChakraProvider>
      <Center>
        <Flex direction="column" justify="center" h="100vh">
          <FormControl>
            <Stack spacing={5} w={400}>
              <Input
                focusBorderColor="RGBA(0, 0, 0, 0.08)"
                variant="filled"
                placeholder="Email"
              />

              <Input variant="filled" placeholder="Password" type="" />
              <Button>Log In</Button>
            </Stack>
          </FormControl>
        </Flex>
      </Center>
    </ChakraProvider>
  );
}
