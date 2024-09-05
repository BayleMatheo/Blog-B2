import Image from "next/image";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/Status";
import { Skills } from "./_components/Skills";

export default function Home() {
  return (
    <main>
      <Header/>

      <Spacing size="sm"/>

      <Hero/>

      <Spacing size="sm"/>

      <Status/>

      <Spacing size="sm"/>

      <Skills/>
    </main>
  );
}
