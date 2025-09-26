interface CardProps {
    title: string;
    description: string;
    image: string;
    link: string;   
    category?: string;
    className?: string;
}

// Add these types for the hook
interface CardItem extends Omit<CardProps, 'className'> {
    id: number;
}

interface UseCardsReturn {
    cardsData: CardItem[];
    cardClassName: string;
}

export type { CardProps, CardItem, UseCardsReturn };