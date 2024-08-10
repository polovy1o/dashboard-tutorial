import './new.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { DriveFolderUploadOutlined, Folder } from '@mui/icons-material'
import { useState } from 'react'

export default function New({ inputs, title }) {
    const [file, setFile] = useState('')

    function onImageFileChange(e) {
        setFile(e.target.files[0]);
    }

    console.log(file)

    return <div className='new'>
        <Sidebar />
        <div className="newContainer">
            <Navbar />
            <div className="top">
                {title}
            </div>
            <div className="bottom">
                <form action="">
                    <div className="left">
                        <div className="formImg">
                            <img src={file ? URL.createObjectURL(file) : "/img/noimg.jpg"} alt="" />
                            <label htmlFor="file" className="icon">
                                Upload <DriveFolderUploadOutlined className="icon" />
                            </label>
                            <input type="file" id="file" onChange={onImageFileChange} style={{ display: "none" }} />
                        </div>
                    </div>
                    <div className="right">
                        {inputs.map(data => (
                            <div className="formInput" key={data.id}>
                                <label>{data.label}</label>
                                <input type={data.type} placeholder={data.placeholder || ""} />
                            </div>
                        ))}
                        <div className="buttonContainer">
                            <button>Send</button>
                        </div>
                    </div>
                    
                </form>

            </div>
        </div>
    </div>
}