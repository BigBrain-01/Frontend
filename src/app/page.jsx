import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col '>
      <div className='bg-[#FAF8F4] flex justify-between px-28 items-center'>
        <div className='w-[691px] flex flex-col gap-4'>
          <h1 className='text-7xl font-extrabold leading-[6.125rem]'>Getting Best Quality Education Is Now More <span className='relative text-[#2F3192]'>
            Easier
            <Image className='absolute right-0 -bottom-8' src={'/underline.png'} alt='' width={236} height={44} />
          </span></h1>
          <p className='w-[33.75rem] text-[1.125rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
          <button className='bg-[#00693B] rounded-md text-white w-max text-base font-medium py-[12px] px-8'>Get Started</button>
        </div>
        <div className="relative mt-10">
          <Image src={'/julia.png'} alt='' width={'400'} quality={100} className='' height={'450'} />
          <Image src={'/dancingBook.png'} alt='' width={'123'} quality={100} className='absolute top-0 -left-14' height={'120'} />
          <Image src={'/u.png'} alt='' width={'123'} quality={100} className='absolute -top-5 -right-14' height={'120'} />
          <Image src={'/greenArrow.png'} alt='' width={'123'} quality={100} className='absolute bottom-20 -right-24' height={'120'} />
          <Image src={'/graph.png'} alt='' width={'123'} quality={100} className='absolute bottom-48 -left-24' height={'120'} />

        </div>
      </div>
    </div>
  )
}
