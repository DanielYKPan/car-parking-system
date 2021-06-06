import { Car, Job, Employee, EmployeeWorkLoad, Assignment } from "./models";

/**
 * Rounded a number
 */
const roundedToFixed = (input: number, digits: number = 2): number => {
  const rounded = Math.pow(10, digits);
  return +(Math.round(input * rounded) / rounded).toFixed(digits);
};

/**
 * Calculate every cars price
 */
const analyseCarJobs = (params: {
  cars: Car[];
  fuelRate: number;
  refuelMinLevel: number;
  parkingPrice: { [key: string]: number };
}): { normalJobs: Job[]; refuelJobs: Job[] } => {
  const { cars, fuelRate, refuelMinLevel, parkingPrice } = params;
  let normalJobs: Job[] = []; // car parking jobs
  let refuelJobs: Job[] = []; // car parking & refuel jobs

  for (const c of cars) {
    const fuelAdded =
      c.fuel.level <= refuelMinLevel
        ? roundedToFixed(c.fuel.capacity * (1 - c.fuel.level))
        : 0;

    if (fuelAdded > 0) {
      const fuelPrice = roundedToFixed(fuelAdded * fuelRate);
      const price = parkingPrice[c.size] + fuelPrice;
      const job = {
        licencePlate: c.licencePlate,
        fuelAdded,
        price
      };
      refuelJobs = [...refuelJobs, job];
    } else {
      const price = parkingPrice[c.size];
      const job = {
        licencePlate: c.licencePlate,
        fuelAdded,
        price
      };
      normalJobs = [...normalJobs, job];
    }
  }

  refuelJobs = refuelJobs.sort((a, b) => (a.price < b.price ? 1 : -1));
  normalJobs = normalJobs.sort((a, b) => (a.price < b.price ? 1 : -1));

  return { normalJobs, refuelJobs };
};

/**
 * Calculate every employees workload
 */
const analyseWorkLoad = (params: {
  normalJobs: Job[];
  refuelJobs: Job[];
  employees: Employee[];
}): EmployeeWorkLoad[] => {
  const { normalJobs, refuelJobs, employees } = params;
  const totalJobAmount = normalJobs.length + refuelJobs.length;

  // calculate minimum car jobs per employee
  const remainder = totalJobAmount % employees.length;
  const minimumCarsPerEmployee = Math.floor(totalJobAmount / employees.length);

  // calculate minimun refuel jobs per employee
  const refuelRemainder = refuelJobs.length % employees.length;
  const minimumRefuelCarsPerEmployee = Math.floor(
    refuelJobs.length / employees.length
  );

  const employeesSortedByRate = employees.sort((a, b) =>
    a.rate > b.rate ? 1 : -1
  );

  const workLoad = employeesSortedByRate.map((employee, index) => {
    const refuelTask =
      minimumRefuelCarsPerEmployee + (index < refuelRemainder ? 1 : 0);
    const totalTask = minimumCarsPerEmployee + (index < remainder ? 1 : 0);

    return {
      ...employee,
      refuelTask,
      totalTask
    };
  });

  return workLoad;
};

/**
 * Distribute an employee to his assignments
 */
const distributeEmployeeAssignments = (params: {
  jobs: Job[];
  employeeTask: number;
  numberOfTakenJobs: number;
  employee: EmployeeWorkLoad;
}): any => {
  const { jobs, employeeTask, numberOfTakenJobs, employee } = params;
  const employeeJobs = jobs.slice(
    numberOfTakenJobs,
    numberOfTakenJobs + employeeTask
  );
  return employeeJobs.map((j) => ({ ...j, employee: employee.id }));
};

/**
 * Distribute all employees to their assignments
 */
const distributeAssignments = (params: {
  normalJobs: Job[];
  refuelJobs: Job[];
  employeesWorkLoad: EmployeeWorkLoad[];
}): { normalAssignments: Assignment[]; refuelAssignments: Assignment[] } => {
  const { normalJobs, refuelJobs, employeesWorkLoad } = params;

  let normalAssignments: Assignment[] = [];
  let refuelAssignments: Assignment[] = [];

  for (const employee of employeesWorkLoad) {
    // assign refuel jobs to an employee
    const employeeRefuelAssignments = distributeEmployeeAssignments({
      jobs: refuelJobs,
      employeeTask: employee.refuelTask,
      numberOfTakenJobs: refuelAssignments.length,
      employee
    });
    refuelAssignments = [...refuelAssignments, ...employeeRefuelAssignments];

    // assign normal jobs to an employee
    const employeeNormalTask = employee.totalTask - employee.refuelTask;
    const employeeNormalAssignments = distributeEmployeeAssignments({
      jobs: normalJobs,
      employeeTask: employeeNormalTask,
      numberOfTakenJobs: normalAssignments.length,
      employee
    });
    normalAssignments = [...normalAssignments, ...employeeNormalAssignments];
  }

  return { refuelAssignments, normalAssignments };
};

export { analyseCarJobs, analyseWorkLoad, distributeAssignments };
