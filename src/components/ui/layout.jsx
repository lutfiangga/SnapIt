import BackToTopButton from "./bactopbtn"

function Layout ({ children }) {
  return (
    <>
      <div className="bg-black relative">{children}</div>
      <BackToTopButton />
    </>
  )
}

export default Layout
