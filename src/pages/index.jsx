//REACT IMPORT
import React, { Suspense } from "react";
import Layout from "../components/Layout";
import BlogsSection from "../components/BlogsSection";
import Testimonials from "../components/Testimonials";
import BookConsultation from "../components/BookConsultation";
import LaboratoryInstruments from "../components/LaboratoryInstruments";
import LabTour from "../components/LabTour";
import WhyGenestring from "../components/WhyGenestring";
import GeneticServices from "../components/GeneticServices";
import HeroSection from "@/components/HeroSection";
import LocationMap from "@/components/LocationMap";

export default function Home({ topStories, trendingNews, dataMar, catData }) {
  return (
    <Layout>
      <HeroSection />
      <GeneticServices />
      <WhyGenestring />
      <LabTour />
      <LaboratoryInstruments />

      <BookConsultation />
      <LocationMap />
      <Testimonials />
      <BlogsSection />
    </Layout>
  );
}

export async function getServerSideProps({}) {
  const topStories = [];
  return {
    props: { topStories },
  };
}
