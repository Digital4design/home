import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
};

function RegisterInterest() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="absolute top-0 left-0 z-999 flex h-full w-full items-center justify-center bg-brand-blue-transparent ">
      <div className="rounded bg-white p-6">
        <div className="mb-4 flex justify-between">
          <p className=" text-sm  font-bold text-brand-grey-dark">
            Register your interest
          </p>
          <div>X</div>
        </div>
        <p className="mb-4 font-light">
          Complete the form below to start your registration process.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center"
        >
          <div className="my-5 flex gap-5 ">
            <input
              {...register("firstName", { required: true })}
              placeholder="First name"
              className="active: w-80 border-b border-brand-grey-dark pb-1 font-light focus:border-brand-green focus:outline-none"
            />
            <input
              {...register("lastName", { required: true })}
              placeholder="Last name"
              className="w-80 border-b border-brand-grey-dark pb-1 font-light focus:border-brand-green focus:outline-none"
            />
          </div>
          <div className="my-5 flex gap-5">
            <input
              {...register("email", { required: true })}
              placeholder="Email address"
              className="w-80 border-b border-brand-grey-dark pb-1 font-light focus:border-brand-green focus:outline-none"
            />
            <input
              {...register("phone", { required: true })}
              placeholder="Phone Number"
              className="w-80 border-b border-brand-grey-dark pb-1 font-light focus:border-brand-green focus:outline-none"
            />
          </div>
          <input
            type="submit"
            value="Send your registration"
            className="w-fit rounded bg-brand-green py-3 px-8 text-white"
          />
        </form>
      </div>
    </div>
  );
}

export default RegisterInterest;
