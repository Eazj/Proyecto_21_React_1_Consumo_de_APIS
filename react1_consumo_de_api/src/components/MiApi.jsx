import { useState,useEffect} from "react";

function MiAPI({search}) {

const [info, setInfo] = useState([]);
useEffect(() => {
consultarApi();
}, [search]);
const consultarApi = async () => {
try{
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
}
catch(error){
  console.log("error al obtener los datos",error)
}

};

  return (
    <>
    {info}
    </>
  );
}
export default MiAPI;