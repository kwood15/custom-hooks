import {
  ReactElement,
  JSXElementConstructor,
  useState,
  useEffect
} from 'react';

export default function asyncComponent(
  importComponent: () => any
): ReactElement<any, string | JSXElementConstructor<any>> {
  function AsyncComponent(
    props: any
  ): ReactElement<any, string | JSXElementConstructor<any>> {
    const [component, setComponent] = useState<ReactElement | null>(null);

    useEffect(() => {
      async function getComponent() {
        const { default: component } = await importComponent();
        setComponent(component);
      }
      getComponent();
    }, []);

    const C = component;

    // @ts-ignore
    return C ? <C {...props} /> : null;
  }

  // @ts-ignore
  return AsyncComponent;
}
