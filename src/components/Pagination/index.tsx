import { Button, Stack, Box, Text } from '@chakra-ui/react';

import { PaginationItem } from './PaginationItem';

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
};

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 0);
};

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : [];

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : [];
  
  
  let fromRegister = currentPage === 1 ? 1 : (currentPage * registersPerPage) - (registersPerPage - 1);

  if (totalCountOfRegisters === 0) {
    fromRegister = 0;
  }

  let toRegister = currentPage === lastPage ? totalCountOfRegisters : currentPage * registersPerPage;

  if (toRegister > totalCountOfRegisters) {
    toRegister = totalCountOfRegisters;
  }

  return (
    <Stack
      direction={["column", "row"]}
      spacing="6"
      marginTop="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>{fromRegister}</strong> - <strong>{toRegister}</strong> of <strong>{totalCountOfRegisters}</strong>
      </Box>
      <Stack direction="row" spacing="2">

        { currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem onPageChange={onPageChange} pageNumber={1} />

            { currentPage > (2 + siblingsCount) && (
              <Text
                color="gray.300"
                width="8"
                textAlign="center"
              >
                ...
              </Text>
            ) }
          </>
        ) }

        {previousPages.length > 0 && previousPages.map(page => {
          return <PaginationItem onPageChange={onPageChange} key={page} pageNumber={page} />
        }) }

        <PaginationItem onPageChange={onPageChange} pageNumber={currentPage} isCurrent />

        {nextPages.length > 0 && nextPages.map(page => {
          return <PaginationItem onPageChange={onPageChange} key={page} pageNumber={page} />
        }) }

        { (currentPage + siblingsCount) < lastPage && (
          <>
            { (currentPage + 1 + siblingsCount) < lastPage && (
              <Text
                color="gray.300"
                width="8"
                textAlign="center"
              >
                ...
              </Text>
            ) }

            <PaginationItem onPageChange={onPageChange} pageNumber={lastPage} />
          </>
        ) }
      </Stack>
    </Stack>
  );
};