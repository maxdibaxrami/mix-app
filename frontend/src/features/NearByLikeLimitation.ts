import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LikeState {
  likesCount: number;
  lastReset: number;
  requestLoading: boolean;
}

const initialState: LikeState = {
  likesCount: parseInt(localStorage.getItem('nearbylikesCount') || '0', 10),
  lastReset: parseInt(localStorage.getItem('nearbylastReset') || '0', 10),
  requestLoading: false,
};

const NearByLimitationSlice = createSlice({
  name: 'nearbylike',
  initialState,
  reducers: {
    incrementLikes: (state) => {
      state.likesCount += 1;
      localStorage.setItem('nearbylikesCount', state.likesCount.toString());
    },
    resetLikes: (state) => {
      state.likesCount = 0;
      localStorage.setItem('nearbylikesCount', '0');
    },
    setLastReset: (state, action: PayloadAction<number>) => {
      state.lastReset = action.payload;
      localStorage.setItem('nearbylastReset', action.payload.toString());
    },
    setRequestLoading: (state, action: PayloadAction<boolean>) => {
      state.requestLoading = action.payload;
    },
  },
});

export const { incrementLikes, resetLikes, setLastReset, setRequestLoading } = NearByLimitationSlice.actions;

export default NearByLimitationSlice.reducer;
