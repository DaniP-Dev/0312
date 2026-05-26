import React from 'react';
import { CONTACT } from '@/config/contact';

export default function CompanyInfo() {

    return (
        <div className='pt-20'>
            <div className='bg-primary'>
                <div className='bg-primary container lg:max-w-screen-xl md:max-w-screen-md mx-auto px-8 rounded-lg'>
                    <div className='grid grid-cols-1 md:grid-cols-3 '>
                        <div className='flex lg:flex-row flex-col justify-center items-center md:border-r border-border py-10 px-4 md:px-4' data-aos="fade-right">
                            <p className='text-[60px] leading-[1.2] mr-4 text-white'>0312</p>
                            <p className='text-2xl text-white'>Constructora de respaldo</p>
                        </div>
                        <div className='flex lg:flex-row flex-col justify-center items-center md:border-r border-border py-10 px-4 md:px-4' data-aos="fade-up">
                            <p className='text-[60px] leading-[1.2] mr-4 text-white'>+57</p>
                            <p className='text-2xl text-white'>{CONTACT.phoneDisplay}</p>
                        </div>
                        <div className='flex lg:flex-row flex-col justify-center items-center py-10 px-4 md:px-4' data-aos="fade-left">
                            <p className='text-[60px] leading-[1.2] mr-4 text-white'>3</p>
                            <p className='text-2xl text-white'>Lote, diseno y construccion</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}