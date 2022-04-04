import RegisterInterestForm from "components/RegisterInterest/RegisterInterestForm"

export default function RegisterInterest() {
  return (
    <>
      <h5 className="mb-8 text-sm font-semibold text-brand-grey-dark">
        Register your interest
      </h5>
      <p className="mb-4 font-light">
        Complete the form below to start your registration process.
      </p>
      <RegisterInterestForm />
    </>
  )
}
