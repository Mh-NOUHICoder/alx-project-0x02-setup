import React from 'react';
import Header from "@/components/layout/Header";
import Card from "@/components/Card";
import { useCards } from "@/hooks/useCards";

const HomePage: React.FC = () => {
    const { cardsData, cardClassName } = useCards();

    return (
        <>
            <Header />
            <main className="max-w-5xl mx-auto p-6 sm:p-8">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Welcome to Our Homepage
                </h1>
                <div className="grid gap-6 sm:grid-cols-2">
                    {cardsData.map(card => (
                        <Card 
                            key={card.id}
                            {...card}
                            className={cardClassName}
                        />
                    ))}
                </div>
            </main>
        </>
    );
};

export default HomePage;