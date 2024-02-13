import { Box } from "@chakra-ui/react"
import React, { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={{ sm: 1, md: 2, lg: 3, xl: 4 }} overflow='hidden'>
      {children}
    </Box>
  )
}

export default GameCardContainer
