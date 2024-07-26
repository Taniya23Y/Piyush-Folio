/* eslint-disable react/prop-types */

export default function Role({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="role"
      className="select-none flex my-20 md:my-[12%] py-10 flex-col items-center justify-center overflow-hidden nav-change"
      aria-label="role"
    >
      <div className="flex w-full items-center space-x-20">
        <h1 className="text-heading-1 font-medium text-secondary-400 leading-[1.25em] md:leading-[1.08em]">
          I actively create Java development projects that inspire & connect
          innovation & Technology.
        </h1>
      </div>
    </section>
  );
}
