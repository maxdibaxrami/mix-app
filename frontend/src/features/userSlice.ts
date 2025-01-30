import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from '../api/base';

// Define the shape of the user data

const getLocalStorageData = (): UserData | null => {
  const storedData = localStorage.getItem('userDataFull');
  return storedData ? JSON.parse(storedData) : null;
};

interface Photo {
  id: number;
  large?:string; 
  small?:string ; 
  order: number;
  largeUrl?: string
}

interface ProfileData {
  lookingFor: string;
  education: string;
  work: string;
  bio: string;
}

interface MoreAboutMe {
  languages: string[];
  height: number;
  relationStatus: string;
  sexuality: string;
  kids: string | null;
  smoking: string | null;
  drink: string | null;
  pets: string | null;
}

interface shortuser {
  id:number;
  firstName?:string;
  age?:number;
  imageUrl?:string;
  verifiedAccount?:boolean;
  premium?:boolean;
}

interface UserData {
  id: number;
  telegramId: string;
  username: string;
  firstName: string;
  city: string;
  profileData: ProfileData;
  moreAboutMe: MoreAboutMe;
  country: string;
  interests: number[];
  premium: boolean;
  activityScore: number | null;
  gender: string;
  profileViews: shortuser[] | null;
  lastActive: string | null;
  verifiedAccount: boolean;
  photos: Photo[];
  blockedUsers: shortuser[] | null;
  favoriteUsers: shortuser[] | null;
  age: number;
  languagePreferences: string[] | null;
  isDeleted: boolean;
  language: string;
  lat: string;
  lon: string;
  profileViewsIds?: number[];
  giftUsers?:number[] | shortuser[] | null
  rewardPoints? : number
}

// Define the user state
interface UserState {
  data: UserData | null;
  loading: boolean;
  updateUserData: boolean;
  uploadProfileLoading: boolean;
  userPageData:UserData | null;
  userPageLoading:boolean;
  error: string | null;
  verifiedAccountLoading:boolean;
  verifiedAccountStatus:boolean;
}

// Initial state
const initialState: UserState = {
  data: getLocalStorageData() || null,
  loading: false,
  updateUserData: false,
  uploadProfileLoading: false,
  error: null,
  userPageData: null,
  userPageLoading: true,
  verifiedAccountLoading : false,
  verifiedAccountStatus : false,
};


export const fetchUserDataId = createAsyncThunk(
  'user/fetchDataById',  // Change action type here
  async (userId: string) => {
    const response = await axios.get(`/users/${userId}`);
    return response.data as UserData; // Explicitly type the response
  }
);
// Thunk to fetch user data
export const fetchUserData = createAsyncThunk(
  'user/fetchData',
  async (userId: string) => {
    const response = await axios.get(`/users/telegram/${userId}`);
    return response.data as UserData; // Explicitly type the response
  }
);

// Thunk to update user data
export const updateUserData = createAsyncThunk(
  'user/updateData',
  async ({ userId, updatedData }: { userId: string; updatedData: any }) => {
    const response = await axios.patch(`/users/${userId}`, updatedData);

    console.log(response.data)

    return response.data as Partial<UserData>; // Explicitly type the response
  }
);

export const updateUserProfileViews = createAsyncThunk(
  'user/updateUserProfileViews',
  async ({ userId, updatedData }: { userId: string; updatedData: any }) => {
    const response = await axios.patch(`/users/${userId}`, updatedData);

    console.log(response.data)

    return response.data as Partial<UserData>; // Explicitly type the response
  }
);


export const updateUserPhoto = createAsyncThunk(
  'user/updatePhoto',
  async ({ userId, photoFile }: { userId: string; photoFile: File }, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('file', photoFile);

      const response = await axios.patch(`/photo/update-file/${userId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        maxBodyLength: Infinity, // Allow large body sizes
        maxContentLength: Infinity, // Allow large content sizes
      });

      return response.data as Photo;
    } catch (error: any) {
      return rejectWithValue(error.response.data || 'Failed to update photo');
    }
  }
);

export const uploadProfileImage = createAsyncThunk(
  'auth/uploadProfileImage',
  async ({ userId, imageFile, order }: any) => {
    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('userId', userId);
    formData.append('order', order);

    const response = await axios.post(`/photo/upload/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      maxBodyLength: Infinity, // Allow large body sizes
      maxContentLength: Infinity, // Allow large content sizes
    });
    return response.data;
  }
);


