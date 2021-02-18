# scandiweb-carousel

## Features

⚡️ Optimized with Webpack\
⚡️ One Page Layout\
⚡️ Fully Responsive\
⚡️ Valid HTML5 & CSS3 with animations\
⚡️ Well organized documentation


## Getting Started 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites 📋

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [NPM](http://npmjs.com)) installed on your computer.

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```

Also, you can use [Yarn](https://yarnpkg.com/) instead of NPM ☝️

```
yarn@v1.21.1 or higher
```

---

## How To Use 🔧

From your command line, first clone erply-vatchecker:

```bash
# Clone this repository
$ git clone https://github.com/gyanendrav2/react-carousel-madeby-gyanendra-verma.git

# Go into the repository
$ cd react-carousel-madeby-gyanendra-verma

# Remove current origin repository
$ git remote remove origin
```

Then you can install the dependencies either using NPM or Yarn:

Using NPM:

```bash
# Install dependencies
$ npm install

# Start development server
$ npm start
```

Using Yarn:

```bash
# Install dependencies
$ yarn

# Start development server
$ yarn start
```

**NOTE**:
If your run into issues installing the dependencies with NPM, use this command:

```bash
# Install dependencies with all permissions
$ sudo npm install --unsafe-perm=true --allow-root
```

Once your server has started, go to this url `http://localhost:3000/` and you will see the website running on a Development Server:

## Properties of carousel

<table>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default</th>
<th>Optional</th>
<th>Description</th>
</tr>
<tr>
<td>imageList</td>
<td>Array of object [{url:'image', htmlContent:null}]</td>
<td>[]</td>
<td>false</td>
<td>Array of images and htmlContent.paste image link in <b>url</b> key of array object. if you want to show only html content set url key to empty string and assign html component at <b>htmlContent</b> key</td>
</tr>

<tr>
<td>transition</td>
<td>number</td>
<td>1</td>
<td>false</td>
<td>sliding time duration to complete one slide at a perticular time. by default is 1 second</td>
</tr>

<tr>
<td>infiniteSlide</td>
<td>boolean</td>
<td>true</td>
<td>true</td>
<td>To support the infinite slide option.</td>
</tr>

<tr>
<td>leftButton</td>
<td>element</td>
<td></td>
<td>true</td>
<td>To add the custom left button component.</td>
</tr>

<tr>
<td>rightButton</td>
<td>element</td>
<td></td>
<td>true</td>
<td>To add the custom Right button component.</td>
</tr>

<tr>
<td>externalLeftButtonClass</td>
<td>string</td>
<td></td>
<td>true</td>
<td>To add the custom external left button wrapper class.</td>
</tr>

<tr>
<td>extnernalRightButtonClass</td>
<td>string</td>
<td></td>
<td>true</td>
<td>To add the custom external right button wrapper class.</td>
</tr>

<tr>
<td>height</td>
<td>string</td>
<td>100vh</td>
<td>false</td>
<td>To give custom height of the slider.</td>
</tr>

<tr>
<td>externalBulletClass</td>
<td>string</td>
<td></td>
<td>true</td>
<td>To give external slider indicator inactive dots className</td>

<tr>
<td>externalActiveBulletClass</td>
<td>string</td>
<td></td>
<td>true</td>
<td>To give external slider indicator active dot className</td>
</tr>

</table>