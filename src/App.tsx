import * as React from "react"
import {
  ChakraProvider,
  Box,    
  Grid,
  theme,
  Heading,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Footer } from "./Footer"
import { Body } from "./Body"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="auto" p={1}>
        <ColorModeSwitcher justifySelf="flex-end" />                 
        <Heading>
          DS ASSISTÊNCIA
        </Heading>      
      </Grid>
    </Box>
    <Body/>
    <Footer/>
  </ChakraProvider>
)
