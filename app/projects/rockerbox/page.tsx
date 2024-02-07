import Image from "next/image";
import Slider from "../../components/slider.component";
import type { Metadata, ResolvingMetadata } from "next";
import { author } from "../../constants";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
const projectName = "RockerBox";
const title = `${projectName} | ${author}`;

export async function generateMetadata(
  _: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentMetaData = await parent;
  const description = `This project aims to streamline employees&apos; access to
  government benefits in the United States through an intuitive and
  easy-to-complete questionnaire. The design focuses on optimizing
  the user experience to ensure clear and efficient participation,
  ensuring that all employees can access benefits for which they may
  qualify, regardless of their needs and abilities.`;
  const previousImages = parentMetaData.openGraph?.images || [];

  return {
    title: projectName,
    description,
    openGraph: {
      images: ["/images/projects/rockerbox/rockerbox.jpg", ...previousImages],
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
            <h1 className="text-3xl mb-10 font-bold lg:text-7xl">RockerBox</h1>
            <p className="lg:px-32">
              This project aims to streamline employees&apos; access to
              government benefits in the United States through an intuitive and
              easy-to-complete questionnaire. The design focuses on optimizing
              the user experience to ensure clear and efficient participation,
              ensuring that all employees can access benefits for which they may
              qualify, regardless of their needs and abilities.
            </p>
            <br />
          </div>
          <div className="my-10 lg:w-96 flex justify-center">
            <picture>
              <Image
                priority={true}
                src="/images/projects/rockerbox/rockerbox.jpg"
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
        This project focuses on simplifying employees&apos; access to government benefits in the United States through an intuitively designed and easy-to-complete questionnaire. The goal is to ensure clear and efficient participation for all employees, regardless of their skills and needs, facilitating access to benefits they may qualify for. Implementing a user-friendly interface and optimizing the user experience are fundamental aspects to ensure inclusivity and system effectiveness.
        </p>
        <div className="flex flex-col lg:mt-16 lg:flex-row">
          <div className="md:w-2/4 md:pr-10">
            <h2 className="text-2xl mb-5 font-bold mt-8">Problem</h2>
            <p>
              Existing questionnaires to determine employees&apos; eligibility
              for government benefits in the United States are complex and
              difficult to understand. The lack of clarity in the current
              process hinders employees from fully accessing the benefits for
              which they might qualify, creating a need for simplification.
            </p>
          </div>
          <div className="md:pl-10 md:w-2/4">
            <h2 className="text-2xl mb-5 font-bold mt-8">Solution</h2>
            <p>
              Develop an intuitive and easy-to-understand user interface for the
              questionnaire, thus addressing the current difficulties in
              understanding the process. By providing a clearer and more
              accessible experience, the aim is to enhance employee engagement
              and make it easier for them to fully understand and take advantage
              of the government benefits available to them. This user-centered
              UX approach ensures a more efficient and understandable process
              for all workers, regardless of their skills and prior knowledge.
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
                RockerBox
              </a>
            </div>
            <div>
              <div className="font-thin my-5">Role</div>
              <div className="font-medium leading-loose">
                UR Designer on a team of 2
              </div>
            </div>
            <div>
              <div className="font-thin my-5">Duration</div>
              <div className="font-medium leading-loose">2 months</div>
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
          After conducting an in-depth research process, which included detailed
          interviews with the client and a comprehensive analysis of project
          requirements, the inherent challenges of the current questionnaires
          for accessing government benefits in the United States were clearly
          identified. Lack of clarity and complexity in the user interface
          emerged as significant obstacles that negatively impact employee
          engagement and effective understanding.
        </p>
        <br />
        <p>
          The proposed solution revolves around a user-centered approach,
          involving the conceptualization and design of an intuitive and
          easy-to-understand interface. The optimization of accessibility and
          clarity in the questionnaire aims to overcome the identified barriers,
          thereby improving employees&apos; understanding and ability to fully
          leverage available benefits. Implementation of best practices gathered
          during benchmarking ensures the creation of a highly effective and
          efficient solution.
        </p>
        <br />
        <p>
          In summary, this research process has provided a detailed insight into
          the client&apos;s needs and laid the groundwork for developing a
          solution that significantly enhances the usability and accessibility
          of questionnaires for accessing government benefits.
        </p>
      </section>
      <section className="w-full mb-20 md:mt-32 mt-20" id="design">
        <h2 className="text-2xl md:text-5xl mb-5 font-bold lg:mb-16 text-center">
          2. Design
        </h2>
        <h3 className="text-1xl md:text-2xl font-bold mb-10 mt-10">
          Prototypes
        </h3>
        <Slider
          imageUrls={[
            "/images/projects/rockerbox/prototypes/1.jpg",
            "/images/projects/rockerbox/prototypes/2.jpg",
            "/images/projects/rockerbox/prototypes/3.jpg",
            "/images/projects/rockerbox/prototypes/4.jpg",
            "/images/projects/rockerbox/prototypes/5.jpg",
            "/images/projects/rockerbox/prototypes/6.jpg",
            "/images/projects/rockerbox/prototypes/7.jpg",
            "/images/projects/rockerbox/prototypes/8.jpg",
            "/images/projects/rockerbox/prototypes/9.jpg",
            "/images/projects/rockerbox/prototypes/10.jpg",
            "/images/projects/rockerbox/prototypes/11.jpg",
            "/images/projects/rockerbox/prototypes/12.jpg",
            "/images/projects/rockerbox/prototypes/13.jpg",
            "/images/projects/rockerbox/prototypes/14.jpg",
            "/images/projects/rockerbox/prototypes/15.jpg",
          ]}
        />
      </section>
    </main>
  );
}
