import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { User } from 'firebase/auth';
import { logInWithGoogle } from '../../firebase/logInWithGoogle';
import { logOutFromAccount } from '../../firebase/logout';

type State = {
  user: User | null,
  isLoading: boolean,
  isError: string,
}

const initialState: State = {
  user: null,
  isLoading: false,
  isError: '',
}

export const logIn = createAsyncThunk('login/users', logInWithGoogle)
export const logOut = createAsyncThunk('logout/users', logOutFromAccount)

const userSlice = createSlice({
  name: 'userInfo',
  initialState: initialState as State,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.isLoading = false;
      state.user = action.payload
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },

  extraReducers: (bulider) => {
    bulider.addCase(
      logIn.pending,
      (state) => { state.isLoading = true }
    );

    bulider.addCase(
      logIn.fulfilled,
      (state, action: PayloadAction<User | null>) => {
        state.isLoading = false;
        state.user = action.payload;
      }
    );

    bulider.addCase(
      logIn.rejected,
      (state) => {
        state.isLoading = false;
        state.user = null;
        state.isError = 'problem with authorization, try it later'
      }
    );

    bulider.addCase(
      logOut.fulfilled,
      (state) => { state.user = null }
    )
  }
});

export default userSlice.reducer;
export const { setUser, setLoading } = userSlice.actions;