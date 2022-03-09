import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingType, HouseType} from "../02/02_02";

export const sum = (a: number, b: number) => {
    return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (student: StudentType) => {
    student.isActive = true;
}

export const doesStudentLiveInCity = (student: StudentType, cityName: string) => {
    return student.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget;

    }

    export const repairHouse = (house: HouseType) => {
    house.repaired = true;
    }

    export const toFireStaff = (governmentBuildingType: GovernmentBuildingType, staffCountToFire: number) => {
        governmentBuildingType.staffCount -= staffCountToFire;
    }

    export const toHireStaff = (building: GovernmentBuildingType, staffCountToHire: number) => {
        building.staffCount += staffCountToHire

    }

    export const createMessage = (props: CityType) => {
    return  `Hello ${props.title} citizens. I want you be happy. All of ${props.citizensNumber} men!`
    }