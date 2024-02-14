import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: props => ({
      body: {
        bg: props.colorMode === 'dark' ? '#000000' : 'gray.100'
      }
    })
  }
})

export default theme
