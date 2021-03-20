import { Divider } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import './SidebarOption.css'

function SidebarOption({ title,link }) {

    return (
        <div className='sidebaroption'>
            <NavLink to={link}>
                {<h4>{title}</h4>}
                <Divider />
            </NavLink>
        </div>
    )
}

export default SidebarOption