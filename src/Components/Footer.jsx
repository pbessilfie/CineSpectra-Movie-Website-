import { Link } from "react-router-dom";
import { footerLinks } from "../constants";
const Footer = () => {
  return (
    <>
      <section className="flex flex-col gap-4 bg-black text-white px-5 py-2">
        <div className="w-36">
          <Link to={"/"}>
            {" "}
            <img
              src="\cinespectra-high-resolution-logo-white.png"
              alt="site logo"
            />
          </Link>
        </div>

        <div>
          <h2>About Us</h2>
          <p>
            CineSpectra is free tv shows streaming website with zero ads, it
            allows you watch tv shows online, watch tv shows online free in high
            quality for free. You can also download full tv shows and watch it
            later if you want.
          </p>

          <small>
            This site does not store any files on our server, we only linked to
            the media which is hosted on 3rd party services.
          </small>
        </div>
        <div className="flex flex-col">
          <h2>Links</h2>
          <div>
            <ul>
              {footerLinks.slice(0, 3).map((link) => (
                <li key={link.name}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
            <ul>
              {footerLinks.slice(3, 6).map((link) => (
                <li key={link.name}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
            <ul>
              {footerLinks.slice(6, 9).map((link) => (
                <li key={link.name}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
