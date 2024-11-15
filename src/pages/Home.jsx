import { Heading, SubHeading, Paragraph } from "@/components/atoms/Typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge.jsx";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "@/components/atoms/Loading/index.jsx";
import { motion } from "framer-motion";

import ContainerLayout from "@/components/templates/ContainerLayout";
import {
  ArrowRight,
  ChevronRight,
  Github,
  Heart,
  Menu,
  X,
  Mail,
  Linkedin,
  Instagram,
  Phone,
  FolderGit2
} from "lucide-react";

export default function Home() {
  const [navActive, setNavActive] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  const location = useLocation();
  const navLinks = [
    {
      name: "home",
      url: "/",
      active: location.pathname === "/",
    },
    {
      name: "projects",
      url: "/projects",
      active: location.pathname === "/projects",
    },
    {
      name: "about me",
      url: "/about_me",
      active: location.pathname === "/about_me",
    },
    {
      name: "contact",
      url: "/contact",
      active: location.pathname === "/contact",
    },
  ];

  const description = `I am a Fullstack Developer who loves to build Web Applications. I am passionate about building applications that are user-friendly and accessible. I have experience working with React, Node.js, Express, and MongoDB. I am always looking for new opportunities to learn and grow as a developer.`;

  const projects = [
    {
      title: "Sistem Informasi Geografis SPBU Sukabumi",
      description: "Deploy your new project in one-click.",
      tags: ["#CodeIgniter", "#Bootstrap", "#MySQL"],
      image: "/sig.png",
      repository: "https://github.com/AiDinaAgustin",
      link: "https://github.com/AiDinaAgustin",
    },
    {
      title: "Dzikir Pop",
      description: "Deploy your new project in one-click.",
      tags: ["#JavaScript", "#CSS", "#PHP", "MySQL"],
      image: "/dpop.png",
      repository: "https://github.com/AiDinaAgustin",
      link: "https://github.com/AiDinaAgustin",
    },
    {
      title: "Sistem Informasi Kunjungan Wali Santri Pondok Pesantren As-salam",
      description: "Deploy your new project in one-click.",
      tags: ["#Laravel", "#Bootstrap", "#MySQL"],
      image: "/assalam.png",
      repository: "https://github.com/AiDinaAgustin",
      link: "https://github.com/AiDinaAgustin",
    },
    {
      title: "Sistem Informasi Homeschooling Permata Hati",
      description: "Deploy your new project in one-click.",
      tags: ["#CI", "#Bootstrap", "#MySQL"],
      image: "/edu.png",
      repository: "https://github.com/AiDinaAgustin",
      link: "https://github.com/AiDinaAgustin",
    },
    {
      title: "Website KKN Desa Wangunsari",
      description: "Deploy your new project in one-click.",
      tags: ["#Tailwind", "#JavaScript"],
      image: "/kkn.png",
      repository: "https://github.com/AiDinaAgustin",
      link: "https://github.com/AiDinaAgustin",
    },
    {
      title: "Sistem Informasi Curug Cierang",
      description: "Deploy your new project in one-click.",
      tags: ["#Tailwind", "#JavaScript"],
      image: "/curug.png",
      repository: "https://github.com/AiDinaAgustin",
      link: "https://github.com/AiDinaAgustin",
    },
    {
      title: "Castro Podcast Horror",
      description: "Deploy your new project in one-click.",
      tags: ["#Laravel", "#Tailwind", "#MySQL"],
      image: "castro.png",
      repository: "https://github.com/AiDinaAgustin",
      link: "https://github.com/AiDinaAgustin",
    },
    {
      title: "POS Apotek",
      description: "Deploy your new project in one-click.",
      tags: [
        "#React",
        "#Tailwind",
        "#Express",
        "#PostgreSQL",
        "#Prisma",
        "#Shadcn UI",
      ],
      image: "/pos.png",
      repository: "https://github.com/AiDinaAgustin",
      link: "https://github.com/AiDinaAgustin",
    },
    {
      title: "Info Pangan Jakarta",
      description: "Deploy your new project in one-click.",
      tags: [
        "#Express",
        "#PostgreSQL",
        "#Next.Js",
        "#Tailwind",
        "#Firebase",
        "Shadcn UI",
      ],
      image: "/ipj.png",
      repository: "https://github.com/AiDinaAgustin",
      link: "https://github.com/AiDinaAgustin",
    },
    // {
    //   title: "HR Payroll",
    //   description: "Deploy your new project in one-click.",
    //   tags: [
    //     "#React",
    //     "#Typescript",
    //     "#Express",
    //     "#PostgreSQL",
    //     "#Redis",
    //     "#Firebase",
    //     "Tailwind",
    //   ],
    //   image: "https://via.placeholder.com/150",
    //   repository: "https://github.com",
    //   link: "https://github.com",
    // },
  ];

  const skillSet = [
    {
      name: "HTML",
      image: "https://svgl-badge.vercel.app/api/Language/HTML5?theme=light",
    },
    {
      name: "CSS",
      image: "https://svgl-badge.vercel.app/api/Language/CSS?theme=light",
    },
    {
      name: "JavaScript",
      image:
        "https://svgl-badge.vercel.app/api/Language/JavaScript?theme=light",
    },
    {
      name: "React",
      image: "https://svgl-badge.vercel.app/api/Library/React?theme=light",
    },
    {
      name: "Node.js",
      image: "https://svgl-badge.vercel.app/api/Library/Node.js?theme=light",
    },
    {
      name: "Express",
      image:
        "https://svgl-badge.vercel.app/api/Framework/Express.js?theme=light",
    },
    {
      name: "MongoDB",
      image: "https://svgl-badge.vercel.app/api/Database/MongoDB?theme=light",
    },
    {
      name: "PostgreSQL",
      image:
        "https://svgl-badge.vercel.app/api/Database/PostgreSQL?theme=light",
    },
    {
      name: "MySQL",
      image: "https://svgl-badge.vercel.app/api/Database/MySQL?theme=light",
    },
    {
      name: "Tailwind",
      image:
        "https://svgl-badge.vercel.app/api/Framework/Tailwind%20CSS?theme=light",
    },
    {
      name: "Bootstrap",
      image:
        "https://svgl-badge.vercel.app/api/Framework/Bootstrap?theme=light",
    },
    {
      name: "Laravel",
      image: "https://svgl-badge.vercel.app/api/Framework/Laravel?theme=light",
    },
    {
      name: "Prisma",
      image: "https://svgl-badge.vercel.app/api/Software/Prisma?theme=light",
    },
    {
      name: "Firebase",
      image: "https://svgl-badge.vercel.app/api/Hosting/Firebase?theme=light",
    },
    {
      name: "Shadcn UI",
      image: "https://svgl-badge.vercel.app/api/Library/shadcnui?theme=light",
    },
    {
      name: "Next.Js",
      image: "https://svgl-badge.vercel.app/api/Framework/Next.js?theme=light",
    },
    {
      name: "Typescript",
      image:
        "https://svgl-badge.vercel.app/api/Language/TypeScript?theme=light",
    },
    {
      name: "Redis",
      image: "https://svgl-badge.vercel.app/api/Database/Redis?theme=light",
    },
  ];

  const contacts = [
    {
      name: "Gmail",
      link: "mailto:aidinaagustin2@gmail.com",
      icon: <Mail />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/aidina-agustin/",
      icon: <Linkedin />,
    },
    // {
    //   name: "Instagram",
    //   link: "https://www.instagram.com/sana.agustina/",
    //   icon: <Instagram />,
    // }
  ];

  if (loading) {
    return <Loading />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <ContainerLayout className={`font-fira overflow-x-auto`}>
        <nav className="lg:flex lg:justify-between items-center">
          <div className="flex justify-between items-center">
            <SubHeading className="">
              Ai<span className={"text-primary"}>Dina</span>Agustin
            </SubHeading>
            {navActive ? (
              <X
                className="lg:hidden"
                onClick={() => setNavActive(!navActive)}
              />
            ) : (
              <Menu
                className="lg:hidden"
                onClick={() => setNavActive(!navActive)}
              />
            )}
          </div>
          <ul
            className={`lg:flex lg:gap-5 ${navActive ? "block lg:border-b-0 border-b border-primary" : "hidden"}`}
          >
            {navLinks.map((link) => (
              <li
                key={link.name}
                className={`my-5 lg:my-0 ${link.active && "px-2 lg:bg-primary/20 bg-primary/50 rounded-lg"}`}
              >
                <Link
                  to={link.url}
                  className={link.active ? "text-white" : "text-white/70"}
                >
                  {link.active && <span className="text-primary">#</span>}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <main>
          <section className="lg:my-32 my-10 lg:w-1/2 pb-20">
            <div>
              <Heading className="text-justify">
                Dina is a{" "}
                <span className="text-primary">Web Fullstack Developer</span>{" "}
                who loves to build{" "}
                <span className="text-primary">Web Applications</span>.
              </Heading>
              <Paragraph className="my-5 !leading-loose text-justify text-white/70">
                {description}
              </Paragraph>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
              >
                <Button>Contact Me</Button>
              </motion.button>
            </div>
            <div className="relative w-full bg-white lg:backdrop-blur-3xl">
              <div className="absolute bottom-32 lg:-right-[600px] right-32 lg:w-72 lg:h-72 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter opacity-70 animate-blob"></div>
              <div className="absolute bottom-10 lg:-right-96 right-0 lg:w-72 lg:h-72 w-64 h-64 bg-violet-400 rounded-full mix-blend-multiply filter opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 lg:-right-96 right-10 lg:w-72 lg:h-72 w-64 h-64 bg-fuchsia-300 rounded-full mix-blend-multiply filter opacity-70 animate-blob animation-delay-4000"></div>
              <div className="m-8 relative space-y-4"></div>
            </div>
          </section>
          <section className="pb-20">
            <div className="flex justify-between my-5 items-center">
              <div className="flex gap-5 w-full items-center">
                <Heading>
                  <span className={"text-primary"}>#</span>projects
                </Heading>
                <div className="w-full h-0.5 bg-primary rounded-lg"></div>
              </div>
              <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                <Link
                  to={"https://github.com/AiDinaAgustin"}
                  className={`hover:underline hover:underline-offset-4 hover:text-primary whitespace-nowrap ml-5`}
                >
                  View All
                </Link>
              </motion.a>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
              {projects.map((project) => (
                <Card key={project.title} className={`bg-[#282C33]`}>
                  <CardHeader hasImage={true}>
                    <img src={project.image} alt={project.title} />
                    <section className="px-6 py-1">
                      <div className="flex flex-wrap gap-2 py-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} className="inline-flex items-center">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-4">
                        <CardTitle className={`text-white`}>
                          {project.title}
                        </CardTitle>
                      </div>
                    </section>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className={`text-white/60 mt-4`}>
                      {project.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="xl:flex xl:justify-between grid grid-cols-1 gap-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <Link to={project.repository}>
                        <Button variant="outline" className={"w-full"}>
                          <Github />
                          Repository
                        </Button>
                      </Link>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <Link to={project.link}>
                        <Button className={`w-full`}>
                          <ChevronRight />
                          Link
                        </Button>
                      </Link>
                    </motion.button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
          <section className="pb-20">
            <div className="my-5">
              <Heading className={"flex items-center gap-5"}>
                <p className="">
                  <span className={"text-primary"}>#</span>skills
                </p>
                <div className="w-1/4 h-0.5 bg-primary rounded-lg"></div>
              </Heading>
            </div>
            <div className="w-full">
              <div className="flex flex-wrap gap-5">
                {skillSet.map((skill) => (
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    src={skill.image}
                    alt={skill.name}
                  />
                ))}
              </div>
            </div>
          </section>
          <section className="pb-20">
            <div className="my-5">
              <Heading className={"flex items-center gap-5 whitespace-nowrap"}>
                <p className="">
                  <span className={"text-primary"}>#</span>about-me
                </p>
                <div className="w-1/2 h-0.5 bg-primary rounded-lg"></div>
              </Heading>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="">
                <Paragraph className="text-white/70 !leading-loose text-justify">
                  {description}
                </Paragraph>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Button className={`my-5`}>
                    <ArrowRight />
                    Read More
                  </Button>
                </motion.button>
              </div>
              <div className=""></div>
            </div>
          </section>
          <section className="">
            <div className="my-5">
              <Heading className={"flex items-center gap-5 whitespace-nowrap"}>
                <p className="">
                  <span className={"text-primary"}>#</span>contacts
                </p>
                <div className="w-1/12 h-0.5 bg-primary rounded-lg"></div>
              </Heading>
            </div>
            <div className="lg:flex grid lg:gap-10 gap-5">
              <div className="lg:w-1/2 w-full">
                <Paragraph className="text-white/70 !leading-loose text-justify">
                  I'm interested in freelance opportunities - especially
                  ambitious projects. However, if you have other request or
                  question, don't hesitate to contact me.
                </Paragraph>
              </div>
              <div className="lg:w-1/2 lg:max-w-xs lg:ml-auto lg:flex w-full">
                <Card className={`bg-[#282C33] border-primary`}>
                  <CardHeader hasImage={false}>
                    <CardTitle className={`text-white text-center !pb-0`}>
                      Message Me on
                    </CardTitle>
                  </CardHeader>
                  <CardDescription className={`flex mx-auto gap-3 p-3 !pt-0`}>
                    {contacts.map((contact) => (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                        href={contact.link}
                        target="_blank"
                        rel="noreferrer"
                        className={"w-full"}
                      >
                        <Button className="my-5 w-full">
                          {contact.icon}
                          {contact.name}
                        </Button>
                      </motion.a>
                    ))}
                  </CardDescription>
                </Card>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <Paragraph className="text-center border-t mt-10 border-primary">
            <p className="my-10 mb-5">
              <span className={`text-primary`}>&copy;</span>Copright{" "}
              {Date().split(" ")[3]}. Made by{" "}
              <Link
                to="https://www.github.com/AiDinaAgustin"
                className="text-primary"
              >
                AiDinaAgustin
              </Link>
            </p>
          </Paragraph>
        </footer>
      </ContainerLayout>
    </motion.div>
  );
}
