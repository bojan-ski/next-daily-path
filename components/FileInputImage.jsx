const FileInputImage = ({ image, onMutate, inputId }) => (
    <div className="mb-3">
        <input
            className="hidden"
            type="file"
            name={inputId}
            id={inputId}
            accept=".jpg,.png,.jpeg"
            onChange={onMutate}
        />
        <button
            type="button"
            className="btn bg-orange-400 text-white"
            onClick={() => document.getElementById(inputId).click()}
        >
            Add image - 1MB max           
        </button>
        {image && (
            <div className="mt-3">
                <img
                    src={URL.createObjectURL(image)}
                    alt={inputId}
                    className="img-thumbnail mx-auto"
                    style={{ objectFit: 'cover' }}
                />
            </div>
        )}
    </div>
);

export default FileInputImage