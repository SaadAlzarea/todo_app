import React from 'react'
import { useTranslation } from 'react-i18next'

export default function JoinUs() {
    const { i18n } = useTranslation()

    return (
        <section className={`bg-black text-[#F5F3E7]  px-20 py-24 flex items-center justify-between ${i18n.language === 'en' ? 'font-mono' : ''}`}>
            <h2 className='text-6xl  tracking-tight underline'>{i18n.t('joinUs.JOIN US!')}</h2>
            <button className='border-2 border-[#F5F3E7] px-10 py-4 text-sm font-bold tracking-[4px] uppercase hover:bg-[#F5F3E7] hover:text-black transition-colors cursor-pointer'>
                {i18n.t('joinUs.button')}
            </button>
        </section>
    )
}