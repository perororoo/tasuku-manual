import './MiniDiscord.css';
import botIcon from "/public/tomato.png";

function MiniDiscord() {
  return (
    <>
      <div className="cmdContainer secondary-color">
        <img src={botIcon} className="botIcon" />
        <p className="nunito-semibold default-font cmdName">/project register</p>
        <div className="cmdFieldContainer tertiary-color">
            <p className="nunito-normal default-font cmdField">guild</p>
        </div><div className="cmdFieldInputContainer primary-color" />
        
      </div>
    </>
  );
}

export default MiniDiscord