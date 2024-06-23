import {getServices} from '@/api.ts'
import Image from 'next/image';
import caricon from '@/public/assets/caricon.svg'
import clock from '@/public/assets/clock.svg'
import BlogSection from '@/components/BlogSection';
import BookService from '@/components/BookService';


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

  return ( 
      <div className='dark:bg-slate-800'>
        <div className='bg-section-grey dark:bg-slate-900 flex flex-col items-center pt-[96px] py-[112px] xl:mb-[600px] lg:mb-[600px] relative'>
          <h1 className='font-bold text-5xl'>{service.title}</h1>
          <p className='lg:max-w-[1216px] md:max-w-[800px] mt-[24px] text-center text-slate-500 dark:text-slate-400'>{service.short_description}</p>
          <div className='absolute max-w-[1216px] lg:max-h-[465px] w-full xl:px-[112px] xl:max-h-[600px] xl:max-w-[1328px] md:max-w-[700px] xl:bottom-[-650px] xl:translate-y-[-5%] md:bottom-[350px] lg:bottom-[-400px] lg:max-w-[1000px]'>
            <Image src={service.image} alt='service image' width={30} height={30} quality={100} unoptimized={true} className='xl:max-h-[600px] lg:max-h-[465px] xl:max-w-[1328px] w-full object-cover rounded-3xl md:max-w-[700px] lg:max-w-[1000px] xl:bottom-[-600px] xl:translate-y-[-15%] md:bottom-[350px]'/>
          </div>
        </div>
        <div className='flex justify-center w-full mb-[150px] dark:bg-slate-800'>
          <div className='flex justify-between max-w-[1216px] w-full lg:px-[70px]'>
            <div className='lg:max-w-[490px]'>
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
            <div className='max-w-[400px] w-full relative lg:max-w-[350px]'>
              <div className='py-[32px] px-[24px] bg-section-grey rounded-xl sticky top-[130px] border-t-4 border-light-orange dark:bg-slate-900'>
                <Image src={caricon} alt='little car'/>
                <div className='flex mt-[32px] justify-between items-center'>
                  <h2 className='text-xl font-bold dark:text-slate-300'>{service.title}</h2>
                  <p className='text-slate-500 flex gap-2 items-center'><Image src={clock} alt='little clock'/>{service.total_time_needed}</p>
                </div>
                <p className='text-slate-500 mt-2'>Best option for your car!</p>
                <div className='flex mt-[24px] items-center justify-between mb-[24px]'>
                  <span className='text-slate-500 font-bold text-xl'>Service fee</span>
                  <span className='text-light-orange font-bold text-5xl'>₾{Math.round(service.price)}</span>
                </div>
                <BookService 
                  id={service.id}
                />
              </div>
            </div>
          </div>
        </div>
        <BlogSection />
      </div>
    )
  }