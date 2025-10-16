//REACT IMPORT
import React, { Suspense } from "react";

export default function Home({ topStories, trendingNews, dataMar, catData }) {
  return (
    <>
      <h>Hello</h>
    </>
  );
}

export async function getServerSideProps({}) {
  const topStories = [];
  return {
    props: { topStories },
  };
}
