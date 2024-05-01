<span style="display: flex; justify-content: space-between; width: fit-content;">  [![X](https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white)](https://twitter.com/sanjit_io)  [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://www.Github.com/sanjitsg) [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sanjitgawade/) </span>

**OpenAi API Alternative** 
---

**Issue:** If you're facing `429 You exceeded your current quota` error.


![](https://cdn.discordapp.com/attachments/1234105912336060426/1234105912617340928/error.png?ex=66337ab2&is=66322932&hm=1f92b630131a93adce175ffd89605d01877adf6bce7e1bba8c82c964cf65265f&=)

**Solution:**
Google Gemini API
-   **Free Tier:** Google Cloud's Vertex AI offers a free tier for the Gemini API. This allows you to make API calls and experience its functionalities without any charges.
    
-   **Rate Limits:** The free tier has limitations on how often you can use the API. It allows:
    
    -   2 Requests Per Minute (RPM)
    -   1500 Requests Per Day (RPD)
-   **Getting Started:**
    
    1.  Visit the Google AI for Developers website on Google AI Platform for Developers: ai.google.dev.
    2.  Look for the "Read API Docs" section. There you'll find resources to get started with the API.
    3.  Explore the documentation on [https://ai.google.dev/gemini-api/docs] to learn about the API reference, request body formats, and other technical details.
    4. Get an API key from [https://ai.google.dev/gemini-api/docs/api-key].
    5. Copy and Store the API key in constant folder. **NOTE: Do not push your API secret key on to GitHub.**
    6. On [Docs](https://ai.google.dev/gemini-api/docs) page Scroll down and select getting started with [Node.js](https://ai.google.dev/tutorials/get_started_node).
    7. To use the Gemini API in your own application, you need to install the `GoogleGenerativeAI` package for Node.js `npm install @google/generative-ai`
    8. `GptSearchBar.js` component 
**Sample code:**
```

const { GoogleGenerativeAI } = require("@google/generative-ai");
// Access your API key as an environment variable (see "Set up your API key" above)

const genAI = new GoogleGenerativeAI(API_KEY);

async function run() {  // For text-only input, use the gemini-pro model
const model = genAI.getGenerativeModel({ model: "gemini-pro"});

const result = await model.generateContent(searchQuery);
const response = await result.response;
const text = response.text();
console.log(text);}run();
```
**Actual working code from my Netflix-GPT app**
```


const  handleGptSearchChick  =  async () => {
const  searchQuery  = "Act as movie recommendation system and suggest movies for the query: "  + gptSearchTxt.current.value  +". only give me names of 5 movies, comma separated like the given result ahead. Example Result: Avatar, Sholay, Bahubali, Singham, Once upon a time in mumbai";

const  model  =  genAI.getGenerativeModel({ model:  "gemini-pro" });
const  result  =  await  model.generateContent(searchQuery);
const  response  =  await  result.response;
console.log(response);
const  text  =  response.text();
console.log(text);
};
```
---


