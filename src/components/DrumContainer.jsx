import { useGlobalContext } from "./context";
import DrumPad from "./DrumPad";

const DrumContainer = () => {
  const { bank } = useGlobalContext();

  return (
    <section className="drum-container">
      {bank.map((i) => (
        <DrumPad key={i.id} {...i} />
      ))}
    </section>
  );
};

export default DrumContainer;
