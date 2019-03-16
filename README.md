## ReactJS Facebook messenger

The goal of this exercise is to learn how to think in React.

## Requirements
You need to be comfortable writing JavaScript (ES6: Module system, class syntax, destructuring assignment).
You need to have `node`and `npm`installed in your computer.

## Clone the repo

```sh
git clone https://github.com/leanjscom/fb-messenger.git
```
Then `cd` into fb-messenger
```sh
cd fb-messenger
```

## Branches

You will need to head to the correct branch for the exercise.

How? run:

```sh
git pull --all

git branch --all

git checkout <branch_name>
```
## Getting started:
```sh
npm install && npm start
```

### We recommend you to start from top to bottom, and refactor, refactor, refactor

- [x] Replace the “footer” HTML at the bottom of App.js using the src/Footer.js component.

- [x] Refactor the topbar section  by creating a functional component and pass the dependencies via props. Make sure everything works Hint: this will be similar to Modal.js

- [x] Create a component for “messenger” and pass down the dependencies from App via props. Make sure everything works. You can start by making a Messenger folder with an index.js.

- [ ] Is there any state in app that should be in the Messenger component?  Refactor this logic out of App.js and into Messenger. Then, create further functional components from the contents of Messenger and pass them down dependencies via props. Hint: maybe you could have a Threads component, and maybe Conversation?

- [ ] Question: Is it possible to move showModal from app.js down the tree? why/why not?

- [ ] Create a Link component for the a tags in the footer. Who are the children of the Link component? Link should receive a prop called `to` that becomes the href of the <a href={to} ... 

- [ ] What do you think it would make sense to componentize next? Are there any parts on that view that you can reuse? Try to explain to a mentor what you want to refactor before you code :)

## Links

* [https://reactjs.org/docs/introducing-jsx.html](https://reactjs.org/docs/introducing-jsx.html)
* [https://reactjs.org/docs/thinking-in-react.html](https://reactjs.org/docs/thinking-in-react.html)
* [https://reactjs.org/docs/composition-vs-inheritance.html](https://reactjs.org/docs/composition-vs-inheritance.html)
* [babel repl example](https://babeljs.io/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=JYWwDg9gTgLgBAJQKYEMDG8BmUIjgIilQ3wCg0IA7AZ3gAkkAbRiAYV0kqUvgF44AFAEo4vAHwEAFsHwBuUqQA8AE2AA3OGkYpq1AHIoQSXvgo8UwLlHxjScOCvWbtug0ZM4A7jbv24AbwZmNg4qbhgAX19FAHpVNVtY-LEgA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=es2015,es2016,es2017,react,stage-2&prettier=false&targets=&version=7.3.3)
* [https://reactjs.org/docs/lifting-state-up.html](https://reactjs.org/docs/lifting-state-up.html)
* [https://reactjs.org/docs/thinking-in-react.html](https://reactjs.org/docs/thinking-in-react.html)


## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
