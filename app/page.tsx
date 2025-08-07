import Image from "next/image";
import Cards from "@/app/components/cards.component";
import { projects } from "./constants";

export default function Home() {
  return (
    <main className="flex container flex-col  p-3">
      <section className="flex flex-col lg:mt-48 w-full">
        <h1 className="lg:text-6xl text-2xl font-bold text-center">
          Crafting memorable digital experiences with a user centered approach.
        </h1>
        <p className="w-full font-thin lg:mt-20 mt-10 text-lg text-center">
          Passionate about user experience design with many years of
          experience in crafting impactful digital solutions. My focus is on
          blending attractive aesthetics with intuitive functionality, always
          with the user at the heart of each design. Throughout my career,
          I&apos;ve had the privilege of working on various projects that have
          transformed ideas into remarkable digital experiences.
        </p>
      </section>
      <section className="w-full lg:mt-44 mt-12">
        <div className="flex justify-center lg:mb-24 mb-10">
          <Image
            src="images/arrow.svg"
            className="animate-bounce"
            height={50}
            width={16}
            alt="Arrow down"
          />
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap">
          {projects.map((project, i) => {
            const classes = ["lg:my-20", "my-10"];
            const subClasses = [];

            subClasses.push(i % 2 !== 0 ? "lg:ml-10" : "lg:mr-10");
            classes.push(
              [0, 3, 4].includes(i) ? "flex-[0_0_45%]" : "flex-[0_0_55%]"
            );

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
