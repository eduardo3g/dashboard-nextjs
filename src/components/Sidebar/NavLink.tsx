import {
  Link as ChakraLink,
  Icon,
  Text,
  LinkProps as ChakraLinkProps
} from '@chakra-ui/react';
import { ElementType } from "react";
import Link from 'next/link';

import { ActiveLink } from '../ActiveLink';

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
};

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink
        display="flex"
        align="center"
        _hover={{ textDecoration: "none" }}
        {...rest}
      >
        <Icon as={icon} fontSize="20" />
        <Text marginLeft="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </ActiveLink>
  );
};