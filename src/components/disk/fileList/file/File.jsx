import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { pushToStack, setCurrentDir } from '../../../../reducers/fileReducer';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteFile, downloadFile } from '../../../../actions/file';
import size from '../../../utils/size';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { showAction } from '../../../../reducers/actReducer';

const File = ({files}) => {

  const [actionId, setActionId] = useState('')
  const dispatch = useDispatch()
  const currentDir = useSelector( state => state.files.currentDir)
  const fileView = useSelector( state => state.files.view)
  const actionsView = useSelector( state => state.actions.actions)

  function openDirHandler() {   
      if(files.type === "dir"){
        dispatch(pushToStack(currentDir))
        dispatch(setCurrentDir(files._id))
      }
  }
                                             
  const downloadClickHandler = (e) => {
     e.stopPropagation()
     downloadFile(files)
  }

  const deleteHandler = (e) => {
     e.stopPropagation()
     dispatch(deleteFile(files))
  }

  if(fileView === "list") {
    return (
      <div className='relative z-0'>
          <div 
          className='px-12  flex justify-between my-2 border-b-2 border-[#e2d8d8] cursor-pointer'>
              <div className='flex items-center'>
                  <div><img 
                  className='md:w-[70px]'
                  src={require("../../../../assets/files/foldericon.png")} alt="folder" /> </div>
                  <div  onClick={()=> {
            openDirHandler()
          } } className='pl-5 font-[600]'>{files.name}</div>
              </div>
              <div className='flex items-center'>
                {actionsView && (actionId === files._id) && (
              <div className='bg-[#fff] shad  text-[14px]  absolute -top-2 rounded-[10px] right-[70px] flex flex-col items-center w-[150px] justify-between'>
              {files.type !== 'dir' &&  <button 
              className='pb-1 hover:bg-slate-200 w-full'
              onClick={(e) => downloadClickHandler(e)}
              ><DownloadIcon sx={{ color :"#555", fontSize : "24px",paddingRight:"5px"}}/>Yuklash</button>}  
                <button  
                className=' hover:bg-slate-200 w-full'
                onClick={(e) => deleteHandler(e)}
                ><DeleteIcon sx={{ color :"#555", fontSize : "24px",paddingRight:"5px"}}/><span className=''>O'chirish</span> </button>
              </div>

                )}
              <div className='flex justify-between text-[15px] w-[250px] items-center pl-12'>
                  <div>{files.date.slice(0,10)}</div>
                  <div>{size(files.size)}</div>
                  <button   onClick={() => {
                   dispatch(showAction())
                   setActionId(files._id)
                  }}><MoreVertIcon/></button>
              </div>
              </div>
          </div>
      </div>
    )
  }

  if(fileView === "plate") {
    return (
      <div>
          <div 
          onClick={()=> {
            openDirHandler()
          } }
          className='px-5  justify-between my-2 border-b-2 border-[#e2d8d8] cursor-pointer'>
              <div className='flex flex-col items-center justify-center'>
                  <div className='flex justify-center'><img 
                  className='md:w-[70px]'
                  src={require("../../../../assets/files/foldericon.png")} alt="folder" /> </div>
                  <div className='pl-5 text-[12px] pr-3 font-[600] flex justify-center truncate'>{files.name}</div>
              </div>
              <div className='flex items-center justify-center'>
              {files.type !== 'dir' &&  <button 
              onClick={(e) => downloadClickHandler(e)}
              ><DownloadIcon sx={{ color :"#555"}}/></button>}  
                <button 
                onClick={(e) => deleteHandler(e)}
                ><DeleteIcon sx={{ color :"#555"}}/></button>
              </div>
          </div>
      </div>
    )
  }

}

export default File;