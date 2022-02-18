import React from "react";

interface FooProps {
  foo: string;
}

const TestA = () => <>TestA</>;
const TestB = () => <p>TestB</p>;

export const Test: React.FC<FooProps> = ({ foo }) => (
  <div
    style={{
      padding: 10,
      color: "black",
      borderColor: "green",
      borderWidth: 10,
      borderStyle: "solid",
    }}
  >
    Hello world from react. Foo: {foo}
    <br />
    <TestA />
    <TestB />
  </div>
);
