import React from 'react';

const MyComponent: React.FC<MyComponentProps> = (props) => {
  const { text } = props;

  return <div>{text}</div>;
};

interface MyComponentProps {
  text: string;
}

export default MyComponent;
