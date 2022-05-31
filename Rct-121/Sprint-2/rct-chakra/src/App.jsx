import { useState } from "react";
import { Box, Button, Center, ChakraProvider, Flex } from "@chakra-ui/react";
import Github from "./comp/Github/Github";

function App() {
  const [shrink, setShrink] = useState(false);

  return (
    <ChakraProvider className="App">

      <Github/>
      {/* <Box onClick={() => setShrink(!shrink)} bg="tomato" p={shrink ? 8 : 4}>
        <h1>Chakraaaaa</h1>
      </Box>

      <Button bg="tomato">Button</Button>

      <Flex backgroundColor={{
        sm:"black",
        md:"red"
      }} gap="10px">
        <Center border="1px solid black"  bg="tomato" flex="1">2</Center>
        <Center border="1px solid black" bg="tomato" flex="1">3</Center>
        <Center border="1px solid black"  bg="tomato" flex="1" >1</Center>
      </Flex> */}
    </ChakraProvider>
  );
}

export default App;
