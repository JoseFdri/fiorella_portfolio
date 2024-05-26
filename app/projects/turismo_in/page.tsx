import Image from "next/image";
import Slider from "../../components/slider.component";
import type { Metadata, ResolvingMetadata } from "next";
import { author } from "../../constants";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
const projectName = "Turismo In";
const title = `${projectName} | ${author}`;
const description = `Turismo In is a platform dedicated to promoting tourism in Peru by
providing tools and information for teachers, students, and
industry professionals. The primary focus is to enhance the user
experience through a redesign aimed at optimizing accessibility
and effectiveness of the platform, delivering a more intuitive and
enriching experience for all users involved in the promotion and
exploration of Peruvian tourism.`;

export async function generateMetadata(
  _: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentMetaData = await parent;
  const previousImages = parentMetaData.openGraph?.images || [];

  return {
    title: projectName,
    description,
    openGraph: {
      images: ["/images/turismo.jpg", ...previousImages],
      siteName: title,
      title: title,
      description,
    },
  };
}

export default async function Project() {
  return (
    <main className="flex container flex-col items-center justify-center px-3 ">
      <section className="flex lg:mt-44 w-full">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-3/4 lg:flex lg:flex-col lg:justify-center">
            <h1 className="text-3xl mb-10 font-bold lg:text-7xl">
              {projectName}
            </h1>
            <p className="lg:px-32">
              {description}
            </p>
            <br />
            <div className="lg:px-32">
              <a href="https://www.promperu.gob.pe/turismoin" target="_blank">
                https://www.promperu.gob.pe/turismoin
              </a>
            </div>
          </div>
          <div className="my-10 lg:w-96 flex justify-center">
            <picture>
              <Image
                priority={true}
                src="/images/projects/turismo_in/turismo_in.jpg"
                width={500.99}
                height={505.71}
                alt="Siicex"
                sizes={"(max-width: 1500px) 80w"}
              />
            </picture>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full">
        <h2 className="text-2xl mb-5 font-bold lg:mt-32 lg:mb-16">Overview</h2>
        <p>
          We aim to enhance the user experience, focusing on simplicity and
          clarity. Increase engagement, particularly for exporters, educators,
          and students promoting Peruvian tourism, optimizing resources for
          maximum impact.
        </p>
        <div className="flex flex-col lg:mt-16 lg:flex-row">
          <div className="md:w-2/4 md:pr-10">
            <h2 className="text-2xl mb-5 font-bold mt-8">Problem</h2>
            <p>
              Turismo In&apos;s current portal struggles with user experience
              due to complex architecture and navigation, leading to reduced
              relevance among key user groups and impacting visibility.
            </p>
          </div>
          <div className="md:pl-10 md:w-2/4">
            <h2 className="text-2xl mb-5 font-bold mt-8">Solution</h2>
            <p>
              A restructuring of the portal is proposed to enhance the user
              experience, with customized adjustments for exporters, educators,
              and students. The goal is to optimize the impact on the promotion
              of Peruvian tourism by facilitating access to information.
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-center lg:mt-44 lg:bg-[#100F1C] bg-[#2E3259] w-screen py-7 mt-20 px-3 ">
        <div className="w-full container md:flex md:justify-between">
          <div>
            <div>
              <div className="font-thin my-5">Client</div>
              <div className="font-medium leading-loose">PromPeru</div>
            </div>
            <div>
              <div className="font-thin my-5">Role</div>
              <div className="font-medium leading-loose">
                UX & UI Designer on a team of 3
              </div>
            </div>
            <div>
              <div className="font-thin my-5">Duration</div>
              <div className="font-medium leading-loose">4 months</div>
            </div>
          </div>
          <div>
            <div>
              <div className="font-thin my-5">Tools</div>
              <div className="font-medium leading-loose">
                Sketch
                <br />
                Invision
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="font-thin my-5">Process</div>
              <div className="leading-loose font-medium">
                Client Kickoff interview
                <br />
                Heuristic analysis
                <br />
                Benchmark
                <br />
                Usability test of the current website
                <br />
                Workshop with stakeholders
                <br />
                Workshop with students
                <br />
                Interviews with users
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
            href="#immersion"
            className="flex items-center justify-center md:flex-col md:w-52 text-center"
          >
            <div className="font-medium rounded-full flex justify-center items-center hover:bg-white transition-all border-white hover:text-black text-white border-2 w-12 h-12 mr-5 md:mr-0 md:mb-5">
              1
            </div>
            Immersion
          </a>
          <a
            href="#usability_test"
            className="flex items-center justify-center md:flex-col md:w-52 text-center mt-5 md:mt-0"
          >
            <div className="font-medium rounded-full flex justify-center items-center hover:bg-white transition-all border-white hover:text-black text-white border-2 w-12 h-12 mr-5 md:mr-0 md:mb-5">
              2
            </div>
            Usability test
          </a>
          <a
            href="#workshops"
            className="flex items-center justify-center md:flex-col md:w-52  text-center mt-5 md:mt-0"
          >
            <div className="font-medium rounded-full flex justify-center items-center hover:bg-white transition-all border-white hover:text-black text-white border-2 w-12 h-12 mr-5 md:mr-0 md:mb-5">
              3
            </div>
            Workshops
          </a>
          <a
            href="#interviews"
            className="flex items-center justify-center md:flex-col md:w-52  text-center mt-5 md:mt-0"
          >
            <div className="font-medium rounded-full flex justify-center items-center hover:bg-white transition-all border-white hover:text-black text-white border-2 w-12 h-12 mr-5 md:mr-0 md:mb-5">
              4
            </div>
            Interviews
          </a>
          <a
            href="#design"
            className="flex items-center justify-center md:flex-col md:w-52  text-center mt-5 md:mt-0"
          >
            <div className="font-medium rounded-full flex justify-center items-center hover:bg-white transition-all border-white hover:text-black text-white border-2 w-12 h-12 mr-5 md:mr-0 md:mb-5">
              5
            </div>
            Design
          </a>
        </div>
      </section>
      <section id="immersion" className="w-full ">
        <div className="flex justify-center">
          <h2 className="text-2xl md:text-5xl mb-5 font-bold lg:mb-16">
            1. Inmersion
          </h2>
        </div>
        <h2 className="text-1xl md:text-2xl mb-10 font-bold">
          Heuristic Analysis
        </h2>
        <p>
          We started by conducting a comprehensive audit of the app from an
          expert perspective to identify shortcomings and areas of opportunity.
        </p>
        <p>
          0 means does not present this feature
          <br />
          1 = Meets the minimum requirements with evident deficiencies
          <br />
          3 = Meets by offering standard features
          <br />4 = Stands out as a best practice.
        </p>
        <br />
        <p>Evaluation results:</p>
        <ul className="list-disc pl-5 ">
          <li>Navigation structure: 2,5</li>
          <li className="mt-2">Page layout: 2,4</li>
          <li className="mt-2">Communication and messaging: 2,1</li>
          <li className="mt-2">Search for information : 0,8</li>
          <li className="mt-2">Login and accessibility : 2,2</li>
          <li className="mt-2">Help the user : 1,1</li>
          <li className="mt-2">Total Average : 1,8</li>
        </ul>
      </section>
      <section className="w-full mt-10 md:mt-28">
        <h3 className="text-1xl md:text-2xl mb-5 font-bold lg:mb-16">
          Overall Assessment in Graphics
        </h3>
        <div className="w-full flex justify-center mt-10">
          <div className="w-full">
            <Image
              src={"/images/projects/turismo_in/overall_assetment.jpg"}
              width={300.99}
              height={205.71}
              alt={"Overall Assessment"}
              sizes={"(max-width: 1500px) 100px"}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>
      <section className="md:mt-28 mt-16 w-full">
        <h3 className="text-1xl md:text-2xl mb-5 font-bold">
          Heuristic Analysis conclusions
        </h3>
        <p>
          Lack of standardized components in portal pages affects user
          experience. Standardizing elements is advised for a uniform and
          coherent interaction and graphic style.
        </p>
        <br />
        <p>
          Optimize communication and streamline information retrieval to enhance
          the user experience on the portal.
        </p>
        <h3 className="text-1xl md:text-2xl my-8 font-bold">
          Benchmark conclusions
        </h3>
        <p>
          The benchmark analysis highlights the need for functionalities that
          empower users to accomplish more in less time, providing them control
          over data and fostering independence in cross-referencing information.
          The platform should stay relevant by proactively notifying users about
          updates aligned with their interests, aligning with the current trend
          of consuming information from diverse sources.
        </p>
        <h3 className="text-1xl md:text-2xl my-8 font-bold"></h3>
        <p>
          The key lies in understanding the diverse needs of users and offering
          a personalized experience that adapts to their preferences, delivering
          content appropriately based on context and timing. The incorporation
          of innovative features is also crucial to maintain user engagement and
          ensure their comfort in all aspects.
        </p>
      </section>
      <section id="usability_test" className="w-full md:mt-20 mt-10">
        <div className="flex justify-center">
          <h2 className="text-2xl md:text-5xl mb-5 font-bold lg:mb-16 ">
            2. Usability test
          </h2>
        </div>

        <p>
          Each user was assigned five tasks to perform on the portal. While they
          carried out each task, they were asked to think aloud about their
          problem-solving process.
        </p>
        <h2 className="text-1xl md:text-2xl my-10 font-bold">
          Task 1 : Register on the portal
        </h2>
        <div className="md:flex w-full md:justify-between my-8 w-full">
          <div className="md:w-2/4 md:pr-10">
            <h3 className="text-1xl md:text-2xl mb-5 font-bold">Scenery</h3>
            <p>
              Carry out the registration process on the portal to understand its
              complexity and whether the user perceives the difference or
              benefit of being registered or not.
            </p>
          </div>
          <div className="mt-10 md:mt-0 md:pl-10 md:w-2/4">
            <h3 className="text-1xl md:text-2xl mb-5 font-bold">Results</h3>
            <p>
              Results: Users assume they need to register for access to more
              information, but the benefits of registration are not evident.
              Users are familiar with the registration form and don&apos;t find
              the process cumbersome. They prefer a recurring login with saved
              credentials. Those who registered and forgot their login details
              have faced difficulties in recovering them.
            </p>
          </div>
        </div>
        <h2 className="text-1xl md:text-2xl my-10 font-bold">
          Task 2 : Use advanced search
        </h2>
        <div className="md:flex w-full md:justify-between my-8 w-full">
          <div className="md:w-2/4 md:pr-10">
            <h3 className="text-1xl md:text-2xl mb-5 font-bold">Scenery</h3>
            <p>
              The user needs to perform an advanced search to find a report or
              study on millennials visiting Peru.
            </p>
          </div>
          <div className="mt-10 md:mt-0 md:pl-10 md:w-2/4">
            <h3 className="text-1xl md:text-2xl mb-5 font-bold">Results</h3>
            <p>
              Users encountered difficulties when searching for the report on
              millennials in Peru, opting for familiar routes and facing
              confusion when using the filters.
            </p>
          </div>
        </div>
        <h2 className="text-1xl md:text-2xl my-10 font-bold">
          Task 3 : Search newsletter video
        </h2>
        <div className="md:flex w-full md:justify-between my-8 w-full">
          <div className="md:w-2/4 md:pr-10">
            <h3 className="text-1xl md:text-2xl mb-5 font-bold">Scenery</h3>
            <p>
              The user must search for a video called &quot;Chinese Market: Keys to
              Understanding and Serving It,&quot; which is located in newsletter No.
              63.
            </p>
          </div>
          <div className="mt-10 md:mt-0 md:pl-10 md:w-2/4">
            <h3 className="text-1xl md:text-2xl mb-5 font-bold">Results</h3>
            <p>
              Users face issues locating the newsletters section, expressing a
              need for increased visibility on the homepage and menu bar. They
              recommend a quick access link with descriptive text. Additionally,
              users emphasize the importance of the search function displaying
              newsletter results or having filters on the respective page to
              streamline the search process.
            </p>
          </div>
        </div>
        <h2 className="text-1xl md:text-2xl my-10 font-bold">
          Task 4 : Enter tourist figures
        </h2>
        <div className="md:flex w-full md:justify-between my-8 w-full">
          <div className="md:w-2/4 md:pr-10">
            <h3 className="text-1xl md:text-2xl mb-5 font-bold">Scenery</h3>
            <p>
              The user must imagine that they need to put together a report on
              the profile of the Argentine vacationer in 2017. In particular,
              the user must identify their average expenditure and planning
              time.
            </p>
          </div>
          <div className="mt-10 md:mt-0 md:pl-10 md:w-2/4">
            <h3 className="text-1xl md:text-2xl mb-5 font-bold">Results</h3>
            <p>
              Users suggest simplifying access and visualizing data with
              infographics. While they navigate well to the statistics, they
              face difficulties with filters, and the lack of loading indicators
              creates uncertainty. Recommendations: simplify navigation, use
              infographics, and improve clarity in filters.
            </p>
          </div>
        </div>
        <h2 className="text-1xl md:text-2xl my-10 font-bold">
          Task 5 : Contact Turismo In
        </h2>
        <div className="md:flex w-full md:justify-between my-8 w-full">
          <div className="md:w-2/4 md:pr-10">
            <h3 className="text-1xl md:text-2xl mb-5 font-bold">Scenery</h3>
            <p>
              The user needs to attempt to contact Turismo In to request
              specific information about domestic vacationers.
            </p>
          </div>
          <div className="mt-10 md:mt-0 md:pl-10 md:w-2/4">
            <h3 className="text-1xl md:text-2xl mb-5 font-bold">Results</h3>
            <p>
              Users expect an easily accessible contact method, emphasizing
              visibility for Turismo In&apos;s contact options, and many were
              unaware of additional channels due to limited scrolling habits.
              Improved visibility is crucial for an enhanced user experience.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center flex-col items-center">
        <div className="w-32 my-5">
          <Image
            src={"/images/spacework.png"}
            width={300.99}
            height={205.71}
            alt={"Spacework"}
            sizes={"(max-width: 1500px) 100px"}
          />
        </div>
        <div className="md:flex md:w-[750px] md:justify-between md:items-center">
          <div className="px-10 py-2 rounded-lg  bg-[#2E3259] md:py-5">
            3 Tourism and Hospitality students
          </div>
          <div className="px-10 py-2 rounded-lg  bg-[#2E3259] mt-3 md:mt-0 md:py-5">
            4 from the private sector
            <br />2 from the public sector
          </div>
        </div>
      </section>
      <section
        className="w-full mt-10 md:mt-20 flex justify-center flex-col items-center"
        id="workshops"
      >
        <div className="flex justify-center">
          <h2 className="text-2xl md:text-5xl mb-5 font-bold lg:mb-16 ">
            3. Workshop
          </h2>
        </div>
        <div className="w-full flex ">
          <h3 className="text-xl md:text-2xl mb-5 font-bold lg:mb-16">
            Workshop with stakeholders
          </h3>
        </div>
        <div className="w-32 my-5">
          <Image
            src={"/images/spacework.png"}
            width={300.99}
            height={205.71}
            alt={"Spacework"}
            sizes={"(max-width: 1500px) 100px"}
          />
        </div>
        <div className="md:flex md:w-[750px] md:justify-center md:items-center">
          <div className="px-10 py-2 rounded-lg  bg-[#2E3259] md:py-5">
            7 Stakeholders
          </div>
        </div>
      </section>
      <section className="w-full mt-10 md:mt-20">
        <h3 className="text-xl md:text-2xl mb-5 font-bold lg:mb-16">
          Activity 1: Flipchart Q&A
        </h3>
        <p>
          We divided the participants into two groups to discuss four key
          questions to understand the project&apos;s objectives. Subsequently,
          there was a sharing of ideas from both teams.
        </p>
        <div className="w-full flex justify-center mt-10">
          <div className="md:w-4/5 w-full">
            <Image
              src={"/images/projects/turismo_in/flip_chart.jpg"}
              width={300.99}
              height={205.71}
              alt={"Flip Chart"}
              sizes={"(max-width: 1500px) 100px"}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>
      <section className="w-full mt-10 md:mt-20">
        <h3 className="text-xl md:text-2xl mb-5 font-bold lg:mb-16">
          Activity 2: Brief Canvas & SWOT
        </h3>
        <p>
          We divided the participants into two groups again, different from
          Activity 1. One group was responsible for completing the Brief Canvas,
          and the other for the SWOT Analysis Canvas.
        </p>
        <div className="w-full flex justify-center mt-10">
          <div className="md:w-4/5 w-full">
            <Image
              src={"/images/projects/turismo_in/brief_model_1.jpg"}
              width={300.99}
              height={205.71}
              alt={"Brief model"}
              sizes={"(max-width: 1500px) 100px"}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
        <div className="w-full flex justify-center mt-10">
          <div className="md:w-4/5 w-full">
            <Image
              src={"/images/projects/turismo_in/brief_model_2.jpg"}
              width={300.99}
              height={205.71}
              alt={"Brief model"}
              sizes={"(max-width: 1500px) 100px"}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
        <div className="w-full flex justify-center mt-10">
          <div className="md:w-4/5 w-full">
            <Image
              src={"/images/projects/turismo_in/brief_model_3.jpg"}
              width={300.99}
              height={205.71}
              alt={"Brief model"}
              sizes={"(max-width: 1500px) 100px"}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>
      <section className="w-full mt-10 md:mt-20 flex justify-center flex-col items-center">
        <div className="w-full flex ">
          <h3 className="text-xl md:text-2xl mb-5 font-bold lg:mb-16">
            Workshop with students : 9 persons
          </h3>
        </div>
        <div className="w-32 my-5">
          <Image
            src={"/images/spacework.png"}
            width={300.99}
            height={205.71}
            alt={"Spacework"}
            sizes={"(max-width: 1500px) 100px"}
          />
        </div>
        <div className="md:flex md:w-[750px] md:justify-center md:items-center">
          <div className="px-10 py-2 rounded-lg  bg-[#2E3259] md:py-5">
            9 Students
          </div>
        </div>
      </section>
      <section className="w-full mt-10 md:mt-20">
        <h3 className="text-xl md:text-2xl mb-5 font-bold lg:mb-16">
          Activity 1: Look at the present
        </h3>
        <p>
          We divided the participants into two groups. Individually, they noted
          the positive and negative aspects of the current portal. Then, as a
          group, they reached a consensus on their responses and presented them
          to the other group.
        </p>
        <div className="w-full flex justify-center mt-10">
          <div className="md:w-4/5 w-full">
            <Image
              src={"/images/projects/turismo_in/activity_1.jpg"}
              width={300.99}
              height={205.71}
              alt={"Spacework"}
              sizes={"(max-width: 1500px) 100px"}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>
      <section className="w-full mt-10 md:mt-20">
        <h3 className="text-xl md:text-2xl mb-5 font-bold lg:mb-16">
          Activity 2: Brainstorming
        </h3>
        <p>
          The participants remained in the two formed groups. This time, they
          individually listed the functionalities and content they would like to
          find on the portal. Then, as a group, they reached a consensus on
          their answers and presented them to the other group.
        </p>
        <div className="w-full flex justify-center mt-10">
          <div className="md:w-4/5 w-full">
            <Image
              src={"/images/projects/turismo_in/activity_2.jpg"}
              width={300.99}
              height={205.71}
              alt={"Spacework"}
              sizes={"(max-width: 1500px) 100px"}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>
      <section className="w-full mt-10 md:mt-20">
        <h3 className="text-xl md:text-2xl mb-5 font-bold lg:mb-16">
          Activity 3 : Time to draw!
        </h3>
        <span>Green Team </span>
        <p>
          This dynamic involved drawing the portal&apos;s home. For this,
          participants were divided into two groups, different from the two
          previous activities.
        </p>
        <br />
        <p>
          Each group had to propose an ideal Home: one team would think about
          the portal for students, and the other for tourism agencies. Then,
          they developed a speech on how they would sell the product.
        </p>
        <div className="w-full flex justify-center mt-10">
          <div className="md:w-4/5 w-full">
            <Image
              src={"/images/projects/turismo_in/activity_3.jpg"}
              width={300.99}
              height={205.71}
              alt={"Spacework"}
              sizes={"(max-width: 1500px) 100px"}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>
      <section className="w-full mt-10 md:mt-20">
        <h3 className="text-xl md:text-2xl mb-5 font-bold lg:mb-16">
          Documentation
        </h3>
        <div className="w-full flex justify-center mt-10">
          <div className="md:w-4/5 w-full">
            <Image
              src={"/images/projects/turismo_in/documentation_1.jpg"}
              width={300.99}
              height={205.71}
              alt={"Spacework"}
              sizes={"(max-width: 1500px) 100px"}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
        <div className="w-full flex justify-center mt-10">
          <div className="md:w-4/5 w-full">
            <Image
              src={"/images/projects/turismo_in/documentation_2.jpg"}
              width={300.99}
              height={205.71}
              alt={"Spacework"}
              sizes={"(max-width: 1500px) 100px"}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>
      <section
        className="w-full mt-10 md:mt-20 flex justify-center flex-col items-center"
        id="interviews"
      >
        <div className="flex justify-center">
          <h2 className="text-2xl md:text-5xl mb-5 font-bold lg:mb-16 ">
            4. Interviews
          </h2>
        </div>
        <div className="w-32 my-5">
          <Image
            src={"/images/spacework.png"}
            width={300.99}
            height={205.71}
            alt={"Spacework"}
            sizes={"(max-width: 1500px) 100px"}
          />
        </div>
        <div className="md:flex md:w-[750px] md:justify-between md:items-center">
          <div className="px-10 py-2 rounded-lg  bg-[#2E3259] md:py-5">
            6 Users (Private sector workers)
          </div>
          <div className="px-10 py-2 rounded-lg  bg-[#2E3259] mt-3 md:mt-0 md:py-5">
            4 users (Public sector representatives)
          </div>
        </div>
      </section>
      <section className="md:mt-28 mt-16 w-full">
        <h3 className="text-1xl md:text-2xl mb-5 font-bold">Conclusions</h3>
        <p>
          Following the interviews, crucial areas for improvement in the Turismo
          In portal were identified. Suggestions range from personalized content
          and the introduction of micro-interactions to the dosing strategy for
          extensive reports. The need to enhance findability, visually enrich
          content, and simplify navigation is emphasized. The inclusion of
          multimedia content, especially short videos, is proposed as a strategy
          to appeal to an audiovisual audience. The centralization of
          communication channels and the adoption of a modern and user-friendly
          design are key recommendations to maintain digital relevance. These
          guidelines will serve as a roadmap for future enhancements, aiming to
          optimize the user experience on Turismo In.
        </p>

        <h3 className="text-1xl md:text-2xl my-8 font-bold">
          What is the current situation?
        </h3>
        <div className="w-full flex justify-center mt-10">
          <div className="md:w-4/5 w-full">
            <Image
              src={"/images/projects/turismo_in/current_situation.png"}
              width={300.99}
              height={205.71}
              alt={"current situation"}
              sizes={"(max-width: 1500px) 100px"}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>
      <section className="md:mt-28 mt-16 w-full" id="conclusions">
        <h3 className="text-1xl md:text-2xl mb-5 font-bold">Insight</h3>
        <h4 className="text-1xl md:text-3xl mb-10 md:font-thin text-center">
          “The Tourism In portal is used only on-demand, currently it is a
          portal for sporadic consultation”
        </h4>
        <h3 className="text-1xl md:text-2xl mb-8 font-bold">Context</h3>
        <p>
          Turismo In is considered a reliable source of information. The
          portal&apos;s content is commonly consumed by operators and investors,
          professors, students, agents, and public workers related to the
          tourism industry.
        </p>
        <h3 className="text-1xl md:text-2xl my-8 font-bold">Problem</h3>
        <p>
          Visits to the Turismo In portal are sporadic as the relevant
          information is updated semiannually or annually. Users return every
          three or six months in search of updates, mainly extensive reports and
          hard data. The lack of daily content positions the portal as the
          second or third choice for consultation, with users remembering when
          to visit for updates. Unintentionally, PromPerú has established an
          annual pattern of visits in users&apos; minds.
        </p>
        <h3 className="text-1xl md:text-2xl my-8 font-bold">Challenge</h3>
        <p>How to transform the portal into a daily tool for users?</p>
        <p>
          PromPerú needs to shift users&apos; mindset by providing constant
          information to make it the primary consultation tool.
        </p>
        <p>
          All users acknowledge Turismo In as a vast repository of information.
          We believe this perception needs to evolve into a more proactive image
          that contributes to daily decision-making for each business.
        </p>
        <p>
          We find it essential to deliver information in digestible formats,
          such as daily tips on enhancing their business, short educational
          videos or podcasts (2-3 minutes), success stories in the industry,
          analytical news from reports/hard data, among others.
        </p>
        <p>
          Additionally, the annual statistical reports, currently accessed once
          a year, should be provided in smaller doses (quarterly, tri-monthly,
          bi-monthly). This approach will position PromPerú as an updated and
          valuable tool for users.
        </p>
      </section>
      <section className="mb-20 md:mt-32 w-full mt-10" id="design">
        <h2 className="text-2xl md:text-5xl mb-5 font-bold lg:mb-16 text-center">
          5. Design
        </h2>
        <h3 className="text-1xl md:text-2xl font-bold mb-10 mt-10">
          Wireframes
        </h3>
        <Slider
          imageUrls={[
            "/images/projects/turismo_in/wireframes/1.png",
            "/images/projects/turismo_in/wireframes/2.png",
            "/images/projects/turismo_in/wireframes/3.png",
            "/images/projects/turismo_in/wireframes/4.png",
            "/images/projects/turismo_in/wireframes/5.png",
            "/images/projects/turismo_in/wireframes/6.png",
            "/images/projects/turismo_in/wireframes/7.png",
            "/images/projects/turismo_in/wireframes/8.png",
            "/images/projects/turismo_in/wireframes/9.png",
            "/images/projects/turismo_in/wireframes/10.png",
            "/images/projects/turismo_in/wireframes/11.png",
            "/images/projects/turismo_in/wireframes/12.png",
            "/images/projects/turismo_in/wireframes/13.png",
            "/images/projects/turismo_in/wireframes/14.png",
            "/images/projects/turismo_in/wireframes/15.png",
            "/images/projects/turismo_in/wireframes/16.png",
            "/images/projects/turismo_in/wireframes/17.png",
          ]}
        />
        <h3 className="text-1xl md:text-2xl font-bold mb-10 mt-10">
          Prototypes
        </h3>
        <Slider
          imageUrls={[
            "/images/projects/turismo_in/prototypes/1.png",
            "/images/projects/turismo_in/prototypes/2.png",
            "/images/projects/turismo_in/prototypes/3.png",
            "/images/projects/turismo_in/prototypes/4.png",
            "/images/projects/turismo_in/prototypes/5.png",
            "/images/projects/turismo_in/prototypes/6.png",
            "/images/projects/turismo_in/prototypes/7.png",
            "/images/projects/turismo_in/prototypes/8.png",
            "/images/projects/turismo_in/prototypes/9.png",
            "/images/projects/turismo_in/prototypes/10.png",
          ]}
        />
      </section>
    </main>
  );
}
