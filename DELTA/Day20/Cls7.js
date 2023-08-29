const student = {
  name: "Yash",
  marks: 97,
  prop: this, //Global scope
  getName: function () {
    console.log(this);
    return this.name;
  },
  getMarks: () => {
    console.log(this); //Parent's scope --> Window
    return this.marks;
  },
  getInfo: function () {
    setTimeout(() => {
      console.log(this);  //student
    }, 2000);
  },
  getInfo2: function () {
    setTimeout(function () {
      console.log(this);  //window
    }, 2000);
  },
};

// const a = 5; //Global scope
