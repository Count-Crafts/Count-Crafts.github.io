import Footer from "./Footer"
import Navbar from "./Navbar"


const Layout = ({children}) => {
  return (
    <>
      <div className="font-syne">
        <Navbar />
            <main className="sm:container sm:mx-auto">
              {children}
            </main>
        {/* <Footer /> */}
      </div>
    </>
    
  )
}

export default Layout