<h1 align="center" style="color: blue;">API (Application Programming Interface)</h1>

The technology that powers communication between software and internet.

API - These are the set of rules or protocols that defines how different software can interact with each other.

If let's say **Program A** and **Program B** wants to works together, then we would need them to be able to communicate to each other to share there functionality.

For Example -

1. Let Program A speaks chinese
2. Let Program B speaks Japanese

Now to able to make their communication happen is to simply put an API or **interface** between them. So the both program knows how to interact with each other through this bridge in the middle.
So what API does is it basically bridges the communication between different pieces of software.

Example -

Let's say I am creating a **Diary** Website where user can jot down all the important task into his website. Now when creating website I want to show a little icon with all the current weather details in the corner of the website.

Now when you look online you see a company called **OpenWeather** that stores and captures weather data and they have that weather data available in their database. And it's updated frequently and it's available for all the location of the world.

Now, what I need is just I want to be able to talk to these servers to bring their website data into my website.

Now how to set the communications between the OpenWeather Server and my server of Diary Website. Let's say OpenWeather servers use different language to make their backend servers. You don't know how to access their backend servers. You don't what the rules are that govern the servers.
And this is where **API** comes into play.

Now in this case OpenWeather creates a public API that tells you how you can interact with their services. If you want data from them, then there are these and these things that you can access.

For example, let's say if you pass in the latitude and longitude of the location you're interested in, well they can give you the weather of that particular location. They can tell you how that weather data is structured.

Data like -

```
{
  temp: 23*c
  icon: "cloudy"
}
```

All you have to do then is to make a request from your website through this API to say, well, these are the things that I want and because you now have this interface to know how to interact with their services, you're able to get this data back and populate it into your website.

In programming language, we are simple making a GET request from our website and in response the OpenWeather will give me set of data, and this API simply tells you how you can make these requests and how the data that's coming back is structured.

Example -
Let's say you created a tweet and you have a plant at home where every time you tweet your plant account, then you've got some sort of Arduino or IOT Devices that's going to water your plant. So how would this work?

Again through and API. You can create an API for your hardware which is watering devices, and you get to listen for request coming through the internet from your program. And when you monitor the account of your cacti or other plant when it sends a request to a particular path say /water, and when it sees that request, then it's going to start watering your plant.

In response from this API could be how much water was released or what is the moisture content of the soil and so on.

From all the examples above, API is an interface for the communication between two pieces of software.

### Different Types of API -

1. GraphQL
2. REST:API
3. SOAP
4. gRPC

Basically we've got different **architectural styles** for creating an API because essentially an API is just a set of rules and they each decide different rule of sets for creating API's.

We will study REST:API for this course

### What is RESTful API?

REST use HTTP protocols to interact with the API.

There is an API provided by International Space Station to know the exact location of ISS.

When you read the documentation provided by the ISS, it tells things to access to get the response from this API.

Example -

URL you need to access in order to interact with the API, and it tells what kind of response you can expect to get back. And it gives you a little piece of data on each of these endpoints. And figure out what is it you really want from an API you can figure out from given database.

**_Basically you can image your API documentation like a lunch menu where you pick, what do I want? And then you make a request through HTTP and depending on the type of request you make a POST request or maybe you need to make a GET request._**

### Goal - To locate the exact location of ISS.

POSTMAN - It is a really good tool for us to be able to make HTTP request without having front-end or back-end.

