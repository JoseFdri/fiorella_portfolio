import Image from 'next/image';

export default function Projects() {
  return (
    <main className="flex lg:w-11/12 max-w-[300px] md:max-w-2xl lg:max-w-screen-xl flex-col lg:px-0">
      <section className="flex flex-col lg:mt-44 w-full">
        <div className='flex flex-col lg:flex-row'>
         <div className='lg:w-3/4 lg:flex lg:flex-col lg:justify-center'>
            <h1 className='text-3xl mb-10 font-bold lg:text-7xl'>
              truME App.
            </h1>
            <p className='lg:px-32'>
              Crafted to provide users with seamless access to a comprehensive directory of specialized medical professionals for in-home healthcare, this app also offers personalized prescriptions and medical guidance, all while meticulously tracking individual health progress.
            </p>
         </div>
          <div className='my-10 lg:w-96 flex justify-center'>
            <picture>
              <Image
                src={'/images/trume_logo.png'}
                width={500.99}
                height={505.71}
                alt={'Truume'}
                sizes={'(max-width: 1500px) 80w'}
              />
            </picture>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:w-full lg:justify-around lg:mt-36 lg:mb-24">
          <div className='flex flex-col'>
            <span className='mb-5'>
              Role
            </span>
            <span className='font-bold mb-2'>
              UX & UI designer
            </span>
          </div>
          <div className='flex flex-col'>
            <span className='mb-5'>
              Tool
            </span>
            <span className='font-bold mb-2'>
              Figma
            </span>
          </div>
         <div className='flex flex-col'>
          <span className='mb-5'>
              frame
            </span>
            <span className='font-bold mb-2'>
              3 months
            </span>
         </div>
        </div>
        <picture className='my-8 lg:flex lg:justify-center'>
          <Image
            src={'/images/trume.png'}
            width={717.99}
            height={505.71}
            alt={'Truume'}
            sizes={'(max-width: 1500px) 80w'}
            />
        </picture>
        <h2 className='text-2xl mb-5 font-bold lg:mt-32 lg:mb-16'>
          Overview
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className='flex flex-col lg:mt-16 lg:flex-row'>
          <div className='lg:pr-20'>
            <h2 className='text-2xl mb-5 font-bold mt-8'>
              Problem
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className='lg:pl-20'>
            <h2 className='text-2xl mb-5 font-bold mt-8'>
              Solution
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>
      <section className='my-16 lg:mt-32'>
        <div className='flex flex-col bg-[#2B3037] lg:p-16 p-5'>
          <h2 className='text-2xl mb-5 font-bold  lg:mb-12'>
            Authentication
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className='mt-10 w-full flex flex-col items-center lg:flex-row lg:justify-center'>
            <div className='flex flex-col items-center w-[260px] lg:w-[350px]'>
              <picture>
                <Image
                  src={'/images/sign_in.jpg'}
                  className='rounded-md'
                  width={300}
                  height={350.35}
                  alt={'Truume'}
                  sizes={'(max-width: 1500px) 80w'}
                />
              </picture>
              <span className='mt-10 lg:w-[300px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              </span>
            </div>
            <div className='flex flex-col items-center w-[260px] lg:w-[350px] mt-16 lg:mt-0'>
              <picture>
                <Image
                  src={'/images/sign_in.jpg'}
                  className='rounded-md'
                  width={300}
                  height={350.35}
                  alt={'Truume'}
                  sizes={'(max-width: 1500px) 80w'}
                />
              </picture>
              <span className='mt-10 lg:w-[300px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
