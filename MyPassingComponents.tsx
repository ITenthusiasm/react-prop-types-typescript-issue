import React from 'react';

/** Passes with regular function component */
function MyComponent1(props: GeneralProps): React.ReactElement {
  const { text } = props;

  return <div>{text}</div>;
}

/** Passes when type is *redundantly* specified */
const MyComponent2: React.FC<GeneralProps> = (props: GeneralProps) => {
  const { text } = props;

  return <div>{text}</div>;
};

interface GeneralProps {
  text: string;
}

export { MyComponent1, MyComponent2 };
