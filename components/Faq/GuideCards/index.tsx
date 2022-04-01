import React from "react";
import GuideCard from "./Card";

function GuideCards() {
  interface CardTypes {
    img: string;
    title: string;
    id: number;
    link: string;
  }

  const cards: CardTypes[] = [
    {
      img: "/assets/image/question.png",
      title: "What is shared ownership?",
      id: 0,
      link: "/property/123",
    },
    {
      img: "/assets/image/docs.png",
      title: "Shared ownership eligibility?",
      id: 1,
      link: "/property/1243",
    },
    {
      img: "/assets/image/hand.png",
      title: "Benefits",
      id: 2,
      link: "/property/1223",
    },
    {
      img: "/assets/image/costs.png",
      title: "What are the costs involved?",
      id: 3,
      link: "/property/1263",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {cards.map((card) => (
        <GuideCard
          key={card.id}
          img={card.img}
          title={card.title}
          link={card.link}
        />
      ))}
    </div>
  );
}

export default GuideCards;
