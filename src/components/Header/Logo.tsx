import { Text } from '@chakra-ui/react';

export function Logo() {
  return (
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
  );
};