import './ImageInput.css'

function ImageInput({state,setState,name}) {

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
      setState(file);
  };

   const handleChooseImageClick = () => {
    const fileInput = document.getElementById(`${name}`);
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <div className="image-input-container">
  
      <div className="image-preview-container">
        {state && (
          <img
            src={typeof(state) ==='string' ? {state} : URL.createObjectURL(state)}
            alt="Selected"
          />
        )}
      </div>
      
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        id={name}
      />
      
      <button
        onClick={handleChooseImageClick}
      >
        Choose Image
      </button>
    </div>
  );
}

export default ImageInput
