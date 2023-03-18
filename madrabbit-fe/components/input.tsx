interface InputProps {
  prompt: string;
  setPrompt: any;
  onSubmit: any;
  isLoading: boolean;
  characterLimit: number;
}


const Input: React.FC<InputProps> = (props) => {

  const isPromptValid = props.prompt.length <= props.characterLimit;
  const updatePromptValid = (text: string) => {
    if (text.length <= props.characterLimit) {
      props.setPrompt(text);
    }
  };

  return (
  <>    
    <p>
    Give me a word to generate a snippet and some hashtags for you!
  </p>
  <input
      type="text" 
      placeholder="OpenAI FTW!"
      value={props.prompt} 
      onChange={(e) => updatePromptValid(e.currentTarget.value)}
    ></input>
      <div>{props.prompt.length}/{props.characterLimit}</div>
    <button onClick={props.onSubmit} disabled={props.isLoading || !isPromptValid}>Let's go!</button>
  </>
  );
};

export default Input;