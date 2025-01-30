import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Hero from "@/components/Hero";
import Available from "@/components/Available";
import Gallery from "@/components/Gallery";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />

      <Available />
      <Gallery main={true} />
      <Testimonial main={true}/>
    </>
  );
}
