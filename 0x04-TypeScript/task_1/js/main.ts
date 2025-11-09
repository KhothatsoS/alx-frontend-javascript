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

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName, lastName): string {
  return `${firstName}. ${lastName}`;
}

console.log(printTeacher("Last", "Sibanyoni"));
