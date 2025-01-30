// src/features/referralSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/base';

// Async thunk for handling the referral API request
export const fetchReferralData = createAsyncThunk(
  'referral/fetchReferralData',
  async (referralId: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/users/referral/${referralId}/`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

// Async thunk for applying the referral reward (no need to store response)
export const applyReferralReward = createAsyncThunk(
  'referral/applyReferralReward',
  async (referralId: string, { rejectWithValue }) => {
    try {
      await axios.post(`/users/apply-referral-reward/${referralId}`);
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

const referralSlice = createSlice({
  name: 'referral',
  initialState: {
    data: null,
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReferralData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReferralData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchReferralData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handle the referral reward application status (if you want to show loading or error for this as well)
      .addCase(applyReferralReward.pending, (state) => {
        state.loading = true;
      })
      .addCase(applyReferralReward.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(applyReferralReward.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default referralSlice.reducer;
