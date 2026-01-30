// function App() {
//   return (
//     <div style={{ padding: "40px", fontFamily: "Arial" }}>
//       <h1>AutoScaleOps Dashboard</h1>
//       <p>Frontend is running </p>
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";

function App() {
  const [health, setHealth] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/health")
      .then((res) => res.json())
      .then((data) => setHealth(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>AutoScaleOps Dashboard</h1>

      {health ? (
        <pre>{JSON.stringify(health, null, 2)}</pre>
      ) : (
        <p>Checking backend health...</p>
      )}
    </div>
  );
}

export default App;

