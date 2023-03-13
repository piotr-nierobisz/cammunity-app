import { Globals } from '@app/constants';
import React from 'react';

export default function ContextFactory<T>() {
  const QuestionCtx = React.createContext<T | undefined>(undefined);

  function useContext() {
    const context = React.useContext(QuestionCtx);

    if (!context) {
      throw new Error(Globals.ERRORS.UNABLE_TO_CREATE_CONTEXT);
    }

    return context;
  }

  return [useContext, QuestionCtx.Provider] as const;
}