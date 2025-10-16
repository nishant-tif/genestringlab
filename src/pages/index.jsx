//REACT IMPORT
import React, { Suspense } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogsSection from "../components/BlogsSection";
import Testimonials from "../components/Testimonials";

export default function Home({ topStories, trendingNews, dataMar, catData }) {
  return (
    <>
      <Header />
      <main>
        <BlogsSection />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps({}) {
  const topStories = [];
  return {
    props: { topStories },
  };
}
