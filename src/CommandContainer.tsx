import './CommandContainer.css';

interface Props {
    commandName : string; 
    commandDesc : string;
    currentIndex : number;
    openedContainers : number[];
};

function CommandContainer({ commandName, commandDesc, currentIndex, openedContainers}: Props) {

  return (
    <div className="commandDropdown">
      <div className="dropdownIcon">
        <svg className={openedContainers.includes(currentIndex) === true ? "opened" : "closed"} width="1em" height="1em" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <path transform="matrix(.73391 .73391 -.73391 .73391 -1.2131 -10.584)" d="m27.346 12.629 3.8e-5 0.27929a5.0007 5.0007 44.996 0 0 5.0007 5h25.817a5 5 135 0 0 5-5v-25.817a5.0007 5.0007 45.004 0 0-5-5.0007l-0.27929-3.8e-5a4.9993 4.9993 135 0 0-5 4.9993v20.539h-20.539a4.9993 4.9993 135 0 0-4.9993 5z" fill="#4f4d46" strokeWidth=".79797"/>
        </svg>
      </div>
      <h3 className="nunito-semibold default-font commandName">{ commandName }</h3><p className="nunito-normal default-font commandDesc">{"- " +  commandDesc }</p>
    </div>
  );
};

export default CommandContainer