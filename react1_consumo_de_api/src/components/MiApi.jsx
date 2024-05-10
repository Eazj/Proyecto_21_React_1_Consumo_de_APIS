import { useState,useEffect} from "react";

function MiAPI() {

const [info, setInfo] = useState([]);
// 2 - Llamamos a la función consultarApi al momento de montar el componente
useEffect(() => {
consultarApi();
}, []);
// 1 - Función que consulta la API
const consultarApi = async () => {
const url = "https://api.weatherapi.com/v1/current.json?key=13140190d24a44918a145052240905&lang=es&q=santiago";
const response = await fetch(url);
const data = await response.json();
const weatherData = (
  <div>
    <p>
      Location: {data.location.name}, {data.location.region}, {data.location.country}
    </p>
    <p>Local Time: {data.location.localtime}</p>
    <p>Temperature: {data.current.temp_c}°C</p>
    <p>Condition: {data.current.condition.text}</p>
    <img src={data.current.condition.icon} alt={data.current.condition.text} />
  </div>
);

setInfo(weatherData);
};

  return (
    <>
    {info}
    </>
  );
}
export default MiAPI;
//setInfo(`${data.location.name} - ${data.current.temp_c} °C  Fecha: ${data.location.localtime}`