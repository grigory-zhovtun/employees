import React from "react";
import {EmployeesListItem} from "../employees-list-item/EmployeesListItem";
import './EmployeesList.css'

export const EmployeesList = () => {
    return (
        <ul className="EmployeesList">
            <EmployeesListItem/>
            <EmployeesListItem/>
            <EmployeesListItem/>
        </ul>
    )
}