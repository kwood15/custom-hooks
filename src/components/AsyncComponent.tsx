// @ts-nocheck
import {
  ReactElement,
  JSXElementConstructor,
  useState,
  useEffect
} from 'react';

interface AsyncComponentState {
  component: ReactElement | null;
}

export default function asyncComponent(
  importComponent: () => any,
  isLoading: boolean = false
): ReactElement<any, string | JSXElementConstructor<any>> | boolean {
  function AsyncComponent(props: any): AsyncComponentState {
    const [component, setComponent] = useState<AsyncComponentState | null>(
      null
    );

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
