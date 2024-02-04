import Image from "next/image";
import Cards from "@/app/components/cards.component";
import { projects } from './constants'

export default function Home() {
  return (
    <main className="flex lg:w-11/12 max-w-[300px] md:max-w-2xl lg:max-w-screen-xl flex-col lg:px-0">
      <section className="flex flex-col lg:mt-48 w-full">
        <h1 className="lg:text-6xl text-2xl font-bold">
          Crafting memorable digital <br className="hidden lg:inline" />{" "}
          experiences with a user centered <br className="hidden lg:inline" />{" "}
          approach.
        </h1>
        <div className="flex flex-row-reverse mt-5">
          <p className="w-full lg:w-1/2 font-thin ">
            Passionate about user experience design with nearly four years of
            experience in crafting impactful digital solutions. My focus is on
            blending attractive aesthetics with intuitive functionality, always
            with the user at the heart of each design. Throughout my career,
            I&apos;ve had the privilege of working on various projects that have
            transformed ideas into remarkable digital experiences.
          </p>
        </div>
      </section>
      <section className="w-full lg:mt-44 mt-12">
        <div className="flex justify-center lg:mb-24 mb-10">
          <Image
            src="images/arrow.svg"
            height={50}
            width={16}
            alt="Arrow down"
          />
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap">
          {projects.map((project, i) => {
            const classes = ["lg:w-1/2", "w-full", "lg:my-10", "my-5"];
            const subClasses = ["relative", "mx-0"];

            subClasses.push(i % 2 !== 0 ? "lg:ml-10" : "lg:mr-10");

            return (
              <Cards
                key={i}
                sizes="(max-width: 1500px) 80w"
                width={717.99}
                height={505.71}
                project={project}
                subClasses={subClasses}
                classes={classes}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
