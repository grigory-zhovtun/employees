import React from "react";
import {EmployeesListItem} from "../employees-list-item/EmployeesListItem";
import './EmployeesList.css'

import {DataType} from "../app/App";

type EmployeesListPropsType = {
    data: DataType[]
}

export const EmployeesList = ({data}: EmployeesListPropsType) => {
    const EmployeesListItemComponent = data.map(item => {
        return <EmployeesListItem key={item.id} {...item}/>
    })
    return (
        <ul className="EmployeesList">
            {EmployeesListItemComponent}
        </ul>
    )
}