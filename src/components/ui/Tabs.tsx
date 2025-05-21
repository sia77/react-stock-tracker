import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import React from 'react';

interface TabItem {
  label: string;
  content: React.ReactNode;
}

export const Tabs: React.FC<{ items: TabItem[] }> = ({ items }) => (
  <TabGroup>
    <TabList className="flex space-x-2 border-b focus:ring-0">
      {items.map((item, idx) => (
        <Tab
          key={idx}
          className={({ selected }) =>
            `px-4 py-2 text-sm font-medium border-b-2 cursor-pointer focus-visible:outline-1 focus-visible:outline-[#fff] ${
              selected ? 'border-stockTrackerBlue text-stockTrackerBlue bg-white' : 'border-transparent text-gray-500 bg-[#f6f8f8]'
            }`
          }
        >
          {item.label}
        </Tab>
      ))}
    </TabList>
    <TabPanels className="mt-4">
      {items.map((item, idx) => (
        <TabPanel key={idx}>{item.content}</TabPanel>
      ))}
    </TabPanels>
  </TabGroup>
);