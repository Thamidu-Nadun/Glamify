import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import women_image from '../assets/Serene_Portrait_of_a_Young_Woman.jpg';
import productImage from '../assets/product.jpg';
import './About.css';

function About() {
  return (
    <div className="flex h-fit w-screen items-center justify-center bg-white p-[2rem]">
      <div className="flex h-full w-full flex-col items-center gap-5 rounded-2xl bg-[#f8dbfe] py-5 lg:flex-row lg:justify-start">
        <div className="box-action flex w-[50%] flex-col items-center justify-center gap-2 pr-[2rem] pl-[2rem] lg:items-start">
          <div className="text-center lg:text-start">
            <span className="w-fit rounded-xl border border-black bg-transparent px-2 py-1 text-center text-sm">
              BENEFIT OF NATURAL INGREDIENTS
            </span>
            <h3 className="font-sans text-4xl font-semibold">
              Benefit of natural ingredients
            </h3>
          </div>
          <p className="text-center text-lg font-normal text-black/50 lg:text-start">
            Unlock skin effortlessly by harnessing the potent benefits of
            natural ingredients for a healthy, glowing complexion.
          </p>
          <button className="mt-3 flex w-fit items-center gap-1 rounded-xl bg-black px-3 py-2 text-lg text-white">
            Let's explore <FaArrowRight className="rotate-[-45deg]" />
          </button>
        </div>
        <div className="box-image relative flex w-[50%] flex-col items-center justify-center bg-black">
          <div className="img-box">
            <img src={women_image} className='w-full h-full rounded-3xl' />
            <div className="seller w-[10vw] h-25 relative">
              <img src={productImage} className="w-full h-full rounded-3xl" />
              <span className='absolute top-0 left-0 text-white text-xl font-bold m-2'>Best Seller</span>
            </div>
            <div className="percentage w-[10vw] h-25 bg-[#fe8158] flex flex-col items-center relative rounded-2xl">
              <div className="percentage text-lg top-0 left-0 p-4">100%</div>
              <span className="text-sm absolute text-black/70 bottom-0 right-0 p-2 text-right">Product original and BPOM.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
