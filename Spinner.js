import React from "react"
import {
  Spinner,
  VStack,
  Heading,
  Center,
  NativeBaseProvider,
} from "native-base"
export const Example = () => {
  return (
    <VStack space={4} alignItems="center">
      <Heading textAlign="center" mb="10">
        Sizes
      </Heading>
      <Spinner size="sm" />
      <Spinner size="lg" />
    </VStack>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  )
}
