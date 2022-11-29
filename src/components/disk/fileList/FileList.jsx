import React from 'react'
import { useSelector } from 'react-redux'
import File from './file/File'
import {CSSTransition, TransitionGroup} from "react-transition-group";

const FileList = () => {

  const files = useSelector(state => state.files.files)
  const fileView = useSelector(state => state.files.view)
  
  if(files.length === 0){
      return (
          <div className=' flex justify-center pt-24 text-[24px]'>Fayl topilmadi</div>
      )
  }

  if (fileView === 'plate'){
    return (
    <div className='grid grid-cols-6'>
      {files.map((item, idx) => (
          <File key={idx + 1}  files={item}/>
      ))}
    </div>
    )
  }

  if(fileView === 'list' ){
    return (
      <div className=''>
      <div className='border-b-4 border-[#9f9595]'>
        <div className='flex justify-between items-center mt-10 pb-2 text-[14px]  px-14 font-[600] text-[#4d4141]'>
          <div className='pl-[50px]'>Nomi</div>
          <div className='flex justify-between w-[200px] pr-10'>
          <div>Sana</div>
          <div>Hajmi</div>
          </div>
        </div>
      </div>
      <TransitionGroup>
      {files.map((item, idx) => (
        <CSSTransition key={idx + 1} timeout={500} className={'file'} exit={false}>
          <File  files={item}/>
        </CSSTransition>
      ))}
      </TransitionGroup>
      </div>
    )
  }
  
 
  

}

export default FileList