import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Wrap,
  WrapItem,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import useUserStore from '../store/userStore'

const HomePage = () => {
  const { users, isLoading, error, fetchUsers } = useUserStore()

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('gray.800', 'white')

  return (
    <Container maxW='container.xlg' centerContent px={4}>
      <Heading as='h1' mb={8} textAlign='center'>
        Bienvenido a NextSocial
      </Heading>
      <Heading as='h2' size='lg' mb={5}>
        Álbumes Recién Visitados
      </Heading>
      <Text textAlign='center' mb={5}>
        No has visitado ningún álbum aún
      </Text>

      {isLoading ? (
        <Text>Cargando...</Text>
      ) : error ? (
        <Text color='red.500'>{error}</Text>
      ) : (
        <>
          <Heading as='h2' size='lg' mb={5}>
            Usuarios
          </Heading>
          <Wrap spacing='30px' justify='center'>
            {users.map(user => (
              <WrapItem
                key={user.id}
                boxShadow='xl'
                p='6'
                rounded='md'
                bg={bg}
                color={color}
                as={Link}
                to={`/user/${user.id}`}
              >
                <Box>
                  <Heading fontSize='xl'>{user.name}</Heading>
                  <Text mt={4}>{user.email}</Text>
                </Box>
              </WrapItem>
            ))}
          </Wrap>
        </>
      )}
    </Container>
  )
}

export default HomePage
