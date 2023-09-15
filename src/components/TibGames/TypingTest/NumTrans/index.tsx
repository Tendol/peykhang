export const NumTrans = (number: any) => {
  let numbers = number.toString();
  numbers = [...numbers];
  const tibNum = numbers.map((digit: string) =>
    String.fromCharCode(digit.charCodeAt(0) + 3824),
  );

  const index = tibNum.length - 3;
  if (tibNum.length > 2) {
    if (tibNum[index].charCodeAt(0) === 3870) {
      tibNum[index] = '.';
    }
  }

  return tibNum;
};
