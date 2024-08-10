import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

export default function Navbar()
{
    const { dispatch } = useContext(DarkModeContext)

    function onToggleDarkModeClick()
    {
        dispatch({type: "TOGGLE"})
    }

    return <div className='navbar'>
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder="Search..." />
                <SearchIcon/>
            </div>
            <div className="items">
                <div className="item language">
                    <LanguageIcon className='icon'/>
                    English
                </div>
                <div className="item" onClick={onToggleDarkModeClick}>
                    <DarkModeIcon className='icon'/>
                </div>
                <div className="item">
                    <FullscreenIcon className='icon'/>
                </div>
                <div className="item">
                    <NotificationsNoneIcon className='icon'/>
                    <div className="counter">1</div>
                </div>
                <div className="item">
                    <ChatBubbleOutlineIcon className='icon'/>
                    <div className="counter">2</div>
                </div>
                <div className="item">
                    <ListIcon className='icon'/>
                </div>
                <div className="item">
                    <img 
                        src="https://naturae.ru/foto/medonosnaya-pchela.jpg"
                        alt=''
                        className='avatar'
                    />
                </div>
            </div>
        </div>
    </div>
}