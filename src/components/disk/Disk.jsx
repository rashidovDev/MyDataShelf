import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createDir, getFiles } from '../../actions/file'
import { setCurrentDir, setPopupDisplay } from '../../reducers/fileReducer'
import FileList from "../disk/fileList/FileList"
import Popup from './Popup'

const Disk = () => {

  const dispatch = useDispatch()
  const currentDir = useSelector(state => state.files.currentDir)
  const dirStack = useSelector(state => state.files.dirStack)

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

  return (
    <div className='md:w-[80%] m-auto py-10 my-5  bg-[#faf8f8] rounded-[5px]'>
      <div>
        <button className={() => backClickHandler()}>Orqaga</button>
        <button onClick={() => showPopup()}>Papka yaratish</button>
      </div>
      <FileList/>
      <Popup/>
    </div>
  )
}

export default Disk