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

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer();

  const isDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false,
  });

  // Mobile version
  if (isDrawerSideBar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent
            bg="gray.800"
            padding="4"
          >
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Menu</DrawerHeader>

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