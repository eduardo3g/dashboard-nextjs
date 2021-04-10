import { Flex, Text, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  return (
    <>
      <Flex
        width="100vw"
        height="100vh"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Text
          fontSize={["2xl", "6xl"]}
          fontWeight="bold"
          letterSpacing="tight"
          marginBottom={4}
          _hover={{
            cursor: "pointer"
          }}
          color="pink.500"
        >
          404
        </Text>

        <Text>
          The page you're looking for doesn't exist.
        </Text>

        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="cebnter"
        >
          <Text
            fontSize="md"
            fontWeight="bold"
            letterSpacing="tight"
            marginTop={4}
            color="pink.500"
          >
            <Link
              onClick={() => router.back()}
              _hover={{
                textDecoration: "none"
              }}
            >
              Go back.
            </Link>
          </Text>
        </Flex>
      </Flex>
    </>
  );
};