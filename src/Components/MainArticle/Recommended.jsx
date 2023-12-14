import React from 'react'

const Recommended = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center'>
            <img className='w-12 h-12 rounded-full' src="data:image/jpeg;base64,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" alt="" />
            <div className='ml-2'>
                <p>username</p>
                <p className='text-sm font-semibold opacity-70'>Стежить 001_tan4ik_100 та ще 2</p>
            </div>
        </div>
        <p className='text-blue-500 text-sm font-semibold'>Стежити</p>
    </div>
  )
}

export default Recommended