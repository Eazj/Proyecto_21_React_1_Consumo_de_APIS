import { useState,useEffect} from "react";

function MiAPI({search}) {

const [info, setInfo] = useState([]);
// 2 - Llamamos a la función consultarApi al momento de montar el componente
useEffect(() => {
consultarApi();
}, [search]);
// 1 - Función que consulta la API
const consultarApi = async () => {
const url = `https://api.weatherapi.com/v1/current.json?key=13140190d24a44918a145052240905&lang=es&q=${search}`;
const response = await fetch(url);
const data = await response.json();
const weatherData = (
  <div>
    <img src={data.current.condition.icon} alt={data.current.condition.text} />
    <p>
      Ubicacion: {data.location.name}, {data.location.region}, {data.location.country}
    </p>
    <p>Temperatura: {data.current.temp_c}°C</p>
    <p>Condicion: {data.current.condition.text}</p>
    <p>Hora: {data.location.localtime}</p>
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