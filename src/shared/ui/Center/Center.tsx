import { ReactNode } from "react"
import { Flex } from "../Flex/Flex";

type CenterProps = {
  children?: ReactNode;
}

export const Center = (props: CenterProps) => {
  return (
    <Flex height='100vh'>
      <Flex>
        {props.children}
      </Flex>
    </Flex>
  )
}