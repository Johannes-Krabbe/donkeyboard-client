import { ChangeEvent, useState } from "react";
import { InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function PasswordInput({
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