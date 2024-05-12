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

  return (
    <>
      {info
        .filter((day) => {
          return (
            day.title.toLowerCase().includes(search.toLowerCase()) ||
            formatDate(day.date).includes(search.toLowerCase())
          );
        })
        .map((day) => (
          <div key={day.date} className="container-date">
            <p>Dia Feriado : {formatDate(day.date)}</p>
            <p>{`${day.title}`}</p>
            <p>{`${day.type}`}</p>
            <p>{`${day.extra}`}</p>
          </div>
        ))}
    </>
  );
}

export default MiAPI;
