import { Button, Card, DatePicker, Form, Input, Select } from 'antd';
import React from 'react';
import settings from '../../config/settings.json';
import AntdTinymce from '../AntdTinymce';
import { GET_GENRES } from '../../graphql/hooks/getGenres';
import { Author, Genre, Publisher } from '../../gql/graphql';
import { useMutation, useQuery } from '@apollo/client';
import _ from 'lodash';
import { GET_AUTHORS } from '../../graphql/hooks/getAuthors';
import longName from '../Helpers/longName';
import { GET_PUBLISHERS } from '../../graphql/hooks/getPublishers';
import { CREATE_BOOK } from '../../graphql/hooks/createBook';

export interface GenresData {
  genres: {
    edges: [{ node: Genre }];
  };
}

export interface AuthorsData {
  authors: {
    edges: [{ node: Author }];
  };
}

export interface PublisherData {
  publishers: {
    edges: [{ node: Publisher }];
  };
}
const AddBook = () => {
  const languageOptions = Object.values(settings.languagesCode).map(
    (item) => item,
  );
  const { data } = useQuery<GenresData>(GET_GENRES);
  const { data: AuthorData } = useQuery<AuthorsData>(GET_AUTHORS);
  const { data: PublisherData } = useQuery<PublisherData>(GET_PUBLISHERS);
  const [createBookMutation, { loading, error }] = useMutation(CREATE_BOOK);

  const GenreOptions = data?.genres?.edges?.map((item) => ({
    label: _.capitalize(item.node.label ?? ''),
    value: item.node.id,
  }));

  const AuthorOptions = AuthorData?.authors?.edges?.map((item) => ({
    label: longName(item?.node?.firstName, item?.node?.lastName),
    value: item?.node?.id,
  }));

  const PublisherOptions = PublisherData?.publishers?.edges?.map((item) => ({
    label: _.capitalize(item?.node?.name ?? ''),
    value: item?.node?.id,
  }));

  const onFinish = (values: any) => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    createBookMutation({
      variables: {
        input: {
          title: values?.title,
        },
      },
    });
  };

  return (
    <Card
      bordered={false}
      style={{
        marginTop: '10vh',
        boxShadow: 'None',
        width: '100%',
      }}
    >
      <Form name="validate_other" onFinish={onFinish}>
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please input the book title!' }]}
        >
          <Input />
        </Form.Item>
        {/* <Form.Item
          label="ISBN"
          name="isbn"
          rules={[
            { required: true, message: 'Please input the book unique isbn!' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="categories"
          label="Categories"
          rules={[
            { required: true, message: 'Please select the book category!' },
          ]}
        >
          <Select
            placeholder="Please select a country"
            options={[
              {
                label: 'Fiction',
                value: 'fiction',
              },
              {
                label: 'Non-Fiction',
                value: 'non_fiction',
              },
            ]}
          />
        </Form.Item>
        <Form.Item name="language" label="Language">
          <Select
            placeholder="Please select the language"
            options={languageOptions}
          />
        </Form.Item>
        <Form.Item name="genre" label="Genre">
          <Select
            mode="multiple"
            allowClear
            placeholder="Please select the appropriate genres"
            options={GenreOptions}
          />
        </Form.Item>
        <Form.Item
          name="author"
          label="Author"
          rules={[
            { required: true, message: 'Please select the book authors!' },
          ]}
        >
          <Select
            mode="multiple"
            allowClear
            placeholder="Please select the author(s)"
            options={AuthorOptions}
          />
        </Form.Item>
        <Form.Item name="publisher" label="Publisher">
          <Select
            options={PublisherOptions}
            placeholder="Please select the publisher"
          />
        </Form.Item>
        <Form.Item name="publication_date" label="Publication date">
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="richTextSummary"
          label="Summary"
          rules={[
            { required: true, message: 'Please enter a summary for the book' },
          ]}
        >
          <AntdTinymce initialValue="" />
        </Form.Item> */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
export default AddBook;
