import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
};

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex as="a" href="/" align="center">
      { showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Eduardo Santana</Text>
          <Text color="gray.300" fontSize="small">eduardosbrasil10@gmail.com</Text>
        </Box>
      ) }

      <Avatar size="md" name="Eduardo Santana" src="https://github.com/eduardo3g.png" />
    </Flex>
  );
};