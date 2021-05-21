import React from 'react'

import SimpleButton from '../../components/SimpleButton'
import SearchBar from '../../components/searchBar/index'

function Home() {
  const codeCollection = {
    languages: [
      {
        id: 0,
        name: "javascript",
      },
      {
        id: 1,
        name: "java",
      },
      {
        id: 2,
        name: "docker",
      }
    ]
  };

  return (
    <>
      <h1>Hackday o/</h1>
      <SimpleButton />
      <SearchBar codeCollection={codeCollection.languages} />
    </>
  );
}

export default Home;