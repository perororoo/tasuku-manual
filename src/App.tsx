import './App.css';
import MiniDiscord from './MiniDiscord.tsx'

function App() {
  return (
    <>
      <div>
        <h1 className="default-font nunito-semibold">Who is Tasuku?</h1>
        <p className="default-font nunito-normal">Hello o// !!! My name is Pingu, and I’m the current guildmaster of the Art Guild (Aishin)!! Tasuku is a Discord bot made by me (@peroroo) and Koi (@ryokune) as a bot originally made to help with stuff within the GDA Office.</p>
      </div>

      <div>
        <h1 className="default-font nunito-semibold">What can we do with the bot?</h1>
        <p className="default-font nunito-normal">Discord Bot commands!! Here below is the list of current bot commands (v1.0.0) and their functions. The bot’s commands are split up into 2 categories; <u><strong>Global Commands</strong></u> and <u><strong>Guild Commands</strong></u>.</p>
      </div>

      <div>
        <h2 className="default-font nunito-semibold">Test</h2>
        <MiniDiscord />
      </div>
    </>
  );
}

export default App
