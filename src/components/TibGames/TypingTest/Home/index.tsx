import {
  Button,
  Card,
  Descriptions,
  DescriptionsProps,
  Input,
  Result,
  Typography,
} from 'antd';
import React from 'react';
import Board from '../Board';
import { SmileOutlined } from '@ant-design/icons';
import { NumTrans } from '../NumTrans';
import TibetanTexts from '../TibetanTexts';
import { breakpoint } from '../../../../App';

export const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};
const TypingTestHome: React.FC = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [accuracy, setAccuracy] = React.useState<number>(0);
  const [finished, setFinished] = React.useState(false);
  const [wpm, setWpm] = React.useState(0);
  const [disableInput, setDisableInput] = React.useState(false);

  const initialWords: string =
    TibetanTexts[getRandomInt(TibetanTexts.length - 1)];

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
          title={
            <Typography.Text
              style={{
                fontSize: window.innerWidth > breakpoint ? '2vw' : '7vw',
              }}
            >
              Great, you finished the 1 minute typing game{' '}
            </Typography.Text>
          }
          subTitle={
            <Descriptions
              items={resultItems}
              column={1}
              style={{ marginLeft: '30%', marginTop: '4%' }}
              labelStyle={{
                fontSize: window.innerWidth > breakpoint ? '1.5vw' : '5vw',
              }}
              contentStyle={{
                fontSize: window.innerWidth > breakpoint ? '1.5vw' : '5vw',
              }}
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
