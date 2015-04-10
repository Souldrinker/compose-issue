import Sortable from "RubaXa/Sortable";
import {computedFrom} from 'aurelia-framework';

export class Welcome{
  heading = 'Welcome to the Aurelia Navigation App!';
  firstName = 'John';
  lastName = 'Doe';
  sortableTexts = ['Text1','Text2'];

  //Getters can't be observed with Object.observe, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below.
  //@computedFrom('firstName', 'lastName')
  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  welcome(){
    alert(`Welcome, ${this.fullName}!`);
  }
  
    attached(){
	  this.setupSortable();
  }
  
      setupSortable(){
        const container = document.getElementById("sortableDiv");
        this.sort = Sortable.create(container, {
            animation: 150, // ms, animation speed moving items when sorting, `0` — without animation
            onUpdate: ((evt) => {
                this.reorder(evt.oldIndex, evt.newIndex);
            })
        });
    }

	reorder(from, to){
		this.sortableTexts.splice(to, 0, this.sortableTexts.splice(from, 1)[0]);
	}

}

export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}
