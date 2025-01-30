import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from '../api/base';

// Define the structure of a Conversation
interface Conversation {
  userId: number;
  lastMessage: string;
  firstName: string;
  photoUrl: string;
  readAt: any;
  lastMessageId: number;
  senderId: number;
  recipientId: number;
  senderFirstName: string;
  senderPhotoUrl: string;
}

// Define the state for conversations
interface ConversationState {
  data: Conversation[] | null;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: ConversationState = {
  data: null,
  loading: true,
  error: null,
};

// Thunk to fetch conversations for a given user
export const fetchConversations = createAsyncThunk(
  'message/fetchConversations',
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/messages/chat-list/${userId}`);
      return response.data as Conversation[]; // Explicitly type the response
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to fetch conversations');
    }
  }
);

export const deleteConversation = createAsyncThunk(
  'message/deleteConversation',
  async ({ userId1, userId2 }: { userId1: number; userId2: number }, { rejectWithValue }) => {
    try {
      await axios.delete(`/messages/conversation/${userId1}/${userId2}`);
      return { userId1, userId2 }; // Return the IDs of the deleted conversation
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to delete conversation');
    }
  }
);

// Create the conversation slice
const conversationSlice = createSlice({
  name: 'conversation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch conversations cases
      .addCase(fetchConversations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchConversations.fulfilled, (state, action: PayloadAction<Conversation[]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchConversations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'Failed to fetch conversations';
      })

      // Delete conversation cases
      .addCase(deleteConversation.fulfilled, (state, action: PayloadAction<{ userId1: number; userId2: number }>) => {
        state.loading = false;
        state.data = state.data?.filter(
          (conversation) => 
            !((conversation.senderId === action.payload.userId1 && conversation.recipientId === action.payload.userId2) ||
              (conversation.senderId === action.payload.userId2 && conversation.recipientId === action.payload.userId1))
        ) || null;
      })
      .addCase(deleteConversation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'Failed to delete conversation';
      });
  },
});

export default conversationSlice.reducer;
