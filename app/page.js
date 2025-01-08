import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Hero from "@/components/Hero";
import Available from "@/components/Available";
import Testimonial from "@/components/Testimonial";


export default function Home() {
  return (
    <>
    
      <Hero />
      
      <Available />

      <Testimonial />
    
    
    </>
  );
}
