import { useState } from 'react'
import './App.css'
import { Configuration, OpenAIApi } from 'openai'
import OptionSelection from './components/OptionSelection'
import Translation from './components/Translation'
import { arrayItems } from './AIOptions/index'

function App() {
  //API
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key
  });
  const openai = new OpenAIApi(configuration);

  const [option, setOption] = useState({});
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function SelectOption(option)
  {
    setOption(option);
    setResult("");
  }
  async function Generate()
  {
    let request = { ...option, prompt: input };

    const response = await openai.createCompletion(request);

    setResult(response.data.choices[0].text);
  }

  return (
    <div className="App">
      {
        Object.values(option).length > 0 ? 
        <Translation generate={Generate} setInput={setInput} selectOption={SelectOption} result={result}/> 
        : 
        <OptionSelection arrayItems={arrayItems} selectOption={SelectOption}/>
      }
    </div>
  )
}

export default App
