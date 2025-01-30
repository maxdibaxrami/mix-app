import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from '../api/base';

// Define the structure of a user (same as before)
interface User {
  id: number;
  firstName: string;
  age: number;
  photo: string;
}

interface NearByState {
  data: User[] | null;
  loading: boolean;
  loadingMore:boolean;
  error: string | null;
  page: number;
  limit: number;
  total: number;
  genderFilter: string | null;

  filters: {
    ageRange: string | null;
    city: string | null;
    country: string | null;
    languages: string | null;
  };
}

// Initial state
const initialState: NearByState = {
  data: null,
  loading: true,
  error: null,
  loadingMore: false,
  page: 1, // Start from the first page
  limit: 10, // Number of users to fetch per page
  total: 0,  // Total number of users available
  genderFilter:null,
  filters: {
    ageRange: null,
    city: null,
    country: null,
    languages: null,
  },
};

// Utility function to build query params
const buildQueryParams = (params: { [key: string]: any }) => {
  const queryParams = new URLSearchParams();

  // Add only non-empty parameters to the query string
  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== '') {
      queryParams.append(key, value.toString());
    }
  });

  return queryParams.toString();
};

// Thunk to fetch filtered users (explore feature) with pagination
export const fetchNearBySliceUsers = createAsyncThunk(
  'nearBy/fetchNearBySliceUsers',
  async (
    {
      userId,
      ageRange,
      city,
      country,
      languages,
      latitude,
      longitude,
      radius,
      page,
      limit,
      genderFilter, // Add gender filter here
    }: {
      userId: string;
      ageRange?: string;
      city?: string;
      country?: string;
      languages?: string;
      latitude?: number;
      longitude?: number;
      radius?: number;
      page: number;
      limit: number;
      genderFilter?: string; // Optional genderFilter
    },
    { rejectWithValue }
  ) => {
    try {
      // Build the query string with non-empty params
      const queryParams = buildQueryParams({
        ageRange,
        city,
        country,
        languages,
        latitude,
        longitude,
        radius,
        page,
        limit,
        genderFilter, // Include genderFilter in query params
      });

      // Make the API call to fetch the users with the filters and pagination
      const response = await axios.get(`/users/explore/basic/${userId}?${queryParams}`);
      return response.data as { users: User[]; total: number }; // Return users and total count
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to fetch explore users');
    }
  }
);


// Create the explore slice with pagination, dynamic data fetching, and filter management
const NearBySlice = createSlice({
  name: 'nearby',
  initialState,
  reducers: {
    // Action to update filters
    setFilters: (state, action: PayloadAction<NearByState['filters'] & { genderFilter: string | null }>) => {
      state.filters = action.payload;
      state.genderFilter = action.payload.genderFilter || null; // Add gender filter
      state.page = 1; // Reset to first page when filters are updated
      state.data = null; // Clear current data to fetch with new filters
    },
    
    // Action to remove a user from the state based on userId
    removeUserFromState: (state, action: PayloadAction<number>) => {
      state.loading = true;
      if (state.data) {
        state.data = state.data.filter((user) => user.id !== action.payload);
        state.loading = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNearBySliceUsers.pending, (state) => {
        state.page === 1 ? (state.loading = true) : (state.loadingMore = true);
        state.error = null;
      })
      .addCase(fetchNearBySliceUsers.fulfilled, (state, action: PayloadAction<{ users: User[]; total: number }>) => {
        state.page === 1 ? (state.loading = false) : (state.loadingMore = false);
        state.total = action.payload.total;

        state.data = state.data && state.data.length
          ? [...state.data, ...action.payload.users]
          : action.payload.users;

        state.page += 1;
      })
      .addCase(fetchNearBySliceUsers.rejected, (state, action) => {
        state.page === 1 ? (state.loading = false) : (state.loadingMore = false);
        state.error = action.payload as string || 'Failed to fetch explore users';
      });
  },
});

export const { setFilters, removeUserFromState } = NearBySlice.actions;
export default NearBySlice.reducer;

