import { Footer } from "./components/Footer";
import { FormSection } from "./components/FormSection";
import { AboutUs } from "./components/AboutUs";
import { useState } from "react";
import { Chart } from "./components/Chart";
import { CustomNavbar } from "./components/CustomNavbar";
import logo from "./img/logo.png";
import teamIllustration from "./img/team_collaboration.svg";

function App() {
  const [data, setAPIData] = useState({
    data: [
      {
        temp: 36,
        hum: 70,
        pluviosidade: 4,
      },
      {
        temp: 35,
        hum: 60,
        pluviosidade: 45,
      },
      {
        temp: 33,
        hum: 55,
        pluviosidade: 50,
      },
      {
        temp: 34,
        hum: 60,
        pluviosidade: 44,
      },
      {
        temp: 34,
        hum: 60,
        pluviosidade: 44,
      },
    ],
  });

  const getRndInteger = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const randomizeData = (data) => {
    const randomized = data.map((entry) => {
      entry.temp = getRndInteger(30, 36);
      entry.hum = getRndInteger(80, 100);
      entry.pluviosidade = getRndInteger(1, 20);
      return entry;
    });
    setAPIData({ data: randomized });
  };

  setInterval(() => randomizeData(data.data), 5000);

  return (
    <div>
      <CustomNavbar logo={logo} />
      <Chart data={data.data} />
      <AboutUs teamIllustration={teamIllustration} />
      <FormSection />
      <Footer />
    </div>
  );
}

export default App;
