import { P } from "./Statistics.styled";

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <P>Good: {good}</P>
      <P>Neutral: {neutral}</P>
      <P>Bad: {bad}</P>
      <P>Total: {total}</P>
      <P>Positive feedback: {positivePercentage}%</P>
    </>
  );
};
