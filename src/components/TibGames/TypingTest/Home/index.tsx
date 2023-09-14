import {
  Button,
  Card,
  Descriptions,
  DescriptionsProps,
  Input,
  Result,
} from 'antd';
import React from 'react';
import Board from '../Board';
import { SmileOutlined } from '@ant-design/icons';
import { NumTrans } from '../../NumTrans';

const TypingTestHome: React.FC = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [accuracy, setAccuracy] = React.useState<number>(0);
  const [finished, setFinished] = React.useState(false);
  const [wpm, setWpm] = React.useState(0);
  const [disableInput, setDisableInput] = React.useState(false);

  const initialWords: string =
    // eslint-disable-next-line no-multi-str
    'ཕྱི་ལོ་༢༠༢༣་ཟླ་བ་༠༩་ཚེས་༡༤་ཉིན་ཕྱི་དྲིལ་བཀའ་བློན་ནོར་འཛིན་སྒྲོལ་མ་མཆོག་གིས་བོད་ཀྱི་སྲིད་བྱུས་ཉམས་ཞིབ་ཁང་གིས་དཔར་འགྲེམས་ཞུས་པའི་བོད་ཀྱི་སྤྲུལ་སྐུའི་ལམ་ལུགས་སྐོར་གྱི་དཔྱད་རྩོམ་ཕྱོགས་བསྒྲིགས་ཀྱི་དཔེ་དེབ་དབུ་འབྱེད་གནང་ཡོད། \
    དེ་ཡང་གོང་ཚེས་ཉིན་བོད་ཀྱི་སྲིད་བྱུས་ཉམས་ཞིབ་ཁང་གི་གོ་སྒྲིག་འོག་བོད་མིའི་སྒྲིག་འཛུགས་ཀམ་པུ་ཊར་སྡེ་ཚན་གྱི་ཚོགས་ཁང་དུ་གཞུང་ས་དགའ་ལྡན་ཕོ་བྲང་སྐབས་ཀྱི་བོད་ཀྱི་ལོ་རྒྱུས་གནས་བབ་བསྐྱར་ཞིབ་ཞེས་པའི་འཆད་ཁྲིད་ལེ་ཚན་ཞིག་འཚོགས་ཡོད་པའི་ཐོག་མར་ཕྱི་དྲིལ \
    ་བཀའ་བློན་ནོར་འཛིན་སྒྲོལ་མ་མཆོག་གིས་བོད་ཀྱི་སྲིད་བྱུས་ཉམས་ཞིབ་ཁང་གི་འདོན་སྤེལ་གནང་བའི་བོད་ཀྱི་སྤྲུལ་སྐུའི་ལམ་ལུགས་སྐོར་གྱི་དཔྱད་རྩོམ་ཕྱོགས་བསྒྲིགས་ཀྱི་དཔེ་དེབ་དབུ་འབྱེད་གནང་ཡོད་པ་རེད།';

  const inputHandler = (e: { target: { value: any } }) => {
    setInputValue(e.target.value);
    if (disableInput) {
      setInputValue('');
    }

    if (
      e.target.value[e.target.value.length - 1] === '་' ||
      e.target.value[e.target.value.length - 1] === '།'
    ) {
      setInputValue('');
      setError(false);
    }
  };

  if (accuracy > 0) {
    const num = NumTrans(accuracy);
    setAccuracy(num.join(''));
  }

  if (wpm > 0) {
    setWpm(NumTrans(wpm).join(''));
  }

  const resultItems: DescriptionsProps['items'] = [
    {
      key: 'accuracy',
      label: 'Accuracy',
      children: accuracy,
    },
    {
      key: 'wpm',
      label: 'Words per minute',
      children: wpm,
    },
  ];

  const clearRecord = () => {
    setAccuracy(0);
    setWpm(0);
    setError(false);
    setFinished(false);
  };

  return (
    <Card>
      {finished ? (
        <Result
          icon={<SmileOutlined />}
          title="Great, you finished the 1 minute typing game"
          subTitle={
            <Descriptions
              items={resultItems}
              column={1}
              style={{ marginLeft: '30%', marginTop: '4%', fontSize: '16px' }}
            />
          }
          extra={
            <Button
              type="primary"
              onClick={() => {
                setDisableInput(false);
                clearRecord();
              }}
            >
              བསྐྱར་འབྲི།
            </Button>
          }
        />
      ) : (
        <>
          <Board
            setError={setError}
            setAccuracy={setAccuracy}
            setFinished={setFinished}
            setWpm={setWpm}
            error={error}
            initialWords={initialWords}
            setDisableInput={setDisableInput}
          />
          <Input
            name="inputValue"
            type="text"
            autoComplete="off" // so the browser will not the dropdown list of previous typed inputs
            placeholder="འདིར་འབྲི།"
            value={inputValue}
            onChange={inputHandler}
            size="large"
            disabled={disableInput}
          />
        </>
      )}
    </Card>
  );
};

export default TypingTestHome;
