import React from 'react'
import { ManageYourTime } from '../../../assets/global.d'
import { useTranslation } from 'react-i18next'

export default function About() {
    const {t, i18n} = useTranslation()
  return (
<div className={` bg-black text-[#F5F3E7] flex flex-col items-center justify-center gap-10 ${i18n.language === 'en' ? 'font-mono' : ''}`}>
    <div className='text-9xl font-bold underline'>{t('about.WHO ARE WE!')}</div>
    <div className='flex items-center justify-around'>
        <div className='w-2/4 flex flex-col gap-5'>
            <p className='text-5xl font-bold underline'>{t('about.title')}</p>
            <p className='text-lg'>
                {t('about.description')}
            </p>
        </div>
        <div>
            <img src={ManageYourTime} alt="Manage Your Time" className='h-100 border-4 border-[#F5F3E7] p-1'/>
        </div>
    </div>
</div>
  )
}
