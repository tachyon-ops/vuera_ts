//src/components/DashboardTitle.react.tsx
import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

interface FooProps {
  foo: string;
}

const TestA = (props: FooProps): JSX.Element => <>{props.foo}</>;
class TestB extends React.Component<FooProps> {
  render(): React.ReactNode {
    return <p>{this.props.foo}</p>;
  }
}

// const TestC = (props: FooProps) => <p>{props.foo}</p>;

// const TestC = (props: FooProps): JSX.Element => <p>{props.foo}</p>;
// const TestAA: React.FC<FooProps> = (props) => <div>{props.foo}</div>;
// const TestBA: React.FC<FooProps> = (props) => <>{props.foo}</>;
// const TestAB: React.FC<FooProps> = (props) => {
//   return <>{props.foo}</>;
// };
// const TestBB: React.FC<FooProps> = (props) => {
//   return <div>{props.foo}</div>;
// };

function Test(props: FooProps) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <>{` ${props.foo} counter: ${seconds}`}</>;
}

interface Props {
  title: string;
}

export function DashboardTitleReact(props: Props): JSX.Element {
  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            {props.title}
          </Typography>
          <Typography variant="h6" color="inherit">
            <Test foo="bar" />
          </Typography>
          {/* <TestAA foo="barAA" /> */}
          {/* <TestBA foo="barBA" /> */}
          {/* <TestAB foo="barAB" /> */}
          {/* <TestBB foo="barBB" /> */}
          <TestA foo="TestA without further JSX" />
          <TestB foo="TestB Class with further JSX" />
          {/* <TestC foo="TestA FC with further JSX" /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
