import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

// Dynamic - imports after the window is loaded, not in the server
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2021-04-04T00:00:00.000Z',
      '2021-04-05T00:00:00.000Z',
      '2021-04-06T00:00:00.000Z',
      '2021-04-07T00:00:00.000Z',
      '2021-04-08T00:00:00.000Z',
      '2021-04-09T00:00:00.000Z',
      '2021-04-10T00:00:00.000Z',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};
const series = [
  { name: 'series1', data: [31, 120, 10, 28, 61, 18, 109] }
];

export default function Dashboard() {
  return (
    <Flex direction="column" height="100vh">
      <Header />

      <Flex
        width="100%"
        marginY="6"
        maxWidth={1480}
        marginX="auto"
        paddingX="6"
      >
        <Sidebar />

        <SimpleGrid
          flex="1" // use the whole width
          gap="4" // each grid column and line will have 16px or 1rem
          minChildWidth="320px" // each grid item will have as least 320px (responsitivy)
          align="flex-start"
        >
          <Box
            padding={["4", "8"]}
            backgroundColor="gray.800"
            borderRadius={8}
            paddingBottom="4"
          >
            <Text fontSize="lg" marginBottom="4">Weekly subscriptions</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box
            padding="8"
            backgroundColor="gray.800"
            borderRadius={8}
          >
            <Text fontSize="lg" marginBottom="4">Latest income</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};