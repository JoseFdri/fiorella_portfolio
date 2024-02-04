import { notFound } from 'next/navigation'
import { projects } from "../../constants";

type Props = {
  params: {
    project: string;
  };
};

export default async function Project({ params }: Props) {
  const { project } = params;
  if (!projects.find((x) => x.slug === project)) {
    return notFound()
  }

  return (
    <main className="flex lg:w-11/12 max-w-[300px] md:max-w-2xl lg:max-w-screen-xl flex-col lg:px-0 items-center justify-center h-[calc(100vh_-_204px)]">
      <section className="flex w-full">
        <div className="flex justify-center">
          <div className="lg:w-3/4 lg:flex lg:flex-col lg:justify-center">
            <h1 className="text-3xl mb-10 font-bold lg:text-7xl">
              👋 Hi there!
            </h1>
            <p className="lg:px-32">
              No worries, this project is not playing hide-and-seek – it&apos;s
              just getting dolled up behind the scenes! 🎨✨ Stay tuned for a
              closer look at this space as I&apos;m working diligently to
              showcase the details of this exciting project. Your curiosity will
              be rewarded soon! 🌟🚀
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
