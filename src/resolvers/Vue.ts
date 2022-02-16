import ReactWrapper from "../wrappers/React";

export default function VueResolver<T>(component: (props: T) => any) {
  return {
    components: { ReactWrapper },
    props: ["passedProps"],
    inheritAttrs: false,
    render(createElement: any) {
      return createElement(
        "react-wrapper",
        {
          props: {
            component,
            passedProps: (this as any).$props.passedProps,
          },
          attrs: (this as any).$attrs,
          on: (this as any).$listeners,
        },
        (this as any).$slots.default
      );
    },
  } as unknown as (props: T) => JSX.Element;
}
