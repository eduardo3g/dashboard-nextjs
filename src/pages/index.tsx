import {
  Flex,
  Button,
  Stack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../components/Form/Input';
import { Logo } from '../components/Header/Logo';

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('Email is required').email('Invalid email'),
  password: yup.string().required('Password is required').min(8, 'Password must have at least 8 characters'),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const { push } = useRouter();

  const handleSignIn: SubmitHandler<SignInFormData> = async values => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    push('/dashboard');
  }

  return (
    <>
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Logo
        width="auto"
        marginBottom="4"
        href="/"
      />

      <Flex
        as="form"
        width="100%"
        maxWidth={360} // pixels
        backgroundColor="gray.800"
        padding="8" // 32px or 2rem
        borderRadius={8} // pixels
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            type="text"
            label="Email"
            error={formState.errors.email}
            {...register('email')}
          />
          <Input
            name="password"
            type="password"
            label="Password"
            error={formState.errors.password}
            {...register('password')}
          />
        </Stack>

        <Button
          type="submit"
          marginTop="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Sign in
        </Button>
      </Flex>
    </Flex>
    </>
  )
};