import Typography from 'antd/es/typography';
import { Maybe } from 'graphql/jsutils/Maybe';
import React from 'react';

interface HtmlMarkdownProps {
  children: string | undefined;
  style?: React.CSSProperties | undefined;
}

const HtmlMarkdown = ({ children, style }: HtmlMarkdownProps) => (
  <Typography.Text style={style}>
    <div
      dangerouslySetInnerHTML={{
        __html: children ?? '',
      }}
    />
  </Typography.Text>
);

export default HtmlMarkdown;
