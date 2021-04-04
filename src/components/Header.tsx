import {  Flex, Text, Input, Icon } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

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
    </Flex>
  );
};