import React from "react";
import styles from "../../../styles/calculator.module.css"
import { useState } from "react";
import Link from "next/link";

export default function Calculator() {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");
    const ops = ["*", "-", ".", "+", "/"];
    const updateCalc = value => {
        if (
            ops.includes(value) && calc === "" ||
            ops.includes(value) && ops.includes(calc.slice(-1))
        ) { return; }
        setCalc(calc + value);
        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString());
        }
    }
    const calculate = () => {
        setCalc(eval(calc).toString());
    }
    const del = () => {
        if (calc == '') {
            return;
        }
        const value = calc.slice(0, - 1);
        setCalc(value)
        setResult(value)
    }
    const clear = () => {
        setCalc("")
        setResult("")
    }
    const c = () => {

    }

    return (
        <div className={styles.bodycalc}>
            <Link href="/" id={styles.homes}>Back to Home</Link>
            <div id={styles.calc}>
                <h3>Calculator</h3>
                <div id={styles.op}>
                    <div id={styles.previousop}>
                        {result ? <span>{result}</span> : ""}&nbsp;
                    </div>
                    <div id={styles.currentop}>
                        {calc || "0"}&nbsp;
                    </div>
                </div>
                <div id={styles.wrapperbuttons}>
                    <button onClick={clear}
                        className={styles.opbutton} id={styles.ce}>CE</button>
                    <button onClick={del}
                        className={styles.opbutton}>DEL</button>
                    <button onClick={() => updateCalc("/")}
                        className={styles.opbutton}>/</button>
                    <button onClick={() => updateCalc("7")}
                        className={styles.number}>7</button>
                    <button onClick={() => updateCalc("8")}
                        className={styles.number}>8</button>
                    <button onClick={() => updateCalc("9")}
                        className={styles.number}>9</button>
                    <button onClick={() => updateCalc("*")}
                        className={styles.opbutton} id="mult">X</button>
                    <button onClick={() => updateCalc("4")}
                        className={styles.number}>4</button>
                    <button onClick={() => updateCalc("5")}
                        className={styles.number}>5</button>
                    <button onClick={() => updateCalc("6")}
                        className={styles.number}>6</button>
                    <button onClick={() => updateCalc("-")}
                        className={styles.opbutton} id="min">-</button>
                    <button onClick={() => updateCalc("1")}
                        className={styles.number}>1</button>
                    <button onClick={() => updateCalc("2")}
                        className={styles.number}>2</button>
                    <button onClick={() => updateCalc("3")}
                        className={styles.number}>3</button>
                    <button onClick={() => updateCalc("+")}
                        className={styles.opbutton} id="plus">+</button>
                    <button onClick={() => updateCalc("0")}
                        className={styles.number}>0</button>
                    <button onClick={() => updateCalc(".")}
                        className={styles.opbutton} >.</button>
                    <button onClick={calculate}
                        className={styles.opbutton} id={styles.equal}>=</button>
                </div>
            </div>
        </div>
    )
}