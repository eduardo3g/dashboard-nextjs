import {
  Box,
  Divider,
  Flex,
  Heading,
  VStack,
  SimpleGrid,
  HStack,
  Button,
  useToast
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Input } from '../../components/Form/Input';

import { api } from '../../services/api';
import { queryClient } from '../../services/queryClient';
import { sleep } from 'react-query/types/core/utils';

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required').email('Invalid email'),
  password: yup.string().required('Password is required').min(8, 'Password must have at least 8 characters'),
  password_confirmation: yup
    .string().
    required('Password is required')
    .min(8, 'Password must have at least 8 characters')
    .oneOf([
      null, yup.ref('password')
    ], 'The passwords did not match'),
});

export default function CreateUser() {
  const router = useRouter();
  const toast = useToast();

  const createUser = useMutation(async (user: CreateUserFormData) => {
    const response = await api.post('users', {
      user: {
        ...user,
        created_at: new Date(),
      },
    });

    return response.data.user;
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('users') // refresh the cached users list
    },
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    try {
      await createUser.mutateAsync(values);

      toast({
        title: 'Amazing!',
        description: 'A new user has been created.',
        status: 'success',
        position: 'top-right',
        isClosable: true,
        duration: 3000,
      });

      router.push('/users')
    } catch (e) {
      toast({
        title: 'Oops!',
        description: e.message,
        status: 'error',
        position: 'top-right',
        isClosable: true,
        duration: 3000,
      });
    }
  }

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
          as="form"
          flex="1"
          borderRadius={8}
          backgroundColor="gray.800"
          padding={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">Create user</Heading>

          <Divider marginY="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
              <Input
                name="name"
                label="Full name"
                type="text"
                error={formState.errors.name}
                {...register('name')}
              />
              <Input
                name="email"
                label="Email"
                type="email"
                error={formState.errors.email}
                {...register('email')}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
              <Input
                name="password"
                label="Password"
                type="password"
                error={formState.errors.password}
                {...register('password')}
              />
              <Input
                name="password_confirmation"
                label="Password confirmation"
                type="password"
                error={formState.errors.password_confirmation}
                {...register('password_confirmation')}
              />
            </SimpleGrid>
          </VStack>

          <Flex marginTop="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button colorScheme="whiteAlpha">Cancel</Button>
              </Link>
              <Button
                type="submit"
                colorScheme="pink"
                isLoading={formState.isSubmitting}
              >
                  Save
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};