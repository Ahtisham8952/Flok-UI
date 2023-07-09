import React from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Image,
  Flex,
  Tooltip,
  useBreakpointValue,
} from '@chakra-ui/react';
import ChartTabContent from './ChartTabContent';
import LocationTabContent from './LocationTabContent';

import CalendarDropdown from './CalendarDropdown';

const HomePageTabs = () => {
  const showTooltip1 = useBreakpointValue({ base: false, md: true });
  const showTooltip2 = useBreakpointValue({ base: false, md: true });
  const showTooltip3 = useBreakpointValue({ base: false, md: true });
  return (
    <Box>
      <Tabs>
        <Flex
          w="100%"
          alignItems={'center'}
          justifyContent={'center'}
          mb="30px"
        >
          <TabList justifyContent={'center'} borderBottom={'none'}>
            {showTooltip1 && (
              <Tooltip
                label="Discover events based on the Popular Categories."
                aria-label="Tooltip 1"
                placement="top"
              >
                <Tab _selected={{ borderBottom: 'none' }}>
                  <Image src="/tabicon-1.svg" alt="imgicon" />
                </Tab>
              </Tooltip>
            )}
            {!showTooltip1 && (
              <Tab _selected={{ borderBottom: 'none' }}>
                <Image src="/tabicon-1.svg" alt="imgicon" />
              </Tab>
            )}

            {showTooltip2 && (
              <Tooltip
                label="Discover events based on the location you enter."
                aria-label="Tooltip 2"
                placement="top"
              >
                <Tab _selected={{ borderBottom: 'none' }}>
                  <Image src="/tabicon-2.svg" alt="imgicon" />
                </Tab>
              </Tooltip>
            )}
            {!showTooltip2 && (
              <Tab _selected={{ borderBottom: 'none' }}>
                <Image src="/tabicon-2.svg" alt="imgicon" />
              </Tab>
            )}
          </TabList>

          {showTooltip3 && (
            <Tooltip
              label="Discover events by selecting dates on the calendar."
              aria-label="Tooltip 3"
              placement="top"
            >
              <CalendarDropdown />
            </Tooltip>
          )}
          {!showTooltip3 && <CalendarDropdown />}
        </Flex>

        <TabPanels p="0px">
          <TabPanel p="0px">
            <ChartTabContent />
          </TabPanel>
          <TabPanel p="0px">
            <LocationTabContent />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default HomePageTabs;
