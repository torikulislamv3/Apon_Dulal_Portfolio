import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa"

export const Footer = () => {
  return (
    <footer className="footer border text-base-content p-10">
    <nav>
      <h1 className="text-3xl font-bold text-[#1877F2] mb-5">MD APON DULAL</h1>
      <p className="max-w-64 md:max-w-72 lg:max-w-80z">
      I am among the top SEO sellers in Bangladesh One who 
       has more than 3 years of training career. As an SEO 
        Specialist in Bangladesh, i am a proud member of 
         Upwork ( Top Rated ) and Level Two in Fiverr. A proud 
          Member of Roche Digital Solutions (Marketing Head) in 
           Regina Canada.
      </p>
    </nav>
    <nav>
      <h1 className="text-xl font-bold text-black mb-5">Main Menu</h1>
     <ul>
     <li className="text-lg font-semibold hover:text-[#1877F2]">Home</li>
      <li className="text-lg font-semibold hover:text-[#1877F2]">Service</li>
      <li className="text-lg font-semibold hover:text-[#1877F2]">Blog</li>
      <li className="text-lg font-semibold hover:text-[#1877F2]">About</li>
      <li className="text-lg font-semibold hover:text-[#1877F2]">Contact</li>
     </ul>
    </nav>
    <nav>
      <h6 className="text-xl font-bold text-black mb-5">Contact Info</h6>
      <p className="text-lg">Rangpur, Bangladesh</p>
      <p className="text-lg">+8801*******</p>
      <p className="text-lg">client@gmail.com</p>
      <p className="text-lg">Opening Hours: 10:00 - 18:00</p>
      <div className="flex gap-x-1">
            <a href="#" title="facebook">
            <FaFacebookSquare className="text-4xl text-[#1877F2]"/>
            </a>
            <a href="#" title="LinkedIn">
              <FaLinkedin className="text-4xl text-[#0077B5]"/>
            </a>
            <a href="#" title="Twitter">
            <FaTwitterSquare className="text-4xl text-[#1DA1F2]"/>
            </a>
            <a href="#" title="Instagram">
            <FaInstagramSquare className="text-4xl text-[#285AEB]"/>
            </a>
      </div>
    </nav>
  </footer>
  )
}
