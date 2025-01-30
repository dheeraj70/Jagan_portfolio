'use client';
import React from "react";
import "./Testimonial.css";
import { useRouter } from "next/navigation";

const Testimonial = ({main}) => {

  const router = useRouter();
  const testimonials = [
    {
      name: "Madhu Sudhan",
      msg: "We’ve had an incredible experience with Dr. Jagan Mohan Varakala sir, They are not only knowledgeable and professional but also genuinely caring and compassionate. Dr. Jagan Mohan Varakala sir takes the time to listen to our concerns and explain everything in detail, which really puts us at ease. Our child feels comfortable and looks forward to each visit, which says a lot! The entire staff is welcoming, and the office is clean and organized. We feel very lucky to have Dr. Jagan Mohan Varakala sir as our pediatrician and highly recommend them to other parents.",
      rating: 5,

    },
    {
      name: "Madhu Palaparthi",
      msg: "Dr. Jagan Mohan is an exceptional pediatrician who has truly gone above and beyond for our child’s health. His expertise and compassionate approach make every visit a reassuring experience. He takes the time to listen carefully to our concerns, explains diagnoses and treatments clearly, and always makes sure we leave with a full understanding of what’s best for our child. We feel incredibly fortunate to have Dr. Jagan Mohan as our pediatrician and highly recommend him to any parent looking for outstanding, reliable care for their child.",
      rating: 5,
      
    },
    {
      name: "Ranjithkumar Ravichandran",
      msg: "Great consultation and care from the Doctor. Went for my babies jaundice treatment, the doctor and nurses gave a great care to my baby. Really recommend for everyone to Dr. Jagan, who is fantastic baby care specialist 😊",
      rating: 5,
      
    },
    {
      name: "Jaleel Khan",
      msg: "Dr Jagan Mohan and his team efforts are much appreciated in treating my new born. He was in very critical condition when we brought him to Paramitha hospital to him. He and his team had taken atmost care in treating my new born. Dr Jagan Sir is an exceptional neonatologist who has taken very good care of my new born. He was very compassionate and always available to answer our queries. Truly a god send for new borns!!!",
      rating: 5,
      
    },
    {
      name: "Satish S",
      msg: "Experienced doctor with good knowledge .. i admitted my sisters baby under him , baby was born as 1.3 kg . Dr jagan mohan took care of our baby extremely well . They gave me confidence and councelld us very well regarding the condition of the baby. I strongly recommend him for newborn and pediatric care.",
      rating: 5,
      
    },
    {
      name: "Pranusha Kenche",
      msg: "Doctor is very patient and he listens to us and clarifies every single doubt regarding our kid very politely.Thanks to doctor Jagan for the great service.",
      rating: 5,
      
    },
    {
      name: "M.Nagarjuna Reddy",
      msg: "Excellent doctor for pre mature and new borns!! He listens the concerns very patiently and perfectly diagnose the problem. He analyses the problem very well and provides the best possible solution to the problem. I strongly recommend Jagan sir for your pre mature or new born babies.",
      rating: 5,
      
    },
    {
      name: "Siva Rajesh Akula",
      msg: "Jagan sir very attentive in listening the condition of baby and is very good in diagnosing probelm. The sir advises only the required medicines which we like it a lot. I strongly recommend to consult Jagan sir.",
      rating: 5,
    }
  ];
  return (
    <div style={{ marginTop: main ? "100px" : "150px" }} className="testimonial">
      <img className="test_i" src="/couple_baby_dakko.png" alt=" " />
      <img src="./baby_nyuuji_kenshin_kyoui.png" alt="" className="test_i2" />
      <h1 className="avh">Testimonials</h1>
      <div className="test-content">
        {(main ? testimonials.slice(0, 4) : testimonials).map((testimonial, index) => {
          return (
            <div className="test-item" key={index}>
        <p className="test-name">{testimonial.name}</p>
        <div className="test-stars">
          
        {Array.from({ length: testimonial.rating }, (_, i) => (
        <img key={i} height="29px" src="/star.svg" alt={`Star ${i + 1}`} />
      ))}
          
        </div>
        <p className="test-msg">{testimonial.msg.slice(0,300) + (testimonial.msg.length > 300 ? "..." : "")}</p>
        </div>
          )
        })}
  
      </div>
      {main && (
        <div style={{marginTop: '30px'}} className="viewmore">
          <span onClick={() => { router.push('/testimonials'); }} style={{ cursor: "pointer" }}>View more </span>
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 15 15"
            fill="#2e5077"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.85355 2.14645C3.65829 1.95118 3.34171 1.95118 3.14645 2.14645C2.95118 2.34171 2.95118 2.65829 3.14645 2.85355L7.14645 6.85355C7.34171 7.04882 7.65829 7.04882 7.85355 6.85355L11.8536 2.85355C12.0488 2.65829 12.0488 2.34171 11.8536 2.14645C11.6583 1.95118 11.3417 1.95118 11.1464 2.14645L7.5 5.79289L3.85355 2.14645ZM3.85355 8.14645C3.65829 7.95118 3.34171 7.95118 3.14645 8.14645C2.95118 8.34171 2.95118 8.65829 3.14645 8.85355L7.14645 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L11.8536 8.85355C12.0488 8.65829 12.0488 8.34171 11.8536 8.14645C11.6583 7.95118 11.3417 7.95118 11.1464 8.14645L7.5 11.7929L3.85355 8.14645Z"
              fill="#2e5077"
            />
          </svg>
        </div>
      )}
      {!main && (
        <div className="more-revs">
          <button onClick={()=>{
            router.push('https://maps.app.goo.gl/AJsb2kDUotN4jaWM7');
          }} className="mr-btn">More Testimonials</button>
          <button onClick={()=>{
            router.push('https://maps.app.goo.gl/AJsb2kDUotN4jaWM7');
          }} className="mr-btn"> Write a Review </button>
        </div>
      )}
    </div>
  );
};

export default Testimonial;
