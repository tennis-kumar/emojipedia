import React from "react";
import emoji from "../emojipedia";
import Entry from "./Entry";



function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emoji.map( (emoji) => (<Entry
              key={emoji.id}
              emoji={emoji.emoji}
              name={emoji.name}
              meaning={emoji.meaning}
            />)
        )}
      </dl>
    </div>
  );
}

export default App;
