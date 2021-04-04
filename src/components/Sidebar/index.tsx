import { Box } from '@chakra-ui/react';

import { SidebarNav } from './SidebarNav';

export function Sidebar() {
  return (
    <Box as="aside" width="64" marginRight="8">
      <SidebarNav />
    </Box>
  );
};