import React from 'react';
import productDesignImage1 from '../../../../assets/intro-to-product-design 1.png';
import productDesignImage2 from '../../../../assets/intro-to-product-design 2.png';
import productDesignImage3 from '../../../../assets/intro-to-product-design 3.png';
import productDesignImage4 from '../../../../assets/intro-to-product-design 4.png';
import productDesignImage5 from '../../../../assets/intro-to-product-design 5.png';
import productDesignImage6 from '../../../../assets/intro-to-product-design 6.png';
import '../liveSession/css/session.css';
import send2 from '../../../../assets/send-2.svg';
import volumeHigh from '../../../../assets/volume-high.svg';
import skipBack from '../../../../assets/skip-backward.svg';
import skipFront from '../../../../assets/skip-forward.svg';
import pause from '../../../../assets/pause.svg';
import like from '../../../../assets/like.svg';
import smile from '../../../../assets/smile.svg';
import send from '../../../../assets/send.svg';
import more from '../../../../assets/more.svg';

export default function LiveSessionUserPage() {
  return (
    <>
      <div></div>
      <div className='flex w-full'>
        <div className='w-full p-5 lg:flex gap-4'>
          {/* LiveVideoSection */}
          <div className='w-full '>
            <div className='live-video-view h-[394px] bg-darkgrey p-6 rounded-lg'>
              <div className='flex justify-between mt-[19rem] border  border-t-white pt-6'>
                <div className='flex gap-6'>
                  <img src={skipBack} alt={skipBack} />
                  <img src={pause} alt={pause} />
                  <img src={skipFront} alt={skipFront} />
                </div>

                <div className='flex gap-4'>
                  <img src={volumeHigh} alt={volumeHigh} />
                  <p className='text-white'>0:00 / 2:37:00</p>
                </div>
              </div>
            </div>
            <p className='capitalize text-xl mt-5'>
              Introduction to product design 17:01:23
            </p>
            <div className='flex justify-between mt-5'>
              <div>
                <p className='capitalize text-xl '>stutern</p>
                <p className='text-grey mt-5 text-lg'> 923 subscribers</p>
              </div>
              {/* icons */}
              <div className='flex gap-3'>
                <div className='bg-grey h-[50px] w-[50px] grid place-items-center rounded-full'>
                  {' '}
                  <img
                    className='bg-grey rounded-full h-[2rem] w-[2rem]  grid place-items-center  hover:cursor-pointer'
                    src={like}
                    alt={like}
                  />
                </div>
                <div className='bg-grey h-[50px] w-[50px] grid place-items-center rounded-full'>
                  {' '}
                  <img
                    className='bg-grey rounded-full h-[2rem] w-[2rem]  grid place-items-center  hover:cursor-pointer'
                    src={send}
                    alt={send}
                  />
                </div>
                <div className='bg-grey h-[50px] w-[50px] grid place-items-center rounded-full'>
                  {' '}
                  <img
                    className='bg-grey rounded-full h-[2rem] w-[2rem]  grid place-items-center  hover:cursor-pointer'
                    src={more}
                    alt={more}
                  />
                </div>
              </div>
              {/* icons */}
            </div>

            {/* comment field */}
            <div className='border border-pink border-thin mt-6'>
              <div className=''>
                <p className='border border-pink border-thin text-xl p-3'>
                  Add a comment
                </p>
              </div>

              <div className='mt-[9rem] border border-pink p-6 relative'>
                <input
                  type='text'
                  className='w-full focus:outline-none border border-pink h-[50px] rounded-lg p-5 placeholder:font-bold placeholder:text-[14px]'
                  placeholder='Send me a message'
                ></input>
                <div className='absolute flex gap-4 right-8 top-10'>
                  <img src={smile} alt={smile} />
                  <img src={send2} alt={send2} />
                </div>
              </div>
            </div>
            {/* comment field */}
          </div>
          {/* LiveVideoSection */}

          {/* VideoSelectionSection */}
          <div className='border h-[922px] border-pink overflow-y-auto scrollbar-thumb-gray-500 scrollbar-track-gray-200 w-full mt-4 lg:m-0 '>
            <p className='capitalize border border-pink p-5 font-bold text-xl sticky top-0 left-0 bg-white'>
              1.3 UI/UX design live sessions (Intermediate class)
            </p>
            {/* videoselectionview */}
            <div className='p-4'>
              <div className='flex gap-4 mt-3 hover:cursor-pointer'>
                <img
                  className='w-[80px] h-[80px]'
                  src={productDesignImage1}
                  alt={productDesignImage1}
                />
                <div>
                  <p className='font-bold text-lg capitalize'>
                    {' '}
                    Introduction to product design
                  </p>
                  <p className='text-grey mt-6 capitalize'>
                    {' '}
                    stutern . 4 views . 4 days ago 17:01:23
                  </p>
                </div>
              </div>
              <div className='flex gap-4 mt-3 hover:cursor-pointer'>
                <img
                  className='w-[80px] h-[80px]'
                  src={productDesignImage2}
                  alt={productDesignImage2}
                />
                <div>
                  <p className='font-bold text-lg capitalize'>
                    {' '}
                    Introduction to product design
                  </p>
                  <p className='text-grey mt-6 capitalize'>
                    {' '}
                    stutern . 4 views . 4 days ago 17:01:23
                  </p>
                </div>
              </div>
              <div className='flex gap-4 mt-3 hover:cursor-pointer'>
                <img
                  className='w-[80px] h-[80px]'
                  src={productDesignImage3}
                  alt={productDesignImage3}
                />
                <div>
                  <p className='font-bold text-lg capitalize'>
                    {' '}
                    Introduction to product design
                  </p>
                  <p className='text-grey mt-6 capitalize'>
                    {' '}
                    stutern . 4 views . 4 days ago 17:01:23
                  </p>
                </div>
              </div>
              <div className='flex gap-4 mt-3 hover:cursor-pointer'>
                <img
                  className='w-[80px] h-[80px]'
                  src={productDesignImage4}
                  alt={productDesignImage4}
                />
                <div>
                  <p className='font-bold text-lg capitalize'>
                    {' '}
                    Introduction to product design
                  </p>
                  <p className='text-grey mt-6 capitalize'>
                    {' '}
                    stutern . 4 views . 4 days ago 17:01:23
                  </p>
                </div>
              </div>
              <div className='flex gap-4 mt-3 hover:cursor-pointer'>
                <img
                  className='w-[80px] h-[80px]'
                  src={productDesignImage5}
                  alt={productDesignImage5}
                />
                <div>
                  <p className='font-bold text-lg capitalize'>
                    {' '}
                    Introduction to product design
                  </p>
                  <p className='text-grey mt-6 capitalize'>
                    {' '}
                    stutern . 4 views . 4 days ago 17:01:23
                  </p>
                </div>
              </div>
              <div className='flex gap-4 mt-3 hover:cursor-pointer'>
                <img
                  className='w-[80px] h-[80px]'
                  src={productDesignImage6}
                  alt={productDesignImage6}
                />
                <div>
                  <p className='font-bold text-lg capitalize'>
                    {' '}
                    Introduction to product design
                  </p>
                  <p className='text-grey mt-6 capitalize'>
                    {' '}
                    stutern . 4 views . 4 days ago 17:01:23
                  </p>
                </div>
              </div>
              <div className='flex gap-4 mt-3 hover:cursor-pointer'>
                <img
                  className='w-[80px] h-[80px]'
                  src={productDesignImage6}
                  alt={productDesignImage6}
                />
                <div>
                  <p className='font-bold text-lg capitalize'>
                    {' '}
                    Introduction to product design
                  </p>
                  <p className='text-grey mt-6 capitalize'>
                    {' '}
                    stutern . 4 views . 4 days ago 17:01:23
                  </p>
                </div>
              </div>
              <div className='flex gap-4 mt-3 hover:cursor-pointer'>
                <img
                  className='w-[80px] h-[80px]'
                  src={productDesignImage6}
                  alt={productDesignImage6}
                />
                <div>
                  <p className='font-bold text-lg capitalize'>
                    {' '}
                    Introduction to product design
                  </p>
                  <p className='text-grey mt-6 capitalize'>
                    {' '}
                    stutern . 4 views . 4 days ago 17:01:23
                  </p>
                </div>
              </div>
              <div className='flex gap-4 mt-3 hover:cursor-pointer'>
                <img
                  className='w-[80px] h-[80px]'
                  src={productDesignImage6}
                  alt={productDesignImage6}
                />
                <div>
                  <p className='font-bold text-lg capitalize'>
                    {' '}
                    Introduction to product design
                  </p>
                  <p className='text-grey mt-6 capitalize'>
                    {' '}
                    stutern . 4 views . 4 days ago 17:01:23
                  </p>
                </div>
              </div>
              <div className='flex gap-4 mt-3 hover:cursor-pointer'>
                <img
                  className='w-[80px] h-[80px]'
                  src={productDesignImage6}
                  alt={productDesignImage6}
                />
                <div>
                  <p className='font-bold text-lg capitalize'>
                    {' '}
                    Introduction to product design
                  </p>
                  <p className='text-grey mt-6 capitalize'>
                    {' '}
                    stutern . 4 views . 4 days ago 17:01:23
                  </p>
                </div>
              </div>
              <div className='flex gap-4 mt-3 hover:cursor-pointer'>
                <img
                  className='w-[80px] h-[80px]'
                  src={productDesignImage6}
                  alt={productDesignImage6}
                />
                <div>
                  <p className='font-bold text-lg capitalize'>
                    {' '}
                    Introduction to product design
                  </p>
                  <p className='text-grey mt-6 capitalize'>
                    {' '}
                    stutern . 4 views . 4 days ago 17:01:23
                  </p>
                </div>
              </div>
              <div className='flex gap-4 mt-3 hover:cursor-pointer'>
                <img
                  className='w-[80px] h-[80px]'
                  src={productDesignImage6}
                  alt={productDesignImage6}
                />
                <div>
                  <p className='font-bold text-lg capitalize'>
                    {' '}
                    Introduction to product design
                  </p>
                  <p className='text-grey mt-6 capitalize'>
                    {' '}
                    stutern . 4 views . 4 days ago 17:01:23
                  </p>
                </div>
              </div>
              <div className='flex gap-4 mt-3 hover:cursor-pointer'>
                <img
                  className='w-[80px] h-[80px]'
                  src={productDesignImage6}
                  alt={productDesignImage6}
                />
                <div>
                  <p className='font-bold text-lg capitalize'>
                    {' '}
                    Introduction to product design
                  </p>
                  <p className='text-grey mt-6 capitalize'>
                    {' '}
                    stutern . 4 views . 4 days ago 17:01:23
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* VideoSelectionSection */}
        </div>
      </div>
    </>
  );
}
