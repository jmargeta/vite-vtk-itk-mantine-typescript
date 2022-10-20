import { readFileInformation } from '../outputFileInformation';
import { useState } from "react";

const Drop = () => {
  const [info, setInfo] = useState("File information...");
  async function handleFile(evt) {
    setInfo('Loading...')
    const info = await readFileInformation(evt);
    setInfo(info)
  }

  return (
    <>
      <div>
        <label>Select image or mesh:</label>
        <input name="inputFile" type="file" onChange={handleFile} />
      </div>
      <textarea readOnly={true} name="fileInformation" value={info}/>
    </>
  )
};

export default Drop;