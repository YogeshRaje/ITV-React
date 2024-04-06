import {Outlet,Link } from 'react-router-dom'

const Layout = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/state">State</Link>
                </li>
                <li>
                    <Link to="/state1">State1</Link>
                </li>
                <li>
                    <Link to="/stateupdate">StateUpdate</Link>
                </li>
                <li>
                    <Link to="/useeffect">UseEffect</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
        </>
    )
}

export default Layout;