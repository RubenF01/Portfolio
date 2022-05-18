import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useState } from "react";

const Form = ({ classes }) => {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    try {
      e.preventDefault();
      await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify(data),
      });
      reset();
      setSent(true);
      setTimeout(() => {
        setSent(false);
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className={`flex flex-col max-w-sm 2xl:max-w-xl mx-auto py-8 space-y-3 lg:px-10 lg:pt-48 ${classes}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="subject" className="font-bold">
        Subject
      </label>
      <input
        type="text"
        name="subject"
        className="border-b-[1px] border-b-slate-900 outline-none"
        {...register("subject", { required: true })}
      />
      {errors.subject?.type === "required" && (
        <span className="text-red-500">Subject is required</span>
      )}

      <label htmlFor="name" className="font-bold">
        Name
      </label>
      <input
        type="text"
        name="name"
        className="border-b-[1px] border-b-slate-900 outline-none"
        {...register("name", { required: true })}
      />
      {errors.name?.type === "required" && (
        <span className="text-red-500">Name is required</span>
      )}

      <label htmlFor="email" className="font-bold">
        Email
      </label>
      <input
        name="email"
        className="border-b-[1px] border-b-slate-900 outline-none"
        type="email"
        {...register("email", { required: true })}
      />
      {errors.email?.type === "required" && (
        <span className="text-red-500">Email is required</span>
      )}

      <label htmlFor="message" className="font-bold">
        Message
      </label>
      <textarea
        name="message"
        className="h-24 lg:h-36 2xl:h-52 border-[1px] border-slate-900 rounded outline-none"
        {...register("message", { required: true })}
      />
      {errors.message?.type === "required" && (
        <span className="text-red-500">Message is required</span>
      )}

      <div className="flex flex-col items-center">
        <motion.input
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
          className="rounded-3xl bg-slate-800 text-white flex justify-center px-4 py-2 cursor-pointer"
          type="submit"
        />
        {sent && <span className="text-green-500">Message sent!</span>}
      </div>
    </form>
  );
};

export default Form;
