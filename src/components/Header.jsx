import React from "react";
import { DAYS, MONTHS } from '../utils/date'

export default function Header() {
    const date = new Date()
    return (
        <div className="header">
            <h1>{DAYS[date.getDay()]}</h1>
            <span>{MONTHS[date.getMonth()]}, {date.getDate()}</span>
        </div>
    )
}
