import React from 'react'
import { useSelector } from 'react-redux'
import File from './file/File'

const FileList = () => {

  const files = useSelector(state => state.files.files)
  console.log(files)

  return (
    <div>
    <div className='border-b-4 border-[#9f9595]'>
      <div className='flex justify-between items-center mt-10 pb-2 text-[14px]  px-5 font-[600] text-[#4d4141]'>
        <div className='pl-[120px]'>Nomi</div>
        <div className='flex justify-between w-[200px]'>
        <div>Sana</div>
        <div>Hajmi</div>
        </div>
      </div>
    </div>
    {files.map((item, idx) => (
      <File key={idx + 1} files={item}/>
    ))}
    </div>
  )
}

export default FileList