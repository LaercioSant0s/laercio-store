"use client";

import React from "react";
import { Button, Card, CardBody } from "@nextui-org/react";

export default function CustomCard({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) {
  return (
    <Card className="w-full max-w-[520px] mx-auto relative">
      {/* Botão superior direito */}
      <Button
        isIconOnly
        className="absolute right-2 top-2 z-20"
        radius="full"
        size="sm"
        variant="light"
      ></Button>

      <CardBody className="flex flex-col sm:flex-row p-0">
        {/* Ícone à esquerda */}
        <div className="flex items-center justify-center p-4">{icon}</div>

        {/* Texto à direita */}
        <div className="px-4 py-5">
          <h3 className="text-large font-medium">{title}</h3>
          <p className="text-small text-default-400">{description}</p>
        </div>
      </CardBody>
    </Card>
  );
}
