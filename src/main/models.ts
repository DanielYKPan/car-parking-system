export type Car = {
    licencePlate: string;
    size: string;
    fuel: {
      capacity: number;
      level: number;
    };
  };
  
  export type Job = {
    licencePlate: string;
    fuelAdded: number; // Amount of fuel added in litres
    price: number;
  };
  
  export type Assignment = { employee: string } & Job;
  
  export type Employee = {
    id: string;
    rate: number;
  };
  
  export type EmployeeWorkLoad = {
    refuelTask: number;
    totalTask: number;
  } & Employee;
  