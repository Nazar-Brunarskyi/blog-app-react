import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { User } from 'firebase/auth';
import { logInWithGoogle } from '../../firebase/login';

type State = {
  user: User | null,
  isLoading: boolean,
  isError: string,
}

const initialState: State = {
  user: null,
  isLoading: true,
  isError: '',
}

export const logIn = createAsyncThunk('login/users', logInWithGoogle)

const userSlice = createSlice({
  name: 'userInfo',
  initialState: initialState as State,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
  },

  extraReducers: (bulider) => {
    bulider.addCase(
      logIn.pending,
      (state) => { state.isLoading = true }
    );

    bulider.addCase(
      logIn.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.user = action.payload;
      }
    );

    bulider.addCase(
      logIn.rejected,
      (state) => {
        state.isLoading = false;
        state.isError = 'problem with authorization, try it later'
      }
    );
  }
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;