import {
  Box,
  Drawer,
  useBreakpointValue,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody
} from '@chakra-ui/react';

import { SidebarNav } from './SidebarNav';

export function Sidebar() {
  const isDrawerSideBar = useBreakpointValue({
    base: true,
    large: false,
  });

  // Mobile version
  if (isDrawerSideBar) {
    return (
      <Drawer isOpen={true} placement="left" onClose={() => {}}>
        <DrawerOverlay>
          <DrawerContent
            bg="gray.800"
            padding="4"
          >
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navigation</DrawerHeader>

            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  // Desktop version
  return (
    <Box as="aside" width="64" marginRight="8">
      <SidebarNav />
    </Box>
  );
};