import { MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";

@WebSocketGateway(3003, {})
export class ChatGateWay {
    @SubscribeMessage('events')
    handleEvent(@MessageBody() data: any): string {
        console.log(data)
        return data;
    }
}