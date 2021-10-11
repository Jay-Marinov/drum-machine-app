import { useGlobalContext } from "./context";
import { bankOne } from "./data";
import { bankTwo } from "./data";

const SwitchBanks = () => {
  const { switchBanks, setDisplay, bank } = useGlobalContext();

  const handleSwitch = () => {
    switchBanks();
    if (bank === bankOne) {
      setDisplay("Bank Two");
    } else {
      setDisplay("Bank One");
    }
  };

  return (
    <section className="switchBanks-section">
      <button className="btn switch" onClick={handleSwitch}>
        switch banks
      </button>
    </section>
  );
};

export default SwitchBanks;
