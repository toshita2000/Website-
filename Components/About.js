/** @format */

import React from "react";
import Image from "next/image";
import classes from "./css/head.module.css";
import Circle from "./Circle";

const About = () => {
  return (
    <div
      id='about'
      className='relative lg:px-28 lg:mt-56 flex flex-col lg:flex-row text-white'>
      <div className='absolute -right-32 bottom-52 opacity-20'>
        <Circle />
      </div>
      <div className='invisible lg:visible font-Comfortaa text-8xl mr-16'>
        <span className={classes.head}>A</span>
        <br />
        <span className={classes.head}>B</span>
        <br />
        <span className={classes.head}>O</span>
        <br />
        <span className={classes.head}>U</span>
        <br />
        <span className={classes.head}>T</span>
      </div>
      <div
        className={`${classes.head} flex justify-center lg:hidden -mb-36 -mt-96 font-Comfortaa text-6xl lg:text-8xl lg:mr-16`}>
        ABOUT
      </div>
      <Image
        width={"980px"}
        height={"350px"}
        className='invisible lg:visible mx-20 w-36 h-36'
        alt='userImage'
        src={
          "data:image/jpeg;base64,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"
        }
      />
      <Image
        width={"280px"}
        height={"400px"}
        className='visible px-16 lg:invisible mx-20 w-12 h-36'
        alt='userImage'
        src={
          "data:image/jpeg;base64,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"
        }
      />
      <div className='px-4 lg:px-0 mt-4 lg:mt-0 lg:pl-12 font-sans '>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        dignissim justo non lacinia dapibus. Etiam non ipsum diam. Mauris mollis
        nunc mi, ac eleifend metus eleifend et. <br />
        Phasellus ultricies non mauris id blandit. Proin non consequat mauris.
        Duis commodo augue eu leo vulputate, a dictum ligula condimentum.
        <br /> eu velit tincidunt, id elementum tellus congue. Nam dictum
        consequat mi eget efficitur.
        <br /> Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam
        semper placerat purus, ut sollicitudin augue elementum sed. Nam a sem
        egestas, cursus quam. Mauris mollis nunc mi, ac eleifend metus eleifend
        et. <br />
        Phasellus ultricies non mauris id blandit. Proin non consequat mauris.
        Duis commodo augue eu leo vulputate, a dictum ligula condimentum. eu
        velit tincidunt, id elementum tellus congue. Nulla dictum ipsum N
      </div>
    </div>
  );
};

export default About;
2;
