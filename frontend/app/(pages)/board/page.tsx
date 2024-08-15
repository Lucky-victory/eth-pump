"use client";

import {
  Box,
  Container,
  Flex,
  Tabs,
  Tab,
  TabPanel,
  TabList,
  TabPanels,
  useColorModeValue,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";

export default function BoardPage() {
  return (
    <Container maxW={"6xl"}>
      <Flex>
        <Box>Trading view area</Box>
        <Box w={"full"} minW={300} maxW={{ base: "full", md: 400 }}>
          Trading box area
          <Tabs
            bg={useColorModeValue("white", "gray.800")}
            rounded={"md"}
            shadow={"md"}
            minW={200}
            p={3}
            variant={"enclosed"}
          >
            <TabList>
              <Tab>Buy</Tab>
              <Tab>Sell</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box>
                  <InputGroup>
                    <Input placeholder="0.0"/>

                    <InputRightElement>
                    </InputRightElement>
                  </InputGroup>
                </Box>
              </TabPanel>
              <TabPanel>sell tab</TabPanel>vvvvvv
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Container>
  );
}
