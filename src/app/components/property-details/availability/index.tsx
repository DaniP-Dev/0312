"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface Property {
  id: string;
  property_title: string;
  rooms: number;
  bathrooms: number;
  livingArea: string;
  slug: string;
  category: string;
  status: string;
}

export default function Availability() {
  const { slug } = useParams();
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/propertydata');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        
        // Obtener el proyecto actual desde el slug
        const currentProject = data.find((p: any) => p.slug === slug)?.category;
        
        // Filtrar propiedades del mismo proyecto
        const projectProperties = data.filter(
          (p: any) => p.category === currentProject
        );
        
        setProperties(projectProperties);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) return <div className='text-center py-20'>Cargando unidades...</div>;

  return (
    <div className='bg-[#F0F6FA] lg:py-24 py-16'>
      <div className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8'>
        <p className='mb-[16px] text-[24px] sm:text-[36px] justify-center flex font-bold'>
          Unidades Disponibles
        </p>
        <p className='mb-10 sm:mb-3.75 text-base sm:text-xl text-gray justify-center flex'>
          Explora todas las unidades de este proyecto
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-center text-sm sm:text-lg text-gray">
            <thead>
              <tr className='border-b border-border'>
                <th className="py-2 sm:py-4 px-2 text-center">Unidad</th>
                <th className="py-2 sm:py-4 px-2 text-center">Habitaciones</th>
                <th className="py-2 sm:py-4 px-2 text-center">Baños</th>
                <th className="py-2 sm:py-4 px-2 text-center">Área</th>
                <th className="py-2 sm:py-4 px-2 text-center">Estado</th>
                <th className="py-2 sm:py-4 px-2 text-center">Detalles</th>
              </tr>
            </thead>
            <tbody>
              {properties.length > 0 ? (
                properties.map((property) => (
                  <tr key={property.id} className='border-b border-border'>
                    <td className="py-2 sm:py-4 px-2">{property.property_title}</td>
                    <td className="py-2 sm:py-4 px-2">{property.rooms}</td>
                    <td className="py-2 sm:py-4 px-2">{property.bathrooms}</td>
                    <td className="py-2 sm:py-4 px-2">{property.livingArea}</td>
                    <td className="py-2 sm:py-4 px-2">
                      <span className={`px-3 py-1 rounded ${property.status === 'Disponible' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                        {property.status}
                      </span>
                    </td>
                    <td className="py-2 sm:py-4 px-2">
                      <Link href={`/propiedades/${property.slug}`} className='flex items-center justify-center hover:text-primary'>
                        Ver Más
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-4 text-center">
                    No hay unidades disponibles
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
