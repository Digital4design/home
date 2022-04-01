import { useForm, SubmitHandler } from "react-hook-form"

export default function RegisterInterestForm() {
  type Inputs = {
    firstName: string
    lastName: string
    email: string
    phone: number
    postCode: string
    livingCircumstance: string
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center"
    >
      <div className="flex w-full flex-col gap-5 md:my-5 md:flex-row ">
        <input
          {...register("firstName", { required: true })}
          placeholder="First name"
          className="w-full border-b border-brand-grey-dark pb-1 font-light placeholder:text-brand-grey focus:border-brand-green focus:outline-none md:w-72"
        />
        <input
          {...register("lastName", { required: true })}
          placeholder="Last name"
          className="w-full border-b border-brand-grey-dark pb-1 font-light placeholder:text-brand-grey focus:border-brand-green focus:outline-none md:w-72"
        />
      </div>
      <div className="my-5 flex w-full flex-col gap-5 md:flex-row">
        <input
          {...register("email", { required: true })}
          placeholder="Email address"
          className="w-full border-b border-brand-grey-dark pb-1 font-light placeholder:text-brand-grey focus:border-brand-green focus:outline-none md:w-72"
        />
        <input
          {...register("phone", { required: true })}
          placeholder="Phone number"
          className="w-full border-b border-brand-grey-dark pb-1 font-light placeholder:text-brand-grey focus:border-brand-green focus:outline-none md:w-72"
        />
      </div>
      <div className="flex w-full flex-col  gap-5  md:my-3 md:flex-row">
        <input
          {...register("postCode", {
            required: true,
            pattern:
              / ([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/,
          })}
          placeholder="Post code"
          className="w-full border-b border-brand-grey-dark font-light placeholder:text-brand-grey focus:border-brand-green focus:outline-none md:w-72"
        />
        <div className="flex flex-col">
          <label className="text-xs text-brand-grey">
            Your living circumstance
          </label>
          <select
            {...register("livingCircumstance", { required: true })}
            placeholder="Phone number"
            className=" w-full border-b border-brand-grey-dark font-light focus:border-brand-green focus:outline-none md:w-72"
          >
            <option value="legend">Legend</option>
            <option value="hero">Hero</option>
          </select>
        </div>
      </div>
      <input
        type="submit"
        value="Send your registration"
        className="mt-6 w-full cursor-pointer rounded-sm bg-brand-green py-3 px-8 text-white hover:bg-brand-green-dark md:w-fit"
      />
    </form>
  )
}
