import React from 'react';
import {KMention} from "./components/KMention";
import {TestContainer} from "./components/TestContainer";

function App() {



  return (
    <div >
      <KMention SuggestionContainer={TestContainer} SuggestionEntry={TestContainer}/>
    </div>
  );
}

export default App;
