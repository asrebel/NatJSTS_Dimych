import React from "react";

export type ManType2 = {
    name: string
    age: number
    lessons:  Array<{title: string}>
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title1: string
    man: ManType2
    food: Array<string>
    car: {model: string}

}

export const ManComponent: React.FC<PropsType> = ({title1, man, ...props}) => {


    return (
        <div>
            <h1>{title1}</h1>
            <hr/>
            <div>
                {man.name}
            </div>
            <div>
                {props.car.model}
            </div>
        </div>
    )
}