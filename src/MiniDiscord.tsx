import './MiniDiscord.css';
import botIcon from "/public/tomato.png";

interface Props{
  commandName : string; 
  fields : string[];
}

function MiniDiscord({ commandName, fields }: Props) {
  return (
    <>
      <div className="cmdContainer secondary-color">
        <img src={botIcon} className="botIcon" />
        <p className="open-sans-normal default-font cmdName">{ commandName }</p>
        {fields.map((field) => (
          <div className="cmdFieldContainer tertiary-color">
            <p className="open-sans-normal default-font cmdField">{field}</p><div className="cmdFieldInputContainer primary-color" />
          </div>
        ))}
      </div>
    </>
  );
}

export default MiniDiscord