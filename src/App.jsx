import { useState } from "react";
import { DeviceFrameset, DeviceOptions } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


//DIFFERENT DEVICES OPTIONS ON WHICH HOW UR WEBPAGE WILL LOOK
const devices = Object.keys(DeviceOptions);
function App() {
  console.log(devices);
  /*
  MAKE USE OF IFRAME TO CREATE MULTIPLE WINDOWS IN ONE WINDOW
  const url = "https://pages.github.com";
  */

  /* MAINTAIN THE STATE ACCRDING TO THE SELECTED OPTIONS
  IF SELECTED OPTION IS IPHONE XR THEN THE STATE WILL GET UPDATED TO IPHONE XR DEVICE FRAMESET
   */
  const [selectedDevice, setSelectedDevice] = useState(devices[0]);
  const [selectedDevices, setSelectedDevices] = useState([]);
  const [url, setUrl] = useState("https://pages.github.com");

  /*
    UPDATE THE STATES selectedDevice BASED ON SELECTED OPTION
   */
  const handleDeviceChange = (event) => {
    setSelectedDevice(event.target.value);
  };

  const handleInputChange = (event, device) => {
    const checked = event.target.checked;

    /* IF INPUT OPTION IS CHECKED THEN ADD THAT SELECTED INPUT DEVICE IN  selectedDevices ARRAY*/
    if (checked) {
      setSelectedDevices([...selectedDevices, device]);
      return;
    }

    const index = selectedDevices.findIndex((d) => d == device);

    /*
    THIS FUNCTION IS TO REMOVE THE PARTICUALR DEVICE FROM selectedDevices ARRAY FROM TAHT INDEX POSITION
     */
    if (index > -1) {
      selectedDevices.splice(index, 1);
    }
    setSelectedDevices([...selectedDevices]);
  };

  console.log(selectedDevices);

  return (
    <main>
      <div className="input-container">
        
          <i className="fa fa-search icon"></i>
          <input
            type="text"
            name=""
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            className="url-input"
          />
        
      </div>

      <div className="select-container">
        {devices.map((device, index) => (
          <div>
            <label htmlFor={`device${index}`}>{device}</label>
            <input
              onChange={(event) => handleInputChange(event, device)}
              id={`device${index}`}
              type="checkbox"
            />
          </div>
        ))}
      </div>

      <div className="device-container">
        {selectedDevices.map((device) => (
          <DeviceFrameset device={device} color="gold">
            <iframe height={"100%"} width={"100%"} src={url}></iframe>
          </DeviceFrameset>
        ))}
      </div>
    </main>
  );
}

export default App;
