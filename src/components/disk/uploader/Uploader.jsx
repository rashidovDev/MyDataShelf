import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import UploadFile from './UploadFile';
import { useDispatch, useSelector } from 'react-redux';
import { hideUploader } from '../../../reducers/uploadReducer';

const Uploader = () => {
 
    const files = useSelector(state => state.upload.files)
    const isVisible = useSelector(state => state.upload.isVisible)
    const dispatch = useDispatch()

  return (
    isVisible &&
    <div className='w-[300px] h-[300px] fixed bottom-0 right-0 bg-[#29335C] p-5 text-[#fff] items-center rounded-tl-lg'>
        <div className='flex justify-between mb-5'>
            <div>Yuklash</div>
            <div onClick={() => dispatch(hideUploader())} className='cursor-pointer'><ClearIcon/></div>
        </div>
        {files.map(( file, idx) => (
                <UploadFile key={idx + 1} file={file} />
            ))}
    </div>
  )
}

export default Uploader