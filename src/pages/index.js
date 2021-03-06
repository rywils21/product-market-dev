import "../styles/index.css";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Layout from "../components/Layout";

import Head from "next/head";

export default () => {
  return (
    <Layout>
      <Head>
        <title>Product Market Dev</title>
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Home</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
        </div>
      </div>
    </Layout>
  );
};
