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

export interface PostData {
  title: string;
  content: string;
  image?: string;
  category?: string;
}

export interface ButtonProps {
  text: string;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-lg' | 'rounded-full';
   color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'gray';
  onClick: () => void;


}