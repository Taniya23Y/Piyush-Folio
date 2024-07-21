/* eslint-disable react/prop-types */
import HeadingCircle from "./HeadingCircle";

export default function Heading({ title }) {
  return (
    <>
      <div className="section-heading select-none">
        <div className="heading flex items-center justify-center gap-4">
          <HeadingCircle />
          <h2 className="w-fit text-5xl sm:text-heading-2 font-medium uppercase">
            {title}
          </h2>
          <HeadingCircle />
        </div>
      </div>
    </>
  );
}
