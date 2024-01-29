'use client'

import Image from 'next/image';
import { FC, useState } from 'react';
import styles from './slider.module.css'

type Props = {
    imageUrls: string[];
}

const Slider: FC<Props> = ({ imageUrls }: Props) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const navigationHandler = (direction: string) => {
        let newCurrentSlideValue = currentSlide
        if (currentSlide < imageUrls.length - 1 && direction == '>') {
            newCurrentSlideValue = currentSlide + 1
        } else if (currentSlide > 0 && direction == '<') {
            newCurrentSlideValue = currentSlide - 1
        }
        setCurrentSlide(newCurrentSlideValue)
    }
    return (
        <div className="relative w-full flex justify-center">
            {imageUrls.map((url, i)=> {
                return (
                    <div 
                        className={`w-[280px] md:w-[600px] relative ${i === currentSlide ? 'opacity-100 ' + styles['flip-in-hor-bottom'] : 'opacity-0 hidden'}`}
                        key={i}>
                        <Image
                            src={'/images/device_template.png'}
                            width={300.99}
                            height={205.71}
                            alt={'device_template'}
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                        <div className="absolute bg-slate-800 md:w-[462px] w-[216px] md:h-[293px] top-[8px] left-[32px] md:top-[15px] md:left-[69px] h-[136px] overflow-y-scroll">
                            <Image
                                src={url}
                                width={300.99}
                                height={205.71}
                                alt={'device_template'}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                            />
                        </div>
                    </div>
                )
            })}
          <div className="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2">
            <button 
                className={`p-3 inline-flex items-center justify-center w-8 h-8 transition duration-300  rounded-full lg:w-12 lg:h-12 text-slate-700  hover:text-slate-900 outline-none bg-white/20 ml-[-22px] md:ml-0 ${currentSlide === 0 ? 'opacity-0' : 'opacity-100'}`}
                onClick={()=> navigationHandler('<')}
                >
            <Image
                src={'/images/left.png'}
                width={46}
                height={46}
                alt={'left_arrow'}
                style={{
                    width: '100%',
                    height: 'auto',
                    }}
            />
            </button>
            <button 
                className={`p-3 inline-flex items-center justify-center w-8 h-8 transition duration-300  rounded-full lg:w-12 lg:h-12 text-slate-700  hover:text-slate-900 outline-none bg-white/20 mr-[-22px] md:mr-0 ${currentSlide === imageUrls.length - 1 ? 'opacity-0' : 'opacity-100'}`}
                onClick={()=> navigationHandler('>')}
                >
                <Image
                src={'/images/right.png'}
                width={46}
                height={46}
                alt={'right_arrow'}
                style={{
                    width: '100%',
                    height: 'auto',
                    }}
                />
            </button>
          </div>
        </div>
    )
}

export default Slider;