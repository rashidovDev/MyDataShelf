import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch } from 'react-redux';
import { removeUploadFile } from '../../../reducers/uploadReducer';

const UploadFile = ({file}) => {
    const dispatch = useDispatch()

    console.log(file.progress, file)
    
  return (
    <div >
        <div className='flex justify-between items-center mt-2 pb-[2px] text-[15px]'>
            <div>{file.name}</div>
            <button onClick={() => dispatch(removeUploadFile(file.id))}><ClearIcon sx={{fontSize : "18px"}}/></button>
        </div>
        <div className='h-[18px] bg-[#fff] px-[2px]  rounded-[5px] relative flex'>
            <div className={`bg-[#88ec88] rounded-[5px] h-[14px] mt-[2px] `} style={{ width :file.progress + '%'}}/>
            <div className='absolute top-0 text-[11px] left-[120px] text-[#494f67] font-semibold'>{file.progress}%</div>
        </div>
    </div>
  )
}

export default UploadFile