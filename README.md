# HissingCat
## A new Emoji made in CSS and JavaScript

# How to build
1. Download node.js
2. Upgrade NPM just in case you haven't
3. Do this command: `npm i terser -g`
4. Restart your terminal, and type in after going to the directory `terser hissingcat.js -o hissingcat.min.js --mangle --compress`
5. Test it, to use, type in 🐱‍💢‍💨 in any text field in a HTML file having hissingcat.min.js, its just 🐱 + ZWJ + 💢 + ZWJ + 💨, ZWJ is U+200D

# FAQ
* Q: How is this made?
* A: JavaScript and CSS.
* Q: How is this possible?
* A: Tech got more advanced over time.
* Q: Does this modify system fonts?
* A: No. It scans the webpage's DOM for the specific Unicode sequence ( + ZWJ +  + ZWJ + ) and replaces it with a custom HTML wrapper styled with CSS.
