"use client"
import React, { useEffect, useState } from 'react';
import { useParams } from "next/navigation";
import Image from 'next/image';
import CompanyInfo from '@/app/components/home/info';
import Availability from '@/app/components/property-details/availability';
import Tabbar from '@/app/components/property-details/tabbar';
import TextSection from '@/app/components/property-details/text-section';
import DiscoverProperties from '@/app/components/home/property-option';
import Features from '@/app/components/property-details/Features';


export default function Details() {
  const { slug } = useParams();
  const [properties, setProperties] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/propertydata')
        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        setProperties(data || [])
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    fetchData()
  }, [])

  const item = properties.find((item) => item.slug === slug);

  return (
    <div>
      <section className="relative pt-32 pb-12 bg-white overflow-hidden">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
          <div className="relative mx-auto w-full max-w-6xl h-[clamp(240px,60vh,700px)]">
            {item?.property_img ? (
              <Image
                src={item.property_img}
                alt={item.property_title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-contain"
              />
            ) : (
              <div className="h-full w-full bg-gray-100 animate-pulse" />
            )}
          </div>
        </div>
      </section>
      <TextSection />
      <Features slug={String(slug ?? "")} />
      <CompanyInfo />
      <Tabbar />
      <Availability />
      <DiscoverProperties />
    </div>
  );
}
