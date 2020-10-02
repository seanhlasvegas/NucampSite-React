class Student {
  constructor(name, email, community) {
    this.name = name;
    this.email = email;
    this.community = community;
  }
}

class Bootcamp {
  constructor(name, level, students = []) {
    this.name = name;
    this.level = level;
    this.students = students;
  }

  registerStudent(student) {
    const check = this.students.filter((item) => item.email === student.email);
    if (check.length === 0) {
      this.students.push(student);
      console.log(
        `Registering ${student.email} to the bootcamp ${student.community}`
      );
      return;
    }
    console.log(
      `${student.email} already exists. Please use another email address to register.`
    );
  }
}

const student1 = new Student("Carter", "carterstenhoff@gmail.com", "React");
const student2 = new Student("Tim", "carterstenhoff@gmail.com", "React");
const bootcamp1 = new Bootcamp("Nucamp", "Advanced");

bootcamp1.registerStudent(student1);
bootcamp1.registerStudent(student2);

console.log(bootcamp1.students);
