import React from 'react'
import { man } from '../../../assets/global.d'
import { useTranslation } from 'react-i18next'

export default function Feature() {
    const { t, i18n } = useTranslation()

    return (
        <div className={` bg-black text-[#F5F3E7] flex items-center ${i18n.language === 'en' ? 'font-mono' : ''}`}>
            <div className='flex justify-around gap-3 items-center w-full'>

                {/* Left: Image */}
            <div className='flex gap-3 items-center'>
                <div>
                    <img src={man} alt="" className='h-150 border-4 border-[#F5F3E7] p-1' />
                </div>

                {/* Center: Heading + Description */}
                <div className=' flex flex-col gap-2'>
                    <p className='text-6xl font-bold underline'>{t('features.HOW TO MANAGE A')}</p>
                    <p className='text-6xl font-bold underline'>{t('features.NEW BUSINESS')}</p>
                    <p className='text-6xl'>{t('features.individual and')}</p>
                    <p className='text-6xl'>{t('features.organization')}</p>
                    <p className='text-lg mt-4 w-110'>
                        {t('features.description')}
                    </p>
                </div>
            </div>

                {/* Right: Features list */}
                <div className='border-l-4 border-[#F5F3E7] p-3 flex flex-col gap-4'>
                    <p className='text-7xl font-bold border-y border-r border-[#F5F3E7] p-1 text-center'>
                        {t('features.FEATURES')}
                    </p>

                    {[
                        { label: t('features.Deadline calendar') },
                        { label: t('features.Individual and team project') },
                        { label: t('features.Assign todo and attachments') },
                    ].map((feature, i) => (
                        <div key={i} className='flex gap-3'>
                            <span className='text-2xl underline text-[#F5F3E7]/60'>{ i + 1} </span>
                            <span className='text-xl'>{" "}{feature.label}{" "}</span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}