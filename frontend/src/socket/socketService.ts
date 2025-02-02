// @ts-ignore
import { io } from 'socket.io-client';

const SERVER_URL = 'https://copychic.ru'; // Update this to match your backend URL

class SocketService {
  // @ts-ignore
  private socket: Socket | null = null;

  // Initialize the socket connection
  public connect(userId: string, recipientId: string) {
    if (!this.socket) {
      this.socket = io(SERVER_URL, {
        query: { userId },
      });

      // Handle connection and events
      this.socket.on('connect', () => {
        console.log(`Connected as user: ${userId}, ${recipientId}`);
      });

      // Listen for new messages
      this.socket.on('message', (message: any) => {
        console.log(`New message from ${message.senderId}: ${message.content}`);
        // Here, you can handle receiving messages (e.g., update state in the component)
      });

      // Handle disconnection
      this.socket.on('disconnect', () => {
        console.log('Disconnected from server.');
      });

      // Handle any connection errors
      this.socket.on('connect_error', (err: any) => {
        console.error('Connection failed:', err.message);
      });
    }
  }

  // Send a message
  public sendMessage(senderId: string, recipientId: string, content: string) {
    if (this.socket) {
      this.socket.emit('sendMessage', {
        senderId,
        recipientId,
        content,
      });
    } else {
      console.error('Socket connection not established!');
    }
  }

  public sendMessageImage(senderId: string, recipientId: string, content :string , mediaUrl: string) {
    if (this.socket) {
      this.socket.emit('sendMessage', {
        senderId,
        recipientId,
        mediaUrl,
        content,
      });
    } else {
      console.error('Socket connection not established!');
    }
  }


  // Disconnect the socket
  public disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      console.log('Socket disconnected');
    }
  }

  // Listen for other events if necessary (e.g., user online status, typing)
  public on(event: string, callback: Function) {
    if (this.socket) {
      this.socket.on(event, callback);
    }
  }

  // Cleanup and disconnect socket when needed
  public cleanup() {
    if (this.socket) {
      this.socket.removeAllListeners();
      this.socket.disconnect();
      this.socket = null;
    }
  }
}

// Exporting a singleton instance to use across your app
export default new SocketService();
