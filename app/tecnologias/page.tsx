import React from 'react';
import Image from 'next/image';
import tecnologias from '@/app/data/tecnologias.json';

export default function Page() {
  return <>
    <h1 className='m-10 text-large font-sans mb-10 tracking-wider'>Abaixo está tudo o que masterizei!</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-10">
      {tecnologias.map((tecnologia, index) => (
        <div key={index} className="flex flex-col items-center p-4 border rounded shadow-md">
          <Image
            src={tecnologia.image}
            alt={tecnologia.title}
            width={100}
            height={100}
            className="mb-4"
          />
          <h2 className="text-xl font-semibold mb-4">{tecnologia.title}</h2>
          <p className="text-gray-500 text-justify tracking-wider font-sans">{tecnologia.description}</p>
        </div>
      ))}
    </div>
  </>
}
