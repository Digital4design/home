import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
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
      <div className="rounded bg-white p-4">
        <div className="mb-4 flex justify-between">
          <p className=" text-sm font-bold text-brand-grey-dark">
            Register your interest
          </p>
          <div>X</div>
        </div>
        <p>Complete the form below to start your registration process.</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              {...register("firstName", { required: true })}
              placeholder="First name"
            />
            <input
              {...register("lastName", { required: true })}
              placeholder="Last name"
            />
          </div>
          <input type="submit" value="Submit your registration" />
        </form>
      </div>
    </div>
  );
}

export default RegisterInterest;
