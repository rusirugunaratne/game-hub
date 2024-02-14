import { Box } from "@chakra-ui/react"
import React, { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
      borderRadius={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      overflow='hidden'
    >
      {children}
    </Box>
  )
}

export default GameCardContainer
