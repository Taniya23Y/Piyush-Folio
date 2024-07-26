/* eslint-disable react/prop-types */

import Heading from "../ui/Heading";
// import HeadingCircle from "../ui/HeadingCircle";

const SocialLinks = ({ title }) => {
  return (
    <div className="">
      <div className="">
        <Heading title={title} />
      </div>

      <div className="link-box flex justify-between items-center p-5 mx-auto">
        <div className="flex">
          {/* leetcode-linkBox */}
          <div className="leetcode-linkBox bg-cyan-300 m-2 rounded-md p-5">
            <p>welcome to my leetcode area</p>
            <br />
            <p>Here i solve unhealthy obsession all my shuhhhhh. 👩‍💻👩‍💻👩‍💻</p>
            <br />
          </div>

          <div className="github-linkBox bg-purple-300 m-2 rounded-md p-5">
            <p>welcome to my github area</p>
            <br />
            <p>Here i solve unhealthy obsession all my shuhhhhh. 🤫🤫🤫</p>
            <br />
          </div>

          <div className="linkedin-linkBox bg-blue-300 m-2 rounded-md p-5">
            <p>welcome to my linkedin area</p>
            <br />
            <p>Here i solve unhealthy obsession all my shuhhhhh. 🤫🤫🤫</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
