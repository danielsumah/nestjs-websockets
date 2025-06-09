import { MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { Socket } from 'socket.io'
@WebSocketGateway(3003, {})
export class ChatGateWay {
    @SubscribeMessage('events')
    handleEvent(client: Socket, message: any) {
        console.log({ message })
        client.emit('response', `You sent: ${message}`)
    }
}