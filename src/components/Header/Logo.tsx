import { Text } from '@chakra-ui/react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/dashboard" passHref>
      <Text
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        letterSpacing="tight"
        width="64" // 256px or 16rem
        _hover={{
          cursor: "pointer"
        }}
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
    </Link>
  );
};