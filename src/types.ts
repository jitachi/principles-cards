export type Category = 'Functional' | 'Clear' | 'Precise' | 'Efficient' | 'Elegance' | 'Anticipation' | 'Delight' | 'Flow';

export interface Card {
  id: string;
  category: Category;
  question: string;
  answer: string;
} 