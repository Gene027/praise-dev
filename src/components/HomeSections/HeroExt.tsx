
import { technologies } from '@/constants'
import Image from 'next/image'
import { FC } from 'react'
import Paragraph from '../ui/Paragraph'

const HeroExt: FC = () => {
    return (
        <div className='px-[100px] py-[40px] flex flex-wrap gap-4 justify-center items-center'>
           {technologies.map((skill) => (
            <div key={skill.name} className='flex flex-col gap-2 items-center'>
                <Image src={skill.icon} alt='Skill cover' height={50} width={50} placeholder='empty' className='hover:animate-spin cursor-crosshair' />
                <Paragraph className='font-medium'>{skill.name}</Paragraph>
            </div>
           ))}
        </div>)
}

export default HeroExt