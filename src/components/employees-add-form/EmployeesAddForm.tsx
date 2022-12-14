import React from "react";
import './EmployeesAddForm.css'

export const EmployeesAddForm = () => {
    return (
        <div className="EmployeesAddForm">
            <p>Add new employees</p>
            <form
                className="add-form d-flex">
                <input type="text"
                       className="InputPanelAddForm InputName"
                       placeholder="Name" />
                <input type="number"
                       className="InputPanelAddForm InputSalary"
                       placeholder="Salary $" />

                <button type="submit"
                        className="Buttons">Add</button>
            </form>
        </div>
    )
}