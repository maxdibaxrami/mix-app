import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserStatus {
  userId: string;
  isOnline: boolean;
}

interface StatusState {
  onlineUsers: UserStatus[];
}

const initialState: StatusState = {
  onlineUsers: [],
};

const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setUserOnline: (state, action: PayloadAction<UserStatus>) => {
      const existingUser = state.onlineUsers.find(u => u.userId === action.payload.userId);
      if (existingUser) {
        existingUser.isOnline = action.payload.isOnline;
      } else {
        state.onlineUsers.push(action.payload);
      }
    },
    setUserOffline: (state, action: PayloadAction<string>) => {
      state.onlineUsers = state.onlineUsers.filter(u => u.userId !== action.payload);
    },
  },
});

export const { setUserOnline, setUserOffline } = statusSlice.actions;
export default statusSlice.reducer;
