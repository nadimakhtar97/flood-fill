import React, { useContext,useEffect,useState } from "react";
import styles from "../Cell/Cell.module.css";
import {ApplicationContext} from '../../Context/ApplicationContext';


function Cell(props) {

    return (
        <div  className={`${props.color === 0 ? styles.water : props.color === 1 ? styles.mountain : styles.land} ${styles.size}`} onClick={props.handler}>{props.x}</div>
    )
}

export default Cell;