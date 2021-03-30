import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown, faCode } from "@fortawesome/free-solid-svg-icons";

class LinkItem {
  text;
  icon;

  constructor(text: String, icon: JSX.Element | null) {
    this.text = text;
    this.icon = icon;
  }
}

export const linkItems = [
  new LinkItem("About", null),
  new LinkItem("Portfolio", null),
  new LinkItem("Contact", null),
  new LinkItem(
    "Resume",
    <FontAwesomeIcon icon={faArrowCircleDown} className="mr-2" />
  ),
];

export const brand = {
  text: "Casper Hauberg",
  icon: <FontAwesomeIcon icon={faCode} className="mr-2" />,
};
