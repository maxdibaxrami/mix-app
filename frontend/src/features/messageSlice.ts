import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the structure for a message
interface Message {
    senderId: string;
    recipientId: string;
    content?: string; // Required property
    mediaUrl?: string; // Optional property
    timestamp: string;
  }

// Define the state for messages
interface MessageState {
  data: Message[]; 
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: MessageState = {
  data: [],
  loading: false,
  error: null,
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    // Add a new message to the state
    addMessage: (state, action: PayloadAction<Message>) => {
      state.data.push(action.payload);
    },
    // Set messages (e.g., when loading previous messages)
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.data = action.payload;
    },
    // Set loading status
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    // Handle errors
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { addMessage, setMessages, setLoading, setError } = messageSlice.actions;
export default messageSlice.reducer;
