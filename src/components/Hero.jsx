import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          Powering positive change with blockchain
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-3xl sm:text-2xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <ReactTyped
            className="md:text-3xl sm:text-2xl text-xl font-bold md:pl-4 pl-2"
            strings={[" SMEs", " Startups", "Fundraisers"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl sm:text-xl text-xl font-bold text-gray-500">
          Secure, transparent fundraising for every cause.
        </p>
        <p />
      </div>
    </div>
  );
};

export default Hero;
