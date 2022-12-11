import React from "react";
import "./AppFilter.css"

export const AppFilter = () => {
    return (
        <div className="btn-group">
            <button type="button"
                    className="Buttons">
                All
            </button>
            <button type="button"
                    className="Buttons">
                Grow
            </button>
            <button type="button"
                    className="Buttons">
                Salary more 1000$
            </button>
        </div>
    )
}