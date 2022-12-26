import React from "react";
import './ImployeesListItem.css'

type EmployeesListItemPropsType = {
    name: string
    salary: number
    grow: boolean
    id: string
}

export const EmployeesListItem = ({name, salary, grow}:EmployeesListItemPropsType) => {
    const classNamePersonName = grow
            ? 'PersonName' + ' ' + 'Increase'
            : 'PersonName'
    const classNamePersonSalary = grow
        ? 'PersonSalary' + ' ' + 'Increase'
        : 'PersonSalary'

    return (
        <li className="EmployeesListItem">
            <span className={classNamePersonName}>{name}</span>
            <input type="text" className={classNamePersonSalary} defaultValue={salary + '$'}/>
            <div className='IconGoup'>
                <div className="Grow">
                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_24_27)">
                            <path d="M20.5 29.7C13.2235 29.7 7.3 23.7765 7.3 16.5C7.3 9.2235 13.2235 3.3 20.5 3.3C27.7765 3.3 33.7 9.2235 33.7 16.5C33.7 23.7765 27.7765 29.7 20.5 29.7ZM20.5 33C29.608 33 37 25.608 37 16.5C37 7.392 29.608 0 20.5 0C11.392 0 4 7.392 4 16.5C4 25.608 11.392 33 20.5 33ZM18.85 16.5V23.1H22.15V16.5H27.1L20.5 9.9L13.9 16.5H18.85Z" fill="#CB6507"/>
                        </g>
                        <defs>
                            <filter id="filter0_d_24_27" x="0" y="0" width="41" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_24_27"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_24_27" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                    <i className=""></i>
                </div>
                <div className="Delete">
                    <svg width="37" height="41" viewBox="0 0 37 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_20_77)">
                            <path d="M6.02988 29.3333C6.02988 31.35 7.85677 33 10.0896 33H26.3286C28.5615 33 30.3884 31.35 30.3884 29.3333V7.33333H6.02988V29.3333ZM11.0234 16.28L13.8855 13.695L18.2091 17.5817L22.5125 13.695L25.3746 16.28L21.0713 20.1667L25.3746 24.0533L22.5125 26.6383L18.2091 22.7517L13.9058 26.6383L11.0437 24.0533L15.347 20.1667L11.0234 16.28ZM25.3137 1.83333L23.2838 0H13.1344L11.1046 1.83333H4V5.5H32.4183V1.83333H25.3137Z" fill="url(#paint0_linear_20_77)" shape-rendering="crispEdges"/>
                        </g>
                        <defs>
                            <filter id="filter0_d_20_77" x="0" y="0" width="36.4183" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_77"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_77" result="shape"/>
                            </filter>
                            <linearGradient id="paint0_linear_20_77" x1="-8.48682" y1="-9.5" x2="55.4824" y2="38.4931" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#EB3223"/>
                                <stop offset="0.657489" stop-color="#EB3223" stop-opacity="0.5"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <i className=""></i>
                </div>
                <i className=""></i>
            </div>
        </li>
    )
}