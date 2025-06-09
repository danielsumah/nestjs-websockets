import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from 'socket.io'
@WebSocketGateway(3003, {})
export class ChatGateWay {
    @WebSocketServer() server: Server

    @SubscribeMessage('events')
    handleEvent(client: Socket, message: any) {
        console.log({ message })
        client.emit('response', `You sent: ${message}`)
        this.server.emit('response', `Someone sent: ${message}`)

    }
}