Just type this URL in postman [URL](https://api.wheretheiss.at/v1/satellites/25544)

You will get a JSON Data -

```json
{
  "name": "iss",
  "id": 25544,
  "latitude": 49.404658584906,
  "longitude": 108.37465137338,
  "altitude": 415.30893917869,
  "velocity": 27619.267151219,
  "visibility": "daylight",
  "footprint": 4483.5200307516,
  "timestamp": 1721219415,
  "daynum": 2460509.0210069,
  "solar_lat": 21.054421128074,
  "solar_lon": 353.99832146785,
  "units": "kilometers"
}
```

Now just take the value of longitude and latitude from the JSON data and paste it on google map. It will give you the exact location of ISS.

## Formatting API Request -

Let's say We are giving some GET request from frontend to backend and it is giving me some Response. Basically we are hitting a **private API** between these request and response to manage all the request and response. **Now the reason why it's private is because you don't document it for other people to use.**

Let's say some person know how your server was structured and tried to hit it up, that would be tapping into a private API, if there is some strong reason to do that.

<img src="./images/Private_API.PNG" alt="Private_API" >

Now behind the scene, your server is talking to another server to get some request and response from that particular server. And it is done through a PUBLIC API. Now this server has allowed this kind of behaviour to talk to another server through PUBLIC API. So they've documentated to how to use their public API. They've exposed certain parts of their server to anybody who wants to request it.

<img src="./images/Public_API.PNG" alt="Public_API" >

Refer to Bored-Api Documentation created by Angela [Bored-Api](http://bored-api.appbrewery.com)

The first thing when it comest to structuring you requests to these API's -
**1. API Endpoints** -
Syntax -

[BaseURL/Endpoint]

You have something BASEURL, and then you have api endpoints. These endpoint can be different for different purposes.

Example in bored-api -

There is **/random** endpoint where you can get hold of random activity when you are bored.
Ther is **/filer** endpoint, when you want to filter activities based on some sort of criteria.

**_And the endpoint is basically a different route on the API Provider Server and in the documentation they will usually give you an example of which endpoints you can use and what is the purpose of that endpoint._**

> **NOTE:**
>
> The most PUBLIC API that dont' require authentication, there's usually some method to prevent people from abusing the resources. So in our case, we've added a rate limit so that you can only make **100 request in 15 minutes** in bored-api. And after you make 100 request you have to wait for about 15 minutes to make another 100 request.

**2. Query Parameters** -

Syntax -

[bored-api.appbrewery.com/endpoint?query=value]

So basically we have first baseURL - "bored-api.appbrewery.com"
Then we have endpoint - "/endpoint"
Now we are adding "?" to say that we are adding a query now to the end of this request. This query has a **key-value** pair - "?query=value"

> Basically you put a query or a key/value pair into the URl when you want to provide some additional information or some Parameters to some request.
>
> Normally, when you're hitting up an API, they're used for filtering, sorting, searching.

You can have -

**3. Multiple Query Parameters** -

Syntax -

[bored-api.appbrewery.com/endpoint?query=value&query2=value]

We have our first query which is **?query=value** and then we our second query which is join by **&** and symbol and then **query2=value**.

To add a third query -

[bored-api.appbrewery.com/endpoint?query=value&query2=value&query3=value]

Example -

In bored-api documentation you have section called **Filter-Activities**. It basically returns a list of activities filtered by type and/or participants.

And it has two parameters to filter our activites by -

<ul>
  <li>
    type: choices from "education", "recreational" and so on.
  </li>
  <li>
    participants: choices from 1,2,3,4,5,6,8
  </li>
</ul>

**4. Path Parameters** -

Syntax -

[bored-api.appbrewery.com/endpoint/{path-parameter}]
[bored-api.appbrewery.com/endpoint/{unique-path-parameter}]

First come - BASEURL
Second come - /endpoint
Third come - Path-parameter {/Path-parameter}

The **/endpoint** never changes but after the endpoint **_we have forward slash and Path-Parameters where we can add some sort of parameters that does change, and this is usually to find some specific resource that exists._** So it could be an ID, it could be username. It's basically something very specific that can identify a resource in the API.

> Think Query Parameters as more as filtering and sorting and path parameters, more for identifying a resource by some specific parameter.

Like in Bored-APi Documentation in **Get Activiy by Key** section, we can give path parameter to the baseURL, which is unique which in this case it is "key", which helps in defining the activity and everything else. This key is unique for all the activities.

Now for example, if on your website you know that you want to always display to the user the first activity as "Learn Express.js", then you can simply retrieve it by identifying it's specific key.

Another Example - I already know the key for hosting a movie marathon and it's 5914292.

Example

url - (https://bored-api.appbrewery.com/activity/3943506)

Response -

```json
{
  "activity": "Learn Express.js",
  "availability": 0.25,
  "type": "education",
  "participants": 1,
  "price": 0.1,
  "accessibility": "Few to no challenges",
  "duration": "hours",
  "kidFriendly": true,
  "link": "https://expressjs.com/",
  "key": "3943506"
}
```

## Challenge

Provide the key as a unique path parameter generate what kind of activity is associated with this key

Key - 5914292

```json
{
  "activity": "Host a movie marathon with some friends",
  "availability": 0,
  "type": "social",
  "participants": 3,
  "price": 0.1,
  "accessibility": "Few to no challenges",
  "duration": "hours",
  "kidFriendly": true,
  "link": "",
  "key": "5914292"
}
```

<h2 align="center" style="color: blue;">What is JSON?</h2>

When we request and API, it gives us the response or it gives us the data in the form of **JSON**.

**_JSON - Javascript Object Notation_**

> **It's a way to format data that can be sent over the internet in a readable but also efficient way.**

Difference between Javascript Object and JSON -

<img src="./images/Difference_Between_JSON_and_JS-Objects.PNG" alt="Difference_Between_JSON_and_JS-Objects" >

> The structure is completely the same, the only thing that changes is the **key**, instead of being a javascript key which doesn't actually need any quotes around it at all, it's now turned into a **string** in **JSON**.
>
> So every **key** is a **string** and every **value** can be **strings**, **numbers**, **array**. And once JSON is laid out properly like this, you can see it's very readable and it's easy to understand.
>
> The reason is that JSON is send over internet and then key is converted into string while as in Javascript everything is handled by the editor or by the code interpreter. Basically in javascript it is syntax or notation to write like this.

Example -

Lets' say you want to go buy wardrobe.

In javascript the object properties looks like -

```js
const wardrobe = {
  doors: 2,
  drawers: 2,
  color: "red",
};
```

Now if I want to move this wardrobe to my house, it is not easy to send the whole wardrobe, it's then converted into a **flat pack**. So it could be reduced down to it's minimal size without all of that air in the middle, so you don't have to transfer a large object.

```json
{
  "doors": 2,
  "drawers": 2,
  "color": "red"
}
```

Now instead of that large javascript object we now have a flat pack in the form of JSON. It is a string from the beginning to the end, and every single aspect of that notation is serialized so that it can be it's minimal size when transferred across the internet. And when it's transferred, it can be re-expanded into usable format such as javascript object.

Since JSON comes in flat pack notation, so it becomes difficult to read. So to make it more readable we use [JSONViewer](https://www.jsonviewer.stack.hu) to make it more human readable.

<img src="./images/JSON-Reader.PNG" alt="JSON-Reader" >

When you are writing code and you want to send a JSON across the internet, for some reason you will need to perform what's called **_serialization_**. Basically turning your javascript object, your big wardrobe into a JSON, into a flat pack.

And the way you do this with code is using a method from the JSON module and you write something like -

JS-Object -> JSON

```js
const jsonData = JSON.strigify(data);
// where data is a javascript object.
```

**_And it will do the flatpacking process. It's going to make this Javascript object into a string, but a string that has kept all of the commas, quotes and colons to be able to represent all of the different nesting and relationships in that object._**

JSON -> JS-Object -

```js
const data = JSON.parse(jsonData);
// jsonData is JSON
// when you run the parse method it will convert JSON data back to Javascript object.
```

> **NOTE:**
>
> Difference between Middleware and API

<img src="./images/Difference_between_Middleware_and_API.PNG" alt="Difference_between_Middleware_and_API" >

## Making Server Side API Requests with Axios

Making requests from your server to an external API using Node and Axios

What we are trying to achieve -

<img src="./images/Server_to_Server_Request.PNG" alt="Server_to_Server_Request" >

Now the code for this would look quite long and complicated if we're using native node modules such as **HTTPS** modules. So we use HTTPS to essentially make this request from our server, to reach out from our server to the API Provider Server.

<img src="./images/Making_Request_Through_Native_Node.PNG" alt="Making_Request_Through_Native_Node" >

Instead of writing so much lines of code, use **Axios** instead.

**Axios** - We're trying to reach out from our server to another resource on the Internet and it makes these responses very simple. In the same way that Express makes creating our server using Node a lot simpler by simplifying a lot of the commonly used methods and requirements. Axios pretty much the same thing. Instead of all of that code that you saw on the image above, we pretty much just have these five lines of code -

```js
import axios from "axios";
app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://bored-apit.appbrewery.com/random",
    ); // Axios.get method is making the get request from this api.
    // Await keyword is used to wait for axios.get() finished first and the going to the next line of res.render()
    res.render("index.ejs", { activity: response.data });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.status(500).send("Failed to fetch activity. Please try again.");
  }
});
```

> **_The async keyword indicates this function is asynchronous, meaning it might involve waiting for some operation to complete before continuing._**
>
> **_Await keyword is used to wait for axios.get() finished first and the going to the next line of res.render()_**
>
> **_The await keyword pauses the execution of the function until the Axios request (axios.get(...)) finishes. This ensures we have the response data before proceeding._**
>
> **_We have'nt write "JSON.parse" method. What axios is doing it simple getting all the data of JSON coming from the api and converting into JS-Object._**
>
> **_The catch block handles any errors that might occur during the Axios request._**

<img src="./images/Node_HTTPS_and_Axios.PNG" alt="Node_HTTPS_and_Axios" >

<img src="./images/Axios_Request.PNG" alt="Axios_Request" >

## API Authentication (Authenticating yourself with the API Provider)

We were accessing the bored-api through axios from our servers and also through POSTMAN. But sometimes there are a lot of scenario where maybe you don't want everybody to be able to access your API.

Let's imagine that we have our data locked up in a vault like a bank does, and our API is the front-desk where we can take and handle requests from customers to clients. So let' say somebody bad comes along and say "Well, I'd like to get 100 pounds please" using the API, and they try to get hold of some resource. But like as we have seen before, our API will simply say, "Well, here you go." Here's the money that you requested," and of he goes.

**_What we want instead is in certain scenarios we want to be able to protect the resources behind our API using Authentication._**

Well in the case, we need to know who are you when you're making these requests? (401) response status code. And depending on whether if you have the authorization or not, then we might say, "Oh 401, (Unauthorized)". Sorry you can't do that.

In this lesson, we're going to be learning exactly how we can authenticate the user or the client that is making the API request and depending on whether or not they are authorized to make that request, we can send them the data or tell them, "No, sorry, that's not allowed."

Authentications are four tiers -

1. NO authentications - (Working so far)
2. Basic Authentication
3. API key Authorization
4. Token Based Authentication

**1. No Authentication** - Example (bored-api). None of the endpoints in the API required any sort of authentication.  
Ques - So what can an API do to prevent abuse of the API?
Ans - Api providers might add a safety check is to put in a **Rate Limit**.

Example - As you saw in the bored API instance, we had a limit of 100 request per 15 minutes and I put in that rate limit so that under most cases as a student, that should be enough for you to work with the API, and get hold of the data and try out new things while learning API, without hitting it too much and then ending up making the API go down for everyone.

So you can check each **IP Address**, how many requests they're making per minutre and based on some sort of arbitrary decision that you make, you can say, "Well, I'm going to limit it to this amount."

You can see in Bored-API there is not any sort of authentication required in endpoint. So that anyone can access these endpoints by making the request and get the data back.But the API requests are in fact rate limited and that means that we do have some safety measures, although it is not a measure to authenticate or authorize any sort of API user.

**2. Basic Authentication** - Well you provide a **username** and **password** when you make your API request. **_What does that means you are authenticating yourself to the API provider._**

> Usually, the Basic Authentication is done by passing ove a **Base64** encoded string in the header of the request.

What is BASE64 Encoding?

It is basically taking TEXT which is ASCII, so anything that you can type on your keyboard and that can be converted into bits. And then we take the bits and then encode it into another character. So when we don Base64 encoding there is a bit of expansion. Example -

1. Letter - MAN
   Converted it into another letter using Base64 encoding -
2. Letter - TWFU

If you have spacing in your line of source encoding, then you might see an extra characters as well.

<img src="./images/Base64_encoding.PNG" alt="Base64_encoding" >

<img src="./images/Characters_And_Binary.PNG" alt="Characters_And_Binary" >

As you can see from above image, each character that you can think of is represented in Binary. And then by taking that binary and passing it through a special encoding method, we end up with BASE64.

Once we have data converted in BASE64 encoding, we generally sum them up in **username:password** format. Let's say username is **XXXXX** and password is **XXXXX**. So the format will look like **XXXXXXXXXX** and this data is in BASE64.

Now we can add this BASE64 encoding data to Authorization header.

Authorization: XXXXX:XXXXX.

And then pass this data along when you make your request.

### Exercise -

Another Api from Angela [Secrets-API](secrets-api.appbrewery.com). Where we can share our confession to store in the database and then view each other or share each other confession anonymously or secretly.

In this API, it has different endpoints with different levels of authentication.

1. POST/register - register username and password by going into this endpoint.
   Once we done that, we can go to **GET/all** endpoint to return all secrets, paginated and so on. For more information go to [Secrets-API](secrets-api.appbrewery.com)

   Since this **GET/all** will return me huge amount of secret data, then there is no need to have large data, instead it has a query parameter of pages. How many pages you want to request from this api.

> **NOTE:**
>
> When we are using Basic Authentication using POSTMAN, it's actually doing some magical stuff behind the scenes. What it's doing is it's generating the authorization header automatically based on the username and password here. You can see that by going onto the header section in POSTMAN.

Header :
Authorization: Basic kkljr9048949llske9iekKgfh
Postman-Token: <calculated when request is sent>
Host: <calculated when request is sent>
User-Agent: PostmanRuntime/7.23.3
and so on....

> When you convert "kkljr9048949llske9iekKgfh" from [Base64 Encode and Decode](https://www.base64decode.org/). You will that the key is converted into this format "username:password", same as I mentioned above.

**2. API Key Authorization** -

**_Difference Between Authentication and Authorization - So the difference betweeen these two forms is if you have a user, they can authenticate themselves with your service. That means you are logging in or you are registering. But authorization is simply a client who is allowed to user service with an API key that might be associated with a user, in which case they are authenticating themselves and then getting an API key to authorize themselves to use your API. But it could just be you don't even need to register with the API provider and you can simply get hold of an API key and authorize yourself with the API Provider._**

**_In simple terms - Authorization is something that allows you to use an API. Authentication is something that allows you to be identified as a user to the API provider._**

Example -
You'll see that a lot of public API's use ApI keys and it's really usefull because you can then track the usage per API key. So for example, if you signed up for the Google Maps API, you can use all sorts of different API that they provide, for example, the Places API to find all the different things that show up on GoogleMap, or you can use the Distant-Matrix to calculate the distance between two points in time, again using Google's API. And every single time when you make a request, you need to use this key before you get back a response, then they can log, well, how many request are you making with the key?

<img src="./images/Google_Map_API.PNG" alt="Google_Map_API" >

> **NOTE:**
>
> In above image you can see the user is making about 200,000 request per day on the PlacesAPI. And as with most public api, they have to stand up their own infrastructure, their own servers, they have to maintain these server computers, etc. There's a lot of cost involved , so it's often that they will charge you for using their APIs. Example, the person in the image above is racking up 2000$ worth of API usage and by looking at how often u are need to make request through your API key, they can determine, how much they should charge you.

### Exercise

1. Generate a API key from GET/generate-api-key

```json
{
  "apiKey": "cceefb57-3991-45fd-85de-e412b747dcd7"
}
```

2. GET/Filter returns a secret with particular embarrassment score or higher. API key authentication is required.
   Query parameters -
   1. apiKey
   2. score

**3. Token Based Authentication** -

Why is it that we're increasing level of security?

Well, no authentication is obvious, but Basic Authentication uses a username and password that's passed over as a BASE64 encoded string in the header. Now, I can easily convert this BASE64 decoded to decode the username:password. Now that means it's equally possible for somebody on the internet to intercept your API requests and to be able to do the same.

So why do we still use it?
Well, most API providers that use Basic Authentication will have HTTPS on their domain, which means that we're using **cryptography** to securely encode all the data that being passed back and forth. And even if somebody intercepts the packets, they won't be viewing the string as what we saw, instead, it will be not more decodable. But yet, it's still passing username and password and if it's less secure website or there is something that goes wrong, then there is a risk there.

Now, API key authorization is a little bit more secure because nowhere do we actually type in our username and password, instead we have this API key which can be **deleted** and **regenerated**. You can also rate limit it. I'm generating this key, but I only want to make say a thousand requests a month, so I'm only paying for that amount. So even if somebody intercepts this API key, they wont' be able to get hold of the username and password. They wont' have any of your payment details. It is just a reusable code that you're using to access an API.

**_Finally, the token based authorization or authentication is even more secure because essentially we're getting the user to use a username and password to log in and then once they've logged in, we generate a token to be used with the API so the API doesn't get involved with the username and password and instead it's the token that's constantly being used to interact with the API._**

> **NOTE:**
>
> Normally, you'll see Token Based Authentication as **OAuth** and **OAuth 2.0** is probably the industry standard, for doing token-based authentication.

So what actually goes behind the scene?

You have a user for a service and you want to be able to act on their behalf, so you get them to sign in with their username and password on the API provider's website and then the API provider generated the token, and then this token can be passed back to you as the third party and you can use this token to interact with the API.

Example -

So, let's say you are building a third party app, say it's a weather app, but you have a special twist onthe app where you are going to hold of a user's events int their Google Calendar. So you want to see that they have a meeting, for example, one Tuesday and it's happening in Baltimore. So you grab all of these pieces of data and you look at the weather for that location and that date, and maybe you would be able to send the user an alert to tell them to bring an umbrella to that particular location. That's the idea behind interacting with the Google Calendar API.s For the user to be able to grant you access to this data. Well, what do you have to do? If you weren't using token-based authentication, then you would have to give the third party, the username and password, so that we can use this to interact with the Google Calendar API. Instead what we're able to do is we can use token-based authentication or OAuth to get the user to sign in with Google, and this generated a token for us to get hold of and then we can use this token to interact with the google calendar api. And then we can get hold of the user's event, their meetings, we can even post data or delete data. We can basically interact with Google Calendar as this user without ever needing to get hold of their username or password. And instead of all that security stuff is handled by Google. So this is a way more secure way of doing API Authentication.
