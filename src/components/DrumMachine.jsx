import Display from "./Display";
import SwitchBanks from "./SwitchBanks";
import VolumeChange from "./VolumeChange";
import DrumContainer from "./DrumContainer";

function DrumMachine() {
  return (
    <main>
      <Display />
      <DrumContainer />
      <SwitchBanks />
      <VolumeChange />
    </main>
  );
}

export default DrumMachine;
