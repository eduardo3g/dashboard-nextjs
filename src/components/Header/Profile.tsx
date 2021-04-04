import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box marginRight="4" textAlign="right">
        <Text>Eduardo Santana</Text>
        <Text color="gray.300" fontSize="small">eduardosbrasil10@gmail.com</Text>
      </Box>

      <Avatar size="md" name="Eduardo Santana" src="https://github.com/eduardo3g.png" />
    </Flex>
  );
};