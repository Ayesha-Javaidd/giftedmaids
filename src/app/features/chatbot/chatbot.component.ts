import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css',
})
export class ChatbotComponent {
  messages: ChatbotMessage[] = [
    {
      text: '👋 Hello! How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ];

  userMessage: string = '';
  isMinimized: boolean = true; // start minimized (💬 icon only)

  sendMessage() {
    if (!this.userMessage.trim()) return;

    this.messages.push({
      text: this.userMessage,
      sender: 'user',
      timestamp: new Date(),
    });

    const temp = this.userMessage;
    this.userMessage = '';

    setTimeout(() => {
      this.messages.push({
        text: `You said: "${temp}"`,
        sender: 'bot',
        timestamp: new Date(),
      });
    }, 600);
  }

  toggleChat() {
    this.isMinimized = !this.isMinimized;
  }
}

export interface ChatbotMessage {
  text: string;
  sender: 'user' | 'bot';
  timestamp?: Date;
}
