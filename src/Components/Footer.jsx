import { Link } from "react-router-dom";
import { footerLinks } from "../constants";
const Footer = () => {
  return (
    <>
      <section className="flex flex-col lg:flex lg:flex-row gap-4 bg-black text-white px-5 py-2 lg:py-10 pb-20">
        <div className="w-36">
          <Link to={"/"}>
            {" "}
            <img
              src="\cinespectra-high-resolution-logo-white.png"
              alt="site logo"
            />
          </Link>
        </div>

        <div className="lg:w-[45%]">
          <h2 className="mb-3 text-lg font-semibold">About Us</h2>
          <p className="text-sm ">
            CineSpectra is free tv shows streaming website with zero ads, it
            allows you watch tv shows online, watch tv shows online free in high
            quality for free. You can also download full tv shows and watch it
            later if you want.
          </p>

          <small className="text-xs">
            This site does not store any files on our server, we only linked to
            the media which is hosted on 3rd party services.
          </small>

          <ul className="flex gap-10 my-8 ">
            <li className="text-sm text-[#33728D] hover:text-[#4FB4E0]  ">
              <a href="/">Sitemap</a>
            </li>
            <li className="text-sm text-[#33728D] hover:text-[#4FB4E0] ">
              <a href="/">Contact</a>
            </li>
            <li className="text-sm text-[#33728D] hover:text-[#4FB4E0] ">
              <a href="/">Terms of service</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="mb-3 text-lg font-semibold">Links</h2>
          <div className="flex gap-16">
            <ul>
              {footerLinks.slice(0, 3).map((link) => (
                <li
                  key={link.name}
                  className="hover:text-slate-400 text-xs my-2"
                >
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
            <ul>
              {footerLinks.slice(3, 6).map((link) => (
                <li
                  key={link.name}
                  className="hover:text-slate-400 text-xs my-2"
                >
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
            <ul>
              {footerLinks.slice(6, 9).map((link) => (
                <li
                  key={link.name}
                  className="hover:text-slate-400 text-xs my-2"
                >
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <span className="text-slate-500 text-xs mt-3">
            © CineSpectra
          </span>
        </div>
      </section>
    </>
  );
};

export default Footer;
