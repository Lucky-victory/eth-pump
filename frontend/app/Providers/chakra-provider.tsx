"use client";
import { ReactNode } from "react";
import { ChakraProvider as ChakraProv } from "@chakra-ui/react";
import theme from "../../lib/theme";

export function ChakraProvider({ children }: { children: ReactNode }) {
  return <ChakraProv theme={theme}>{children}</ChakraProv>;
}
