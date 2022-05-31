import { Box, Flex } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const Dashboard = ()=>{

    return (
        <Box border='2px solid red' margin='auto'textAlign='center' mt={10} w='70%' p={5}>
           <Flex>
                <Box border='2px solid red' textAlign='center' m={10} w='65%' p={5}>

                </Box>
                <Box border='2px solid red' textAlign='center' m={10} w='65%' p={5}>
                    <Link to='/rpg1'>Register</Link>
                </Box>
           </Flex>
        </Box>
    )
}