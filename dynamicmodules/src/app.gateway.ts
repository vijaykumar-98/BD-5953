import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({
  cors: { origin: '*' },
})
export class AppGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  private logger = new Logger(AppGateway.name);

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);

    // Server ➜ Client
    client.emit('welcome', 'Welcome to WebSocket server');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  // Client ➜ Server
  @SubscribeMessage('msgToServer')
  handleMessage(
    @MessageBody() message: string,
    @ConnectedSocket() client: Socket,
  ) {
    // Server ➜ Same client
    client.emit('msgToClient', `Server received: ${message}`);

    // Server ➜ All clients
    this.server.emit('broadcast', {
      from: client.id,
      message,
    });
  }
}
