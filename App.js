import React from 'react';

import Routes from './src/routes/index'
// import TelaA from './src/views/TelaA';

export default function App(props) {
  const dados = [
    {
      produto: "Album",
      categoria: "Heav Metal"
    }
  ]
  return (
    // <TelaA/>
    <Routes valores={dados} />
  );
}


