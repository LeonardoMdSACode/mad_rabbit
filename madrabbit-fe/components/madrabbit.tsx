"use client"
import React from "react";
import Input from "./input";
import Results from "./results";
import Image from "next/image";
import logo from "../public/madrabbitlogo.svg"

const MadRabbit: React.FC = () => {

  const CHARACTER_LIMIT: number = 20;
  const ENDPOINT: string = "API_GATEWAY_ENDPOINT"
  const [prompt, setPrompt] = React.useState("");
  const [snippet, setSnippet] = React.useState("");
  const [keywords, setKeywords] = React.useState([]);
  const [hasResult, setHasResult] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = () => {
    console.log("Submitting: " + prompt);
    setIsLoading(true);
    fetch(`${ENDPOINT}?prompt=${prompt}`)
    .then((res) => res.json())
    .then(onResult);
  };

  const onResult = (data: any) => {
    setSnippet(data.snippet);
    setKeywords(data.keywords);
    setHasResult(true);
    setIsLoading(false);
  };

  const onReset = () => {
    setPrompt("");
    setHasResult(false);
    setIsLoading(false);
  };

  let displayedElement = null;

  if (hasResult) {
    displayedElement = <Results snippet={snippet} keywords={keywords} onReturn={onReset} prompt={prompt} /> 
  } else {
    displayedElement = (
    <Input
     prompt={prompt} 
     setPrompt={setPrompt} 
     onSubmit={onSubmit} 
     isLoading={isLoading} 
     characterLimit={CHARACTER_LIMIT} />
    );
  }

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "darkred"
  };

  const headerStyle = {
    marginBottom: "50px",
    color: "red",
    fontSize: "2em",
    fontWeight: "bold",
    textAlign: "center"
  };

  return (
    <div style={containerStyle}>
      <Image src={logo}  width={430} height={430}/>
      <div style={headerStyle}>MadRabbit on berserker mode.</div>
      {displayedElement}
    </div>
  );
};

export default MadRabbit;
