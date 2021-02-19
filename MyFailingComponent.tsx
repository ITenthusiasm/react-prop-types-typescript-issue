import React from 'react';

/** Fails even though TypeScript *correctly* identifies the type */
const MyFailingComponent: React.FC<MyFailingComponentProps> = (props) => {
  const { text } = props;

  return <div>{text}</div>;
};

interface MyFailingComponentProps {
  text: string;
}

export default MyFailingComponent;
