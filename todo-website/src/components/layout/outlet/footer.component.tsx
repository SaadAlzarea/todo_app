import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Footer() {
    const { i18n } = useTranslation()

    return (
        <footer className={`bg-black text-[#F5F3E7] border-t-2 border-[#F5F3E7] px-20 pt-16 pb-8 ${i18n.language === 'en' ? 'font-mono' : ''}`}>

            {/* Top Grid */}
            <div className='grid grid-cols-4 gap-12 pb-12 border-b border-[#F5F3E7]/30'>

                {/* Brand */}
                <div className='col-span-1 flex flex-col gap-4'>
                    <span className='text-xs tracking-widest border border-[#F5F3E7]/30 px-2 py-1 w-fit text-[#F5F3E7]/50'>
                        TASK MANAGEMENT TOOL
                    </span>
                    <p className='text-4xl font-bold tracking-tight'>UrTodo</p>
                    <p className='text-sm text-[#F5F3E7]/60 leading-relaxed max-w-[260px]'>
                        Create tasks, set deadlines, and track your progress. Built for individuals
                        and teams who want to stay organized and focused.
                    </p>
                    <div className='flex gap-2 mt-2'>
                        {['X', 'in', 'gh', 'yt'].map((s) => (
                            <a  // ✅ was missing 
                                key={s}
                                href='#'
                                className='w-9 h-9 border border-[#F5F3E7] flex items-center justify-center text-xs font-bold hover:bg-[#F5F3E7] hover:text-black transition-colors'
                            >
                                {s}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Links */}
                {[
                    {
                        title: 'PRODUCT',
                        links: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Download'],
                    },
                    {
                        title: 'COMPANY',
                        links: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
                    },
                    {
                        title: 'SUPPORT',
                        links: ['Help Center', 'API Docs', 'Status', 'Community', 'Security'],
                    },
                ].map(({ title, links }) => (
                    <div key={title}>
                        <p className='text-[11px] font-bold tracking-[3px] text-[#F5F3E7]/50 mb-5'>
                            {title}
                        </p>
                        <ul className='flex flex-col gap-3'>
                            {links.map((link) => (
                                <li key={link}>
                                    <a  // ✅ was missing 
                                        href='#'
                                        className='text-sm border-b border-transparent hover:border-[#F5F3E7] pb-0.5 transition-colors'
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Bottom Bar */}
            <div className='flex justify-between items-center pt-7 text-xs text-[#F5F3E7]/40'>
                <span>© 2025 UrTodo. All rights reserved.</span>
                <div className='flex gap-6'>
                    {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item) => (
                        <a key={item} href='#' className='hover:text-[#F5F3E7] transition-colors'>
                            {item}
                        </a>
                    ))}
                </div>
            </div>

        </footer>
    )
}