import Image from 'next/image';
import React from 'react';
import es1 from '../../../../public/ExtraSection/es1.png'
import icon1 from '../../../../public/ExtraSection/es1-1.png'
import icon2 from '../../../../public/ExtraSection/es1-2.png'
import icon3 from '../../../../public/ExtraSection/es1-3.png'

const ExtraSection_1 = () => {
    return (
        <div className='py-9'>
            <div className="">
                <h2 className=' text-xl sm:text-3xl font-semibold'>Book Your Next Trip in 3 Easy Steps</h2>
                <h2 className='text-xs mt-2'>Easy and Fast</h2>
            </div>

            <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-0 items-center justify-evenly py-0">
                <div className="space-y-7">
                    <div className="flex items-center gap-4">
                        <Image src={icon1} alt='es1' className='w-10 '></Image>
                        <div className="">
                            <h5 className='font-semibold text-lg'>Choose Destination</h5>
                            <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                        </div>
                    </div>
                   
                    <div className="flex items-center gap-4">
                        <Image src={icon3} alt='es1' className='w-10 '></Image>
                        <div className="">
                            <h5 className='font-semibold text-lg'>Make Payment</h5>
                            <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Image src={icon2} alt='es1' className='w-10 '></Image>
                        <div className="">
                            <h5 className='font-semibold text-lg'>Reach Airport on Selected Date</h5>
                            <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <Image src={es1} alt='es1' className='opacity-80 h-fit'></Image>
                </div>
            </div>

        </div>
    );
};

export default ExtraSection_1;