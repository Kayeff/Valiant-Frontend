import map from "./assets/map.svg";
import sales from "./assets/sales.svg";
import call from "./assets/call.svg";
import support from "./assets/support.svg";

export const contactLinks = [
  {
    id: "link1",
    type: "Chat to sales",
    desc: "Speak to our team",
    href: "mailto:director@valiantentech.com",
    typeID: "director@valiantentech.com",
    icon: sales,
  },
  {
    id: "link2",
    type: "Chat to support",
    desc: "We are here to help",
    href: "mailto:technical@valiantentech.com",
    typeID: "technical@valiantentech.com",
    icon: support,
  },
  {
    id: "link3",
    type: "Visit us",
    desc: "Visit our offices",
    href: "https://maps.app.goo.gl/3RagvNd5fAKCfYr49",
    typeID: "View on Google Maps",
    icon: map,
  },
  {
    id: "link4",
    type: "Call us",
    desc: "Mon-Fri 10am to 5pm",
    href: "tel:919574002260",
    typeID: "+91 95740 02260",
    icon: call,
  },
];
