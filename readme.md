# Big O

### **TO SKIP THE EXPLAINATION JUST SCROLL TO THE HORIZONTAL LINE**

Datastructures and Algorithms are some of the more interesting aspects of being a software engineer. Especially for those who love problem solving and mathematics. I've come to discover I love DSA because I was able to solve problems with my friends and share new solutions with them as I learn from them too!

I also understand for a lot of new engineers this topic can be a major turn off. When solving problems it's pretty intuitive for everyone to just loop and loop and loop and loop and - _you get the point_. But it **not as intuitive** to understand how to optimise your code.

Big O notation -[_according to Wikipedia_](https://en.wikipedia.org/wiki/Big_O_notation)-  is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity

For us regular people that means as the length of your input grows the operations your function has to complete also increases (_depending on how it's implemented of course_).

Let's take a function that has a for loop and just prints each element in an array.

```javascript

var arr = [1, 2, 3, 4, 5];

function consoleElements(a) {
	for(let i = 0; i < a.length; i++){
		console.log(a[i]);
	}
};
```

So as you can see for **each** element in _arr_ you will ~~iterate~~ "walk" over each and print it, so we would see 1, 2, 3, 4, 5. Now let us increase arr by 3 elements

```javascript

var arr = [1, 2, 3, 4, 5, 6, 7, 8];

function consoleElements(a) {
	for(let i = 0; i < a.length; i++){
		console.log(a[i]);
	}
};
```

As you can see we would now have 1, 2, 3, 4, 5, 6, 7. For every element or **"n"** in our array we have each n times.

Now what about this function?

```javascript
**[FILL THIS IN]**
```

For most people who are starting out, it isn't obvious what the Big O notation is so I wanted to create a module that will help developers understand the time complexity of their code


---


```
**TO RUN:**
- npm install **[FILL THIS IN]**
- CD into ****
- Write your function to index.js
- Save the index.js
- In the terminal run **_npm run bigo_**
```


---


## BUILT WITH:
- Javascript
- babel-cli
- babel-preset-es2015
