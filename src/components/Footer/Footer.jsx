// IMPORTS
import React from "react";
import { useState } from "react";

// UI
import Logo from "../../UI/Logo/Logo";
import Button from "../../UI/Button/Button";

// REACT ICONS
import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaSnapchatGhost,
  FaFacebook,
} from "react-icons/fa";

// PAGES & COMPONENTS
import classes from "./Footer.module.scss";

// FOOTER DATA
const footerColumns = [
  {
    id: 1,
    headline: "About us",
    links: [
      "Pricing",
      "Our Story",
      "Testimonials",
      "Investors",
      "Terms of Service",
    ],
  },
  {
    id: 2,
    headline: "Contact us",
    links: ["Contact", "Support", "Destinations", "Careers", "Refund Policy"],
  },
  {
    id: 3,
    headline: "Content",
    links: [
      "Submit Video",
      "Submit Photo",
      "Influencer",
      "Marketing",
      "Privacy Policy",
    ],
  },
  {
    id: 4,
    headline: "Socials",
    links: ["Youtube", "Facebook", "Snapchat", "Twitter", "Instagram"],
  },
];

// SOCIALS DATA
const socials = [
  <FaYoutube />,
  <FaInstagram />,
  <FaTwitter />,
  <FaSnapchatGhost />,
  <FaFacebook />,
];

const Footer = () => {
  // USE STATE HOOK FOR EMAIL AND PASSWORD
  const [email, setEmail] = useState("");

  // FUNCTION TO SUBMIT FORM
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    alert("Thanks for subscribing!");
  };
  return (
    <div className={classes.container}>
      <footer className={classes.footer}>
        {/* NEWSLETTER SUBSCRIPTION*/}
        <div className={classes.footer__newsletter}>
          <h4 className={classes["footer__newsletter--headline"]}>
            Subscribe to receive regular Dojo updates
          </h4>
          <span>Unsubscribe at any time.</span>
          <form
            className={classes["footer__newsletter--form"]}
            onSubmit={handleSubmit}
          >
            <input
              className={classes.input}
              type="email"
              placeholder="Your Email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <Button>Subscribe</Button>
          </form>
        </div>
        {/* FOOTER CONTENT*/}
        <div className={classes.footer__content}>
          {footerColumns.map(({ id, headline, links }) => (
            <div className={classes.footer__content__col} key={id}>
              <div className={classes.footer__content__col__headline}>
                {headline}
              </div>
              <ul className={classes.footer__content__col__links}>
                {links.map((link, index) => (
                  <li key={index + 1}>
                    <a href="/">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* FOOTER BASE - SOCIALS */}
        <div className={classes.footer__base}>
          <Logo />
          <span className={classes["footer__base--year"]}>
            The Dojo&nbsp;&copy;&nbsp;{new Date().getFullYear()}
          </span>
          <ul className={classes["footer__base--socials"]}>
            {socials.map((icon, index) => (
              <li key={index + 1}>
                <a href="/">{icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
