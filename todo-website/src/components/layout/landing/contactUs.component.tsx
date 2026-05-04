import React from 'react'
import { useTranslation } from 'react-i18next'

export default function ContactUs() {
    const { t, i18n } = useTranslation()

    return (
        <div className={`h-150 bg-black text-[#F5F3E7] flex items-center justify-around ${i18n.language === 'en' ? 'font-mono' : ''}`}>
            <div className='flex flex-col gap-5'>
                <p className='text-6xl font-bold underline'>{t('contact.title')}</p>
                <p className='text-lg w-110'>{t('contact.description')}</p>
            </div>
            <div className='border border-[#F5F3E7] p-5 flex flex-col gap-4'>
                <p className='text-3xl font-bold border-b border-[#F5F3E7] p-1'>{t('contact.form.title')}</p>
                <div className='flex flex-col gap-2'>
                    <label className='text-sm'>{t('contact.form.name')}</label>
                    <input
                        type='text'
                        placeholder='John Doe'
                        className='bg-transparent border border-[#F5F3E7] text-[#F5F3E7] px-3 py-2 outline-none w-80'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-sm'>{t('contact.form.email')}</label>
                    <input
                        type='email'
                        placeholder='john@example.com'
                        className='bg-transparent border border-[#F5F3E7] text-[#F5F3E7] px-3 py-2 outline-none w-80'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-sm'>{t('contact.form.message')}</label>
                    <textarea
                        rows={4}
                        placeholder='Your message...'
                        className='bg-transparent border border-[#F5F3E7] text-[#F5F3E7] px-3 py-2 outline-none resize-none w-80'
                    />
                </div>
                <button
                    type='button'
                    className='bg-[#F5F3E7] text-black font-bold px-5 py-2 hover:bg-black hover:text-[#F5F3E7] border border-[#F5F3E7] transition-colors cursor-pointer'
                >
                    {t('contact.form.send')}
                </button>
            </div>
        </div>
    )
}