import {AppInfo} from "../app-info/AppInfo";
import React from "react";
import {AppFilter} from "../app-filter/AppFilter";
import {EmployeesList} from "../employees-list/EmployeesList";
import {EmployeesAddForm} from "../employees-add-form/EmployeesAddForm";
import {SearchPanel} from "../search-panel/SearchPanel";



import './App.css'
import {v1} from "uuid";

export type DataType = {
    name: string
    salary: number
    grow: boolean
    id: string
}

export const App = () => {
    const EmployeesData: DataType[] = [
        {name: "Alla Finagina", salary: 800, grow: false, id: v1()},
        {name: "Alina Burlakova", salary: 1800, grow: true, id: v1()},
        {name: "Grigory Zhovtun", salary: 15800, grow: false, id: v1()},
    ]

    return (
        <div className="container">
            <div className="App">
                <AppInfo/>

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList data={EmployeesData}/>
                <EmployeesAddForm/>
            </div>
        </div>
    )
}