import React from "react";
import ReactDOM from "react-dom";
import VueWrapper from "./Vue";

const makeReactContainer = (Component: any) => {
  return class ReactInVue extends React.Component {
    static displayName = `ReactInVue${
      Component.displayName || Component.name || "Component"
    }`;

    constructor(props: any) {
      super(props);

      /**
       * We create a stateful component in order to attach a ref on it. We will use that ref to
       * update component's state, which seems better than re-rendering the whole thing with
       * ReactDOM.
       */
      this.state = { ...props };
    }

    wrapVueChildren(children: any) {
      return {
        render: (createElement: any) => createElement("div", children),
      };
    }

    render() {
      const {
        children,
        // Vue attaches an event handler, but it is missing an event name, so
        // it ends up using an empty string. Prevent passing an empty string
        // named prop to React.
        "": _invoker,
        ...rest
      } = (this as any).state;
      const wrappedChildren = this.wrapVueChildren(children);

      const VueWrapperRender = VueWrapper as unknown as (props: {
        component: any;
      }) => JSX.Element;
      return (
        <Component {...rest}>
          {children && <VueWrapperRender component={wrappedChildren} />}
        </Component>
      );
    }
  };
};

export default {
  props: ["component", "passedProps"],
  render(createElement: any) {
    return createElement("div", { ref: "react" });
  },
  methods: {
    mountReactComponent(component: any) {
      const Component = makeReactContainer(component);
      const children =
        (this as any).$slots.default !== undefined
          ? { children: (this as any).$slots.default }
          : {};
      ReactDOM.render(
        <Component
          {...(this as any).$props.passedProps}
          {...(this as any).$attrs}
          {...(this as any).$listeners}
          {...children}
          ref={(ref) => ((this as any).reactComponentRef = ref)}
        />,
        (this as any).$refs.react
      );
    },
  },
  mounted() {
    (this as any).mountReactComponent((this as any).$props.component);
  },
  beforeDestroy() {
    ReactDOM.unmountComponentAtNode((this as any).$refs.react);
  },
  updated() {
    /**
     * AFAIK, this is the only way to update children. It doesn't seem to be possible to watch
     * `$slots` or `$children`.
     */
    if ((this as any).$slots.default !== undefined) {
      (this as any).reactComponentRef.setState({
        children: (this as any).$slots.default,
      });
    } else {
      (this as any).reactComponentRef.setState({ children: null });
    }
  },
  inheritAttrs: false,
  watch: {
    $attrs: {
      handler() {
        (this as any).reactComponentRef.setState({ ...(this as any).$attrs });
      },
      deep: true,
    },
    "$props.component": {
      handler(newValue: any) {
        (this as any).mountReactComponent(newValue);
      },
    },
    $listeners: {
      handler() {
        (this as any).reactComponentRef.setState({
          ...(this as any).$listeners,
        });
      },
      deep: true,
    },
    "$props.passedProps": {
      handler() {
        (this as any).reactComponentRef.setState({
          ...(this as any).$props.passedProps,
        });
      },
      deep: true,
    },
  },
};
