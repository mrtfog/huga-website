import { socialMedias } from "../../../assets/img/SVG";
import { MenuIcon } from "../menu/MenuIcon";

const SocialMediaContainer = () => {
  return (
    <div className="menu-social-media">
      <div className="menu-social-media-container">
        {socialMedias.map((data, i) => {
          return (
            <MenuIcon key={i} icon={data.socialmedia} url={data.url}></MenuIcon>
          );
        })}
      </div>
    </div>
  );
};
export default SocialMediaContainer;
