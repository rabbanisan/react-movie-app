export default function Navbar() {
  return (
    <nav className='navbar sticky top-0 flex justify-between items-center text-white px-20 py-2 bg-[#1D1D1D] h-[10vh]'>
      <div className='nav-brand'>
        <a className='nav-logo uppercase tracking-[3px]' href=''>movieapp</a>
      </div>
      <div className='space-x-5 nav w-6/12'>
        <a className='nav-link' href=''>Home</a>
        <a className='nav-link' href=''>Browse Movie</a>
      </div>
      <div className='search-container flex justify-end items-center space-x-5'>
        <form className="search-bar px-2 border-gray-600 border-2 rounded-full">
          <input className="input-search bg-transparent border-none" type="text" placeholder="Search.." name="search" />
          <button className="" type="submit"><i className="fas fa-search"></i></button>
        </form>
      </div>
    </nav >
  )
}