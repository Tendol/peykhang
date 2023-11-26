import { Editor } from '@tinymce/tinymce-react';
import { IProps } from '@tinymce/tinymce-react/lib/cjs/main/ts/components/Editor';
import React from 'react';

interface AntdTinymceProps {
  plugins?: string[];
  toolbar?: string;
  menubar?: string | boolean;
  onChange?: any;
  value?: string;
  options?: any;
  initialValue?: string;
}

const AntdTinymce = (props: AntdTinymceProps) => {
  const {
    value,
    onChange,
    plugins,
    menubar,
    toolbar,
    options = {},
    initialValue,
    ...rest
  } = props;

  const defaultPlugins = [''];
  const defaultMenubar = 'file edit view insert format tools table tc';
  const defaultToolbar =
    'undo redo | blocks | bold italic underline strikethrough | link media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat';
  const defaultOptions = {
    menubar: false,
  };

  const initOptions = Object.assign({}, defaultOptions, options);

  return (
    <Editor
      apiKey="3ddxm5jqd2s9mlpo2hwao0iq9jpzfuxfygbcio9zxrvntqua"
      init={{
        plugins: defaultPlugins,
        toolbar: defaultToolbar,
        menubar: defaultMenubar,
        ...initOptions,
      }}
      initialValue={initialValue ?? 'Welcome to Peykhang!'}
      onEditorChange={onChange}
    />
  );
};

export default AntdTinymce;
