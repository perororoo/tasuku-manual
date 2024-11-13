import './App.css';
import MiniDiscord from './MiniDiscord.tsx'

function App() {
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
          <div className="simpleTextBlock">
            <MiniDiscord commandName="/project register" fields={["guild"]} />
          </div>
      </div>
    </>
  );
}

export default App
