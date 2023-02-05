import React from "react";
import emoji from "../emojipedia";
import Entry from "./Entry";

function createEntry(emoji) {
  return (
    <Entry
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emoji.map(createEntry)}</dl>
    </div>
  );
}

export default App;
