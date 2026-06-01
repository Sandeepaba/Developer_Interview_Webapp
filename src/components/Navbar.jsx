import '../styles/navbar.css'

function Navbar({ selected, total }) {
    return (
        <div className='navbar'>
            <div className='navbar-breadcrumb'>
                <span className='breadcrumb-root'>DevPrep</span>
                <span className='breadcrumb-sep'>/</span>
                <span className='breadcrumb-current'>{selected?.title}</span>
            </div>
            <div className='navbar-pills'>
                <span className='nav-pill'>v1.0.0</span>
                <span className='nav-pill green'>● {total} Sheets</span>
            </div>
        </div>
    )
}

export default Navbar
