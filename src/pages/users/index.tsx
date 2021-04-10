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
  Checkbox,
  useBreakpointValue,
  Spinner
} from '@chakra-ui/react';
import Link from 'next/link';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';


import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

import { useUsers } from '../../services/hooks/users/useUsers';

export default function UserList() {
  const { data, isLoading, isFetching, error } = useUsers();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

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
              { !isLoading && isFetching && (
                <Spinner
                  size="sm"
                  color="gray.500"
                  marginLeft="4"
                />
              ) }
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="small"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Create new
              </Button>
            </Link>
          </Flex>

          { isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Failed to fetch user data.</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th paddingX={["4", "4", "6"]} color="gray.300" width="8">
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>User</Th>
                    { isWideVersion && <Th>Created at</Th> }
                    <Th width="8"></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map(user => {
                    return (
                      <Tr key={user.id}>
                        <Td paddingX={["4", "4", "6"]}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight="bold">{user.name}</Text>
                            <Text fontSize="small" color="gray.300">{user.email}</Text>
                          </Box>
                        </Td>
                        { isWideVersion && <Td>{user.createdAt}</Td> }
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
                    );
                  })}                                                  
                </Tbody>
              </Table>

              <Pagination
                totalCountOfRegisters={200}
                currentPage={4}
                onPageChange={() => {}}
              />
            </>
          ) }
        </Box>
      </Flex>
    </Box>
  );
};