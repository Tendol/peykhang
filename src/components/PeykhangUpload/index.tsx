import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload, UploadFile, message } from 'antd';
import { UploadChangeParam, UploadProps } from 'antd/es/upload';
import React from 'react';
import AWS from 'aws-sdk';

const props: UploadProps = {
  name: 'file',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      message.success(`${info.file.name} file uploaded successfully`);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      ``;
    } else if (info.file.status === 'error') {
      void message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const PeykhangUpload = () => {
  const handleUpload = async ({ onSuccess, onError, file }: any) => {
    // S3 Bucket Name
    const S3_BUCKET = 'peykhang-s3';

    // S3 Region
    const REGION = 'US East (Ohio) us-east-2';

    console.log({ onSuccess, onError, file });

    AWS.config.update({
      accessKeyId: 'youraccesskeyhere',
      secretAccessKey: 'yoursecretaccesskeyhere',
    });
  };
  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <Upload
      {...props}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      customRequest={async (e) => {
        await handleUpload(e);
      }}
    >
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  );
};

export default PeykhangUpload;
