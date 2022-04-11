import Image from "next/image"
import React from "react"

export default function NoResults() {
  return (
    <main role="main">
      <section className="my-6">
        <div className="container-sm">
          <div className="rounded bg-brand-blue-light px-6 pt-20 pb-14 text-center">
            <h2 className="mb-6 text-xl font-medium tracking-wide">
              We couldn&apos;t find properties fitting your needs
            </h2>
            <p className="font-light leading-[1.7]">
              Try again by changing your search criteria or{" "}
              <a
                href="http://localhost:3000"
                className="font-medium text-brand-green"
              >
                subscribe to our notifications
              </a>
              .<br />
              As soon as there is a new offer that meets your requirements, we
              will inform you about it.
            </p>
            <figure className="relative mt-10 h-[200px]">
              <Image
                src="/assets/search-not-found.jpg"
                alt=""
                layout="fill"
                objectFit="contain"
              />
            </figure>
          </div>
        </div>
      </section>
    </main>
  )
}
