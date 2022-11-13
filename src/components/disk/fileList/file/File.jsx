import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { pushToStack, setCurrentDir } from '../../../../reducers/fileReducer';


const File = ({files}) => {

  const dispatch = useDispatch()

  const currentDir = useSelector( state => state.files.currentDir)

  function openDirHandler() {
     dispatch(pushToStack(currentDir))
     dispatch(setCurrentDir(files._id))
  }
console.log(files.type)
  return (
    <div>
        <div 
        onClick={files.type === `dir` ?  ()=> openDirHandler() : `` }
        className='px-5 flex justify-between my-2 border-b-2 border-[#e2d8d8] cursor-pointer'>
            <div className='flex items-center'>
                <div><img 
                className='md:w-[70px]'
                src={require("../../../../assets/files/foldericon.png")} alt="folder" /> </div>
                <div className='pl-5 font-[600]'>{files.name}</div>
            </div>
            <div className='flex justify-between text-[15px] w-[200px] items-center'>
                <div>{files.date.slice(0,10)}</div>
                <div>{files.size}</div>
            </div>
        </div>
    </div>
  )
}

export default File