"use client";

import Image from "next/image";
import { TechBadge } from "../../../tech-badge";
import { Button } from "../../../button";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from "react-icons/tb";
import { SectionTitle } from "@/app/components/section-title";

const MOCK_CONTACTS = [
  {
    url: "https://github.com/Gabianchini",
    icon: <TbBrandGithub size={35}/>,
    social: "Github",
  },
  {
    url: "https://www.linkedin.com/in/gabriela-bianchini-de-oliveira-044450187/",
    icon: <TbBrandLinkedin size={35}  />,
    social: "Linkedin",
  },
  {
    url: "https://wa.me/5543984132552",
    icon: <TbBrandWhatsapp size={35} />,
    social: "Whatsapp",
  },
];

export const HeroSection = () => {
  const Techs = [
    "React.js",
    "JavaScript",
    "TypeScript",
    "Next.Js",
    "Node.js",
    "Express",
    "EJS",
    "SQL",
    "NoSQL",
    "MongoDB",
    "MySQL",
    "TailwindCss",
    "Css",
    "Sass",
    "Bootstrap",
    "Material-ui",
    "Prisma",
    "Git",
    "Agile Methodologies",
  ];
  return (
    <section className="w-full lg:h-[800px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[90px]">
      <div className="container flex items-center justify-between flex-col-reverse lg:flex-row pt-2">
        <div>
        <SectionTitle
            title="Hello, My name is Gabriela Bianchini"
            className="font-mono text-sky-200  text-4xl font-medium mt-3 mx-2"
          ></SectionTitle>
          <div>
            <section
              className="text-gray-200 my-6 text-sm sm:text-base mx-3">
              <p>
                Developer with experience in the Technology sector, I
                bring a background in Analysis and System Development along with
                independently and self-taught led projects.
              </p>
              <p>
                My professional approach is characterized by a collaborative and
                proactive mindset. I have a passion for continuous learning and
                am always on the lookout for new challenges to enhance my
                skills.
              </p>
              <p>
                If you're interested in collaborating or have any questions,
                please don't hesitate to get in touch. Let's work together!
              </p>
            </section>

            <section className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[500px]">
              <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[500px]">
                {Techs.map((tech, index) => (
                  <TechBadge name={tech} key={index} />
                ))}
              </div>
            </section>
            <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
              <Button className="w-max shadow-button">
                Contact me
                <HiArrowNarrowRight size={18} />
              </Button>
              <div className="text-2xl flex items-center h-20 gap-3">
                {MOCK_CONTACTS.map((contact, index) => (
                  <a
                    href={contact.url}
                    key={`contact-${index}`}
                    target="_blank"
                    className="hover:scale-125 transition-colors"
                    aria-label={contact.social}
                    role="button"
                  >
                    {contact.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="origin-center">
        
        </div>
        <Image
            className="w-[400px] h-[300px] lg:w-[410px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-full object-cover mx-3 grid "
            width={420}
            height={404}
            src="/images/Gabriela2.webp"
            alt="Gabriela's profile picture"
            priority
          />
      </div>
    </section>
  );
};
