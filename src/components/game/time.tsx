import { Box } from "@chakra-ui/react";

export function Timer({ timer }: { timer: number }) {
  return (
    <>
      <Box color="#727272">{(timer / 1000).toFixed(3)}</Box>
    </>
  );
}
