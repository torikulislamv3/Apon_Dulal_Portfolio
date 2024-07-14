import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa"

export const Introduction = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="https://i.postimg.cc/m2JD9g3m/Apon-Dulal-removebg-preview-1.png"
      className="max-w-xl" />
    <div>
      <h1 className="text-3xl font-bold mb-5 text-[#1877F2]">Hello, I am</h1>
      <h1 className="text-6xl font-bold text-[#1877F2]">Apon Dulal</h1>
      <h1 className="text-4xl font-bold text-blue-900 mt-5">
      Best SEO Expert in Bangladesh
      </h1>
      <p className="py-6 max-w-60 lg:max-w-full">
      I am among the top SEO sellers in Bangladesh One who has more than 3 years of training career. As an SEO Specialist in Bangladesh, i am a proud member of Upwork ( Top Rated ) and Level Two in Fiverr. A proud Member of Roche Digital Solutions ( Marketing Head) in Regina Canada.
      </p>
      <div>
            <section className="flex gap-x-1">
            <a href="#" title="facebook">
            <FaFacebookSquare className="text-4xl text-[#1877F2] hover:text-3xl"/>
            </a>
            <a href="#" title="LinkedIn">
              <FaLinkedin className="text-4xl text-[#0077B5] hover:text-3xl"/>
            </a>
            <a href="#" title="Twitter">
            <FaTwitterSquare className="text-4xl text-[#1DA1F2] hover:text-3xl"/>
            </a>
            <a href="#" title="Instagram">
            <FaInstagramSquare className="text-4xl text-[#285AEB] hover:text-3xl"/>
            </a>
            </section>
            <section className="mt-10">
                <button className="btn btn-primary hover:bg-white hover:text-black text-xl font-bold hover:border-[#285AEB] hover:border-[3px]">Hire Me!</button>
            </section>
      </div>
    </div>
  </div>
</div>
  )
}
