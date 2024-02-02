import Image from "next/image";
import Slider from "../../components/slider.component";
import htmlParser from "html-react-parser";

export default async function Project() {
  return (
    <main className="flex lg:w-11/12 max-w-[300px] md:max-w-2xl lg:max-w-screen-xl flex-col lg:px-0 items-center justify-center">
      <section className="flex lg:mt-44 w-full">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-3/4 lg:flex lg:flex-col lg:justify-center">
            <h1 className="text-3xl mb-10 font-bold lg:text-7xl">
              KeepItSaved
            </h1>
            <p className="lg:px-32">
              Keep It Saved is a cloud-based service designed to provide a
              secure and convenient solution for storing and managing your most
              important documents and digital assets. Whether it&apos;s wills,
              trusts, contracts, or powers of attorney (POA), you can upload
              various items and keep them all in a secure place. It also allows
              you to do the same with your online accounts and passwords,
              eliminating the need to remember each detail.
            </p>
            <br />
          </div>
          <div className="my-10 lg:w-96 flex justify-center">
            <picture>
              <Image
                src="/images/projects/keepitsaved/keepitsaved.jpg"
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
          This project arises from the fundamental need to provide users with an
          intuitive and secure solution to manage and safeguard their key
          documents and digital assets. In an increasingly complex world, where
          handling wills, trusts, contracts, and powers of attorney can be
          overwhelming, along with the challenge of managing online accounts and
          passwords, there is a demand for a tool that simplifies and optimizes
          these processes. Keep It Saved emerges as the answer by offering a
          protected and user-friendly environment, enabling users to effectively
          manage their vital information.
        </p>
        <div className="flex flex-col lg:mt-16 lg:flex-row">
          <div className="lg:pr-20">
            <h2 className="text-2xl mb-5 font-bold mt-8">Problem</h2>
            <p>
              In a complex digital landscape, managing critical documents and
              digital assets, such as wills, trusts, contracts, and powers of
              attorney, poses a significant challenge for users. The
              overwhelming task of dealing with these essential elements is
              further complicated by the need to handle online accounts and
              passwords, creating a clear demand for a solution that simplifies
              and organizes these processes.
            </p>
          </div>
          <div className="lg:pl-20">
            <h2 className="text-2xl mb-5 font-bold mt-8">Solution</h2>
            <p>
              Keep It Saved emerges as a technologically advanced and
              user-centric response to these challenges. By providing a secure
              and user-friendly platform, this tool offers users the ability to
              effectively manage their key documents and digital assets. With an
              intuitive approach, Keep It Saved streamlines the management of
              wills, trusts, contracts, and powers of attorney, while addressing
              the complexity of handling online accounts and passwords. This
              comprehensive approach ensures an optimized user experience,
              enabling efficient management of vital information.
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
          After delving into a comprehensive benchmarking analysis and engaging
          in detailed conversations with the client, clear patterns emerge
          outlining the challenges users face in managing vital documents and
          digital assets. The increasing complexity of handling elements such as
          wills, trusts, contracts, and powers of attorney, coupled with the
          management of online accounts and passwords, underscores the urgency
          for a comprehensive, user-centric solution.
        </p>
        <p>
          In this context, the proposed solution, Keep It Saved, stands out as a
          direct response to these identified demands. Designed with an
          intuitive and user-centric approach, it aims to simplify and optimize
          the processes of managing vital information. The combination of
          advanced features and user-friendly design reflects a commitment to an
          enhanced and efficient user experience.
        </p>
        <p>
          These conclusions support the imminent need for technological
          solutions that address the challenges of the current digital
          landscape. Keep It Saved emerges as a valuable tool, poised to
          facilitate the management of digital assets and key documents with a
          user-centric approach.
        </p>
      </section>
      <section className="w-full mb-20 md:mt-32 mt-20" id="design">
        <h2 className="text-2xl md:text-5xl mb-5 font-bold lg:mb-16 text-center">
          2. Design
        </h2>
        <h3 className="text-1xl md:text-2xl font-bold mb-10 mt-10">Mockups</h3>
        <Slider
          imageUrls={[
            "/images/projects/keepitsaved/mockups/1.jpg",
            "/images/projects/keepitsaved/mockups/2.jpg",
            "/images/projects/keepitsaved/mockups/3.jpg",
            "/images/projects/keepitsaved/mockups/4.jpg",
            "/images/projects/keepitsaved/mockups/5.jpg",
            "/images/projects/keepitsaved/mockups/6.jpg",
            "/images/projects/keepitsaved/mockups/7.jpg",
            "/images/projects/keepitsaved/mockups/8.jpg",
            "/images/projects/keepitsaved/mockups/9.jpg",
            "/images/projects/keepitsaved/mockups/10.jpg",
            "/images/projects/keepitsaved/mockups/11.jpg",
          ]}
        />
        <h3 className="text-1xl md:text-2xl font-bold mb-10 mt-10">
          Prototypes
        </h3>
        <Slider
          imageUrls={[
            "/images/projects/keepitsaved/prototypes/1.jpg",
            "/images/projects/keepitsaved/prototypes/2.jpg",
            "/images/projects/keepitsaved/prototypes/3.jpg",
            "/images/projects/keepitsaved/prototypes/4.jpg",
            "/images/projects/keepitsaved/prototypes/5.jpg",
            "/images/projects/keepitsaved/prototypes/6.jpg",
            "/images/projects/keepitsaved/prototypes/7.jpg",
            "/images/projects/keepitsaved/prototypes/8.jpg",
            "/images/projects/keepitsaved/prototypes/9.jpg",
            "/images/projects/keepitsaved/prototypes/10.jpg",
            "/images/projects/keepitsaved/prototypes/11.jpg",
            "/images/projects/keepitsaved/prototypes/12.jpg",
            "/images/projects/keepitsaved/prototypes/13.jpg",
            "/images/projects/keepitsaved/prototypes/14.jpg",
            "/images/projects/keepitsaved/prototypes/15.jpg",
            "/images/projects/keepitsaved/prototypes/16.jpg",
          ]}
        />
      </section>
    </main>
  );
}
