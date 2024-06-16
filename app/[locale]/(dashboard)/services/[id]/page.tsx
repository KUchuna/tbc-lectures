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
              <h1 className='text-2xl font-bold mb-5'>Lorem ipsum dolor sit</h1>
              <p className='mb-5'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus sit voluptate architecto fugit tenetur fuga nulla! Sequi voluptatum suscipit, deleniti consectetur fugiat excepturi obcaecati distinctio, libero facilis ad voluptate quo?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus sit voluptate architecto fugit tenetur fuga nulla! Sequi voluptatum suscipit, deleniti consectetur fugiat excepturi obcaecati distinctio, libero facilis ad voluptate quo?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus sit voluptate architecto fugit tenetur fuga nulla! Sequi voluptatum suscipit, deleniti consectetur fugiat excepturi obcaecati distinctio, libero facilis ad voluptate quo?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus sit voluptate architecto fugit tenetur fuga nulla! Sequi voluptatum suscipit, deleniti consectetur fugiat excepturi obcaecati distinctio, libero facilis ad voluptate quo?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus sit voluptate architecto fugit tenetur fuga nulla! Sequi voluptatum suscipit, deleniti consectetur fugiat excepturi obcaecati distinctio, libero facilis ad voluptate quo?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus sit voluptate architecto fugit tenetur fuga nulla! Sequi voluptatum suscipit, deleniti consectetur fugiat excepturi obcaecati distinctio, libero facilis ad voluptate quo?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus sit voluptate architecto fugit tenetur fuga nulla! Sequi voluptatum suscipit, deleniti consectetur fugiat excepturi obcaecati distinctio, libero facilis ad voluptate quo?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus sit voluptate architecto fugit tenetur fuga nulla! Sequi voluptatum suscipit, deleniti consectetur fugiat excepturi obcaecati distinctio, libero facilis ad voluptate quo?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus sit voluptate architecto fugit tenetur fuga nulla! Sequi voluptatum suscipit, deleniti consectetur fugiat excepturi obcaecati distinctio, libero facilis ad voluptate quo?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus sit voluptate architecto fugit tenetur fuga nulla! Sequi voluptatum suscipit, deleniti consectetur fugiat excepturi obcaecati distinctio, libero facilis ad voluptate quo?
              </p>
            </div>
            <div className='max-w-[400px] w-full relative lg:max-w-[350px]'>
              <div className='py-[32px] px-[24px] bg-section-grey rounded-xl sticky top-[130px] border-t-4 border-service-card-orange dark:bg-slate-900'>
                <Image src={caricon} alt='little car'/>
                <div className='flex mt-[32px] justify-between items-center'>
                  <h2 className='text-xl font-bold dark:text-slate-300'>{service.title}</h2>
                  <p className='text-slate-500 flex gap-2 items-center'><Image src={clock} alt='little clock'/>{service.total_time_needed}</p>
                </div>
                <p className='text-slate-500 mt-2'>Best option for your car!</p>
                <div className='flex mt-[24px] items-center justify-between mb-[24px]'>
                  <span className='text-slate-500 font-bold text-xl'>Service fee</span>
                  <span className='text-service-card-orange font-bold text-5xl'>₾{Math.round(service.price)}</span>
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