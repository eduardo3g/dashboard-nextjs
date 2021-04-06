import { Text } from '@chakra-ui/react';
import Link from 'next/link';

interface LogoProps {
  width?: string;
  marginBottom?: string;
  href?: string;
};

export function Logo({
  width = "64",
  marginBottom = "0",
  href = "/dashboard"
}: LogoProps) {
  return (
    <Link href={href} passHref>
      <Text
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        letterSpacing="tight"
        width={width} // 256px or 16rem
        marginBottom={marginBottom}
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