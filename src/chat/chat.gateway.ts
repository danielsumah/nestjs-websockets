import { MessageBody, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from 'socket.io'
@WebSocketGateway(3003, {})
export class ChatGateWay implements OnGatewayConnection, OnGatewayDisconnect{
    @WebSocketServer() server: Server

    handleConnection(client: Socket, ...args: any[]) {
        client.broadcast.emit("user-joined", {
            message: `${client.id} joined the group`
        })
    }

    handleDisconnect(client: Socket) {
        this.server.emit("user-left", {
            message: `${client.id} left the group`
        })
    }

    @SubscribeMessage('new-message')
    handleEvent(client: Socket, message: any) {
        console.log({ message })
        client.emit('response', `You sent: ${message}`)
        this.server.emit('response', `Someone sent: ${message}`)

    }
}