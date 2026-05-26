"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Features() {
    const [propertiesData, setPropertiesData] = useState<any[]>([]);
    const reasons = [
        {
            id: 1,
            title: "Seguridad 24 horas"
        },
        {
            id: 2,
            title: "Porteria moderna"
        },
        {
            id: 3,
            title: "Piscina familiar"
        },
        {
            id: 4,
            title: "Kiosko comunitario"
        },
        {
            id: 5,
            title: "Cancha polifuncional"
        },
        {
            id: 6,
            title: "Lago de 4000 metros"
        },
        {
            id: 7,
            title: "Parque por zonas"
        },
        {
            id: 8,
            title: "Boulevard central"
        },
        {
            id: 9,
            title: "Gimnasio"
        },
        {
            id: 10,
            title: "Caballeriza"
        },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resProperties = await fetch('/api/propertydata');

                if (!resProperties.ok) {
                    throw new Error('Failed to fetch properties API');
                }

                const properties = await resProperties.json();

                setPropertiesData(properties || []);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const value = propertiesData.filter((item) => {
        return !item.check;
    });



    return (
        <section className="lg:min-h-screen lg:flex lg:items-center">
            <div className="container px-2 sm:px-4 lg:max-w-screen-xl md:max-w-screen-md mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex lg:flex-row flex-col lg:gap-0 gap-8 justify-between w-full">
                    <div className='mb-8 md:mb-0 flex-1 hidden lg:hidden'>
                        <div className='relative' data-aos="fade-right">
                            <Image
                                src="/images/features/features_iimage.jpg"
                                alt='property'
                                width={640}
                                height={615}
                                style={{ width: "100%", height: "auto" }}
                            />
                            <div className="lg:max-w-96 max-w-37.5 absolute bottom-0 mx-auto left-0 right-0 lg:mr-3.75">
                                {value.map(property => (
                                    <div key={property.id} className="bg-white shadow-lg rounded-t-lg overflow-hidden" data-aos="fade-up" data-aos-delay="100">
                                        <div className='relative'>
                                            <Image
                                                src={property.property_img}
                                                alt="Property Image"
                                                height={235}
                                                width={370}
                                                style={{ width: '100%', height: 'auto' }}
                                            />
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className='absolute top-[10px] right-[10px] bg-white p-2 rounded-lg'
                                                viewBox="0 0 24 24"
                                                width="38"
                                                height="38"
                                                fill="#2F73F2"
                                            >
                                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                            </svg>
                                        </div>
                                        <div className="p-4">
                                            <div className="flex text-gray justify-between items-center">
                                                <div className="font-bold text-2xl">{property.property_price}</div>
                                                <div className='text-xs bg-herobg text-blue-500 py-4 px-8 rounded-lg font-bold'>
                                                    {property.location}
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-base text-gray">{property.property_title}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 w-full'>
                        <div className="lg:pl-0 flex flex-col justify-center h-full">
                            <p
                                className='text-primary font-semibold uppercase tracking-wide mb-3'
                                data-aos="fade-left"
                            >
                                Nuevo Condominio Paraiso Real
                            </p>
                            <p
                                className='mb-5 md:mb-3.75 text-3xl sm:text-4xl lg:text-3xl leading-tight font-bold text-midnight_text max-w-[20ch]'
                                data-aos="fade-left"
                            >
                                10 razones para invertir hoy
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-3">
                                {reasons.map((feature) => (
                                    <div
                                        key={feature.id}
                                        className='flex items-center gap-4 p-4 rounded-2xl border border-border bg-white/90 lg:aspect-square lg:rounded-full lg:border-0 lg:bg-primary/10 lg:flex-col lg:items-center lg:justify-center lg:gap-2 lg:p-3 lg:text-center'
                                        data-aos="fade-left"
                                        data-aos-delay="100"
                                    >
                                        <div className="p-1.5 rounded-full flex justify-center items-start shrink-0 lg:p-0">
                                            <span className="h-[52px] w-[52px] rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold lg:h-11 lg:w-11 lg:text-base">
                                                {feature.id}
                                            </span>
                                        </div>
                                        <div className='flex-col'>
                                            <p className='text-lg font-semibold leading-snug lg:text-base'>{feature.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
