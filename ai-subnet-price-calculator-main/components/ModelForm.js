// components/ModelForm.js
export default function ModelForm({ onCalculate, height, setHeight, width, setWidth, frames, setFrames, price, setPrice, modelType, setModelType, etherToUsdRate, setEtherToUsdRate, framesPerSecond, setFramesPerSecond }) {

  const handleInputChange = (event) => {
    switch (event.target.name) {
      case 'modelType':
        setModelType(event.target.value);
        break;
      case 'height':
        setHeight(event.target.value);
        break;
      case 'width':
        setWidth(event.target.value);
        break;
      case 'frames':
        setFrames(event.target.value);
        break;
      case 'price':
        setPrice(event.target.value);
        break;
      case 'etherToUsdRate':
        setEtherToUsdRate(event.target.value);
        break;
      case 'framesPerSecond':
        setFramesPerSecond(event.target.value);
      default:
        break;
    }
    onCalculate();
  };

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '30px' }}>
      <label>
        Model Type:
        <select name="modelType" value={modelType} onChange={handleInputChange} style={{ marginLeft: '10px', fontSize: '22px' }}>
          <option value="text-to-image">Text to Image</option>
          <option value="image-to-video">Image to Video</option>
        </select>
      </label>
      <label>
        Output Height:
        <input name="height" type="number" value={height.toString()} onChange={handleInputChange} style={{ marginLeft: '10px', fontSize: '22px' }} />
      </label>
      <label>
        Output Width:
        <input name="width" type="number" value={width.toString()} onChange={handleInputChange} style={{ marginLeft: '10px', fontSize: '22px' }} />
      </label>
      {modelType === 'image-to-video' && (
        <>
          <label>
            Frames:
            <input name="frames" type="number" value={frames.toString()} onChange={handleInputChange} style={{ marginLeft: '10px', fontSize: '22px' }} />
          </label>
          <label>
            Frames per Second:
            <input name="framesPerSecond" type="number" value={framesPerSecond.toString()} onChange={handleInputChange} style={{ marginLeft: '10px', fontSize: '22px' }} />
          </label>
        </>
      )}
      <label>
        Ethereum Price in USD:
        <input name="etherToUsdRate" type="number" value={etherToUsdRate.toString()} onChange={handleInputChange} style={{ marginLeft: '10px', fontSize: '20px' }} />
      </label>
      <label>
        Price per Pixel:
        <input name="price" type="number" value={price.toString()} onChange={handleInputChange} style={{ marginLeft: '10px', fontSize: '22px' }} />
      </label>
    </form>
  );
}
