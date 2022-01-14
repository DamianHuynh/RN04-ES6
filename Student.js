class Student {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  getInfoStudent() {
    console.log(`Ten: ${this.name} - Tuoi: ${this.age}`);
  }
}


export default Student