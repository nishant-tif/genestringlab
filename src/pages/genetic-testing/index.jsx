//REACT IMPORT
import React from "react";
import Layout from "../../components/Layout";
import GetTested from "../../components/GetTested";
import TestProcess from "@/components/TestProcess";
import Commitment from "@/components/Commitment";

export default function GeneticTesting() {
  return (
    <Layout>
      <GetTested />
      <TestProcess />
      <Commitment />
    </Layout>
  );
}

export async function getServerSideProps({}) {
  return {
    props: {},
  };
}
