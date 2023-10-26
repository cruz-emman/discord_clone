'use client'
import { Plus } from 'lucide-react'
import React from 'react'

const NavigationAction = () => {
  return (
    <div>
        <button
            className='flex items-center group'
        >
            <div className='flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500'>
                <Plus
                    className='transition group-hover:text-white text-emerald-500'
                    size={20}
                />
            </div>
        </button>
    </div>
  )
}

export default NavigationAction