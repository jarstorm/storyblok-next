import { createWrapper } from "next-redux-wrapper";
import { reducer } from "../reducers";
import { configureStore } from '@reduxjs/toolkit';

const makeStore = () =>
  configureStore({reducer});

export const wrapper = createWrapper(makeStore, { debug: true });
