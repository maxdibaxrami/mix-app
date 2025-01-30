import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from '../api/base';

// Define the structure of a user (simplified based on your sample)
interface User {
  id: number;
  telegramId: string;
  username: string;
  firstName: string;
  lastName: string | null;
  city: string;
  country: string;
  languages: string[];
  interests: number[];
  height: number;
  premium: boolean;
  activityScore: number | null;
  gender: string;
  lookingFor: string;
  relationStatus: string;
  sexuality: string;
  education: string;
  work: string;
  hobbies: string | null;
  profileViews: number[] | null;
  lastActive: string | null;
  bio: string;
  verifiedAccount: boolean;
  blockedUsers: number[] | null;
  favoriteUsers: number[] | null;
  isDeleted: boolean;
  language: string;
  lat: string | null;
  lon: string | null;
  age: number | null;
  languagePreferences: string[] | null;
  photos: { id: number; largeurl:string; smallUrl:string ; order: number }[]; // Photos array
}

// Define the structure of a match
interface Match {
  id: number;
  matchedAt: string;
  user: User;
  likedUser: User;
}

// Define the state for matches
interface MatchState {
  data: Match[] | null;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: MatchState = {
  data: null,
  loading: true,
  error: null,
};

// Thunk to fetch matches (user matches)
export const fetchMatches = createAsyncThunk(
  'match/fetchMatches',
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/matches/user/${userId}`);
      return response.data as Match[]; // Explicitly type the response
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to fetch matches');
    }
  }
);

// Create the match slice
const matchSlice = createSlice({
  name: 'match',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch matches cases
      .addCase(fetchMatches.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMatches.fulfilled, (state, action: PayloadAction<Match[]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMatches.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'Failed to fetch matches';
      });
  },
});

export default matchSlice.reducer;
