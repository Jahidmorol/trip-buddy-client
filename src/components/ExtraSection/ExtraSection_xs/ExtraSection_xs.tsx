
import Image from 'next/image';
import esxs1 from '../../../../public/ExtraSection/esxs1.png'
import esxs2 from '../../../../public/ExtraSection/esxs2.png'
import esxs3 from '../../../../public/ExtraSection/esxs3.png'
import esxs4 from '../../../../public/ExtraSection/esxs4.png'

const ExtraSection_xs = () => {
    return (
        <div className="py-16">
            <h2 className='text-3xl font-semibold mb-10'>What are you looking for?</h2>

            <div className="flex flex-wrap xl:flex-nowrap items-center justify-center md:justify-normal text-nowrap gap-8">
                <div className="bg-[#E8604C] p-12 rounded-2xl ">
                    <div className="flex gap-3 items-center">
                        <Image src={esxs1} alt='esxs1'></Image>
                        <div className="">
                            <p>Hotel Booking</p>
                            <p className='text-[10px]'>Lorem ipsum  Ad!</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#F5F5F5] p-12 rounded-2xl text-black border border-[#E8604C]">
                    <div className="flex gap-3 items-center">
                        <Image src={esxs2} alt='esxs1'></Image>
                        <div className="">
                            <p>elaiable Tours</p>
                            <p className='text-[10px]'>Lorem ipsum  Ad!</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#F5F5F5] p-12 rounded-2xl text-black border border-[#E8604C]">
                    <div className="flex gap-3 items-center">
                        <Image src={esxs3} alt='esxs1'></Image>
                        <div className="">
                            <p>Ticket Booking</p>
                            <p className='text-[10px]'>Lorem ipsum  Ad!</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#F5F5F5] p-12 rounded-2xl text-black border border-[#E8604C]">
                    <div className="flex gap-3 items-center">
                        <Image src={esxs4} alt='esxs1'></Image>
                        <div className="">
                            <p>Expert Advice</p>
                            <p className='text-[10px]'>Lorem ipsum  Ad!</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#F5F5F5] p-12 rounded-2xl text-black border border-[#E8604C]">More . . .</div>
            </div>
            
        </div>
    );
};

export default ExtraSection_xs;