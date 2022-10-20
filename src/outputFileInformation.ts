import { readFile, readImageDICOMArrayBufferSeries } from 'itk-wasm';

export async function readFileInformation(evt) {
  const dataTransfer = evt.dataTransfer
  const files = evt.target.files || dataTransfer.files

  const {image, mesh, webWorker} = await readFile(null, files[0]);
  webWorker.terminate()

  const imageOrMesh = image || mesh

  function replacer(_, value) {
    if (!!value && value.byteLength !== undefined) {
      return String(value.slice(0, 6)) + '...'
    }
    return value
  }
  return JSON.stringify(imageOrMesh, replacer, 4);
}
