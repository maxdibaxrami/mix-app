import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LikeState {
  likesCount: number;
  lastReset: number;
  requestLoading: boolean;
}

const initialState: LikeState = {
  likesCount: parseInt(localStorage.getItem('likesCount') || '0', 10),
  lastReset: parseInt(localStorage.getItem('lastReset') || '0', 10),
  requestLoading: false,
};

const likeLimitationSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    incrementLikes: (state) => {
      state.likesCount += 1;
      localStorage.setItem('likesCount', state.likesCount.toString());
    },
    resetLikes: (state) => {
      state.likesCount = 0;
      localStorage.setItem('likesCount', '0');
    },
    setLastReset: (state, action: PayloadAction<number>) => {
      state.lastReset = action.payload;
      localStorage.setItem('lastReset', action.payload.toString());
    },
    setRequestLoading: (state, action: PayloadAction<boolean>) => {
      state.requestLoading = action.payload;
    },
  },
});

export const { incrementLikes, resetLikes, setLastReset, setRequestLoading } = likeLimitationSlice.actions;

export default likeLimitationSlice.reducer;
