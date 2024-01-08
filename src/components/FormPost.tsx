"use client";

import { FormInputPost } from "@/types";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  isEditing: boolean;
}

const FormPost: FC<FormPostProps> = ({ submit, isEditing }) => {
  const { register, handleSubmit } = useForm<FormPostProps>();

  return (
    <form
      className="flex flex-col items-center justify-center gap-5 mt-10"
      onSubmit={handleSubmit(submit)}
    >
      <input
        type="text"
        placeholder="Post title"
        {...register("title", { required: true })}
        className="input input-bordered w-full max-w-lg"
      />
      <textarea
        {...register("content", { required: true })}
        className="textarea textarea-bordered w-full max-w-lg"
        placeholder="Post content..."
      ></textarea>
      <select
        {...register("tag", { required: true })}
        className="select select-bordered w-full max-w-lg"
        defaultChecked={""}
      >
        <option disabled selected>
          Select tags
        </option>
        <option>Javascript</option>
        <option>Rust</option>
        <option>Python</option>
      </select>
      <button type="submit" className="btn btn-primary w-full max-w-lg">
        {isEditing ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default FormPost;
