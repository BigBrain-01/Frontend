'use client'
import Navbar from '@/components/navbar/Navbar'
import ContactUs from '@/components/contactUs/ContactUs'
import Footer from '@/components/Footer'
const page = () => {
    return (
        <div>
            <Navbar />
            <div className='flex flex-col gap-28'>
                <ContactUs />
                <Footer />
            </div>
        </div>
    )
}

export default page