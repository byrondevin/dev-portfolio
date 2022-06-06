import Nav from './Nav'

//This content and styling used as layout, therefore applied to every page
export default function Layout ({children}) {


    return(
        <>
            {/* display Navbar at top of every page */}
            <Nav/>
            {/* display children(all pages under navbar) */}
            <div>
                {children}
            </div>
        </>
    )
}