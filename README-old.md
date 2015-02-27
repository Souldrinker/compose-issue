# compose-issue

A copy of the aurelia-skeleton-navigation-0.9.4 project where I added some compose bindings that I was hoping should work as in Durandal.

It might not be a bug in Aurelia, but me misunderstanding the concepts, if so bear with me.

I suspect it may even be working as intended here and just me needing to re-learn from being used to the Durandal observable plugin (knockout).

## stuff added

### welcome.js

In the constructor I added a "stuffHolder" variable that I initiate to a new empty Array and initiate the other variables to 0 or null.

Then I added a showTestView function that gets triggered by button added in the HTML.

In that function I set up the id/viewName in three different ways like this:

1. Add id and viewName properties directly to the view model

2. Add a "stuff" object consisting of id and viewName

3. Add the "stuff" object to the stuffHolder array.

### welcome.html

At the end here I added a button to be triggered after the constructor to simulate getting a value back from a Web Api call after the constructor/activate.

The button triggers the showTestView function mentioned above.

I've also added several compose bindings to the welcome.html that all loads a TestView (that just outputs the value passed in to the activate method).


According to my previous Durandal experience I would have thought that all five bindings would have passed in the id to the activate method, but here only the one contained in pre-defined array does.

