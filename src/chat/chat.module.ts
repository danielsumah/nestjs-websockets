import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { ChatGateWay } from 'src/chat/chat.gateway';

@Module({
  controllers: [ChatController],
  providers: [ChatService, ChatGateWay],
})
export class ChatModule {}
