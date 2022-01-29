import React, { useState, useContext, useEffect } from "react";
import styles from "../Matrix/Matrix.module.css";
import Cell from "../Cell/Cell";


// 2--> land
// 0--> water
// 1 --> mountain


function Matrix(props) {

  const [matrix, setMatrix] = useState([]);
  const [visited, setVisited] = useState([]);


  const [queue, setQueue] = useState([])


  const [isRunning, setIsRunning] = useState(false)


  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }


  async function Floodfill(x, y, fromCell = false) {
    //if visited
    if (visited[x][y] === 1) {
      const tempVisited = [...visited]
      setVisited(tempVisited)
      return
    }
    if (fromCell && isRunning) {
      const tempVisited = [...visited]
      setVisited(tempVisited)
      return
    }
    setIsRunning(true)

    await sleep(20);
    // console.log(x, y);

    let tempVisited = [...visited];
    tempVisited[x][y] = 1;

    let tempMatrix = [...matrix];
    tempMatrix[x][y] = 0;



    for (let i = 0; i < 4; i++) {
      let xx = x + dx[i];
      let yy = y + dy[i];

      if (xx < 15 && xx >= 0 && yy < 15 && yy >= 0 && tempVisited[xx][yy] === 0 && tempMatrix[xx][yy] === 2) {
        queue.push([xx, yy])
      }
    }

    setQueue(queue)
    setMatrix([...tempMatrix]);
    setVisited([...tempVisited]);

  }

  useEffect(() => {
    if (queue.length) {
      const [x, y] = queue.shift();
      setQueue(queue);
      Floodfill(x, y);
    }
  }, [visited]);

  useEffect(() => {
    let tempMatrix = Array(15).fill().map(x => Array(15).fill(2));
    setMatrix([...tempMatrix]);
    let tempVisited = Array(15).fill().map(x => Array(15).fill(0));
    setVisited([...tempVisited]);
  }, [])


  return (
    <div className={styles.Matrix}>
      {matrix.map((items, rowIndex) => {
        return (
          <div key={rowIndex}>
            {items.map((col, colIndex) => {
              return <> {<Cell x={rowIndex} y={colIndex} color={col} key={colIndex} handler={() => Floodfill(rowIndex, colIndex, true)}></Cell>} </>;
            })}
          </div>
        );
      })}
    </div>

  )



}


export default Matrix;