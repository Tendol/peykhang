import { Button, Card, DatePicker, Form, Input, Select, message } from 'antd';
import React from 'react';
import settings from '../../config/settings.json';
import AntdTinymce from '../AntdTinymce';
import { GET_GENRES } from '../../graphql/hooks/GetGenres';
import { Author, Genre, Publisher } from '../../gql/graphql';
import { useMutation, useQuery } from '@apollo/client';
import _ from 'lodash';
import { GET_AUTHORS } from '../../graphql/hooks/GetAuthors';
import longName from '../Helpers/longName';
import { GET_PUBLISHERS } from '../../graphql/hooks/GetPublishers';
import { CREATE_BOOK } from '../../graphql/hooks/createBook';
import { GET_BOOKS } from '../../graphql/hooks/GetBooks';

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
  const [createBookMutation, { loading: addingBook, error }] = useMutation(
    CREATE_BOOK,
    {
      refetchQueries: [{ query: GET_BOOKS }],
    },
  );

  const GenreOptions = data?.genres?.edges?.map((item) => ({
    label: _.capitalize(item.node.label?.split('_').join(' ') ?? ''),
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
          isbn: values?.isbn,
          category: values?.categories,
          language: values?.language,
          genresId: values?.genres,
          authorsId: values?.authors,
          richTextSummary: values?.richTextSummary,
          publisherId: values?.publisher,
          publicationDate: values?.publicationDate?.format('MM-DD-YYYY'),
        },
      },
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onCompleted: () =>
        message.success('Successfully added book to the database'),
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onError: (error) =>
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        message.error(error.message),
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
      <Form name="validateOther" onFinish={onFinish}>
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please input the book title!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
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
        <Form.Item name="genres" label="Genres">
          <Select
            mode="multiple"
            allowClear
            placeholder="Please select the appropriate genres"
            options={GenreOptions}
          />
        </Form.Item>
        <Form.Item
          name="authors"
          label="Authors"
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
        <Form.Item name="publicationDate" label="Publication date">
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
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={addingBook}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
export default AddBook;
