<h1 style="color: lightGreen, align=center">Database</h1>

## Where did my data go?

An in the last module, when we were building Blog Api, when we try to store the data in **var** variable, after restarting the server through **nodemon index.js** the data that was stored is completely wiped out and return to it's original state. It means that your data is stored in temporary memory and it's only valid as long as your server state doesn't get refreshed.

So how can we persist our data?

We need a data storage. What we need is essentially a form of data storage that prevents our variable which are held in temporary memory to go vanished.

## Databases

> Types of databases
>
> 1. SQL(Structured Query Language) Database
> 2. NoSQL Database
