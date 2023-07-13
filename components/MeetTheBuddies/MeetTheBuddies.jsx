'use client';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './MeetTheBuddies.css';

gsap.registerPlugin(ScrollTrigger);

export default function MeetTheBuddies() {
  const cloud1 = useRef(null);
  const cloud2 = useRef(null);
  const cloud3 = useRef(null);
  const cloud4 = useRef(null);
  const cloud5 = useRef(null);
  const cloud6 = useRef(null);
  useLayoutEffect(() => {
    const el1 = cloud1.current;
    const el2 = cloud2.current;
    const el3 = cloud3.current;
    const el4 = cloud4.current;
    const el5 = cloud5.current;
    const el6 = cloud6.current;
    gsap.to(el1, {
      x: -180,
      scrollTrigger: {
        trigger: el1,
        toggleActions: 'restart pause resume none',
        scrub: true,
        start: 'top center',
        end: '260px center',
      },
    });
    gsap.to(el2, {
      x: 120,
      scrollTrigger: {
        trigger: el2,
        toggleActions: 'restart pause resume none',
        scrub: true,
        start: '-60px center',
        end: 'bottom center',
      },
    });
    gsap.to(el3, {
      x: -180,
      scrollTrigger: {
        trigger: el3,
        toggleActions: 'restart pause resume none',
        scrub: true,
        start: 'top center',
        end: '160px center',
      },
    });
    gsap.to(el4, {
      x: 190,
      scrollTrigger: {
        trigger: el4,
        toggleActions: 'restart pause resume none',
        scrub: true,
        start: 'top center',
        end: 'bottom center',
      },
    });
    gsap.to(el5, {
      x: 155,
      scrollTrigger: {
        trigger: el5,
        toggleActions: 'restart pause resume none',
        scrub: true,
        start: '-30px center',
        end: '100px center',
      },
    });
    gsap.to(el6, {
      x: -170,
      scrollTrigger: {
        trigger: el6,
        toggleActions: 'restart pause resume none',
        scrub: true,
        start: 'top center',
        end: 'bottom center',
      },
    });
  }, []);

  return (
    <div className="main-mtb-container" id="thebuddies">
      <img
        className="mtb-cloud-img"
        src='/assets/MTBCloud.svg'
        alt="Meet the Buddies Cloud header"
      />
      <div className="single-buddy-container">
        <div className="buddy-image-container">
          <img className="buddy-on-cloud" src='/assets/buddy1.svg' alt="" />
          <img className="cloud-one" src='/assets/cloud.png' alt="" ref={cloud1} />
          <img className="cloud-two" src='/assets/cloud.png' alt="" ref={cloud2} />
        </div>
        <div className="buddy-text-container">
          <p>
            Yoko is an adventurous spirit. Fearless and a <br /> natural-born
            leader, Yoko is viewed as <br /> mischievous in her world.
          </p>
        </div>
      </div>
      <div id="buddy2-container" className="single-buddy-container">
        <div className="buddy-image-container">
          <img className="buddy-on-cloud" id="buddy2" src='/assets/buddy2.png' alt="" />
          <img className="cloud-one-buddy2" src='/assets/cloud.png' alt="" ref={cloud3} />
          <img className="cloud-two-buddy2" src='/assets/cloud.png' alt="" ref={cloud4} />
        </div>
        <div className="buddy-text-container">
          <p>
            Dani is fierce and super competitive. Loves having <br /> fun but
            also pushes herself to see how far she can go in <br /> anything she
            does.
          </p>
        </div>
      </div>
      <div className="single-buddy-container">
        <div className="buddy-image-container">
          <img className="buddy-on-cloud" id="buddy3" src='/assets/buddy3.png' alt="" />
          <img className="cloud-one-buddy3" src='/assets/cloud.png' alt="" ref={cloud5} />
          <img className="cloud-two-buddy3" src='/assets/cloud.png' alt="" ref={cloud6} />
        </div>
        <div className="buddy-text-container">
          <p>
            Umi is shy and very careful about most things. She <br /> likes
            playing with Yoko and Dani but most of the <br /> time Umi is the
            voice of reason for them.
          </p>
        </div>
      </div>
    </div>
  );
};
