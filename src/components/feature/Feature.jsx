import React from "react";
import "./FeatureStyle.css";
import { HiPlay } from "react-icons/hi";
import { HiOutlineInformationCircle } from "react-icons/hi";

const Feature = () => {
  return (
    <section className='feature'>
      <img
        src='https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        width='100%'
        alt=''
      />
      <div className='desc'>
        <img
          src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvignette3.wikia.nocookie.net%2Flego-dimensions-customs%2Fimages%2F5%2F53%2FTheMatrix.png%2Frevision%2Flatest%3Fcb%3D20161006180043&f=1&nofb=1&ipt=6ce76fa575e9fe73ceb2dd5bc127e2c1d3f40b55d3d57e5ddb74f6bd7775a5a0&ipo=images'
          alt=''
        />
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi ipsa
          eveniet iusto officiis quae quisquam provident perspiciatis maiores
          unde velit, delectus eum libero, corporis, distinctio adipisci nam
          dolorum quos rem!
        </span>
        <div className='buttons flex'>
          <button className='play flex items-center'>
            <span className='icon'>
              <HiPlay />
            </span>

            <span className='text'>Play</span>
          </button>
          <button className='info flex items-center'>
            <span className='icon'>
              <HiOutlineInformationCircle />
            </span>

            <span className='text'>More Info</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feature;
