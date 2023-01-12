import * as RiIcons from "react-icons/ri";
import * as GiIcons from "react-icons/gi";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";

function Services() {
  const serviceList = [
    {
      name: "Data analysis",
      about:
        "I am specialized in analyzing data. Results, trends and recommendations are clearly presented in reports or tools.",
      icon: <RiIcons.RiDatabase2Line size="2rem" />,
      link: "www.",
    },
    {
      name: "Advice and coaching projects",
      about:
        "Before and during data related projects, I give advice on the progress of the project and I coach data analysts.",
      icon: <GiIcons.GiTeacher size="2rem" />,
    },
    {
      name: "Data analytics",
      about:
        "Get more value from your data with prediction models and machine learning techniques, for example by predicting behavior or targeting the right customer.",
      icon: <BsIcons.BsClipboardData size="2rem" />,
      link: "www.",
    },
    {
      name: "(Interactive) infographics",
      about:
        "Present your data in an inspiring way by using an infographic rather than a piece of text. I create interactive infographics which can be used internally or publicly.",
      icon: <BsIcons.BsTextParagraph size="2rem" />,
    },
    {
      name: "Dashboards",
      about:
        "Dashboards show the most recent results in an interactive way. By clicking and drilling, you will examine trends and patterns yourself.",
      icon: <MdIcons.MdOutlineDashboard size="2rem" />,
      link: "",
    },
    {
      name: "Frontend web developer",
      about:
        "As a web developer, I help to design and create the perfect website for starters and freelancers. The website is optimized for desktop and smartphone.",
      icon: <MdIcons.MdOutlineDevicesOther size="2rem" />,
      link: "",
    },
  ];
  return (
    <section id="services" className="flex flex-col gap-6 text-center mb-36">
      <h1 className="text-3xl font-semibold text-white">Services</h1>
      <div className="flex flex-col gap-2 items-start text-[#acbded] text-sm">
        <p>
          As a freelance data analyst and data scientist, I translate data into
          valuable and comprehensible insights. My goal is to improve results,
          make the right decisions and save costs.
        </p>
        <p>
          I am experienced in machine learning, supervised and unsupervised
          algorithms and use data visualization techniques to present the
          results. I use SQL, R, Python, QlikView and Tableau for my data
          projects.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
        {serviceList.map((service, index) => (
          <div
            className="service text-[#acbded] flex flex-col items-center text-center"
            key={index}
          >
            {service.icon}
            <h2 className="text-lg mt-6 mb-3 text-white font-semibold">
              {service.name}
            </h2>
            <p className="text-sm">
              {service.about}{" "}
              {service.link && (
                <a
                  className="text-[#4c71d9] hover:text-firstColorSecond"
                  href={service.link}
                  target="_blank"
                >
                  (example)
                </a>
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
