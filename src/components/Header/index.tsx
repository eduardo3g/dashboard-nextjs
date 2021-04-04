import { Flex } from '@chakra-ui/react';

import { Logo } from '../Header/Logo';
import { NotificationsNav } from '../Header/NotificationsNav';
import { Profile } from '../Header/Profile';
import { SearchBox } from '../Header/SearchBox';

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
      <Logo />

      <SearchBox />

      <Flex
        align="center"
        marginLeft="auto"
      >
        <NotificationsNav />

        <Profile />
      </Flex>
    </Flex>
  );
};