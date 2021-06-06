import { Car, Employee } from "./models";

export const cars: Car[] = [
  {
    licencePlate: "A",
    size: "large",
    fuel: {
      capacity: 57,
      level: 0.07
    }
  },
  {
    licencePlate: "B",
    size: "large",
    fuel: {
      capacity: 66,
      level: 0.59
    }
  },
  {
    licencePlate: "C",
    size: "large",
    fuel: {
      capacity: 54,
      level: 0.49
    }
  },
  {
    licencePlate: "D",
    size: "large",
    fuel: {
      capacity: 79,
      level: 0.93
    }
  },
  {
    licencePlate: "E",
    size: "large",
    fuel: {
      capacity: 94,
      level: 0.2
    }
  },
  {
    licencePlate: "F",
    size: "large",
    fuel: {
      capacity: 57,
      level: 0.1
    }
  },
  {
    licencePlate: "G",
    size: "small",
    fuel: {
      capacity: 56,
      level: 0.05
    }
  },
  {
    licencePlate: "H",
    size: "small",
    fuel: {
      capacity: 61,
      level: 0.78
    }
  },
  {
    licencePlate: "I",
    size: "small",
    fuel: {
      capacity: 60,
      level: 0.65
    }
  },
  {
    licencePlate: "J",
    size: "large",
    fuel: {
      capacity: 63,
      level: 0.01
    }
  }
];

export const employees: Employee[] = [
  { id: "A", rate: 0.11 },
  { id: "B", rate: 0.15 }
];

export const fuelRate: number = 1.75;

export const parkingPrice: { [key: string]: number } = {
  large: 35,
  small: 25
};

export const refuelMinLevel: number = 0.1;