export const verifyUserPhoto = createAsyncThunk(
  'user/verifyPhoto',
  async ({ userId, photoFile }: { userId: string; photoFile: File }, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('userId', userId);
      formData.append('file', photoFile);

      const response = await axios.post('/photo/verify', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        maxBodyLength: Infinity, // Allow large body sizes
      });

      return response.data; // Return the response which includes verified and similarity
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch user data cases
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action: PayloadAction<UserData>) => {
        state.loading = false;
        state.data = action.payload;

        // Save the fetched data to localStorage
        localStorage.setItem('userDataFull', JSON.stringify(action.payload));
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch user data';
        console.log(action.error.code)
        if(action.error.code === "ERR_BAD_REQUEST"){
          localStorage.clear();
          state.data = null;
        }
      })

      // handle user id 

      .addCase(fetchUserDataId.pending, (state) => {
        state.userPageLoading = true;
        state.error = null;
      })
      .addCase(fetchUserDataId.fulfilled, (state, action: PayloadAction<UserData>) => {
        state.userPageLoading = false;
        state.userPageData = action.payload;
      })
      .addCase(fetchUserDataId.rejected, (state, action) => {
        state.userPageLoading = false;
        state.error = action.error.message || 'Failed to fetch user data';
      })

      // Handle user update cases
      .addCase(updateUserData.pending, (state) => {
        state.updateUserData = true;
        state.error = null;
      })
      .addCase(updateUserData.fulfilled, (state, action: PayloadAction<Partial<UserData>>) => {
        state.updateUserData = false;

        if (state.data) {
          state.data = { ...state.data, ...action.payload };
        } else {
          state.data = action.payload as UserData;
        }
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.updateUserData = false;
        state.error = action.error.message || 'Failed to update user data';
        console.log(action.error.message)

      })
      // Handle update user photo cases
      .addCase(updateUserPhoto.pending, (state) => {
        state.uploadProfileLoading = true;
        state.error = null;
      })
      .addCase(updateUserPhoto.fulfilled, (state, action: PayloadAction<Photo>) => {
        state.uploadProfileLoading = false;

        if (state.data) {
          const updatedPhotos = state.data.photos.map(photo => 
            photo.id === action.payload.id ? action.payload : photo
          );

          state.data.photos = updatedPhotos;
        }
      })
      .addCase(updateUserPhoto.rejected, (state, action) => {
        state.uploadProfileLoading = false;
        state.error = action.payload as string || 'Failed to update photo';
        console.log(action.payload as string)

      })
      // Handle upload profile image cases
      .addCase(uploadProfileImage.pending, (state) => {
        state.uploadProfileLoading = true;
        state.error = null;
        
      })
      .addCase(uploadProfileImage.fulfilled, (state, action: PayloadAction<Photo>) => {
        state.uploadProfileLoading = false;

        if (state.data) {
          state.data.photos.push(action.payload);
        }
      })
      .addCase(uploadProfileImage.rejected, (state, action) => {
        state.uploadProfileLoading = false;
        state.error = action.error.message || 'Failed to upload profile image';
        console.log(state.error)
      })

      .addCase(verifyUserPhoto.pending, (state) => {
        state.verifiedAccountLoading = true;
        state.error = null;
        state.verifiedAccountStatus= false;
      })
      .addCase(verifyUserPhoto.fulfilled, (state, action) => {
        state.verifiedAccountLoading = false;

        // Update verifiedAccount based on the response
        if (state.data) {
          state.data.verifiedAccount = action.payload.verified || false;
        }
      })
      .addCase(verifyUserPhoto.rejected, (state, action) => {
        state.verifiedAccountLoading = false;
        state.verifiedAccountStatus= true;
        state.error = action.payload as string || 'Failed to verify photo';
      });

  },
});

export default userSlice.reducer;
