# compose-issue
I've previously used this slightly modified version of the skeleton-navigation app to report now fixed bugs to compose bindings, thus the project name. 

It's now rebased upon the 0.12 version of the skeleton app to show a new issue that showed up after upgrading to the latest Aurelia version released 2015-04-09 that don't exist in earlier versions.

##The new issue
In some places in my "real" app I use the RubaXa/Sortable library to be able to grab on to and reorder various parts in the application.

This has worked quite well up until the April 9th release of Aurelia where it started to show strange behaviors, namely it creates copies of the things I drag/drop.

The things I've added here after grabbing a copy of the latest skeleton app is:

###welcome.html
At the end of the file I've added a div with id "sortableDiv" with contains another div with a repeat.for on a list of strings that it shows in spans inside.

###welcome.js
Here I import the RubaXa/Sortable, create an string array (sortableTexts), call a method in the attached method to setup the sortable and calls reorder onUpdate.

In the reorder function I do pretty much what I do in my real app, that is reorder the underlying array based on the drag/drop operation so it is in sync with the UI so I then can pass it down to the server to store the new sort order.

###Summary
In this version based on the latest Aurelia the list of strings looks ok initially:

Text1<br />
Text2

But when I try to drag Text1 below Text2 I end up with:

Text2<br />
Text1<br />
Text1

That is Text1 gets duplicated in the UI (but not in the underlying array).

Then if I try to drag Text2 to the bottom I end up with:

Text1<br />
Text1<br />
Text2<br />
Text2

Before the upgrade to the latest Aurelia (and also if I try with the 0.11 skeleton) I only have the initial two texts showing up.

Is this a new bug in the binding? Is it a bug in the Sortable library (that seemingly worked fine earlier)? Or is my code buggy?