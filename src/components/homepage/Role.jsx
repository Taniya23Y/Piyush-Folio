/* eslint-disable react/prop-types */

export default function Role({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="about"
      className="select-none flex my-20 px-5 md:my-[12%] py-10 flex-col items-center justify-center overflow-hidden nav-change"
      aria-label=""
    >
      <div className="flex w-full items-center space-x-20">
        <h1 className="text-heading-1 font-medium bg-[#1E1E1E] text-[#D1D1C7] leading-[1.25em] md:leading-[1.08em]">
          I actively create Java development 💻 projects that inspire & connect
          innovation and Technology. 🌟
        </h1>
      </div>
    </section>
  );
}
