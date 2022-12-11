import React from "react";
import './ImployeesListItem.css'

export const EmployeesListItem = () => {
    return (
        <li className="EmployeesListItem">
            <span className="">John Smith</span>
            <input type="text" className="" defaultValue="1000$"/>
            <div className=''>
                <button type="button"
                        className="">
                    <i className=""></i>
                </button>

                <button type="button"
                        className="">
                    <i className=""></i>
                </button>
                <i className=""></i>
            </div>
        </li>
    )
}