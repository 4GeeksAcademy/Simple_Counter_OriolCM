import React from "react";
import ReactDOM from "react-dom/client";
import SecondsCounter from "/src/js/components/Home.jsx";
import "/src/styles/index.css";

function App() {
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    // Contador empieza cuando la página termina de cargar
    function handleLoad() {
      setSeconds(0);
      const interval = setInterval(() => {
        setSeconds((sec) => sec + 1);
      }, 1000);
      // Limpiar el intervalo si el componente se desmonta (por buenas prácticas)
      return () => clearInterval(interval);
    }

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return <SecondsCounter seconds={seconds} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
