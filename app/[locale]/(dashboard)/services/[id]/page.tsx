import {getServices} from '@/api.ts'
import Image from 'next/image';
import caricon from '@/public/assets/caricon.svg'
import clock from '@/public/assets/clock.svg'
import BlogSection from '@/components/BlogSection';
import BookService from '@/components/BookService';
import { getSession } from '@auth0/nextjs-auth0';
import DeleteService from '@/components/DeleteService';


interface service {
  id: number;
  title: string;
  short_description: string;
  sub_title: string;
  full_description: string;
  price: number;
  total_time_needed: string;
  image: string;
}


export default async function Service({params: { id }}: any) {
  
  const services = await getServices();
  
  const service = services.find((service: service) => service.id == id);
  
  const user = await getSession()

  const isAdmin = Array.isArray(user?.user.role) && user.user.role.includes("admin");


  return ( 
      <div className='dark:bg-slate-800'>
        <div className='bg-section-grey dark:bg-slate-900 min-h-[350px] flex flex-col items-center py-[64px] px-[16px] md:py-[96px] xl:px-[112px] md:px-[40px]'>
          <h1 className='font-bold text-5xl text-center'>{service.title}</h1>
          <p className='lg:max-w-[1216px] md:max-w-[800px] mt-[24px] text-center text-slate-500 dark:text-slate-400'>{service.short_description}</p>
        </div>
        <div className='flex flex-col justify-center items-center w-fulldark:bg-slate-800 md:px-[40px] relative'>
          <div className='md:px-[40px] px-[16px] absolute md:top-[-70px] top-[-50px] w-full flex justify-center'>
            <Image src={service.image} alt='service image' width={30} height={30} quality={100} unoptimized={true} className='object-cover rounded-3xl w-full h-full lg:max-h-[450px] md:max-h-[350px] max-h-[270px] max-w-[1216px]'/>
          </div>
          <div className='flex md:flex-row flex-col px-[16px] md:px-0 justify-between max-w-[1216px] w-full lg:pt-[420px] md:pt-[350px] pt-[300px] pb-[64px]'>
            <div className='lg:max-w-[450px] xl:max-w-[650px] md:max-w-[350px]'>
              <h1 className='text-2xl font-bold mb-5'>{service.sub_title}</h1>
              <p className='mb-5'>{service.full_description}</p>
              <h1 className='text-2xl font-bold mb-5'>About</h1>
              <p>
                At <strong>Movan</strong>, we are committed to providing exceptional car services with a seamless experience from start to finish. We understand that convenience and transparency are key to customer satisfaction, which is why we offer flexible payment options to suit your preferences.
                <br />
                <strong>Payment Options: </strong>
                We accept a variety of payment methods to ensure your convenience. Whether you prefer to pay by credit card, debit card, or cash, you can rest assured that we accommodate your choice. Our goal is to make the payment process as straightforward and hassle-free as possible, so you can focus on getting back on the road with confidence.
                <br />
                <strong>Transparent Pricing: </strong>
                We believe in transparency. Our pricing is upfront and competitive, with no hidden fees. Before any work begins, we provide you with a detailed estimate and explanation of the services required. This ensures that you have a clear understanding of the costs involved, allowing you to make informed decisions about your vehicle&#39;s maintenance or repair.
                <br />
                <strong>Secure Transactions: </strong>
                Your security is important to us. All transactions are processed securely to protect your personal and financial information. Whether you choose to pay in person or online, rest assured that your data is handled with the utmost care and confidentiality.
                <br />
                <strong>Customer Support: </strong>
                Our dedicated customer support team is available to assist you with any questions or concerns regarding payments, services, or scheduling. We strive to deliver prompt and helpful assistance, ensuring that your experience with us is positive and stress-free.
                <br />
                <strong>Contact Us: </strong>
                If you have any specific payment preferences or need further clarification on our services, please don&#39;t hesitate to reach out to us. We are here to help and look forward to serving you.
              </p>
            </div>
            <div className='md:max-w-[400px] w-full pr-[32px] md:[position:initial] fixed md:pr-0 bottom-[40px]'>
              <div className='md:py-[32px] md:px-[24px] py-[18px] px-[12px] bg-section-grey rounded-xl sticky top-[150px] border-t-4 border-light-orange dark:bg-slate-900'>
                <Image src={caricon} alt='little car' className='hidden md:block'/>
                <div className='flex md:mt-[32px] justify-between items-center'>
                  <h2 className='text-xl font-bold dark:text-slate-300'>{service.title}</h2>
                  <p className='text-slate-500 flex gap-2 items-center'><Image src={clock} alt='little clock'/>{service.total_time_needed}</p>
                </div>
                <p className='text-slate-500 md:mt-2'>Best option for your car!</p>
                <div className='flex md:mt-[24px] items-center justify-between md:mb-[24px] mb-[12px]'>
                  <span className='text-slate-500 font-bold text-xl'>Service fee</span>
                  <span className='text-light-orange font-bold md:text-5xl text-3xl'>₾{Math.round(service.price)}</span>
                </div>
                <BookService 
                  id={service.id}
                />
              </div>
            </div>
          </div>
          {
            isAdmin && <DeleteService id={service.id}/>
          }
        </div>
        <BlogSection />
      </div>
    )
  }