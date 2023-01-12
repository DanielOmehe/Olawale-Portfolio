import profileImage from "../assets/Profile image.jfif";

function About() {
  return (
    <section id="about" className="flex flex-col gap-6 mb-36">
      <h1 className="text-3xl font-semibold text-white text-center">About</h1>
      <div className="flex flex-col md:flex-row gap-8 text-[#acbded] justify-between">
        <p className="mt-4">
          Hi, my name is Olawale Oluwafemi and I work remotely as a freelance
          data scientist. I hold a Bachelor’s and Master’s degree in science
          (Business Analytics, VU University Amsterdam).
          <br /> <br />
          Since I was young, I have always enjoyed to solve puzzles. So that’s
          how I look at big data sets: to me it is one big puzzle I want to
          solve. Finding patterns nobody else sees is the challenge to me.
          <br /> <br />
          I have been working as a data scientist for more than ten years with
          experience in transport, logistics and retail. I have worked for more
          than 25 companies which gives me the ability to translate complex
          questions into understandable insights.
          <br /> <br />
          Do you want to work together? Please reach out to me by e-mail.
          <a
            href="/"
            className="cursor-pointer w-fit block uppercase mt-4 px-4 pt-2 pb-3 text-sm font-bold bg-[#acbded] text-[#262d3d]"
          >
            Mail me
          </a>
        </p>
        <div>
          <img src={profileImage} alt="Olawale Oluwafemi" />
        </div>
      </div>
    </section>
  );
}

export default About;
