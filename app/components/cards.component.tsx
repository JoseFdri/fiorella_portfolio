import Link from 'next/link'
import { FC } from 'react';
import Image from 'next/image';

type CardProps = {
    classes?: string[];
    subClasses?: string[];
    height: number;
    width: number;
    sizes: string;
    project: {
        name: string;
        file_name?: string;
        role: string;
        description: string;
        imgUrl: string;
    }
}
const Card: FC<CardProps> = ({ project, classes, subClasses, width, height, sizes }: CardProps) => {
    const { imgUrl, name, role, description, file_name } = project;

    return (
        <picture className={classes?.join(' ')}>
            <div className={subClasses?.join(' ')}>
                <Link href={`${file_name ? `/projects/${file_name}`: '#'} `} className={`${ !file_name ? 'cursor-default' : ''} opacity-0 hover:opacity-80 transition-all bg-[#212529] absolute w-full h-full flex flex-col justify-center items-center`}>
                    <div className='lg:w-3/5 flex flex-col justify-center items-center px-2 lg:px-0'>
                        <h2 className='font-bold lg:text-2xl'>{name}</h2>
                        <span className='font-medium lg:mb-5 mb-2 mt-2'>{role}</span>
                        <p className='text-center'>{description}</p>
                    </div>
                </Link>
                <Image
                    src={imgUrl}
                    height={height}
                    width={width}
                    alt={name}
                    sizes={sizes}
                />
            </div>
        </picture>
    )
}

export default Card;