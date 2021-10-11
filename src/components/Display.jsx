import { useGlobalContext } from "./context";

const Display = () => {
  const { display } = useGlobalContext();

  return (
    <section className="dsplay-section">
      <h2>{display}</h2>
    </section>
  );
};

export default Display;
