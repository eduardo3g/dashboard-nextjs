import {
  Box,
  Button,
  Flex,
  Text,
  Heading,
  Icon,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Checkbox
} from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex
        width="100%"
        marginY="6"
        maxWidth={1480}
        marginX="auto"
        paddingX="6"
      >
        <Sidebar />

        <Box
          flex="1"
          borderRadius={8}
          backgroundColor="gray.800"
          padding="8"
        >
          <Flex
            marginBottom="8"
            justify="space-between"
            align="center"
          >
            <Heading size="lg" fontWeight="normal">
              Users
            </Heading>
            <Button
              as="a"
              size="sm"
              fontSize="small"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Create new
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th paddingX="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>User</Th>
                <Th>Created at</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td paddingX="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Eduardo Santana</Text>
                    <Text fontSize="small" color="gray.300">eduardosbrasil10@gmail.com</Text>
                  </Box>
                </Td>
                <Td>
                  March 27th, 2021
                </Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="small"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Update
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td paddingX="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Eduardo Santana</Text>
                    <Text fontSize="small" color="gray.300">eduardosbrasil10@gmail.com</Text>
                  </Box>
                </Td>
                <Td>
                  March 27th, 2021
                </Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="small"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Update
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td paddingX="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Eduardo Santana</Text>
                    <Text fontSize="small" color="gray.300">eduardosbrasil10@gmail.com</Text>
                  </Box>
                </Td>
                <Td>
                  March 27th, 2021
                </Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="small"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Update
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td paddingX="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Eduardo Santana</Text>
                    <Text fontSize="small" color="gray.300">eduardosbrasil10@gmail.com</Text>
                  </Box>
                </Td>
                <Td>
                  March 27th, 2021
                </Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="small"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Update
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td paddingX="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Eduardo Santana</Text>
                    <Text fontSize="small" color="gray.300">eduardosbrasil10@gmail.com</Text>
                  </Box>
                </Td>
                <Td>
                  March 27th, 2021
                </Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="small"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Update
                  </Button>
                </Td>
              </Tr>                                                        
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
};