import React from 'react'
import CardReview from "./_components/ratingCard/card-review";

export default function page() {
  return (
    <>
      <div className='m-10 flex flex-col items-start'>
        <h1 className='text-large font-sans mb-10 tracking-wider'>Welcome!</h1>
        <p className='text-large font-sans tracking-wider'>Tornei-me fluente nos conceitos de Programação Web.</p>
        <p className='text-large font-sans tracking-wider'>This Page = Next.js + Responsividade </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 my-20 mx-5">
        <CardReview
          linkedIn='https://www.linkedin.com/in/nevesduarte/'
          content="Sabedoria, consistência, disponibilidade... (Irei encher os comentários 😂). Grato pelo conhecimento que recebi desde a lógica de programação até ao uso das atuais Frameworks. Responsável por 73% da minha evolução!"
          createdAt="2024-12-28"
          rating={5}
          title="Orientação preciosa"
          user={{
            name: "Duarte Neves",
            avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c",
          }}
        />
        <CardReview
          linkedIn='https://www.linkedin.com/in/luciostuderferreira/'
          content="A dedicação e empenho em ensinar do professor fizeram com que eu saísse rapidamente da minha zona de conforto."
          createdAt="2024-12-28"
          rating={5}
          title="Ajuda indispensável"
          user={{
            name: "Lúcio Studer",
            avatar: "https://i.pravatar.cc/150?u=a04258114e29026708b",
          }}
        />
        <CardReview
          linkedIn='https://www.linkedin.com/in/martimmourao/'
          content="O evento Hands-on do professor me permitiu ter uma visão ampla e clara da utilidade das recentes tecnologias."
          createdAt="2024-12-28"
          rating={5}
          title="Presença forte"
          user={{
            name: "Martim Mourão",
            avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c",
          }}
        />
      </div>
      <p className='text-medium font-sans font-bold mx-10 mb-20 italic tracking-wider'>"Serei eternamente grato pelo conhecimento que adquiri com os professores!"</p>
    </>
  );
}
