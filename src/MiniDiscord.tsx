import './MiniDiscord.css';
import botIcon from "/public/tomato.png";

interface Props {
  commandName : string; 
  fields : string[];
}

function MiniDiscord({ commandName, fields }: Props) {
  return (
    <>
      <div className="cmdContainer secondary-color">
        <img src={botIcon} className="botIcon" />
        <p className="gg-sans-semibold default-font cmdName">{ commandName }</p>
        {fields.map((field, index) => (
          <div className="cmdFieldContainer tertiary-color" key={index}>
            <p className="gg-sans-normal default-font cmdField">{field}</p><div className="cmdFieldInputContainer primary-color" />
          </div>
        ))}
      </div>
    </>
  );
}

export default MiniDiscord