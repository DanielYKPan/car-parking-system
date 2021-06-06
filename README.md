# Immutable X - Car Park Service System Code Challenge 

This Vanilla Typescript project involves creating a car park service system.

## Running the Project
1. Install Dependencies `yarn install`
2. Build the Project `yarn run build`
3. Running the project `yarn run start`

**Dependencies**

-   `typescript@^4.3.2`
-   `ts-node@^10.0.0`

## Disclaimer

Because there is some lack of information from the original test sheet, here are some assumptions that this system was based on:

-  WorkLoad are two types: Normal Car Service and Refuel Car Service
-  Because the employees are paid by commission (not by hours), we consider a workload of refueling a 50% capacity car equals to a workload of refueling a 80% capacity car. In other words, it doesn't matter how much fuel an employee needs to refuel into a car, they are all the same type of workload (Refuel Car Service)
-  "level" from the car inputs means percentage. `level: 0.05` means there is 5% fuel left in a car's tank.

## Design

Design a parking service system. The service offers parking in addition to refueling to vehicles that require it, there are two employees who work on commission and get paid different rates. The system is responsible for assigning the workload equally between the two employees in a way that favours profit.

-   Small cars pay a flat rate of $25 for parking and large vehicles pay $35.
-   Every car with 10% or less fuel, will be refueled to maximum capacity and charged the fuel amount in addition to the parking fee.
-   Employee A gets paid 11% commission over the final amount paid, while employee B gets paid 15%.
-   Fuel has a fixed rate of $1.75/litre.

**Requirements**
-  Your application should print a JSON-formatted array of assignments in the following format:
```
{
    "licencePlate": string,
    "employee": string,
    "fuelAdded": float, // Amount of fuel added in litres
    "price": float
}
```

-  Input for your application:
```
[{
    "licencePlate": "A",
    "size": "large",
    "fuel": {
        "capacity": 57,
        "level": 0.07
    }
}, {
    "licencePlate": "B",
    "size": "large",
    "fuel": {
        "capacity": 66,
        "level": 0.59
    }
}, {
    "licencePlate": "C",
    "size": "large",
    "fuel": {
        "capacity": 54,
        "level": 0.49
    }
}, {
    "licencePlate": "D",
    "size": "large",
    "fuel": {
        "capacity": 79,
        "level": 0.93
    }
}, {
    "licencePlate": "E",
    "size": "large",
    "fuel": {
        "capacity": 94,
        "level": 0.2
    }
}, {
    "licencePlate": "F",
    "size": "large",
    "fuel": {
        "capacity": 57,
        "level": 0.1
    }
}, {
    "licencePlate": "G",
    "size": "small",
    "fuel": {
        "capacity": 56,
        "level": 0.05
    }
}, {
    "licencePlate": "H",
    "size": "small",
    "fuel": {
        "capacity": 61,
        "level": 0.78
    }
}, {
    "licencePlate": "I",
    "size": "small",
    "fuel": {
        "capacity": 60,
        "level": 0.65
    }
}, {
    "licencePlate": "J",
    "size": "large",
    "fuel": {
        "capacity": 63,
        "level": 0.01
    }
}]
```

## Original Test Sheet
[Links](https://gist.github.com/maarcosd/d72e0e6bb97bfa32de9337ff6026864c)
