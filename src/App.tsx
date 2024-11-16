import './App.css';
import { useState } from 'react';
import CommandContainer from './CommandContainer.tsx'
import FieldsContainer from './FieldsContainer.tsx';
import MiniDiscord from './MiniDiscord.tsx'

function App() {
  type CommandsTupleType = [string, string, [FieldsTupleType[], FieldOptionsTupleType[]], string[],]
  type FieldsTupleType = string
  type FieldOptionsTupleType = string[]
  const GlobalCommands: CommandsTupleType[] = [
    [
      "/project register",
      "Used for registering a project in the project database.",
      [
        [
          "guild",
          "project-type",
        ],
        [
          ["Art Guild", "Music Guild", "Writers Guild"],
          ["The type of project that is being registered", "Examples: Song Covers (Music Guild), Art Projects (Art Guild), Short Stories (Writer's Guild)"]
        ],
      ],
      [
        "This command will only work when used inside a forum post.",
        "This command will only work on unregistered projects."
      ]
    ],

    [
      "/project set deadline",
      "Sets a deadline for an existing project.",
      [
        [
          "guild", 
          "set-day", 
          "set-month", 
          "set-year",
        ],
        [
          ["Art Guild", "Music Guild", "Writers Guild"],
          ["Day of a month (1-31)", "Note: Entering a day that doesn't exist in a month will cause it register in the wrong month."],
          ["Month of a year (1-12)", "Note: Entering a month that doesn't exist will cause it to register the wrong month or year."],
          ["Year in YYYY format (Example: 2024)"]
        ],
      ],
      [
        "This command will only work when used inside a forum post.",
        "This command will only work on registered projects."
      ]
    ],

    [
      "/project edit deadline",
      "Edits a deadline for an existing project.",
      [
        [
          "guild", 
          "set-day", 
          "set-month", 
          "set-year",
        ],
        [
          ["Art Guild", "Music Guild", "Writers Guild"],
          ["Day of a month (1-31)", "Note: Entering a day that doesn't exist in a month will cause it register in the wrong month."],
          ["Month of a year (1-12)", "Note: Entering a month that doesn't exist will cause it to register the wrong month or year."],
          ["Year in YYYY format (Example: 2024)"]
        ],
      ],
      [
        "This command will only work when used inside a forum post.",
        "This command will only work on registered projects with an existing deadline."
      ]
    ],
    [
      "/project set reminder",
      "Sets a reminder for a project!!",
      [
        [
          "interval"
        ],
        [
          [
            "Weekly - The bot will announce a reminder about the project’s deadline every Sunday, 8am JST.", 
            "Daily -  The bot will announce a reminder about the project’s deadline everyday, at 8am JST.", 
            "Remove Reminder - Removes the reminder"
          ],
        ],
      ],
      [
        "This command will only work when used inside a forum post.",
        "This command will only work on registered projects with an existing deadline."
      ]
    ],
    [
      "/project info",
      "Use this to show info on the current project!!",
      [
        [],
        [[]],
      ],
      [
        "This command will only work when used inside a forum post. (For now!!)",
        "This command will only work on registered projects."
      ]
    ],
    [
      "/database-sync",
      "Used to synchronize the GDA Office’s Google Sheets database with the bot’s local database",
      [
        [],
        [[]],
      ],
      [
        "This command will work anywhere!!",
        "You can use this command as a quick fix if something goes wrong, but if it doesn't, please contact Pingu! :D (@peroroo)"
      ]
    ],
  ]

  const [commandIndex, setCommandIndex] = useState<number[]>([]);
  const [fieldIndex, setFieldIndex] = useState(-1);
  const [isUpdated, setIsUpdated] = useState(false);
  let openedContainers: number[] = [-1];
  let indexStorage: number;
  
  return (
    <>
      <div>
        <h1 className="default-font nunito-semibold">Tasuku Manual</h1>
        <div className="simpleTextBlock">  
          <p className="default-font nunito-normal">Hello Welcome!! o//</p>
          <p className="default-font nunito-normal">Tasuku is a Discord bot made by Pingu (@peroroo) and Koi (@ryokune) as a bot made to help with stuff within the GDA Office!!</p>
          <p className="default-font nunito-normal">Here below is the list of bot commands Tasuku (v1.0.0) can do. Bot commands are split up into 2 categories; <u><strong>Global Commands</strong></u> and <u><strong>Guild Commands</strong></u>.</p>
        </div>
      </div>

      <div>
        <h2 className="default-font nunito-semibold">Global Commands</h2>
          {GlobalCommands.map((command, index) => (
            <div className="commandListBlock" key={`${command}`}>
              
              <a onClick={() => {
                {console.log(GlobalCommands[index][2][0])}
                indexStorage = index;
                openedContainers = commandIndex;
                
                if (commandIndex.includes(indexStorage)){
                  openedContainers.splice(openedContainers.indexOf(indexStorage), 1);
                  setCommandIndex([
                    ...openedContainers
                  ]);
                } else {
                  setCommandIndex([
                    ...commandIndex, indexStorage
                  ]);
                };

              }}>
                <CommandContainer 
                  commandName={`${command[0]}`}
                  commandDesc={`${command[1]}`}
                  openedContainers= {commandIndex}
                  currentIndex={index}
                />
              </a>
              <div className={commandIndex.includes(index) === true? "commandInfoContainer" : "hidden"} key={index}>
                <MiniDiscord commandName={`${command[0]}`} fields={command[2][0]} /> 

                <div>
                  <p className={ GlobalCommands[index][2][0].length != 0 ? "nunito-normal default-font" : "hidden"}><u>Fields:</u></p>
                  <FieldsContainer fields={command[2]} callback={setFieldIndex} callback2={setIsUpdated} fieldIndex={fieldIndex} currentCommand={index} commandsTotal={GlobalCommands.length} isUpdated={isUpdated}/>
                </div>
                <div>
                  <p className="nunito-normal default-font"><u>Notes:</u></p>
                  <ul>
                    {
                    command[3].map((commandNotes: string, index) => (
                      <li className="nunito-normal default-font" key={index}>{commandNotes}</li>
                    ))
                    }
                  </ul>
                </div>
              </div>
              
            </div>

          ))}
      </div>
    </>
  );
}

export default App
