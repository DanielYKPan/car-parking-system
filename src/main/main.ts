import {
    refuelMinLevel,
    fuelRate,
    parkingPrice,
    cars as carsInput,
    employees as employeesInput
  } from "./inputs";
  import {
    analyseCarJobs,
    analyseWorkLoad,
    distributeAssignments
  } from "./services";
  
  /**
   * Parking System main function
   */
  const process = () => {
    const { normalJobs, refuelJobs } = analyseCarJobs({
      cars: carsInput,
      fuelRate,
      parkingPrice,
      refuelMinLevel
    });
  
    const employeesWorkLoad = analyseWorkLoad({
      normalJobs,
      refuelJobs,
      employees: employeesInput
    });
  
    const { refuelAssignments, normalAssignments } = distributeAssignments({
      normalJobs,
      refuelJobs,
      employeesWorkLoad
    });
  
    // system printing the json format results to console
    console.log("---------- Assignments ----------", [
      ...refuelAssignments,
      ...normalAssignments
    ]);
  };
  
  export default process;
  