import React, { useState, useEffect } from 'react';

const Home = () => {
  const [person, setPerson] = useState([]);

  let { first: name } = '';

  const fetchData = async () => {
    const res = await fetch('https://randomuser.me/api/').then((res) =>
      res.json()
    );
    setPerson(res.results[0]);
    name = person.name;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container home">
      {console.log(name)}
      {/* <h2>Who is your date?</h2>
      <img src={person.picture} alt="your date" />
      <p>{data.name.first}</p>
      <p>{data.email}</p>
      <button>Click to pick another</button> */}
    </div>
  );
};

export default Home;
