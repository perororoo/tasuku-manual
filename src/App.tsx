import './App.css';
import { useState } from 'react';
import CommandContainer from './CommandContainer.tsx'
import MiniDiscord from './MiniDiscord.tsx'

function App() {

  const GlobalCommands = [
    [
      "/project register",
      "Used for registering a project in the project database.",
      [
        "guild",
        "project-type"
      ]
    ],

    [
      "/project set deadline",
      "Used for registering a project in the project database.",
      [
        "guild", 
        "set-day", 
        "set-month", 
        "set-year"
      ]
    ]
  ]

  const [elementIndex, setElementIndex] = useState(-1);



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
            <div className="commandListBlock" key={command}>
              <a onClick={() => {
                setElementIndex(index)
                console.log("clicked")
              }}>
                <CommandContainer 
                  commandName={`${command[0]}`}
                  commandDesc={`${command[1]}`}
                />
              </a>
              <div className={ elementIndex === index ? "commandInfoContainer" : "hidden"}>
                <MiniDiscord commandName="/project register" fields={command[2]} />
              </div>
            </div>
          ))};

          
      </div>
    </>
  );
}

export default App
