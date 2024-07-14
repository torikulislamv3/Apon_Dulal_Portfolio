import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-2xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li className="text-2xl font-semibold hover:text-[#1877F2]">Home</li>
      <li className="text-2xl font-semibold hover:text-[#1877F2]">About</li>
      <li className="text-2xl font-semibold hover:text-[#1877F2]">Service</li>
      <li className="text-2xl font-semibold hover:text-[#1877F2]">Blog</li>
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl font-bold">SEO Service</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <NavLink>
      <li className="text-2xl font-semibold hover:text-[#1877F2] mr-6">Home</li>
      </NavLink>
      <NavLink>
      <li className="text-2xl font-semibold hover:text-[#1877F2] mr-6">About</li>
      </NavLink>
      <NavLink>
      <li className="text-2xl font-semibold hover:text-[#1877F2] mr-6">Service</li>
      </NavLink>
      <NavLink>
      <li className="text-2xl font-semibold hover:text-[#1877F2]">Blog</li>
      </NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn text-3xl font-bold hidden lg:block">Contact</a>
  </div>
</div>
  )
}
