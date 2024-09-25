import React, { Component, ErrorInfo, ReactNode } from 'react';
import { View } from 'react-native';

type ErrorHandlerProps = {
  children?: JSX.Element[] | JSX.Element;
  onErrorComponent?: JSX.Element;
  componentName: string;
};

type ErrorHandlerState = {
  hasError: boolean;
};

class ErrorHandler extends Component<ErrorHandlerProps, ErrorHandlerState> {
  constructor(props: ErrorHandlerProps) {
    super(props);
    this.state = { hasError: false };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error(error, errorInfo, 'error');
    const { componentName } = this.props;
    const fileName = componentName || '';
    console.log(fileName);
    //TODO : after Sentry integration we will add this function;
    // captureComponentErrors(error, fileName);
    this.setState({ hasError: true });
  }

  render(): ReactNode {
    const { hasError } = this.state;
    const { children, onErrorComponent } = this.props;

    if (onErrorComponent && hasError) {
      return <View>{onErrorComponent}</View>;
    }

    return hasError ? <View /> : children;
  }
}

export default ErrorHandler;
