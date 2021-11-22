import { useContext } from 'react'
import { GlobalStoreContext } from '../store'
import { Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'

/*
    Our Status bar React component goes at the bottom of our UI.
    
    @author McKilla Gorilla
*/
function Statusbar() {
    const { store } = useContext(GlobalStoreContext);
    let text ="";
    const location = useLocation();
    console.log('This is ' + location.pathname);
    if (store.currentList) {
        text = store.currentList.name;
    }
    let component = "";
    if(location.pathname === "/lists/") {
        component = <div id="top5-statusbar">
                        <Typography variant="h4">{text}</Typography>
                    </div>
    }
    
    return (
        component
    );
}

export default Statusbar;