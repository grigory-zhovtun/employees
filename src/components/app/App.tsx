import {AppInfo} from "../app-info/AppInfo";
import React from "react";
import {AppFilter} from "../app-filter/AppFilter";
import {EmployeesList} from "../employees-list/EmployeesList";
import {EmployeesAddForm} from "../employees-add-form/EmployeesAddForm";
import {SearchPanel} from "../search-panel/SearchPanel";

import './App.css'

export const App = () => {
    return (
        <div className="container">
            <div className="App">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList/>
                <EmployeesAddForm/>
            </div>
        </div>
    )
}