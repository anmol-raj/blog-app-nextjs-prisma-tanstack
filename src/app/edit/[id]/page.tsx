"use client";

import FormPost from "@/components/FormPost";
import BackButton from "@/components/BackButton";
import { FormInputPost } from "@/types";
import React from "react";
import { SubmitHandler } from "react-hook-form";

const EditPostPage = () => {
  const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <BackButton />
      <h1 className="text-2xl my-6 font-semibold text-center">Edit post</h1>
      <FormPost submit={handleEditPost} isEditing={true} />
    </div>
  );
};

export default EditPostPage;
