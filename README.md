# compose-issue
I've previously used this slightly modified version of the skeleton-navigation app to explain an issue I previously had relating to templating-resources that is now fixed, but I've run into a new issue so I've modified it a bit again in hopes of either getting the new issue fixed or get an explanation of why it's not working as I thought.

##The new issue
In my "real" app ported from Durandal I have a compose binding where I pass in an id to the activate method of a dashboard view depending on what "tab" i press in the main view and thus change the appearance and contents of the dashboard.

I have tried to make a simple reproduction of the issue here.

For this I have added a new compose binding at the bottom of the welcome.html and four buttons:

1. "Show with id=1" which sets the model to 1 and the view-model to "test-view".

2. "Show with id=2" which sets the model to 2 and the view-model to "test-view".

3. "Show TestView2" which sets the model to 3 and the view-model to "test-view2".

4. "Another test" which sets the model to 4 and the view-model first to "test-view2" and then immediately back to "test-view".

Here I had assumed it would work as in Durandal which means that the activate method of the test-view gets called with the correct id no matter what button I press, but this is unfortunately not the case here.

In Aurelia the activate method of the test-view doesn't seem to get called unless I change the value of the view-model to another value.

That is if I press button 1, 2 or 4 without hitting button 3 in between the view doesn't update.

Is this a bug or by design? If it's by design is there another way to "re-activate" or notify the composed view so it can change it's appearance based on the new id? Preferably through the compose binding without having to involve sending events through the event-aggregator which I suppose I will have to do as a plan B.


###Below is the old text that I wrote to explain issue #1 in the templating-resources that was fixed in version 0.8.6.
https://github.com/aurelia/templating-resources/issues/10

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

