import React from 'react'
import { useState } from 'react'
import Input from "../utils/Input"
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from 'react-redux';
import { setPopupDisplay } from '../../reducers/fileReducer';
import { createDir } from '../../actions/file';

const Popup = () => {

    const [dirName, setDirName] = useState("")
    console.log(dirName)
    const popupDisplay = useSelector( state => state.files.popupDisplay)
    const currentDir = useSelector( state => state.files.currentDir)
    const dispatch = useDispatch()

    const createHandler = () => {
        dispatch(createDir(currentDir, dirName))
      }

  return (
    <div onClick={() => dispatch(setPopupDisplay("none"))}
    className='w-full h-full bg-[rgba(0,0,0,0.3)] right-0 top-0 bottom-0 left-0 absolute flex items-center justify-center' 
    style={{ display : popupDisplay}}
    >
        <div onClick={(e) => e.stopPropagation()}
        className='md:w-[400px] bg-white p-5 rounded-[10px]'>
            <div className='flex justify-between items-center'>
                <div className='pt-1'>Papka yaratish</div>
                <div className='cursor-pointer' onClick={() => dispatch(setPopupDisplay("none"))}><ClearIcon/></div>
            </div>
            <Input type="text" placeholder="Papaka nomini kiriting..." value={dirName} setValue={setDirName} class="modal"/>
            <div className='flex justify-end'>
            <button onClick={() => {
                createHandler()
                dispatch(setPopupDisplay("none"))
            }}>Yaratish</button>
            </div>
           
        </div>
    </div>
  )
}

export default Popup