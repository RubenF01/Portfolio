import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Form = ({ classes }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data, e) => {
    try {
      e.preventDefault();
      await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify(data),
      });
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className={`flex flex-col max-w-sm 2xl:max-w-xl mx-auto py-8 space-y-3 lg:px-10 lg:pt-48 ${classes}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="subject">Subject</label>
      <input
        type="text"
        name="subject"
        className="border-b-[1px] border-b-slate-900 outline-none"
        {...register("subject", { required: true })}
      />
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        className="border-b-[1px] border-b-slate-900 outline-none"
        {...register("name", { required: true })}
      />
      <label htmlFor="email">Email</label>
      <input
        name="email"
        className="border-b-[1px] border-b-slate-900 outline-none"
        type="email"
        {...register("email", { required: true })}
      />
      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        className="h-24 lg:h-36 2xl:h-52 border-[1px] border-slate-900 rounded outline-none"
        {...register("message", { required: true })}
      />
      <div className="flex justify-center">
        <motion.input
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
          className="rounded-3xl bg-slate-800 text-white flex justify-center px-4 py-2 cursor-pointer"
          type="submit"
        />
      </div>
    </form>
  );
};

export default Form;
