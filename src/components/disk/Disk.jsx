import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createDir, getFiles, uploadFile } from '../../actions/file'
import { setCurrentDir, setPopupDisplay } from '../../reducers/fileReducer'
import FileList from "../disk/fileList/FileList"
import Popup from './Popup'
import Uploader from './uploader/Uploader'

const Disk = () => {

  const dispatch = useDispatch()
  const currentDir = useSelector(state => state.files.currentDir)
  const dirStack = useSelector(state => state.files.dirStack)
  const [dragEnter, setDragEnter] = useState(false)

  console.log("drag:", dragEnter)

  useEffect(() => {
    dispatch(getFiles(currentDir))
  },[currentDir])

  const showPopup = () => {
    dispatch(setPopupDisplay("flex"))
  }

  const backClickHandler = () => {
      const backDirId = dirStack.pop()
      dispatch(setCurrentDir(backDirId))
  }

  const fileUploadHandler = (e) => {
    const files = [...e.target.files]
    files.forEach(file => dispatch(uploadFile(file, currentDir)))
  }

  const dragEnterHandler = (event) => {
      event.preventDefault()
      event.stopPropagation()
      setDragEnter(true)
  }

  const dragLeaveHandler = (event) => {
    event.preventDefault()
    event.stopPropagation()
    setDragEnter(false)
}

  const dropHandler = (e) => {
  e.preventDefault()
  e.stopPropagation()
  let files = [...e.dataTransfer.files]
  files.forEach(file => dispatch(uploadFile(file, currentDir)))
  setDragEnter(false)
}

  return (
    !dragEnter ? 
    <div
    onDragEnter={dragEnterHandler}
    onDragOver={dragEnterHandler}
    onDragLeave={dragLeaveHandler}
     className='md:w-[80%] m-auto py-10 my-5  bg-[#faf8f8] rounded-[5px]'>
      <div>
        <button onClick={() => backClickHandler()}>Orqaga</button>
        <button onClick={() => showPopup()}>Papka yaratish</button>
        <div className='cursor-pointer'>
          <label className='cursor-pointer' htmlFor="disk__upload-input">Yuklash</label>
          <input multiple={true} onChange={(e) => fileUploadHandler(e)} className='cursor-pointer' type="file" id="disk__upload-input" placeholder='fjio'/>
        </div>
      </div>
      <FileList/>
      <Popup/>
      <Uploader />
    </div>
    :
    <div 
    onDrop={dropHandler}
    onDragEnter={dragEnterHandler}
    onDragOver={dragEnterHandler}
    onDragLeave={dragLeaveHandler}
    className='w-[90%] border-dashed border-2 my-5 border-[#333] h-[600px] m-auto flex items-center justify-center text-[40px]'>
      Faylni joylang
    </div>
  )
}

export default Disk