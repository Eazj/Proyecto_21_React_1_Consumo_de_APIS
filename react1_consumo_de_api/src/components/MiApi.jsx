import { useState, useEffect } from "react";

function MiAPI({ search }) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    consultarApi();
  }, [search]);

  const consultarApi = async () => {
    try {
      const url = `https://api.boostr.cl/feriados/en.json`;
      const response = await fetch(url);
      const data = await response.json();
      const days = data.data;
      setInfo(days);
    } catch (error) {
      console.log("error al obtener los datos", error);
    }
  };

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };

  const getDayStyle = (dateString) => {
    const formattedDate = formatDate(dateString);
    let style = {};
    switch (formattedDate) {
      case "01-01-2024":
        style.backgroundColor = "gold";
        break;
      case "01-05-2024":
        style.backgroundColor = "yellow";
        style.borderColor="black"
        break;
      case "18-09-2024":
        style.backgroundColor = "red";
        style.borderColor="blue";
        style.color="white";
        break;
      case "19-09-2024":
        style.backgroundColor = "darkgray";
        style.borderColor="goldenrod";
        style.color="white";
        break;
      case "20-09-2024":
        style.backgroundColor = "red";
        style.borderColor="blue";
        style.color="white";
        break;
      case "25-12-2024":
        style.backgroundColor = "lightgreen";
        break;
      default:
        break;
    }
    if (formattedDate === "25-12-2024") {
      style.animation = "christmasColor 4s infinite";
    }else if(formattedDate === "01-01-2024"){
      style.animation = "newYearColor 4s infinite";
    }
    return style;
  };

  return (
    <>
      {info
        .filter((day) => {
          const formattedDate = formatDate(day.date);
          return (
            day.title.toLowerCase().includes(search.toLowerCase()) ||
            formattedDate.includes(search.toLowerCase())
          );
        })
        .map((day) => (
          <div key={day.date} style={getDayStyle(day.date)} className="box-container">
            <p>{`${day.title}`}</p>
            <p>{formatDate(day.date)}</p>
            <p>{`${day.type}`}</p>
            <p>{`${day.extra}`}</p>
          </div>
        ))}
    </>
  );
}

export default MiAPI;
