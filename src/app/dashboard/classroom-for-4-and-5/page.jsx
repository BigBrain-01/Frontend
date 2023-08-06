import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';
import Card from '@/components/Card';

const page = () => {
    const card = [
        [
            {
                id: 1,
                title: "class 4 Mathematics",
                image: "/image 2.png",
            },
            {
                id: 2,
                title: "class 4 Mathematics",
                image: "/image 2.png",
            },
            {
                id: 3,
                title: "class 4 Mathematics",
                image: "/image 2.png",
            },
            {
                id: 4,
                title: "class 4 Mathematics",
                image: "/image 2.png",
            },
            {
                id: 5,
                title: "class 4 Mathematics",
                image: "/image 2.png",
            },
            {
                id: 6,
                title: "class 4 Mathematics",
                image: "/image 2.png",
            }
        ],
        [
            {
                id: 1,
                title: "class 5 Mathematics",
                image: "/image 2.png",
            },
            {
                id: 2,
                title: "class 5 Mathematics",
                image: "/image 2.png",
            },
            {
                id: 3,
                title: "class 5 Mathematics",
                image: "/image 2.png",
            },
            {
                id: 4,
                title: "class 5 Mathematics",
                image: "/image 2.png",
            },
            {
                id: 5,
                title: "class 5 Mathematics",
                image: "/image 2.png",
            },
            {
                id: 6,
                title: "class 5 Mathematics",
                image: "/image 2.png",
            }
        ]
    ];
    return (
        <div className='flex flex-col gap-10 px-5 mt-5'>
            {/* for class 4 */}
            <div className='flex flex-col'>
                <div className='flex justify-between w-full font-poppins'>
                    <h2 className='text-black text-lg font-semibold'>Classroom for 4</h2>
                    <div>
                        <Breadcrumbs className='text-green-900 text-xs leading-[18px] font-medium'>
                            <Link href="/dashboard/" className='hover:underline'>
                                Classroom
                            </Link>
                            <div>
                                Classroom for 4 and 5
                            </div>
                        </Breadcrumbs>
                    </div>
                </div>
                <div className='flex flex-wrap gap-1.5'>
                    {card[0].map((item, i) => (
                        <Card
                            key={i}
                            title={item.title}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
            {/* for class 5 */}
            <div className='flex flex-col'>
                <div className='flex justify-between w-full font-poppins'>
                    <h2 className='text-black text-lg font-semibold'>Classroom for 5</h2>
                </div>
                <div className='flex flex-wrap gap-1.5'>
                    {card[1].map((item, i) => (
                        <Card
                            key={i}
                            title={item.title}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page