import Link from "next/link"

export default function Nav() {


    return(
        <>
            {/* Bootstrap Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">

                        {/* Home page */}
                        <Link href='/'>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home </a>
                            </li>
                        </Link>

                        {/* Portfolio Page */}
                        <Link href='/portfolio'>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Portfolio</a>
                            </li>
                        </Link>

                        {/* Contact page */}
                        <Link href='/contact'>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </Link>

                        
                    </ul>
                </div>
            </nav>
        </>
    )
}