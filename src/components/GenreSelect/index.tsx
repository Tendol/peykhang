import { Select } from 'antd';
import React from 'react';
import { GenreNode } from '../../gql/graphql';
import { GET_GENRES } from '../../graphql/hooks/getGenres';
import { useQuery } from '@apollo/client';
import _ from 'lodash';

interface GenreSelectProps {
  onChange?: (v: string[]) => void;
}

interface GenreData {
  genres: {
    edges: [node: GenreNode];
  };
}
const GenreSelect = ({ onChange }: GenreSelectProps) => {
  const { data } = useQuery<GenreData>(GET_GENRES, { variables: {} });
  const genreOptions = data
    ? data.genres.edges.map(({ node }) => ({
        value: node?.label,
        label: _.capitalize(node?.label ?? ''),
      }))
    : [];

  console.log({ genreOptions });

  return (
    <Select
      showSearch
      onChange={onChange}
      placeholder="Select a genre"
      mode="multiple"
      options={genreOptions}
    />
  );
};

export default GenreSelect;
