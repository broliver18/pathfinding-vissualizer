import React from "react";
import "./Node.css";

import StartIcon from "../Icons/StartIcon";
import TargetIcon from "../Icons/TargetIcon";

function Node(props) {
  const {
    col,
    row,
    isFinish,
    isStart,
    isWall,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseUp,
  } = props;

  const extraClassName = isFinish
    ? "node-finish"
    : isStart
    ? "node-start"
    : isWall
    ? "node-wall"
    : "";

    function renderAction() {
      if (isFinish) return <TargetIcon/>
      else if (isStart) return <StartIcon/>
    }

  return (
    <div
      id={`node-${row}-${col}`}
      className={`node ${extraClassName}`}
      onMouseDown={() => onMouseDown(row, col, isStart, isFinish)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseLeave={() => onMouseLeave(row, col)}
      onMouseUp={() => onMouseUp()}
    >{renderAction()}</div>
  );
}

export default Node;
