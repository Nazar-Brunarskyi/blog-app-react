import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './state/UserSlice';

export const store = configureStore({
  reducer: {
    userInfo: UserSlice,
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      // Ignore these action types
      ignoredActions: ["userInfo/setUser", "login/users/fulfilled"],
      // Ignore these field paths in all actions
      ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
      // Ignore these paths in the state
      ignoredPaths: ['userInfo.user'],
    },
  }),
});
