import { useState } from 'react';
import './FieldsContainer.css';

type FieldOptionsTupconstype = string[]
type IndexMemoryTuple = number[]

interface Props {
  fields: [string[], FieldOptionsTupconstype[]];
  callback(parameter1: number): void;
  callback2(parameter1: boolean): void;
  fieldIndex: number;
  currentCommand: number;
  commandsTotal: number;
  isUpdated: boolean;
};

// || activeIndexMemory[currentActiveCommand].includes(currentCommand) === true
let currentActiveCommandMemory: IndexMemoryTuple[] =[[]];

function FieldsContainer({fields, callback, callback2, currentCommand, commandsTotal, isUpdated}: Props) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [activeIndexMemory, setActiveIndexMemory] = useState<IndexMemoryTuple[]>([[]]);
  
  
  return(
    <> 
      <div className="fieldsButtonContainer">
      {fields[0].map((field, index) => (
        
            <button className="fieldButton gg-sans-normal" onClick={() => {
              const indexIndex: number = currentCommand;

              if(isUpdated === false) {
                callback2(true);
                currentActiveCommandMemory = activeIndexMemory;

                if (currentActiveCommandMemory.length < commandsTotal) {
                  for (let i:number = 0; i < commandsTotal - 1; i++) {
                    currentActiveCommandMemory.push([]);
                  };
                  
                  currentActiveCommandMemory[indexIndex].splice(0, 1, index)

                  setActiveIndexMemory([
                    ...currentActiveCommandMemory
                  ]);
                  
                };
              };


              if (currentActiveCommandMemory[indexIndex].includes(index)){
                currentActiveCommandMemory[indexIndex].splice(0, 1, index);
                setActiveIndexMemory([
                  ...currentActiveCommandMemory
                ]);
              } else {
                currentActiveCommandMemory[indexIndex].splice(0, 1, index);
                setActiveIndexMemory([
                  ...currentActiveCommandMemory
                ]);
              };
              
              callback(index); 
              setActiveIndex(currentCommand)
            }} key={index}>{field}</button>
        
      ))}  
      </div>    
      {fields[1].map((_field, index) => (
        <div className={activeIndexMemory[activeIndex]?.includes(index) ? "fieldOptionsContainer": "hidden"} key={index}>
          <p className="nunito-normal default-font options">Options/Accepted Inputs:</p>
          <ul className="options">
          {fields[1][index].map((options, index) =>            
              <li className="nunito-normal default-font" key={index}>{options}</li>
          )}
          </ul>
          
        </div>
      ))}
      
    </> 
  )
};

export default FieldsContainer