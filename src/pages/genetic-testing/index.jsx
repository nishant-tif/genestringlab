//REACT IMPORT
import React from "react";
import Layout from "../../components/Layout";
import GetTested from "../../components/GetTested";
import TestProcess from "@/components/TestProcess";
import Commitment from "@/components/Commitment";
import ImportantTesting from "@/components/ImportantTesting";
import ConsiderTesting from "@/components/ConsiderTesting";
import GeneticHeroSection from "@/components/GeneticHeroSection";

export default function GeneticTesting() {
  return (
    <>
      <GeneticHeroSection />
      <ImportantTesting />
      <ConsiderTesting />
      <GetTested />
      <TestProcess />
      <Commitment />
    </>
  );
}

export async function getServerSideProps({}) {
  return {
    props: {},
  };
}
