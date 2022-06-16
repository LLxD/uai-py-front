import { Chart } from "./components/Chart";
import { CustomNavbar } from "./components/CustomNavbar";
import logo from "./img/logo.png";

function App() {
  let fakeData = {
    data: [
      {
        temp: 500,
        hum: 3000,
        pluviosidade: 50,
      },
      {
        temp: 600,
        hum: 4000,
        pluviosidade: 100,
      },
      {
        temp: 200,
        hum: 2000,
        pluviosidade: 20,
      },
      {
        temp: 1000,
        hum: 2000,
        pluviosidade: 30,
      },
    ],
  };

  return (
    <div>
      <CustomNavbar logo={logo} />
      <div className="grid grid-flow-row items-center justify-center mt-20">
        <Chart data={fakeData.data} />
      </div>
    </div>
  );
}

export default App;
