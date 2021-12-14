import React from "react"
import { Link, Center, NativeBaseProvider } from "native-base"
import Kontey from "./Kontey"
import Selectt  from './Selectt';
import Alert from "./Alert";
import Menu from "./Menu";
import Fab from "./Fab";


  
  
export const App = () => {
  return (
    <Link href="./Kontey" mt="8"  >
      Click here to open documentation.
    </Link>
  )
}


export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <App />
        <Kontey />
        <Selectt />
        <Alert />
        <Menu />
        <Fab />
      </Center>
    </NativeBaseProvider>
  )
}


