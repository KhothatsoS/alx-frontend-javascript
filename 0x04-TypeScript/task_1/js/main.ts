interface Teacher {
  firstName: string;
  lastName: string;
  location: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'Last',
  fullTimeEmployee: false,
  lastName: 'Sibanyoni',
  location: 'London',
  contract: false,
};

console.log(teacher3);

interface Director extends Teacher {
  numberOfReports: number;
}

const director1: Director = {
  firstName: "Last",
  lastName: "Sibanyoni",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

interface Teacher {
  firstName: string;
  lastName: string;
}

interface printTeacherFunction {
  (teacher: Teacher): string;
}

const printTeacher: printTeacherFunction = ({ firstName, lastName }) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher({ firstName: "Last", lastName: "Sibanyoni" }));

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

console.log(printTeacher("Last", "Sibanyoni"));
