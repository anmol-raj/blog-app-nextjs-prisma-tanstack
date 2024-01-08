"use client";

import ButtonAction from "@/components/ButtonAction";
import BackButton from "@/components/BackButton";
import React from "react";

const BlogDetailPage = () => {
  return (
    <div>
      <BackButton />
      <div className="mb-8">
        <h2 className="text-2xl font-semibold my-4">Post One</h2>
        <ButtonAction />
      </div>
      <p className="text-slate-700">Post one content</p>
    </div>
  );
};

export default BlogDetailPage;
