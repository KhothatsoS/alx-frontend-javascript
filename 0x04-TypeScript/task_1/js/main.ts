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

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: "Last",
  lastName: "Sibanyoni",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);