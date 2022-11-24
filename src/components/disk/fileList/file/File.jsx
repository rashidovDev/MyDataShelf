import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { pushToStack, setCurrentDir } from '../../../../reducers/fileReducer';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteFile, downloadFile } from '../../../../actions/file';

const File = ({files}) => {

  const dispatch = useDispatch()

  console.log("wfiwj:",files)
  const currentDir = useSelector( state => state.files.currentDir)

  function openDirHandler(files) {
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

  return (
    <div>
        <div 
        onClick={()=> {
          openDirHandler()
        } }
        className='px-5 flex justify-between my-2 border-b-2 border-[#e2d8d8] cursor-pointer'>
            <div className='flex items-center'>
                <div><img 
                className='md:w-[70px]'
                src={require("../../../../assets/files/foldericon.png")} alt="folder" /> </div>
                <div className='pl-5 font-[600]'>{files.name}</div>
            </div>
            <div className='flex justify-between items-center w-[30%]'>
            <div className='flex items-center w-[70px] justify-between'>
            {files.type !== 'dir' &&  <button 
            onClick={(e) => downloadClickHandler(e)}
            ><DownloadIcon sx={{ color :"#555"}}/></button>}  
              <button 
              onClick={(e) => deleteHandler(e)}
              ><DeleteIcon sx={{ color :"#555"}}/></button>
            </div>
            <div className='flex justify-between text-[15px] w-[200px] items-center pt-1'>
                <div>{files.date.slice(0,10)}</div>
                <div>{files.size}</div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default File;