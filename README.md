# Webpack Prototyping
## Why

At work we lost our network due to an outage, and I needed a tool to prototype, but I couldn't reach my usual suspects: [codepen.io](https://codepen.io/pen) or [JSBin](http://jsbin.com/?html,css,js,output).

I figured I could make a little tool to do the heavy lifting for me, and as a surplus I could even use my IDE to develop.

## How to use this
### prerequisites
To get this to work you'll need:

* [Node.js](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/)
* Some sort of IDE, the options are quire limitless, but here are a few you could pick
    * [Visual Studio Code](https://code.visualstudio.com/) - **free**
    * [Sublime Text](https://www.sublimetext.com/) - **free OR $80**
    * [PhpStorm](http://www.jetbrains.com/phpstorm/buy/#edition=personal) - **€89 / year**

### Getting started
#### 1. Get the repository and install it 
```
git clone git@github.com:pjetr/webpack-prototyping.git
cd webpack-prototyping

yarn install
```

#### 2. Working on a prototype
Thera are multiple ways to do so, but I found I preferred to simply create a branch per prototype. You can use git to save your work and switch between different prototypes very easily. So that's what I'll show you here.

Let's say we want to create a prototype for a menubar:

```
git checkout -b menubar

yarn start
```

A new browser tab will open, and it will show you that the page is working.

Now we can go into `src/index.html` and replace the contents with the following markup:

```
<nav>
    <section class="logo">
        <img src="https://placekitten.com/128/128" alt="ACME kittens">
    </section>
    <section class="navigation">
        <ul>
            <li><a href="#/">Home</a></li>
            <li><a href="#/news">News</a></li>
            <li><a href="#/about">About ACME kittens</a></li>
            <li><a href="#/contact">Contact</a></li>
        </ul>
    </section>
</nav>
```

As soon as you save, the browser tab will refresh and show you a weird looking navigation. Time to add some styling. open `src/main.scss` and replace the contents with the following _Sass_.

```
html {
  background: #333;

  font-family: sans-serif;
  font-size: 16px;
}

* {
    box-sizing: border-box;
}

nav {
  display: flex;
  position: relative;
  align-items: center;

  width: 100%;
  margin: 0;
  padding: 15px;
  background-color: goldenrod;

  .logo {
    width: 128px;
    position: relative;
    margin-right: 15px;
    margin-top: -35px;

    img {
      position: absolute;
      width: 128px;
      border: 5px solid goldenrod;
      border-radius: 5px;
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.23);
    }
  }

  .navigation {
    flex: 1;
    ul {
      margin: 0;
      padding: 0;
      display: flex;
    }
    li {
      list-style-type: none;
      display: block;
      margin: 0 5px;
    }

    a {
      color: white;
      font-weight: 700;
      text-decoration: none;
      padding: 10px;

      &:hover,
      &:active {
        border-bottom: 5px solid white;
      }
    }
  }
}
```

That looks more like it!

### Saving and switching to another prototype
Well that's just basic _Git_:

```
git add --all
git commit -m "Prototype Menu-Bar copy pasted some stuff"

git checkout master
```

And now you're ready to go again.

Happy prototyping!