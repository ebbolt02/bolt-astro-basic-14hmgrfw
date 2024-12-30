import React from 'react';
import { Box, Calculator, Layers, Users } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { ServiceCarousel } from './ServiceCarousel';

const services = [
  {
    icon: <Box className="w-12 h-12" />,
    title: 'Modelos 3D',
    description: 'Creación de modelos tridimensionales precisos para proyectos de construcción con tecnología BIM.',
    images: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1590986217679-f7858fb7af3a?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80'
    ]
  },
  {
    icon: <Calculator className="w-12 h-12" />,
    title: 'Cubicaciones',
    description: 'Cálculos detallados y precisos de materiales y recursos necesarios para tu proyecto.',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80'
    ]
  },
  {
    icon: <Layers className="w-12 h-12" />,
    title: 'Presupuestos',
    description: 'Elaboración de presupuestos detallados para licitaciones y estimaciones de costos.',
    images: [
      'https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1554224154-d0e1c0b12e5e?auto=format&fit=crop&q=80'
    ]
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: 'Coordinación BIM',
    description: 'Integración y coordinación de especialidades para optimizar el diseño y la construcción.',
    images: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80'
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        {/* Carrusel de imágenes de servicios */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <ServiceCarousel 
              key={index}
              images={service.images}
              title={service.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}