import StudentXYZ from './Student.js'

export class StudentWithAddress extends StudentXYZ {
  constructor(name, age, address) {
    super(name, age)
    this.address = address
  }

  getInfoStudent() {
    console.log(`Ten: ${this.name} - Tuoi: ${this.age} - DiaChi: ${this.address}`);
  }
}