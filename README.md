# Madrabbit AI app

The idea was to make an AI app so why not implement OpenAI API and have "your" ML app.

## Tech Stack

Backend Stack
Language - Python
Framework - FastAPI
Hosting - AWS (Lambda + API Gateway)
Other - OpenAI, AWS CLI, AWS CDK, Docker

(lambda contains madrabbit app + base layer for dependencies built with Docker)
(lambda and API Gateway are managed with CDK)

Frontend Stack
Language - Typescript
Framework - NextJS/React
Hosting - Vercel (not implemented)


### Set your environment variable for OPENAI_API_KEY and call it afterward from the code
setx OPENAI_API_KEY sk-hXif...

