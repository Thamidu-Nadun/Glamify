import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import women_image from '../assets/Serene_Portrait_of_a_Young_Woman.jpg';
import productImage from '../assets/product.jpg';
import './About.css';

function AboutS () {
  return (
    <div className="flex h-fit w-screen items-center justify-center p-[2rem] bg-white">
      <div className="py-5 bg-[#f8dbfe] w-full h-full rounded-2xl flex flex-col items-center gap-5">
        <div className="box-action w-[50%] flex flex-col justify-center items-center pl-[2rem] pr-[2rem]">
          <div className="text-center">
              <span className='border border-black bg-transparent px-2 py-1 rounded-xl text-center text-sm w-fit'>BENEFIT OF NATURAL INGREDIENTS</span>
              <h3 className='text-4xl font-semibold font-sans'>
                Benefit of natural ingredients
              </h3>
          </div>
          <p className='text-lg font-normal text-black/50'>
            Unlock skin effortlessly by harnessing the potent benefits of natural ingredients for a healthy, glowing complexion.
          </p>
          <button className="mt-3 w-fit bg-black text-white text-lg px-3 py-2 rounded-xl flex gap-1 items-center">
            Let's explore <FaArrowRight className='rotate-[-45deg]'/>
          </button>
        </div>
        <div className="relative box-image w-[50%] flex flex-col justify-center items-center">
          <div className="seller">
            <span>Best Seller</span>
            <img src={productImage} alt="A good product" />
          </div>
          <img src={women_image} alt="Serene_Portrait_of_a_Young_Woman" className='w-50 rounded-2xl' />
          <div className="sm-box w-40 border border-white bg-[#fe8158] rounded-2xl font-semibold p-2">
            <div className="percentage text-lg">100%</div>
            <span className='text-sm text-black/80'>Product original and BPOM.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutS;
