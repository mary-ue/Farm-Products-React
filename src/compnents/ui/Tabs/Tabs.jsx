import { useState } from 'react';
import { Header, TabButton, TabContent, TabItem } from './styles';

export const Tabs = ({ tabsList = [], maxContentHeight }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      <Header>
        {tabsList.map((tab, index) => {
          return (
            <TabItem key={`tab${index * 10}`}>
              <TabButton
                $isSelect={selectedIndex === index}
                {...(selectedIndex === index
                  ? { as: 'span' }
                  : {
                      onClick: () => {
                        setSelectedIndex(index);
                      },
                    })}
              >
                {tab.title}
              </TabButton>
            </TabItem>
          );
        })}
      </Header>
      <TabContent $maxContentHeight={maxContentHeight}>
        {tabsList[selectedIndex].content}
      </TabContent>
    </div>
  );
};
