# Lang Portal Translator
Easy to use translator for learning

Mentor: Christopher Sheppard

Mentees: Bryant Hargreaves, David Homiller, Rahul Karthik, Joshua Matthew, Zain Naved, Atmin Sheth

# Problem:
Communication is an important part of our society. Currently, there are over thousands of languages that prevent people from communicating with each other, however, there's two main solutions to this problem: we can either first use a translator to communicate with other languages or people can learn the language and just communicate that way. Lang Portal tries to combine these two solutions into one single service where users can translate and also learn the language at the same time!

# Motivation:
The goal for this app is to improve communication between all groups of people. So, say you go to Spain or Mexico or any Spanish speaking country; With Lang Portal, you have the translator right there to help you learn the language as you go so that you can become better at it. 

# Features:
- [x] English to Spanish Translation
- [x] Text-to-Speech
- [x] Speech-to-Text
- [x] Highlighted Word Definitions

By highlighting words you can see their definition in the section below the translator.

# Dataset:
KDE4 Dataset from HuggingFace

# Model:
(img)
This is our transformer model! We start with an input that goes into our transformer and inside of the Transformer we have an encoder and a decoder. The encoder will take in the inputs, tokenize them, and send them to the decoder which will then make predictions on what it thinks the phrase should be. 

# Front-end:
React.JS, MUI, Hosted on AWS Amplify and on Github Pages

# Cloud Architecture:
We used a series of Amazon web services starting with Amplify where our website is hosted. We then use an HTTP Post method which will send our input to the Amazon API Gateway. This will handle our Post request data and route it to our Lambda function which is static python code that is hosted inside AWS. That code will call our model via the SageMaker endpoint and it will predict what our input will be in Spanish.

https://bluestarburst.github.io/LangPortal/

[![Watch the video](https://img.youtube.com/vi/HAyAWdbnM7g/maxresdefault.jpg)](https://www.youtube.com/live/HAyAWdbnM7g?feature=share&t=10355)

