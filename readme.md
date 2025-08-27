**1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**

difference between getElementById and getElementsByClassName
1.Selects a single element by its ID but Selects all elements that have a given class name.
2.ID return single element or null but Class return HTMLCollection (like array)
3.Did't support multiple elements by ID but class support multiple elements

What is the difference between querySelector and querySelectorAll
1.QuerySelector selects the first element that matches a CSS selector but querySelectorAll Selects all elements that match a CSS selector.
2.f no match querySelector Returns null querySelectorAll Returns empty NodeList
---

**How do you create and insert a new element into the DOM?**
1.Create the element using document.createElement() method
2.Customize it like newdiv.innerHTML =`<p>this is the new p </p>`
3.Insert it into the DOM like document.body.appenchaild(newdiv)

**What is Event Bubbling and how does it work?**
when an event (like click) happens on an element, it first runs on that element, and then bubbles up through its parent elements all the way up to the root html.

when you click a button first child's click handler run and console.log child clicked thrn even bubbles up and run console.log parent clicked

**What is Event Delegation in JavaScript? Why is it useful?**
when you have multiple child elements and you need to set events on all of them,then you add a single event listener to a parent element, and then use logic to figure out which child triggered the event. It work beacuse of event bubbling.

It is useful beacuse 
1.better Performance
2.Simpler code
3.Handles dynamic elements

**What is the difference between preventDefault() and stopPropagation() methods?**
the difference between preventDefault() and stopPropagation() methods
1.Preventsdefault the browser’s default action associated with the event and stopropagation Stops the event from bubbling up to parent elements.
2.stopropagation affects bubbling but Preventsdefault can't affect.
3.Preventsdefault affects browser’s default behavior but stopropagation can't affect browser’s default behavior.
