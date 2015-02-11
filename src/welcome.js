export class Welcome{
  constructor(){
    this.heading = 'Welcome to the Aurelia Navigation App!';
    this.firstName = 'John';
    this.lastName = 'Doe';
    this.id = 0;
    this.viewName = null;
    this.stuffHolder = new Array();
    this.stuff = null;
  }

  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  welcome(){
    alert(`Welcome, ${this.fullName}!`);
  }

  showTestView(){
    this.id = '1';
    this.viewName = 'test-view';
    this.stuff = {id: '1', viewName: 'test-view'};
    this.stuffHolder = new Array(this.stuff);
  }

  showWithId(id){
    this.id = id;
    this.viewName = 'test-view';
  }

  showTestView2(){
    this.id = 3;
    this.viewName = 'test-view2';
  }

  showAnotherTest(){
    this.id = 4;
    this.viewName = 'test-view2';
    this.viewName = 'test-view';
  }
}

export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}
