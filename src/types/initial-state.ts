import { store } from '../store';

export type InitialState = ReturnType<typeof store.getState>;
