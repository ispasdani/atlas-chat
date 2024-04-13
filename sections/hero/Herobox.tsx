import Link from "next/link";
import React from "react";

function Herobox() {
  return (
    <section className="w-full flex flex-col justify-start items-center">
      <h1 className="w-full text-8xl font-bold text-blue-500 flex justify-center items-center pt-10">
        ATLAS
      </h1>
      <p className="w-full text-3xl flex justify-center items-center py-1">
        is breaking down language barriers!
      </p>
      <p className="pt-10">
        Speak your native language with anyone without thinking about it!
      </p>
      <p className="pt-3">
        Let the{" "}
        <span className="text-blue-900">AI handle the translation.</span>
      </p>
      <div className="w-full flex justify-center items-center py-5">
        <Link
          href={"/chat"}
          className="h-10 px-5 bg-blue-900 text-white flex justify-center items-center rounded-lg mx-5 hover:bg-blue-600 transition-all ease-linear"
          prefetch={false}
        >
          Get started
        </Link>
        <Link
          href={"/pricing"}
          prefetch={false}
          className="h-10 px-5 border border-blue-900 text-blue-900 flex justify-center items-center rounded-lg mx-5 hover:bg-blue-900 hover:text-white transition-all ease-linear"
        >
          View pricing
        </Link>
      </div>
      <div className="z-10 h-[550px] w-[460px] bg-primary-coral-red mb-10 mt-20">
        video Card
      </div>
    </section>
  );
}

export default Herobox;
