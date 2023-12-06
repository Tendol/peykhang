import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';

const PeykhangUpload = () => {
  console.log('upload');
  return (
    <Upload>
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  );
};

export default PeykhangUpload;
