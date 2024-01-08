"use client";
import React from "react";
import FormPost from "@/components/FormPost";
import { SubmitHandler } from "react-hook-form";
import { FormInputPost } from "@/types";

const CreatePage = () => {
  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-2xl my-6 font-semibold text-center">Add new post</h1>
      <FormPost submit={handleCreatePost} />
    </div>
  );
};

export default CreatePage;
