const student = {
  name: "Yash",
  age: 23,
  eng: 95,
  math: 98,
  phy: 95,
  getAvg() {
    console.log(this);
    // let avg = (eng + math + phy) / 3;
    let avg = (this.eng + this.math + this.phy) / 3;
    console.log(`${this.name} got an average marks ${avg}`);
  },

};


function getAvg() {
    console.log(this);
    // let avg = (eng + math + phy) / 3;
    // let avg = (this.eng + this.math + this.phy) / 3;
    // console.log(`${this.name} got an average marks ${avg}`);
  }

getAvg();


// For node
// console.log(student);
// console.log(student.getAvg());


