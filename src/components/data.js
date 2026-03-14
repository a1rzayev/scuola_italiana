import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Why learn Italian with us?",
  desc: "Scuola Italiana Baku combines qualified native teachers, a communicative approach, and a welcoming Italian atmosphere so you learn effectively and enjoy every lesson.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Native Italian teachers",
      desc: "Learn from qualified native speakers who bring real Italian culture into every class.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "All levels A1–C2",
      desc: "Structured courses aligned with the CEFR, from absolute beginner to advanced.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "CILS & CELI exam prep",
      desc: "Prepare for internationally recognized Italian proficiency certifications.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "More than just a school",
  desc: "Scuola Italiana Baku is a community — learn the language, enjoy our café, and experience Italian culture through events and workshops in Baku.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Authentic Italian café",
      desc: "Practice Italian over real espresso, cappuccino, and freshly baked pastries.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Cultural events & workshops",
      desc: "Film screenings, cooking sessions, art talks, and Italian holiday celebrations.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Group & private lessons",
      desc: "Flexible formats to fit your schedule — small groups or one-on-one with a teacher.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
