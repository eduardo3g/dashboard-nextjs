import {
  Flex,
  Text,
  Input,
  Icon,
  HStack,
  Box,
  Avatar
} from '@chakra-ui/react';
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine
} from 'react-icons/ri';

export function Header() {
  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1480}
      height="20" // 80px or 5rem
      marginX="auto"
      marginTop="4"
      paddingX="6"
      align="center"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        width="64" // 256px or 16rem
      >
        dashgo
        <Text
          as="span"
          marginLeft="1" // 4px or 0.25rem
          color="pink.500"
        >
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        paddingY="4"
        paddingX="8"
        marginLeft="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        backgroundColor="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          paddingX="4"
          marginRight="4"
          placeholder="Search in the platform"
          _placeholder={{ color: 'gray.400' }}
        />

        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex
        align="center"
        marginLeft="auto"
      >
        <HStack
          spacing="8"
          marginX="8"
          paddingRight="8"
          paddingY="1"
          color="gray.300"
          borderRightWidth={1} // pixel
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex align="center">
          <Box marginRight="4" textAlign="right">
            <Text>Eduardo Santana</Text>
            <Text color="gray.300" fontSize="small">eduardosbrasil10@gmail.com</Text>
          </Box>

          <Avatar size="md" name="Eduardo Santana" src="https://github.com/eduardo3g.png" />
        </Flex>
      </Flex>
    </Flex>
  );
};