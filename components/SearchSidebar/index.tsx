import React from "react"

export default function SearchSidebar() {
  return (
    <aside className="w-1/3 pl-6">
      <div className="mb-6 h-[230px] rounded border bg-white py-5 px-6">
        <nav className="mb-6 flex">
          <button className="mr-8 border-b-2 border-brand-green pb-2 text-sm font-medium text-brand-green">
            Areas
          </button>
          <button className="mr-8 pb-2 text-sm font-normal text-brand-grey hover:text-brand-green">
            Cities
          </button>
          <button className="mr-8 pb-2 text-sm font-normal text-brand-grey hover:text-brand-green">
            Developers
          </button>
        </nav>

        <p className="mb-3 flex justify-between border-b pb-4">
          North England <span className="font-semibold">13</span>
        </p>
        <p className="mb-3 flex justify-between border-b pb-4">
          South England <span className="font-semibold">8</span>
        </p>
        <p className="mb-3 flex justify-between pb-4">
          West England <span className="font-semibold">23</span>
        </p>
      </div>
    </aside>
  )
}
