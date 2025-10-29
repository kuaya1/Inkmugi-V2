
export enum MessageRole {
  USER = 'user',
  MODEL = 'model',
}

export interface ChatMessage {
  role: MessageRole;
  text: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export enum AppView {
  CHAT = 'chat',
  QUIZ = 'quiz',
  VIRTUAL_TRY_ON = 'virtual_try_on',
}
