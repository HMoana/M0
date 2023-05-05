// IMPORTS
import React from "react";
import { Link } from "react-router-dom";

// REACT ICONS
import { BsArrowRight } from "react-icons/bs";

// PAGES & COMPONENTS
import classes from "./Profiles.module.scss";

// IMAGES
import ZoroJPG from "./../../assets/zoro2.jpg";
import MihawkJPG from "./../../assets/mihawk.jpg";
import KenshinJPG from "./../../assets/kenshin.jpg";
import GutsJPG from "./../../assets/guts.jpg";
import Griffith_femtoJPG from "./../../assets/griffith_femto.jpg";
import MusashiJPG from "./../../assets/musashi.jpg";
import ShishioJPG from "./../../assets/shishio.jpg";
import ShanksJPG from "./../../assets/shanks1.jpg";
import RayleighJPG from "./../../assets/rayleigh.jpg";
import RogerJPG from "./../../assets/roger.jpg";
import LawJPG from "./../../assets/law.jpg";
import FujitoraJPG from "./../../assets/fujitora.jpg";
import CascaJPG from "./../../assets/casca.jpg";
import IchigoJPG from "./../../assets/ichigo.jpg";
import RyumaJPG from "./../../assets/ryuma.jpg";

// PROFILES DATA
const profileData = [
  {
    id: 1,
    profile: "The Pirate Hunter",
    Image: ZoroJPG,
  },
  {
    id: 2,
    profile: "Hawkeyes",
    Image: MihawkJPG,
  },
  {
    id: 3,
    profile: "Battōsai",
    Image: KenshinJPG,
  },
  {
    id: 4,
    profile: "The Black Swordsman",
    Image: GutsJPG,
  },
  {
    id: 5,
    profile: "Falcon of light, Femto",
    Image: Griffith_femtoJPG,
  },
  {
    id: 6,
    profile: "Miyamoto Musashi",
    Image: MusashiJPG,
  },
  {
    id: 7,
    profile: "Shishio Makoto",
    Image: ShishioJPG,
  },
  {
    id: 8,
    profile: "Red-haired Shanks",
    Image: ShanksJPG,
  },
  {
    id: 9,
    profile: "Dark King Rayleigh",
    Image: RayleighJPG,
  },
  {
    id: 10,
    profile: "The King of the Pirates",
    Image: RogerJPG,
  },
  {
    id: 11,
    profile: "The Surgeon of Death",
    Image: LawJPG,
  },
  {
    id: 12,
    profile: "Issho",
    Image: FujitoraJPG,
  },
  {
    id: 13,
    profile: "Unit Commander Casca",
    Image: CascaJPG,
  },
  {
    id: 14,
    profile: "Kurosaki Ichigo",
    Image: IchigoJPG,
  },
  {
    id: 15,
    profile: "The Sword God Ryuma",
    Image: RyumaJPG,
  },
];

const Profiles = ({ page }) => {
  // IF NOT PAGE = DISPLAY HOME PAGE / ELSE SHOW PROFILES PAGE
  const mapData = !page ? profileData.slice(0, 6) : profileData;
  return (
    <div className={classes.container}>
      {/* SHOW PROFILES PAGE IF TRUE */}
      <div className={`${classes.profiles} ${page ? classes.page : ""}`}>
        {/* CONTENT - TITLE */}
        <div className={classes.profiles__content}>
          <h2 className={classes["profiles__content--title"]}>
            Apprentice Profiles
          </h2>
          {/* CONTENT - GALLERY - CARDS */}
          <div className={classes["profiles__content--gallery"]}>
            {mapData.map(({ id, profile, Image }) => (
              <div className={classes.gallery__item} key={id}>
                <img
                  src={Image}
                  alt={profile}
                  className={classes["gallery__item--img"]}
                />
                <div className={classes.overlay} />
                <div className={classes.gallery__item__content}>
                  {/* CONTENT - GALLERY - CARDS - TEXT */}
                  <h2 className={classes.gallery__item__content__profile}>
                    {profile}
                  </h2>
                </div>
              </div>
            ))}
          </div>
          {/* VIEW MORE LINK */}
          {!page && (
            <div className={classes["profiles__content--viewmore"]}>
              <Link to="/profiles">
                view more <BsArrowRight />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profiles;
