import React from 'react';


// Importando componentes
import Nosotros from './views/Nosotros';
function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('/api')
    .then((res) => res.json())
    .then((data) => setData(data.msg))
  }, []);


  return (
    <div className="App">
      <header className="App-header">
      <div class="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>
      <Nosotros value={data} />
      <Nosotros  />

     

      </header>
    </div>
  );
}

export default App;
