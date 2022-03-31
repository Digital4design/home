import { SearchIcon } from "@heroicons/react/outline";

function FaqSearchBox() {
  return (
    <div className="container flex items-center rounded bg-white p-2 lg:p-4">
      <SearchIcon className="h-8 text-brand-blue-dark lg:ml-2 lg:h-10" />
      <input
        type="text"
        className=" h-full w-full px-2 focus:outline-none lg:pl-5"
        placeholder="Type your question here, or browse topic below"
      />
      <div className="flex items-center rounded-sm bg-brand-green p-2 lg:p-5">
        <SearchIcon className=" h-6 text-white" />
      </div>
    </div>
  );
}

export default FaqSearchBox;
