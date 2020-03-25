import React, { useState } from 'react';
import "./CalculatorStyle.css"

const Calculator = () => {
  let [count, setCount] = useState();
  let [firstVariable, setfirstVariable] = useState();
  let [secondVariable, setsecondVariable] = useState();

  const keys = [
    {
      id: 0,
      value: "7"
    },
    {
      id: 1,
      value: "8"
    },
    {
      id: 2,
      value: "9"
    },
    {
      id: 3,
      value: "/"
    },
    {
      id: 4,
      value: "4"
    },
    {
      id: 5,
      value: "5"
    },
    {
      id: 6,
      value: "6"
    },
    {
      id: 7,
      value: "x"
    },
    {
      id: 8,
      value: "1"
    },
    {
      id: 9,
      value: "2"
    },
    {
      id: 10,
      value: "3"
    },
    {
      id: 11,
      value: "-"
    },
    {
      id: 12,
      value: "0"
    },
    {
      id: 13,
      value: "."
    },
    {
      id: 14,
      value: "="
    },
    {
      id: 15,
      value: "+"
    },
  ]

  const HandelAction = (e) => {
    if (firstVariable === undefined)
      if (e === "=" || e === "+" || e === "x" || e === "/" || e === ".") {
      }
      else
        setfirstVariable(e)
    else {
      if (e === "+" || e === "-" || e === "x" || e === "/") {
        if (!secondVariable)
          setCount(e)
        if (firstVariable && secondVariable) {
          if (count === "+") {
            let result = (parseFloat(firstVariable) + parseFloat(secondVariable))
            setfirstVariable(String(result))
            setsecondVariable(undefined)
            setCount(e)
          }
          if (count === "-") {
            let result = (parseFloat(firstVariable) - parseFloat(secondVariable))
            setfirstVariable(String(result))
            setsecondVariable(undefined)
            setCount(e)
          }
          if (count === "x") {
            let result = (parseFloat(firstVariable) * parseFloat(secondVariable))
            setfirstVariable(String(result))
            setsecondVariable(undefined)
            setCount(e)
          }
          if (count === "/") {
            if (secondVariable !== "0") {
              let result = (parseFloat(firstVariable) / parseFloat(secondVariable))
              setfirstVariable(String(result))
              setsecondVariable(undefined)
              setCount(e)
            }
            else {
              alert("Nie dzieli sie przez 0")

            }


          }
        }
      }
      else {
        if (count) {
          if (!secondVariable) {

            if (e !== "=" && e !== ".")
              setsecondVariable(e)
          }
          else
            if (e !== "=")
              if (e === ".") {
                if (secondVariable.indexOf(".") === -1) {
                  setsecondVariable(secondVariable += e)
                }
              } else
                setsecondVariable(secondVariable += e)
        }
        else {
          if (e !== "=")
            if (e === ".") {
              if (firstVariable.indexOf(".") === -1) {
                setfirstVariable(firstVariable += e)
              }
            } else
              setfirstVariable(firstVariable += e)
        }
        if (firstVariable && secondVariable) {
          if (e === "=") {
            if (count === "+") {
              let result = (parseFloat(firstVariable) + parseFloat(secondVariable))
              setfirstVariable(String(result))

            }
            if (count === "-") {
              let result = (parseFloat(firstVariable) - parseFloat(secondVariable))
              setfirstVariable(String(result))

            }
            if (count === "x") {
              let result = (parseFloat(firstVariable) * parseFloat(secondVariable))
              setfirstVariable(String(result))

            }
            if (count === "/") {
              if (secondVariable !== "0") {
                let result = (parseFloat(firstVariable) / parseFloat(secondVariable))
                setfirstVariable(String(result))
              }
              else {
                alert("Nie dzieli sie przez 0")

              }

            }

            setsecondVariable(undefined)
            setCount(undefined)
          }

        }
      }
    }
  }

  const handleBack = () => {
    if (!secondVariable) {
      if (!count) {
        if (firstVariable) {
          setfirstVariable(firstVariable.slice(0, -1))
        }
      }
    }
    if (count) {
      if (!secondVariable) {
        setCount(null)
      }
    }
    if (secondVariable) {
      setsecondVariable(secondVariable.slice(0, -1))
    }
  }

  const handleClear = () => {
    setfirstVariable(undefined)
    setsecondVariable(undefined)
    setCount(undefined)
  }

  return (
    <div className="calculatorBackground">
      <div className="calculatorContainer">
        <div className="topScreen" >
          {firstVariable} {count} {secondVariable}
        </div>
        <div className="downScreen" >
          {secondVariable ? secondVariable : !firstVariable ? 0 : firstVariable}
        </div>
        <div className="buttonsContainer">
          <div className="clear" onClick={() => handleClear()}>CLEAR</div>
          <div className="back" onClick={() => handleBack()}>BACK</div>
        </div>
        <div className="keysArea">
          {keys.map((item, index) =>
            <div key={index} className="keys" onClick={() => HandelAction(item.value)}>
              <p >{item.value}</p>
            </div>
          )}

        </div>
      </div>
    </div >
  );
}

export default Calculator;