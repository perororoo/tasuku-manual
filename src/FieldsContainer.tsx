import './FieldsContainer.css';

type FieldOptionsTupleType = string[]

interface Props {
  fields: [string[], FieldOptionsTupleType[]];
  callback(parameter1: number): void;
  fieldIndex: number;
};

function FieldsContainer({fields, callback, fieldIndex}: Props) {
  return(
    <>
      <div className="fieldsButtonContainer">
      {fields[0].map((field, index) => (
        
            <button className="fieldButton gg-sans-normal" onClick={() => callback(index)} key={index}>{field}</button>
        
      ))}  
      </div>    
      {fields[1].map((_field, index) => (
        <div className={fieldIndex === index ? "fieldOptionsContainer": "hidden"} key={index}>
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