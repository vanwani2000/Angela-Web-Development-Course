<h1 align="center" style="color: blue;">Custom_API</h1>

The simple reason why we use API is because they make development so much faster. Instead of building out everything from scratch and collecting data, cleaning data or building up service, you can leverage other people's existing data, their services or their algorithms in order to build a product on top of that existing API.

[Rapid Api](https://rapidapi.com/hub). They're the company that collates and allows people to host API's that customers or clients can cosume from.
Rapid API is kind of like the Amazon of the paid API's.

What is it makes an API monetizable?

You can put this in king of three categories -

1. One is if you have a large and valuable data collection.
   Example - Collection of quite good recipe data, or quite weather data which can be very useful for people, But it all falls in the data collection catergory. Means a good and useful data can help you build your own API and monetize it.

2. Two is if you have a proprietary algorithm or a really useful service that people can tap into using your API.
   Example - Let's say you create an algorithm which is not in the public and it is very useful, It will help you to monetize your API. Let's say you have two co-ordinates on globe and you calculate the direct distance between these two points or the distance taken by car to get there via the available roads. Let's say you have Google Maps API data or some sort of satellite data that you amalgamate(add) into one algorithm or one service, and that is probably reasonably easy to build and it's something that would save people a lot of time so that they don't have to build this themselves and hence it would make your API valuable. Take example of **ChatGPT**.

3. A simplified interface, a simplified API for people to be able to work with something elsse, be it a real world service or another API.
   Example - Let's say you wanted to be able to have an API that allows you to order a Pizza. So you just give the API as input parameters, your location, and you card details and then you would have pizza arrive at you doorstep. That's a pretty valuable API, and that essentially is taking a real-world service that doesn't have any sort of internet enable capabilites. You know, the ability to orde a Pizza from domino's, maybe they don't have an API, maybe they just have a simple web-form, and you use something like Python and you cobble a whole bunch of things together in order to call this API. And on a more complex scale, you could maybe take some of the more large scale API's like the Google Maps API, or the Google Sheets API,and they're all kind of complicated because they allow you to do many many thing with that API. Let's say in common people only do one to two things through API, so you simplified it down from complex to simple.

   An open source [Pizza Api](https://github.com/RIAEvangelist/node-dominos-pizza-api) like dominos. You can make pull request or simply clone the api for personal use. If it was on Rapid Api, you can't clone that and you have to give some money to use that API.

### Internal API's

Let's say you work in the company, and you have to keep track of the inventory. Let's say you are Amazon, and you have all these items in your warehouse and you need to be able to keep track of them. And we've been building **internal API's** basically every single time we've built a backend because we haven't opened that up for anyone else to use. Now as your realise, that doesn't mean that other people can't, it just mean it's not documented and we haven't promised to support it. In many cases, a private or internal API is something that is not supported for external use. But unless you have security features in place, it doesn't mean that it can't be accessed. And in fact this is a huge category where people try to figure out What are the methods in various companies.

**_REST:API - Representational State Transfer API._**. So REST Api is a bunch of rules that describes how an API should be.

### IMPORTANT -

REST API - HTTP METHODS -

Question - What make an API RESTful?

1. It's that uses standard HTTP Methods. It's your GET, POST, PUT, PATCH and DELETE. And these are the standard verbs that you use to interact with our RESTful API. So that means if you wanted to grab hold of something from the API, you would use the GET method.

2. It should probably have a standard data format that it responds with (JSON output). That means something like the JSON format, the Javascript object notation, or something like XML. And this is a response to called the API and the response is given back to the client and RESTFUL Api's response with something like that is pretty standard like JSON.**_This is the Representational part of Representational State Transfer._** Resources are represented in specific format like JSON, and that is sent in response to the client.

3. The clients and server in RESTFul Api's are completely separate. **They are not on the same system or in the same file and they're able to message each other ove a network.** In order to make request and also to get back responses. And this part of the RESTFUL ApI architecture allow each side to scale independently frome each other and they can evolve and be completely built seperately by different people, which means that RESTFul Api allows the whole system to scale very easily.

4. **Statelessness** - Each request from the client to the server should contain all the information that's needed to understand and process the request. So the sever should'nt be storing any sort of client side, state or client side data between the requests. So what this means is that each single request can be completed, and each single response is also complete without need to know what happend previously. And this basically allows again better scalabality of the API, and it simplifies the server-side implementation. So every single timethe client makes a request to the server, it contains all the information that the server needs in order to figure out what to respond back, and the server doesn't need to check, "Oh, what doesn this person ask previously?", Or last time I sent them fourth item, so if they're now requesting, they must want the fifth item." That means that you need to keep track of state and it means if you have multiple clients coming in, it can quickly reduce you efficiency and scalability of your api. **_This rule basically allows the server to serve many, many clients and many, many request._**

5. **Resource Based** - Your REST, the api is a resource-based, so it an API that is centered around resources and uses a **Unique Resouce Identifier, also know as Resource Locator**, so this **URI or URL** in order to locate specific resources. We all know what a URL is because you use it every single time to access the website, but know **URI, is just simply the address for a particular resource**, and it's a type of Universal Resource Identifier. It identifies that resource in the API.

These all 5 rules kind of looks familiar like **Internet**. The internet and WWW is considered, one of the most successfull RESTful architecture, because we have resources located in the URL, We work and interact with the server through an API, using HTTP standard protocol, and the responses we get are standard data formats such as JSON or XML, or Javascript, or HTML, and also we have a strict client,server separation. So the client is the person who's using the browser and the serveris the computer that holds all of the data is needed to be served when somebody requests a particular web page. And finally, internet is pretty much Stateless. Every single request to a web page contains all of the information that's required in order to determine what web-page to send back.

This is also why we're learning to create RESTFul API's, because it is a key concept in web development.

## Creating GET Request -

We are creating JOKE API from scratch.
Download the JokeAPI.postman_collection from course resouces and then go Workspace->collection->import->filename(In our case it JokeAPI.postman_collection). On Joke API foldername you can see three dots click on that and you can convert the full API in documentation and you can also publish it for other people to see. To convert it to documentation you have to first save the API.

Once you open the documentation -

You can give the request in terminal like -

```sh
curl --location "http://localhost:3000/random"
```

And it will give you a JSON file in response -

```json
{
  "id": 43,
  "jokeText": "What did one ocean say to the other ocean? Nothing, they just waved.",
  "jokeType": "Wordplay"
}
```

Instead of curl you can also use NodeJS-Axios -

```js
var axios = require("axios");

var config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "http://localhost:3000/random/",
  headers: {},
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
```

### Challenge 2

To get specific ID Joke

```sh
curl --location "http://localhost:3000/jokes/:id"
```

This is same as hitting the joke with id = 2

```sh
curl --location "http://localhost:3000/jokes/2"
```

```js
app.get("/jokes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const foundJoke = jokes.find((joke) => joke.id === id);
  res.json(foundJoke);
});
```

> **NOTE**
>
> The req that is coming from the user has a path parameter which has id in it.
> In (req.params.id) - we are simply catching what id is coming from the user.
> **_Since the id which is coming, is in the form of string, now we have to convert it into the interger._**
> That's why we are using **_parseInt_**.
