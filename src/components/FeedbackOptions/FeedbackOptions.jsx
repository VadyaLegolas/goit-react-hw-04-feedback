import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(label => {
        const labelFirstLetterUpperCase = label.charAt(0).toUpperCase() + label.slice(1)
        return (
          <Button
            key={label}
            onClick={() => {
              onLeaveFeedback(label);
            }}
          >
            {labelFirstLetterUpperCase}
          </Button>
        );
      })}
    </>
  );
};
