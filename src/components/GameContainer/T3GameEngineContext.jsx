import { createContext, useContext, useState } from 'react';

const T3GameEngineContext = createContext();

export const T3GameEngineStateProvider = ({ children, t3GameEngineState }) => {
  return (
    <T3GameEngineContext.Provider value={{ t3GameEngineState }}>
      {children}
    </T3GameEngineContext.Provider>
  );
};

export const useT3GameEngineState = () => useContext(T3GameEngineContext);
