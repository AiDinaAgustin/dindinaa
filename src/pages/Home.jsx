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
import { useState } from "react";

import ContainerLayout from "@/components/templates/ContainerLayout";
import { ChevronRight, Github, Menu, X } from "lucide-react";

export default function Home() {
  const [navActive, setNavActive] = useState(false);

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
      title: "Create project",
      description: "Deploy your new project in one-click.",
      tags: ["#HTML", "#CSS", "#JavaScript"],
      image: "https://via.placeholder.com/150",
      repository: "https://github.com",
      link: "https://github.com",
    },
    {
      title: "Create project",
      description: "Deploy your new project in one-click.",
      tags: ["#HTML", "#CSS", "#JavaScript"],
      image: "https://via.placeholder.com/150",
      repository: "https://github.com",
      link: "https://github.com",
    },
    {
      title: "Create project",
      description: "Deploy your new project in one-click.",
      tags: ["#HTML", "#CSS", "#JavaScript"],
      image: "https://via.placeholder.com/150",
      repository: "https://github.com",
      link: "https://github.com",
    },
    {
      title: "Create project",
      description: "Deploy your new project in one-click.",
      tags: ["#HTML", "#CSS", "#JavaScript"],
      image: "https://via.placeholder.com/150",
      repository: "https://github.com",
      link: "https://github.com",
    },
  ];

  return (
    <ContainerLayout className={`font-fira overflow-x-auto`}>
      <nav className="lg:flex lg:justify-between items-center">
        <div className="flex justify-between items-center">
          <SubHeading className="">
            Ai<span className={"text-primary"}>Dina</span>Agustin
          </SubHeading>
          {navActive ? (
            <X className="lg:hidden" onClick={() => setNavActive(!navActive)} />
          ) : (
            <Menu
              className="lg:hidden"
              onClick={() => setNavActive(!navActive)}
            />
          )}
        </div>
        <ul
          className={`lg:flex lg:gap-5 ${navActive ? "block lg:border-b-0 border-b" : "hidden"}`}
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
        <section className="lg:my-32 my-10 lg:w-1/2">
          <div>
            <Heading className="text-justify">
              Dina is a{" "}
              <span className="text-primary">Web Fullstack Developer</span> who
              loves to build{" "}
              <span className="text-primary">Web Applications</span>.
            </Heading>
            <Paragraph className="my-5 !leading-loose text-justify text-white/70">
              {description}
            </Paragraph>
            <Button>Contact Me</Button>
          </div>
          <div className="relative w-full bg-white lg:backdrop-blur-3xl">
            <div className="absolute bottom-32 lg:-right-[600px] right-32 lg:w-72 lg:h-72 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter opacity-70 animate-blob"></div>
            <div className="absolute bottom-10 lg:-right-96 right-0 lg:w-72 lg:h-72 w-64 h-64 bg-violet-400 rounded-full mix-blend-multiply filter opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 lg:-right-96 right-10 lg:w-72 lg:h-72 w-64 h-64 bg-fuchsia-300 rounded-full mix-blend-multiply filter opacity-70 animate-blob animation-delay-4000"></div>
            <div className="m-8 relative space-y-4"></div>
          </div>
        </section>
        <section>
          <div className="flex justify-between my-5 items-center">
            <Heading>
              <span className={"text-primary"}>#</span>projects
            </Heading>
            <Link
              to={"https://github.com/AiDinaAgustin"}
              className={`hover:underline hover:underline-offset-4 hover:text-primary`}
            >
              View All
            </Link>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
            {projects.map((project) => (
              <Card key={project.title}>
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
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </div>
                  </section>
                </CardHeader>
                <CardContent>
                  <div className="">Hello World</div>
                </CardContent>
                <CardFooter className="xl:flex xl:justify-between grid grid-cols-1 gap-3">
                  <Link to={project.repository}>
                    <Button variant="outline" className={"w-full"}>
                      <Github />
                      Repository
                    </Button>
                  </Link>
                  <Link to={project.link}>
                    <Button className={`w-full`}>
                      <ChevronRight />
                      Link
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </ContainerLayout>
  );
}
