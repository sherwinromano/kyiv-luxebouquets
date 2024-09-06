import AboutFooter from "./AboutFooter";
import Feature from "./Feature";
import Founder from "./Founder";

const About = () => {
  return (
    <div className="flex flex-col">
      <Founder />
      <Feature />
      <AboutFooter />
    </div>
  );
};

export default About;
