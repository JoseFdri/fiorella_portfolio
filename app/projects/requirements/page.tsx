import Image from "next/image";
import Slider from "../../components/slider.component";
import type { Metadata, ResolvingMetadata } from "next";
import { author } from "../../constants";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
const projectName = "Requirements";
const title = `${projectName} | ${author}`;

export async function generateMetadata(
  _: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentMetaData = await parent;
  const description = `We introduce an intuitive platform designed for the Human
  Resources team, streamlining project registration and expediting
  budgetary estimate generation. This automated tool enhances
  efficiency by considering the complexity and unique
  functionalities of each project, providing a comprehensive
  solution for creating accurate proposals swiftly.`;
  const previousImages = parentMetaData.openGraph?.images || [];

  return {
    title: projectName,
    description,
    openGraph: {
      images: [
        "/images/projects/requirements/requirements.jpg",
        ...previousImages,
      ],
      siteName: title,
      title: title,
      description,
    },
  };
}

export default async function Project() {
  return (
    <main className="flex lg:w-11/12 max-w-[300px] md:max-w-2xl lg:max-w-screen-xl flex-col lg:px-0 items-center justify-center">
      <section className="flex lg:mt-44 w-full">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-3/4 lg:flex lg:flex-col lg:justify-center">
            <h1 className="text-3xl mb-10 font-bold lg:text-7xl">
              Requirements
            </h1>
            <p className="lg:px-32">
              We introduce an intuitive platform designed for the Human
              Resources team, streamlining project registration and expediting
              budgetary estimate generation. This automated tool enhances
              efficiency by considering the complexity and unique
              functionalities of each project, providing a comprehensive
              solution for creating accurate proposals swiftly.
            </p>
            <br />
          </div>
          <div className="my-10 lg:w-96 flex justify-center">
            <picture>
              <Image
                priority={true}
                src="/images/projects/requirements/requirements.jpg"
                width={500.99}
                height={505.71}
                alt="Requirements"
                sizes={"(max-width: 1500px) 80w"}
              />
            </picture>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full">
        <h2 className="text-2xl mb-5 font-bold lg:mt-32 lg:mb-16">Overview</h2>
        <p>
          Creation of a web application designed to assist the company&apos;s
          human resources team in generating budget quotations for clients. The
          platform involves inputting project functionalities and details to
          automatically generate budget estimates based on complexity levels.
          This user-centric solution streamlines the budgeting process,
          enhancing efficiency and accuracy in proposal creation.
        </p>
        <div className="flex flex-col lg:mt-16 lg:flex-row">
          <div className="md:w-2/4 md:pr-10">
            <h2 className="text-2xl mb-5 font-bold mt-8">Problem</h2>
            <p>
              The Human Resources team faces significant challenges in
              efficiently registering projects and generating budgetary
              estimates. The complexity and diversity of each project&apos;s
              functionalities hinder the manual process, resulting in a loss of
              time and accuracy.
            </p>
          </div>
          <div className="md:pl-10 md:w-2/4">
            <h2 className="text-2xl mb-5 font-bold mt-8">Solution</h2>
            <p>
              To overcome these challenges, we introduce an intuitive platform
              designed specifically for the Human Resources team. This automated
              tool streamlines project registration and accelerates the
              generation of budgetary estimates by considering the complexity
              and unique functionalities of each project. With this solution,
              efficiency and accuracy in proposal creation are significantly
              enhanced, enabling the team to quickly address the changing
              demands of the work environment.
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-center lg:mt-44 bg-[#181818] w-screen py-7 mt-20">
        <div className="w-full lg:w-11/12 max-w-[300px] md:max-w-2xl lg:max-w-screen-xl md:flex md:justify-between">
          <div>
            <div>
              <div className="font-thin my-5">Client</div>
              <a
                href="https://techgenies.com/"
                target="_blank"
                className="font-medium leading-loose"
              >
                Techgenies
              </a>
            </div>
            <div>
              <div className="font-thin my-5">Role</div>
              <div className="font-medium leading-loose">
                UX UI Lead Designer
              </div>
            </div>
            <div>
              <div className="font-thin my-5">Duration</div>
              <div className="font-medium leading-loose">3 weeks</div>
            </div>
          </div>
          <div>
            <div>
              <div className="font-thin my-5">Tools</div>
              <div className="font-medium leading-loose">Figma</div>
            </div>
          </div>
          <div>
            <div>
              <div className="font-thin my-5">Process</div>
              <div className="leading-loose font-medium">
                Client Kickoff interview
                <br />
                Interviews with stakeholders
                <br />
                Benchmark
                <br />
                Visual design
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-start md:items-center flex-col w-full my-20 md:my-24">
        <div className="md:flex-row flex-col items-start md:items-start flex">
          <a
            href="#inmersion"
            className="flex items-center justify-center md:flex-col md:w-52 text-center"
          >
            <div className="font-medium rounded-full flex justify-center items-center hover:bg-white transition-all border-white hover:text-black text-white border-2 w-12 h-12 mr-5 md:mr-0 md:mb-5">
              1
            </div>
            Inmersion
          </a>
          <a
            href="#design"
            className="flex items-center justify-center md:flex-col md:w-52 text-center mt-5 md:mt-0"
          >
            <div className="font-medium rounded-full flex justify-center items-center hover:bg-white transition-all border-white hover:text-black text-white border-2 w-12 h-12 mr-5 md:mr-0 md:mb-5">
              2
            </div>
            Design
          </a>
        </div>
      </section>
      <section id="inmersion">
        <div className="flex justify-center">
          <h2 className="text-2xl md:text-5xl mb-5 font-bold lg:mb-16">
            1. Inmersion
          </h2>
        </div>
        <p>
          After an in-depth benchmarking process and direct conversations with
          the Human Resources team, significant challenges in efficiently
          registering projects and creating budget estimates have come to light.
          The inherent complexity and diversity of functionalities in each
          project have been identified as causing loss of time and precision in
          the currently manual process.
        </p>
        <p>
          To address these challenges, we propose a comprehensive solution: an
          intuitive platform designed exclusively for the Human Resources team.
          In the design of this platform, we will prioritize essential features
          such as quick access for creating new projects and a streamlined view
          of the history of completed projects. Additionally, a dedicated
          interface will be implemented to allow efficient access to detailed
          information for each entered project, significantly improving the
          team&apos;s efficiency and precision in facing the changing demands of
          the dynamic work environment. This user-centric approach ensures a
          solution tailored to the specific needs expressed by the Human
          Resources team.
        </p>
      </section>
      <section className="w-full mb-20 md:mt-32 mt-20" id="design">
        <h2 className="text-2xl md:text-5xl mb-5 font-bold lg:mb-16 text-center">
          2. Design
        </h2>
        <h3 className="text-1xl md:text-2xl font-bold mb-10 mt-10">
          Wireframes
        </h3>
        <Slider
          imageUrls={[
            "/images/projects/requirements/wireframes/1.png",
            "/images/projects/requirements/wireframes/2.jpg",
            "/images/projects/requirements/wireframes/3.jpg",
            "/images/projects/requirements/wireframes/4.jpg",
            "/images/projects/requirements/wireframes/5.jpg",
            "/images/projects/requirements/wireframes/6.jpg",
            "/images/projects/requirements/wireframes/7.jpg",
            "/images/projects/requirements/wireframes/8.jpg",
            "/images/projects/requirements/wireframes/9.png",
            "/images/projects/requirements/wireframes/10.jpg",
          ]}
        />
        <h3 className="text-1xl md:text-2xl font-bold mb-10 mt-10">Mockups</h3>
        <Slider
          imageUrls={[
            "/images/projects/requirements/mockups/1.png",
            "/images/projects/requirements/mockups/2.jpg",
            "/images/projects/requirements/mockups/3.jpg",
            "/images/projects/requirements/mockups/4.jpg",
            "/images/projects/requirements/mockups/5.jpg",
            "/images/projects/requirements/mockups/6.jpg",
            "/images/projects/requirements/mockups/7.jpg",
            "/images/projects/requirements/mockups/8.jpg",
            "/images/projects/requirements/mockups/9.jpg",
            "/images/projects/requirements/mockups/10.jpg",
          ]}
        />
        <h3 className="text-1xl md:text-2xl font-bold mb-10 mt-10">
          Prototypes
        </h3>
        <Slider
          imageUrls={[
            "/images/projects/requirements/prototypes/prototype_1.png",
            "/images/projects/requirements/prototypes/prototype_2.jpg",
            "/images/projects/requirements/prototypes/prototype_3.jpg",
            "/images/projects/requirements/prototypes/prototype_4.jpg",
            "/images/projects/requirements/prototypes/prototype_5.jpg",
            "/images/projects/requirements/prototypes/prototype_6.jpg",
            "/images/projects/requirements/prototypes/prototype_7.jpg",
            "/images/projects/requirements/prototypes/prototype_8.jpg",
            "/images/projects/requirements/prototypes/prototype_9.jpg",
            "/images/projects/requirements/prototypes/prototype_10.jpg",
          ]}
        />
      </section>
    </main>
  );
}
