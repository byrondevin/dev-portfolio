import Link from "next/link"

export default function Nav() {


    return(
        <>
            {/* Bootstrap Navbar */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light">

                <div class="collapse navbar-collapse" id="navbarNav">

                    <ul class="navbar-nav">

                        {/* Home page */}
                        <Link href='/'>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home </a>
                            </li>
                        </Link>

                        {/* Portfolio Page */}
                        <Link href='/portfolio'>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Portfolio</a>
                            </li>
                        </Link>

                        {/* Contact page */}
                        <Link href='/contact'>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </Link>

                        
                    </ul>
                </div>
            </nav>
        </>
    )
}