import profileImage from "../assets/profile-image.png";
import ScrollIntoView from "react-scroll-into-view";

function Hero() {
  return (
    <section
      id="hero"
      className="h-[60vh] text-[#acbded] flex items-center justify-between"
    >
      <div className="flex flex-col gap-4 items-start">
        <p className="text-lg">Hi there, I am</p>
        <h1 className="text-3xl font-semibold">Olawale Oluwafemi</h1>
        <p>
          Contemplative coder and analyst. Inspired by tough problems <br /> and
          the make the right decisions, data-driven decisions
        </p>
        <ScrollIntoView
          className="cursor-pointer uppercase border px-4 pt-2 pb-3 text-sm border-[#4c71d9] hover:border-transparent rounded-xl hover:bg-[#acbded] hover:text-[#262d3d]"
          smooth="true"
          selector={`#project`}
        >
          My Projects
        </ScrollIntoView>
      </div>
      {/* <div className="h-4/6">
        <img src={profileImage} className="h-full" alt="Olawale Oluwafemi" />
      </div> */}
    </section>
  );
}

export default Hero;
