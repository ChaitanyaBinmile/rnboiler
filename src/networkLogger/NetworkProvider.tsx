import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import Config from '../app/Config';
import { ButtonInterceptor } from '../customInterceptor/ButtonInterceptor/ButtonInterceptor';
// import { debugLog } from '../utils/Logger';
import { ChildrenType, ProviderType } from './type';

interface ILoggerProps {
  isOpen: boolean;
  toggleInterceptor: () => void;
}

// const TAG = 'NetworkLoggerProvider: ';
export const NetworkLoggerContext = createContext({} as ILoggerProps);

export function NetworkLoggerConsumer({ children }: ChildrenType) {
  return (
      <NetworkLoggerContext.Consumer>
          {(context) => {
            if (context === undefined) {
              throw new Error(
                'NetworkLoggerConsumer must be used within a NetworkLoggerProvider',
              );
            }
            return children(context);
          }}
      </NetworkLoggerContext.Consumer>
  );
}

export function NetworkLoggerProvider({ children }: ProviderType) {
  const [isOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    // debugLog(TAG, `logger status -> ${isOpen}`);
  }, [isOpen]);

  const toggleInterceptor = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);

  const mProps = useMemo(
    () => ({
      toggleInterceptor,
      isOpen,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isOpen],
  );
  return (
      <NetworkLoggerContext.Provider value={mProps}>
          {children}
          <ButtonInterceptor show={Config?.useInterceptor} />
      </NetworkLoggerContext.Provider>
  );
}
