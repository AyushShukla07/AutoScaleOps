// import { useEffect, useState } from "react";

// function App() {
//   const [health, setHealth] = useState(null);

//   useEffect(() => {
//     fetch("http://backend:5000/health")
//       .then((res) => res.json())
//       .then((data) => setHealth(data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div style={{ padding: "40px", fontFamily: "Arial" }}>
//       <h1>AutoScaleOps Dashboard</h1>

//       {health ? (
//         <pre>{JSON.stringify(health, null, 2)}</pre>
//       ) : (
//         <p>Checking backend health...</p>
//       )}
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";

function App() {
  const [health, setHealth] = useState(null);

  const backendUrl =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  useEffect(() => {
    fetch(`${backendUrl}/health`)
      .then((res) => res.json())
      .then((data) => setHealth(data))
      .catch((err) => console.error(err));
  }, [backendUrl]);

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


