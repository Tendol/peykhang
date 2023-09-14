/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import useKeyPress from '../../../Helper/useKeyPress';
import { Button, Card, Descriptions, Result, Typography } from 'antd';
import './Board.css';

interface BoardProps {
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  setAccuracy: React.Dispatch<React.SetStateAction<number>>;
  setFinished: React.Dispatch<React.SetStateAction<boolean>>;
  setWpm: React.Dispatch<React.SetStateAction<number>>;
  error: boolean;
  initialWords: string;
  setDisableInput: React.Dispatch<React.SetStateAction<boolean>>;
}

const FONT_SIZE = ' calc(10px + 4vmin)';
const TIMER = 60000;
const OUTGOING_CHAR_SHOW = -22;

const Board = ({
  initialWords,
  setError,
  setAccuracy,
  setFinished,
  setWpm,
  error,
  setDisableInput,
}: BoardProps) => {
  const [outgoingChars, setOutgoingChars] = useState('');
  const [currentChar, setCurrentChar] = useState(initialWords.charAt(0));
  const [incomingChars, setIncomingChars] = useState(initialWords.substring(1));
  const [storeChars, setStoreChars] = useState('');
  const [leftPadding, setLeftPadding] = useState(
    new Array(20).fill(' ').join(''),
  );
  const [wordCount, setWordCount] = useState(0);
  const [typedChars, setTypedChars] = useState('');
  const [startTime, setStartTime] = useState(false);

  React.useEffect(() => {
    if (startTime) {
      const timer = setTimeout(() => {
        setStartTime(false);
        setDisableInput(true);
        setCurrentChar('');
      }, TIMER);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [startTime]);

  useKeyPress((key: string) => {
    if (!startTime) {
      setStartTime(true);
    }
    let updatedOutgoingChars = outgoingChars;
    let updatedIncomingChars = incomingChars;
    let updatedStoreChars = storeChars;

    if (key === currentChar) {
      setError(false);

      if (leftPadding.length > 0) {
        setLeftPadding(leftPadding.substring(1));
      }

      // when the characters have vowel, or rang-go lang-go
      if (
        incomingChars.charCodeAt(0) >= 3953 &&
        incomingChars.charCodeAt(0) < 4028
      ) {
        updatedStoreChars += currentChar;
        setStoreChars(updatedStoreChars);
      }

      // when it is a new alphabet
      if (incomingChars.charCodeAt(0) < 3953) {
        updatedOutgoingChars += storeChars + currentChar;
        setOutgoingChars(updatedOutgoingChars);
        setStoreChars('');
      }

      setCurrentChar(incomingChars.charAt(0));

      updatedIncomingChars = incomingChars.substring(1);
      setIncomingChars(updatedIncomingChars);

      if (incomingChars.charAt(0) === '་' || incomingChars.charAt(0) === '།') {
        setWordCount(wordCount + 1);
      }
    } else {
      // when the characters have vowel, or rang-go lang-go
      setError(true);
    }

    const updatedTypedChars = typedChars + key;
    setTypedChars(updatedTypedChars);

    const acc = (
      (updatedOutgoingChars.length * 100) /
      updatedTypedChars.length
    ).toFixed(2);
    setAccuracy(Number(acc));
    setWpm(wordCount);
    setFinished(true);
  });

  return (
    <Card style={{ marginBottom: '3%', textAlign: 'center' }}>
      <Typography.Paragraph
        style={{
          whiteSpace: 'pre',
          fontSize: ' calc(30px + 4vmin)',
          overflow: 'hidden',
        }}
      >
        <Typography.Text
          style={{ fontSize: FONT_SIZE, textAlign: 'center' }}
          className="Character-out"
        >
          {(leftPadding + outgoingChars).slice(-22)}
        </Typography.Text>
        <Typography.Text
          className={`${!error ? 'Character-current' : 'Character-error'}`}
          style={{ fontSize: FONT_SIZE }}
        >
          {storeChars + currentChar}
        </Typography.Text>
        <Typography.Text style={{ fontSize: FONT_SIZE }}>
          {incomingChars.substring(0, 22)}
        </Typography.Text>
      </Typography.Paragraph>
    </Card>
  );
};
export default Board;
