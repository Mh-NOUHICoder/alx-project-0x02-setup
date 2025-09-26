// interfaces/index.ts

export interface CardProps {
  title: string;
  content: string;
  image: string;
  link: string;
  category?: string;
  className?: string;
}

// Type used in the hook (without className, with id)
export interface CardItem extends Omit<CardProps, 'className'> {
  id: number;
}

// Return type for the custom hook
export interface UseCardsReturn {
  cardsData: CardItem[];
  cardClassName: string;
}
