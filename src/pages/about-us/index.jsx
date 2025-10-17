//REACT IMPORT
import React from "react";
import Layout from "../../components/Layout";
import GetTested from "../../components/GetTested";
import TestProcess from "@/components/TestProcess";
import Commitment from "@/components/Commitment";
import ImportantTesting from "@/components/ImportantTesting";
import ConsiderTesting from "@/components/ConsiderTesting";
import GeneticHeroSection from "@/components/GeneticHeroSection";
import TeamDetails from "@/components/TeamDetails";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import SetApart from "@/components/SetApart";

export default function GeneticTesting() {
  return (
    <Layout>
      <Mission />
      <SetApart />
      <Services />
      <TeamDetails />
    </Layout>
  );
}

export async function getServerSideProps({}) {
  return {
    props: {},
  };
}
