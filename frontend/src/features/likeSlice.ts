import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from '../api/base';

// Define the shape of a like (user data structure)
interface Like {
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
  profileViews: number;
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
  photos: any[];  // Photos array (you can define the structure as needed)
}

// Define the state for likes
interface LikeState {
  data: Like[] | null;
  loading: boolean;
  requestLoading: boolean;
  error: string | null;
  fetchLikeAntoherUser: Like[]| null,
  fetchLikeAntoherUserLoading:boolean
}

// Initial state
const initialState: LikeState = {
  data: null,
  loading: true,
  requestLoading:false,
  error: null,
  fetchLikeAntoherUser: null,
  fetchLikeAntoherUserLoading : true,
};

// Thunk to fetch like data (user details)
export const fetchLikes = createAsyncThunk(
  'like/fetchLikes',
  async (userId: string) => {
    const response = await axios.get(`/like/${userId}/likes`);
    return response.data as Like[]; // Explicitly type the response
  }
);

export const fetchLikesAnotherUser = createAsyncThunk(
  'like/fetchLikesAnotherUser',
  async (userId: string) => {
    const response = await axios.get(`/like/${userId}/likes`);
    return response.data as Like[]; // Explicitly type the response
  }
);

export const likeUser = createAsyncThunk(
  'like/likeUser',
  async ({ userId, likedUserId }: { userId: number; likedUserId: number }, { rejectWithValue }) => {
    try {
      // Making the POST request to like the user
      const response = await axios.post(`/like`, { userId, likedUserId });
      if(response.data.matchCreated){
        return {
          "likedUserId" : likedUserId,
          "isMatch":true
        };
      }
        return {
          "likedUserId" : likedUserId,
          "isMatch":false

        };
      
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to like user');
    }
  }
);

const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch like data cases
      .addCase(fetchLikes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLikes.fulfilled, (state, action: PayloadAction<Like[]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchLikes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch likes';
      })

      ////


      .addCase(fetchLikesAnotherUser.pending, (state) => {
        state.fetchLikeAntoherUserLoading = true;
        state.error = null;
      })
      .addCase(fetchLikesAnotherUser.fulfilled, (state, action: PayloadAction<Like[]>) => {
        state.fetchLikeAntoherUserLoading = false;
        state.fetchLikeAntoherUser = action.payload;
      })
      .addCase(fetchLikesAnotherUser.rejected, (state, action) => {
        state.fetchLikeAntoherUserLoading = false;
        state.error = action.error.message || 'Failed to fetch likes';
      })

      
      // Like user cases
      .addCase(likeUser.pending, (state) => {
        state.error = null;
        state.requestLoading = true;

      })
      .addCase(likeUser.fulfilled, (state, action: PayloadAction<{ likedUserId: number; isMatch: boolean }>) => {
        // Remove the liked user from the state
        state.data = state.data?.filter(user => user.id !== action.payload.likedUserId) || null;
        state.requestLoading = false;

        
      })
      .addCase(likeUser.rejected, (state, action) => {
        state.error = action.payload as string || 'Failed to like user';
        state.requestLoading = false;

      });
  },
});

export default likeSlice.reducer;