import "./ImageLinkForm.css"


const ImageLinkForm = ({onInputChnange, onButtonSubmit}) => {
    return(
        <>
        <div className="form1 center center pa4 br3 shadow-5"
         style={{height: 100, width: 700, display: "flex", position: "relative"}} >
            <input className="w-70 f4 pa2 center" onChange={onInputChnange} />
            <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onButtonSubmit} > Detect </button>
        </div>
        </>
    )
}

export default ImageLinkForm;