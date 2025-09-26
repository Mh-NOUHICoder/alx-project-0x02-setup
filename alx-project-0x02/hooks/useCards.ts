import { UseCardsReturn, CardItem } from '@/interfaces';

export const useCards = (): UseCardsReturn => {
    const cardsData: CardItem[] = [
        {
            id: 1,
            title: "Cozy Studio Apartment",
            description: "A modern, fully furnished studio apartment in the heart of the city.",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
            link: "/listing/1",
            category: "Studio",
        },
        {
            id: 2,
            title: "Luxury Beach House",
            description: "Enjoy the ocean view from this spacious beach house with all amenities.",
            image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
            link: "/listing/2",
            category: "Beach House",
        }
        , 
        {
            id: 3,
            title: "Mountain Cabin Retreat",
            description: "Escape to this cozy cabin surrounded by nature, perfect for a weekend getaway.",
            image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=80",
            link: "/listing/3",
            category: "Cabin",
        }
        ,
        {
            id: 5,
            title: "Countryside Villa",
            description: "Relax in this spacious villa with a private pool and stunning gardens.",
            image: "https://images.pexels.com/photos/20975735/pexels-photo-20975735.jpeg",
            link: "/listing/5",
            category: "Villa",
        }
    ];

      const cardClassName = "hover:scale-105 transition-transform duration-300 shadow-lg rounded-xl overflow-hidden";

    return { cardsData, cardClassName };
};