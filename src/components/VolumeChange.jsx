import { useGlobalContext } from "./context";

const VolumeChange = () => {
  const { volume, setVolume, setDisplay } = useGlobalContext();

  const handleChangeVolume = (event) => {
    setVolume(event.target.value);
    setDisplay(`Volume: ${event.target.value}`);
  };

  return (
    <section className="volumeChange-section">
      <div>
        <input
          type="range"
          id="volume"
          orient="vertical"
          name="volume"
          min="0"
          max="100"
          value={volume}
          onChange={handleChangeVolume}
        />
      </div>
      <label htmlFor="volume">
        <i className="fas fa-volume-up"></i>
      </label>
    </section>
  );
};

export default VolumeChange;
