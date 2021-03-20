import './Sidebar.css'
import SidebarOption from './SidebarOption'

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarOption title='Categories' link='/'/>
            <SidebarOption title='Add new category' link='/addNewCategory'/>
        </div>
    )
}

export default Sidebar