import Link from "next/link"
import React, { useState } from "react"

export default function SearchSidebar() {
  const [tabId, setTabId] = useState<number>(1)

  const switchTab = (e: any) => {
    const id = Number(e.target.dataset.id)
    setTabId(id)
  }

  return (
    <div className="mb-6 h-[230px] w-full rounded border bg-white py-5 px-6">
      <nav className="mb-6 flex">
        <button
          className={`mr-8 pb-2 text-sm font-medium ${
            tabId === 1
              ? "tab-active"
              : "border-b-2 border-white text-brand-grey hover:text-brand-green"
          }`}
          data-id={1}
          onClick={switchTab}
        >
          Areas
        </button>
        <button
          className={`mr-8 pb-2 text-sm font-medium ${
            tabId === 2
              ? "tab-active"
              : "border-b-2 border-white text-brand-grey hover:text-brand-green"
          }`}
          data-id={2}
          onClick={switchTab}
        >
          Cities
        </button>
        <button
          className={`mr-8 pb-2 text-sm font-medium ${
            tabId === 3
              ? "tab-active"
              : "border-b-2 border-white text-brand-grey hover:text-brand-green"
          }`}
          data-id={3}
          onClick={switchTab}
        >
          Developers
        </button>
      </nav>

      {tabId === 1 && (
        <>
          <p className="mb-3 flex justify-between border-b pb-4">
            North England <span className="font-semibold">13</span>
          </p>
          <p className="mb-3 flex justify-between border-b pb-4">
            South England <span className="font-semibold">8</span>
          </p>
          <p className="mb-3 flex justify-between pb-4">
            West England <span className="font-semibold">23</span>
          </p>
        </>
      )}

      {tabId === 2 && (
        <>
          <p className="mb-3 flex justify-between border-b pb-4">
            London <span className="font-semibold">10</span>
          </p>
          <p className="mb-3 flex justify-between border-b pb-4">
            Brighton <span className="font-semibold">8</span>
          </p>
          <p className="mb-3 flex justify-between pb-4">
            Birmingham <span className="font-semibold">2</span>
          </p>
        </>
      )}

      {tabId === 3 && (
        <>
          <p className="mb-3 flex cursor-pointer justify-between border-b pb-4 hover:border-brand-green">
            <Link href="/developer/taylor-whimpey">
              <a className="flex h-full w-full items-center text-brand-grey hover:text-brand-green hover:no-underline">
                Taylor Wimpey
              </a>
            </Link>
          </p>
          <p className="mb-3 flex cursor-pointer justify-between border-b pb-4 hover:border-brand-green">
            <Link href="/development/test">
              <a className="flex h-full w-full items-center text-brand-grey hover:text-brand-green hover:no-underline">
                Example Developer
              </a>
            </Link>
          </p>
          <p className="mb-3 flex cursor-pointer justify-between border-b pb-4 hover:border-brand-green">
            <Link href="/development/test">
              <a className="flex h-full w-full items-center text-brand-grey hover:text-brand-green hover:no-underline">
                Example Developer
              </a>
            </Link>
          </p>
        </>
      )}
    </div>
  )
}
