import { Select } from 'antd';
import settings from '../../config/settings.json';
import React from 'react';

interface LanguageSelectProps {
  onChange?: (v: string[]) => void;
}
const LanguageSelect = ({ onChange }: LanguageSelectProps) => {
  const languageOptions = Object.entries(settings.languages).map(([k, v]) => ({
    label: v,
    value: k,
  }));

  return (
    <Select
      showSearch
      onChange={onChange}
      placeholder="Select a language"
      mode="multiple"
      options={languageOptions}
    />
  );
};

export default LanguageSelect;
