import React from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-500/50 px-5 md:px-7 py-5 md:py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 text-sm md:text-base lg:text-lg">
            Откройте новые горизонты своего сознания и восстановите внутренний баланс
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdYRN2fEV48od4k59TfYdu4pDsQbpDs17vrLlhaTMHsTgB4zA/viewform"
            target="_blank"
            rel="noopener"
            className="inline-block  mx-auto text-sm md:text-base lg:text-lg font-medium text-center text-indigo-500 bg-white rounded-md px-5 lg:px-10 py-3 lg:py-5 "
          >
            Запишитесь на медитацию
          </a>
        </div>
      </div>
    </Container>
  );
};
