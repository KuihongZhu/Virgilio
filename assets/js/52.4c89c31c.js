(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{387:function(e,t,a){"use strict";a.r(t);var o=a(33),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[e._v("#")]),e._v(" Index")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#We-have-99.94847-percent-probability-of-death-Luke"}},[e._v("We have 99.94847 percent probability of death Luke")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Why-DialogFlow"}},[e._v("Why DialogFlow")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Learning-DialogFlow"}},[e._v("Learning DialogFlow")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#The-GUI-approach"}},[e._v("The GUI approach")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#A-deeper-approach"}},[e._v("A deeper approach")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Our-first-agent"}},[e._v("Our first agent")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Experimenting-the-API"}},[e._v("Experimenting the API")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Hands-on-Project"}},[e._v("Hands-on Project")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Up-and-running-with-Flask-and-webhooks"}},[e._v("Up and running with Flask and webhooks")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Our-agent,-but-with-API-calls"}},[e._v("Our agent, but with API calls")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Handling-webhooks-with-Flask"}},[e._v("Handling webhooks with Flask")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Deploying-our-chatbot"}},[e._v("Deploying our chatbot")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Chatbot-tips-and-best-practices"}},[e._v("Chatbot tips and best practices")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Project-Ideas"}},[e._v("Project Ideas")])])])])]),e._v(" "),a("h2",{attrs:{id:"we-have-99-94847-percent-probability-of-death-luke"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#we-have-99-94847-percent-probability-of-death-luke"}},[e._v("#")]),e._v(" We have 99.94847 percent probability of death Luke")]),e._v(" "),a("p",[e._v("In simple terms, a "),a("a",{attrs:{href:"https://medium.com/swlh/what-is-a-chatbot-and-how-to-use-it-for-your-business-976ec2e0a99f",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chatbot"),a("OutboundLink")],1),e._v(" is a computer program that simulates human conversation (in the form of texts and audio)\nwhich we would perceive as being intelligent and useful.\nTheir most important application is personal or enterprise virtual assistants.\nChatbots can "),a("em",[e._v("dig through huge amounts of data")]),e._v(" to pick out\nthe best nugget for a customer, whether it is a troubleshooting solution or a recommendation for a\nnew product to try. Also, they offer an extremely "),a("em",[e._v("intuitive interface")]),e._v(" between your business and your customers.\nDepending on the situation, a chatbot can learn from what a user\nsays to personalize the interaction and build off previous interaction, giving\na "),a("a",{attrs:{href:"https://mobilemonkey.com/chatbots/chatbot-examples",target:"_blank",rel:"noopener noreferrer"}},[e._v("satisfying and futuristic customer experience"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"why-dialogflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-dialogflow"}},[e._v("#")]),e._v(" Why Dialogflow")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://dialogflow.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("DialogFlow"),a("OutboundLink")],1),e._v(" is the beginner-friendly chatbot platform from Google, and albeit there are several platforms out\nthere ("),a("a",{attrs:{href:"https://chatbotsmagazine.com/choosing-the-best-chatbot-platform-101-a-beginners-guide-e841b41192c7",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" a cool guide on choosing the right\nplatforms), DialogFlow has the best tradeoffs in particular for a beginner. "),a("a",{attrs:{href:"https://chatbotsjournal.com/25-chatbot-platforms-a-comparative-table-aeefc932eaff",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),a("OutboundLink")],1),e._v(" you find\nanother comparative table.\nI've chosen DialogFlow because:")]),e._v(" "),a("ul",[a("li",[e._v("Incorporates Google's machine learning expertise and products such as Google Cloud Speech-to-Text.")]),e._v(" "),a("li",[e._v("Is a Google service that runs on the Google Cloud Platform, letting you scale to hundreds of millions of users.")]),e._v(" "),a("li",[e._v("Is really beginner-friendly, intuitive, and has complete and clear documentation.")])]),e._v(" "),a("h2",{attrs:{id:"learning-dialogflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#learning-dialogflow"}},[e._v("#")]),e._v(" Learning DialogFlow")]),e._v(" "),a("p",[e._v("The thing I love about DialogFlow is that's beginner friendly. In fact, the approach  we'll follow to learn how to deploy real chat-bots is the following:")]),e._v(" "),a("ul",[a("li",[e._v("A first gentle approach through the Graphical User Interface to understand the concepts (intents, entities, context...)")]),e._v(" "),a("li",[e._v('A more "coding" approach, using the Python Client for '),a("a",{attrs:{href:"https://it.wikipedia.org/wiki/Representational_State_Transfer",target:"_blank",rel:"noopener noreferrer"}},[e._v("RESTful"),a("OutboundLink")],1),e._v(" API call to reproduce the same Agent but with code (and not clicks in the GUI).")]),e._v(" "),a("li",[e._v("When we're able to build agents with Python API calls, we'll use them to create and End-to-End chatbot project that you'll deploy on several channels (Slack, Facebook, Telegram...)")])]),e._v(" "),a("p",[e._v("This guide will use "),a("a",{attrs:{href:"https://www.python.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python"),a("OutboundLink")],1),e._v(" and his "),a("a",{attrs:{href:"http://flask.pocoo.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flask"),a("OutboundLink")],1),e._v(" lightweight library to let you build a complete and deployable chatbot application. So, if you don't know Python, make yourself a gift and "),a("a",{attrs:{href:"https://automatetheboringstuff.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("learn it!"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Let's start!")]),e._v(" "),a("h3",{attrs:{id:"the-gui-approach"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-gui-approach"}},[e._v("#")]),e._v(" The GUI approach")]),e._v(" "),a("p",[e._v("The first thing I suggest you do is going through the "),a("a",{attrs:{href:"https://dialogflow.com/docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("official introduction"),a("OutboundLink")],1),e._v(" and step-by-step tutorial. It will bring you from zero to be able to create an Agent (the single chatbot application) with the GUI.\n"),a("a",{attrs:{href:"https://console.dialogflow.com/api-client/#/login",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),a("OutboundLink")],1),e._v(" you can start to build your agent and follow the steps of the tutorial.\nYou won't have a problem during this phase, you don't have to code anything, just follow the tutorial up to \"Fulfillment\".")]),e._v(" "),a("h3",{attrs:{id:"our-first-agent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#our-first-agent"}},[e._v("#")]),e._v(" Our first agent")]),e._v(" "),a("p",[e._v("If you've followed the guide with attention, you're now able to create a simple chatbot from the GUI.\nSo let's get our hands dirty and create our first agent!")]),e._v(" "),a("ul",[a("li",[e._v("Create a new Agent and develop it from the GUI, until he's able to reproduce this \"I'm lost\" Intent with FollowUpIntents:")])]),e._v(" "),a("p",[e._v("Bot: Hi! I'm Virgilio! How can I help you?"),a("br"),e._v("\nHuman: Tell me which is the best "),a("em",[e._v("Data Science")]),e._v(" project in "),a("em",[e._v("Italy")]),e._v("."),a("br"),e._v("\nB: Without a doubt, the best project about "),a("em",[e._v("Data Science")]),e._v(" in "),a("em",[e._v("Italy")]),e._v(" is "),a("em",[e._v("Virgilio")]),e._v("! Do you want to reach it?"),a("br"),e._v("\nH: Yes."),a("br"),e._v("\nB: Here's the link, you're welcome 😃 "),a("br"),e._v("\nB: [ ...drops the link ]")]),e._v(" "),a("p",[e._v("That's it, for now. Try to reproduce the conversation, you can try your agent from the top-right bar in the GUI.\nNotice that you have three entities here. Which ones?\nRemember that you can use both system entities (like an hour, date, languages, places...), and custom entities!\nWhen you're done, let's go for the next step!")]),e._v(" "),a("h3",{attrs:{id:"experimenting-the-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#experimenting-the-api"}},[e._v("#")]),e._v(" Experimenting the API")]),e._v(" "),a("p",[e._v("Now that you're really comfortable with the DialogFlow concepts, we can dive deep down the rabbit hole and et up the environment for developing a chatbot with Python. This will bring us al the power of the code to build and handle a lot of chatbots (and many more things).\nAssuming that you have Python3 installed, install the "),a("a",{attrs:{href:"https://dialogflow-python-client-v2.readthedocs.io/en/latest/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python SDK"),a("OutboundLink")],1),e._v(" going in the folder where you want to put your configuration files, launch a shell and digit:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pip install dialogflow\n")])])]),a("p",[e._v("If it doesn't work, maybe is because you have an old installation of Python 2. In that case, digit:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pip3 install dialogflow\n")])])]),a("p",[e._v("Now go "),a("a",{attrs:{href:"https://github.com/googleapis/dialogflow-python-client-v2/tree/master/samples",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(' and be happy. A lot of work is already done in these examples, and with them, you can already do a lot of things. I create the folder "examples" where I put those python files.\nNow follow the "Before you begin" instructions '),a("a",{attrs:{href:"https://dialogflow-python-client-v2.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".\nCreate a new agent in the project and add an intent from the GUI.\nConnect to that agent initializing the dialogflow client from your python script and read the Intents already existent in the Agent.\nIt will be like:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('from examples import intent_management\nos.environ["GOOGLE_APPLICATION_CREDENTIALS"] = <your path>/<your credentials file>.json"\nprojectID = <your project id>\n\nclient = dialogflow.IntentsClient()\nparent = client.project_agent_path(projectID)\nmanagement.list_intents(parent)\n')])])]),a("p",[e._v("It should return you a JSON with all the information requested (in this case, your existing intents).\nJSON is the new de-facto standard for information representation, so "),a("a",{attrs:{href:"https://www.w3schools.com/whatis/whatis_json.asp",target:"_blank",rel:"noopener noreferrer"}},[e._v("get comfortable"),a("OutboundLink")],1),e._v(" with it!")]),e._v(" "),a("p",[e._v("So, you have these files with a wrapper for the low-level functions (in this case, the low-level function in the intent_management.py is called at line 40 inside the list_intent() function).")]),e._v(" "),a("p",[e._v("These files are really useful to get started, but in the end, you want to have the most possible expressiveness and flexibility. So you want to master the lower level functions.")]),e._v(" "),a("h3",{attrs:{id:"a-deeper-approach"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-deeper-approach"}},[e._v("#")]),e._v(" A deeper approach")]),e._v(" "),a("p",[e._v("Try now to re-produce the Intent we have created with the lower level functions of the dialogflow module. You have here all the pieces of information you need, the "),a("a",{attrs:{href:"https://cloud.google.com/dialogflow-enterprise/docs/reference/rest/v2-overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),a("OutboundLink")],1),e._v(" is really well done! In general, each time you want to communicate with the API you need to build a JSON (your request) and you'll receive a JSON (the response).")]),e._v(" "),a("h3",{attrs:{id:"up-and-running-with-flask-and-webhooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#up-and-running-with-flask-and-webhooks"}},[e._v("#")]),e._v(" Up and running with Flask and webhooks")]),e._v(" "),a("p",[e._v("Dialogflow's APIs allows you to take action on your own systems based on conversational input, embed your conversational interface into your app or website, and dynamically change your agent's behavior. Dialogflow APIs center around three primary use cases:")]),e._v(" "),a("ul",[a("li",[e._v("Fulfillment: take action on your own systems based on conversational input. You can do things like querying a database or API to provide info to your users with any integration (Actions on Google, Slack, etc.)")]),e._v(" "),a("li",[e._v("Detect Intent API: Embed your conversational interface built with Dialogflow into your app, website or device. Call this API with a user's query to get back how your DIalogflow agent's response")]),e._v(" "),a("li",[e._v("Agent API: Dynamically change your agent's behavior by editing your agent's intents, entities, and contexts. Do anything you can through Dialogflow console programmatically with Dialogflow's agent APIs.")])]),e._v(" "),a("p",[e._v("Here you can see a clear schema.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/dialogflow/resources/master/images/overview.png",alt:"Figure 1-1",title:"1"}})]),e._v(" "),a("p",[e._v("Basically, you want to have a .py file that builds the agent (with API calls), then your agent is ready to take in queries form the user and send them (once recognized the user query) to a backend application (your webhook). In our case, the app in the backend (the webhook) is built with Flask.")]),e._v(" "),a("p",[a("strong",[e._v("Fulfillment")]),e._v(" is code that's deployed as a webhook that lets your Dialogflow agent call business logic on an intent-by-intent basis. During a conversation, fulfillment allows you to use the information extracted by Dialogflow's natural language processing to generate dynamic responses or trigger actions on your back-end.")]),e._v(" "),a("p",[e._v("Most Dialogflow agents make use of fulfillment to do things like: generate dynamic responses based on information looked up from a database, place orders based on products a customer has asked for, implement the rules and winning conditions for a game.")]),e._v(" "),a("h3",{attrs:{id:"our-agent-but-with-api-calls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#our-agent-but-with-api-calls"}},[e._v("#")]),e._v(" Our agent, but with API calls")]),e._v(" "),a("p",[e._v("It's time to get our hands dirty again!\nThis time we're adding the backend application acting under the hood, and not the static answers anymore.\n"),a("a",{attrs:{href:"https://www.pragnakalp.com/dialogflow-fulfillment-webhook-tutorial/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),a("OutboundLink")],1),e._v(" you have a consistent and complete tutorial on how to run the Flask application on your machine (using Ngrok to expose he webhook on your machine, to the Web).\nNow that you have the entire stack working, you can start creating any type of application!")]),e._v(" "),a("h3",{attrs:{id:"deploying-our-chatbot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploying-our-chatbot"}},[e._v("#")]),e._v(" Deploying our chatbot")]),e._v(" "),a("p",[e._v("The smartest way to deploy your agent is through common communication channels like Facebook Messenger or Telegram.\n"),a("a",{attrs:{href:"https://hub.packtpub.com/creating-and-deploying-a-chatbot-using-dialogflow-tutorial/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),a("OutboundLink")],1),e._v(" you find a very comprehensive tutorial on how to deploy your chatbot application to the real worlds. It's easy, isn't it?")]),e._v(" "),a("h3",{attrs:{id:"chatbot-tips-and-best-practices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chatbot-tips-and-best-practices"}},[e._v("#")]),e._v(" Chatbot tips and best practices")]),e._v(" "),a("p",[e._v("I've collected here for you some best articles and StackOverflow questions containing best practices.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://dzone.com/articles/best-practices-for-lively-chatbots",target:"_blank",rel:"noopener noreferrer"}},[e._v("1"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://miningbusinessdata.com/automatically-generate-dialogflow-faq-chatbot-csv-file/",target:"_blank",rel:"noopener noreferrer"}},[e._v("2"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://www.comm100.com/blog/chatbot-best-worst-practices.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("3"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://chatbotsmagazine.com/11-more-best-ux-practices-for-building-chatbots-67362d1104d9",target:"_blank",rel:"noopener noreferrer"}},[e._v("4"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://thebrainfiles.wearebrain.com/chatbot-best-practice-learnings-and-insights-from-companies-like-abn-amro-booking-com-6e4c329c60a5",target:"_blank",rel:"noopener noreferrer"}},[e._v("5"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://www.marutitech.com/8-best-practices-bot-development/",target:"_blank",rel:"noopener noreferrer"}},[e._v("6"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://stackoverflow.com/questions/52426295/dialogflow-intent-lifespan-best-practice-and-performance",target:"_blank",rel:"noopener noreferrer"}},[e._v("7"),a("OutboundLink")],1)])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://medium.com/the-mission/how-to-effectively-run-a-chatbot-development-project-a445d2d1170f",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://botpress.io/blog/successful-chatbot-projects-avoid-these-mistakes/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" you find two guides on how to plan a chat for your business.")]),e._v(" "),a("h3",{attrs:{id:"project-ideas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#project-ideas"}},[e._v("#")]),e._v(" Project Ideas")]),e._v(" "),a("p",[e._v("I've packed here for you a list of links with a lot of project ideas. Have fun!")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://chatbotsmagazine.com/80-chatbot-ideas-for-enterprise-bots-4bb73281f593",target:"_blank",rel:"noopener noreferrer"}},[e._v("1"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://www.messengerpeople.com/best-of-8-chatbot-projects-you-will-love-to-discover/",target:"_blank",rel:"noopener noreferrer"}},[e._v("2"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://www.quora.com/What-are-some-cool-ideas-where-chat-bots-can-be-put-to-use",target:"_blank",rel:"noopener noreferrer"}},[e._v("3"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://www.wordstream.com/blog/ws/2017/10/04/chatbots",target:"_blank",rel:"noopener noreferrer"}},[e._v("4"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://www.ideas2it.com/blogs/50-chatbot-use-cases/",target:"_blank",rel:"noopener noreferrer"}},[e._v("5"),a("OutboundLink")],1)])]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("Written by "),a("em",[e._v("clone95")])])])}),[],!1,null,null,null);t.default=r.exports}}]);