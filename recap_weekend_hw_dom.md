# Weekend Homework Recap: DOM

1. What is the return value of `document.createElement`? And what does it accept as an argument?
The return value of `document.createElement` is a new HTML element.

2. What is the return value of `document.querySelector`? And what does is accept as an argument?
A. Returns the first element that matches the specified selectors and accept as an argument a string that represents the CSS selector for the element you wish to find.

3. What is the return value `document.querySelectorAll?
A. Returns a list of the document's elements that match the specified group of selectors.

4. What is the difference between using `textContent` and `appendChild`?
A. The difference between them is 'textContent' modify  and replace content of an existing element while 'appendChild' add a new element to the DOM.

5. What is the event we handle to access the values of a form, and how do we access the values?
A. We handle 'the form event submit' to access the values of the form, and we can access to their values adding an eventListener which will contains a method that handles their attributes. e.g. 'form.target.value'
