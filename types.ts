
export type LindyRole = 'SDR' | 'Recruiter' | 'Support' | 'Executive Assistant' | 'Growth' | 'Custom';

export interface LindyAgent {
  id: string;
  name: string;
  role: LindyRole;
  description: string;
  avatar: string;
  systemInstruction: string;
  isTemplate?: boolean;
  tasksCompleted: number;
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  content: string;
  timestamp: Date;
}

export interface AppState {
  agents: LindyAgent[];
  activeAgentId: string | null;
  messages: Record<string, Message[]>;
}
