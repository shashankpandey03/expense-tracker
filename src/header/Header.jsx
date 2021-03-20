import './Header.css'

function Header({label}) {
    return (
        <div className="appHeader">
            <div className="label">
                {label}
            </div>
        </div>
    )
}

export default Header;