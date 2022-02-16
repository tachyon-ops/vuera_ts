//src/components/DashboardTitle.react.tsx
import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { ReactInVue } from "vuera_ts_lib";

interface FooProps {
  foo: string;
}

// const TestA = (props: FooProps): JSX.Element => <p>{props.foo}</p>;
// const TestC = (props: FooProps): JSX.Element => <p>{props.foo}</p>;
const TestAA: React.FC<FooProps> = (props) => <div>{props.foo}</div>;
const TestBA: React.FC<FooProps> = (props) => <>{props.foo}</>;
const TestAB: React.FC<FooProps> = (props) => {
  return <>{props.foo}</>;
};
const TestBB: React.FC<FooProps> = (props) => {
  return <>{props.foo}</>;
};

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
          <TestBA foo="barBA" />
          <TestAB foo="barAB" />
          <TestBB foo="barBB" />
        </Toolbar>
      </AppBar>
    </div>
  );
}
