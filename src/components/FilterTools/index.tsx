import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Popover, Select } from 'antd';
import React from 'react';

const FilterTools: React.FC = () => {
  const filterOptions = [
    {
      label: 'Language',
      value: 'language',
    },
    {
      label: 'Genre',
      value: 'genre',
    },
    { label: 'Author', value: 'author' },
  ];

  const [filterSelected, setFilterSelected] = React.useState([]);
  const handleSelectFilter = (value: any): void => {
    console.log({ value });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    filterSelected.push(value);
    setFilterSelected(filterSelected);
  };

  console.log({ filterSelected });
  const onSearch = (): void => {
    console.log('somethin');
  };
  return (
    <>
      <Popover
        placement="bottom"
        content={
          <Form size="middle" style={{ width: '200px' }}>
            <Form.Item>
              <Select
                showSearch
                onSearch={onSearch}
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
    </>
  );
};
export default FilterTools;
