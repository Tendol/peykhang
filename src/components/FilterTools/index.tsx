import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Popover, Select, Space } from 'antd';
import React from 'react';

import { ApolloQueryResult, OperationVariables } from 'apollo-client';
import LanguageSelect from '../LanguageSelect';

interface FilterToolsProps {
  refetch?: (
    variables?: Partial<OperationVariables> | undefined,
  ) => Promise<ApolloQueryResult<any>>;
}
const FilterTools = ({ refetch }: FilterToolsProps) => {
  const [filterSelected, setFilterSelected] = React.useState<string[]>([]);
  const [variables, setVariables] = React.useState({});

  const filterOptions = [
    {
      label: 'Language',
      value: 'language',
      treatment: 'multiSelect',
    },
    {
      label: 'Genre',
      value: 'genre',
      treatment: 'multiSelect',
    },
    { label: 'Author', value: 'author', treatmnet: 'multiSelect' },
  ].filter((item) => !filterSelected.includes(item.value));

  const handleSelectFilter = (value: string[]): void => {
    const tempFilters = filterSelected.concat(value);
    setFilterSelected(tempFilters);
  };
  return (
    <>
      <Space direction="horizontal">
        {filterSelected.map((item) => (
          <Popover
            placement="bottom"
            key={item}
            content={
              <Form size="middle" style={{ width: '200px' }}>
                <Form.Item>
                  {item === 'language' && (
                    <LanguageSelect
                      onChange={(v: string[]) => {
                        // eslint-disable-next-line @typescript-eslint/no-floating-promises
                        refetch?.({
                          language_In: v.map((item: string) =>
                            item.toUpperCase(),
                          ),
                        });
                        setVariables({
                          ...variables,
                          language_In: v.map((item: string) =>
                            item.toUpperCase(),
                          ),
                        });
                      }}
                    />
                  )}
                </Form.Item>
              </Form>
            }
            trigger="click"
          >
            <Button> {item}</Button>
          </Popover>
        ))}
        <Popover
          placement="bottom"
          content={
            <Form size="middle" style={{ width: '200px' }}>
              <Form.Item>
                <Select
                  showSearch
                  onChange={handleSelectFilter}
                  placeholder="Filter by ..."
                  mode="multiple"
                  options={filterOptions}
                />
              </Form.Item>
            </Form>
          }
          trigger="click"
        >
          <Button icon={<PlusOutlined />}> Add filter </Button>
        </Popover>
      </Space>
    </>
  );
};
export default FilterTools;
