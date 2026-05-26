'use client';
import Link from 'next/link';
import { CONTACT } from '@/config/contact';

export default function DiscoverProperties() {
    const socialLinks = [
        {
            name: 'Instagram',
            handle: '@constructora0312',
            href: 'https://www.instagram.com/constructora0312/',
            icon: (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M16 3H8C5.239 3 3 5.239 3 8V16C3 18.761 5.239 21 8 21H16C18.761 21 21 18.761 21 16V8C21 5.239 18.761 3 16 3Z" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M15.5 11.37C15.6234 12.2022 15.4813 13.0522 15.0937 13.799C14.7061 14.5458 14.0931 15.1514 13.3418 15.5298C12.5905 15.9081 11.7388 16.0398 10.9083 15.9062C10.0779 15.7726 9.31062 15.3804 8.71505 14.7849C8.11948 14.1893 7.72731 13.4221 7.59371 12.5916C7.46011 11.7612 7.59177 10.9095 7.97013 10.1582C8.34849 9.40685 8.9541 8.79385 9.70089 8.40624C10.4477 8.01863 11.2978 7.87656 12.13 8C12.9789 8.12588 13.7649 8.52145 14.3706 9.12714C14.9763 9.73284 15.3719 10.5188 15.4978 11.3677Z" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M16.25 7.75H16.26" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
            ),
        },
        {
            name: 'TikTok',
            handle: '@constructora0312',
            href: 'https://www.tiktok.com/',
            icon: (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M14 4V13.2C14 15.3 12.3 17 10.2 17C8.1 17 6.4 15.3 6.4 13.2C6.4 11.1 8.1 9.4 10.2 9.4C10.6 9.4 11 9.5 11.4 9.6V6.7C11 6.6 10.6 6.6 10.2 6.6C6.6 6.6 3.6 9.6 3.6 13.2C3.6 16.8 6.6 19.8 10.2 19.8C13.8 19.8 16.8 16.8 16.8 13.2V9.3C18 10.2 19.5 10.7 21 10.7V7.9C18.7 7.8 16.7 6.1 16.2 4H14Z" fill="currentColor" />
                </svg>
            ),
        },
        {
            name: 'WhatsApp',
            handle: CONTACT.phoneDisplay,
            href: CONTACT.whatsappUrl,
            icon: (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M20 12C20 16.4183 16.4183 20 12 20C10.6294 20 9.33891 19.6553 8.211 19.049L4 20L4.98 15.893C4.35518 14.7712 4 13.4788 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M9.3 8.9C9.53 8.39 9.78 8.38 10 8.39C10.18 8.4 10.39 8.4 10.59 8.4C10.79 8.4 11.1 8.32 11.38 8.65C11.67 8.99 12.37 9.68 12.37 11.08C12.37 12.48 11.35 13.83 11.21 14.02C11.08 14.2 10.92 14.43 11.19 14.9C11.46 15.37 12.41 16.9 14.11 17.63C15.54 18.24 15.83 18.13 16.14 18.1C16.45 18.07 17.14 17.71 17.35 17.13C17.56 16.55 17.56 16.05 17.5 15.95C17.44 15.85 17.28 15.79 17.01 15.66C16.74 15.53 15.44 14.89 15.19 14.8C14.94 14.71 14.76 14.67 14.57 14.94C14.38 15.22 13.85 15.85 13.69 16.03C13.53 16.21 13.37 16.23 13.1 16.09C12.84 15.95 11.99 15.67 10.98 14.77C10.2 14.07 9.68 13.2 9.53 12.93C9.38 12.65 9.51 12.5 9.64 12.37C9.76 12.25 9.91 12.06 10.04 11.91C10.17 11.75 10.22 11.63 10.31 11.44C10.4 11.25 10.36 11.09 10.3 10.96C10.23 10.83 9.71 9.52 9.48 8.99C9.26 8.46 9.04 8.53 8.88 8.52C8.72 8.51 8.53 8.51 8.35 8.51C8.17 8.51 7.88 8.58 7.63 8.85C7.38 9.13 6.7 9.76 6.7 11.04C6.7 12.31 7.65 13.56 7.78 13.74C7.91 13.92 9.57 16.53 12.11 17.62" fill="currentColor" />
                </svg>
            ),
        },
    ];

    return (
        <section>
            <div className="container lg:max-w-screen-xl md:max-w-screen-md mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-midnight_text" data-aos="fade-left">Redes oficiales de la constructora</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 gap-5">
                    {socialLinks.map((social, index) => (
                        <div key={social.name} className="image-item block" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                            <Link href={social.href} target="_blank" rel="noopener noreferrer" className='group block border-2 rounded-xl border-border p-5 hover:border-primary transition-colors'>
                                <div className='mb-4 inline-flex p-3 rounded-lg bg-herobg text-white group-hover:-translate-y-1 group-hover:duration-500'>
                                    {social.icon}
                                </div>
                                <p className="text-2xl leading-[1.2] font-semibold mt-2 text-midnight_text text-opacity-80 group-hover:text-opacity-100 mb-1 capitalize">
                                    {social.name}
                                </p>
                                <p className="text-base text-gray">{social.handle}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}