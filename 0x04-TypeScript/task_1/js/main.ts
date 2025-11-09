interface Directors extends Teacher {
  numberOfReports: number;
}

interface Teacher {
  firstName: string;
  lastName: string;
  location: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  [key: string]: any;
}

const director1: Directors = {
  firstName: "Last",
  lastName: "Sibanyoni",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);