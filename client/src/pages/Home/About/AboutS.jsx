import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import women_image from '../assets/Serene_Portrait_of_a_Young_Woman.jpg';
import productImage from '../assets/product.jpg';
import './About.css';

function AboutS() {
  return (
    <div className="flex h-fit w-screen items-center justify-center bg-white p-[2rem]">
      <div className="flex h-full w-full flex-col items-center gap-5 rounded-2xl bg-[#f8dbfe] py-5">
        <div className="box-action flex w-[50%] flex-col items-center justify-center pr-[2rem] pl-[2rem]">
          <div className="text-center">
            <span className="w-fit rounded-xl border border-black bg-transparent px-2 py-1 text-center text-sm">
              BENEFIT OF NATURAL INGREDIENTS
            </span>
            <h3 className="font-sans text-4xl font-semibold">
              Benefit of natural ingredients
            </h3>
          </div>
          <p className="text-lg font-normal text-black/50">
            Unlock skin effortlessly by harnessing the potent benefits of
            natural ingredients for a healthy, glowing complexion.
          </p>
          <button className="mt-3 flex w-fit items-center gap-1 rounded-xl bg-black px-3 py-2 text-lg text-white">
            Let's explore <FaArrowRight className="rotate-[-45deg]" />
          </button>
        </div>
        <div className="box-image relative flex w-[50%] flex-col items-center justify-center">
          <div className="seller">
            <span>Best Seller</span>
            <img src={productImage} alt="A good product" />
          </div>
          <img
            src={women_image}
            alt="Serene_Portrait_of_a_Young_Woman"
            className="w-50 rounded-2xl"
          />
          <div className="sm-box w-40 rounded-2xl border border-white bg-[#fe8158] p-2 font-semibold">
            <div className="percentage text-lg">100%</div>
            <span className="text-sm text-black/80">
              Product original and BPOM.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutS;
