import {
  Flex,
  Button,
  Stack,
} from '@chakra-ui/react';
import { Input } from '../components/Form/Input';

export default function SignIn() {
  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360} // pixels
        backgroundColor="gray.800"
        padding="8" // 32px or 2rem
        borderRadius={8} // pixels
        flexDirection="column"
      >
        <Stack spacing="4">
          <Input name="email" type="email" label="Email" />
          <Input name="password" type="password" label="Password" />
        </Stack>

        <Button
          type="submit"
          marginTop="6"
          colorScheme="pink"
          size="lg"
        >
          Sign in
        </Button>
      </Flex>
    </Flex>
  )
};