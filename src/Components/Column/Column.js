// import React, { useContext, useEffect, useState } from "react";
// import { ApplicationContext } from "../../Context/ApplicationContext";
// import Cell from "../Cell/Cell";
// import styles from "../Column/Column.module.css";




// function Column(props) {

//     const {row,col,matrix,setMatrix,visited,setVisited} = useContext(ApplicationContext)
//     const [columns, setColumns] = useState([]);

//     let dx = [0,0,1,-1];
//     let dy = [1,-1,0,0];

//     function Floodfill(x,y){

//         console.log("inside");
//         console.log(visited);
//         console.log("visited[x][y] = ",visited[x][y])
//         let tempVisited = [...visited];
//         tempVisited[x][y] = 1;
//         console.log("tempVisited[x][y] = ",tempVisited[x][y])
//         setVisited([...tempVisited]);
//         let tempMatrix = [...matrix];
//         tempMatrix[x][y] = 0;
//         setMatrix([...tempMatrix]);
//         let newcol = [...columns];
//         newcol[y] = 0;
//         setColumns([...newcol]);


//         for(let i=0;i<4;i++){

//             let xx = x + dx[i];
//             let yy = y + dy[i];

//             if( xx<row && xx>=0 && yy<col && y>=0 && visited[xx][yy] === 0 && matrix[xx][yy]=== 2)
//                 Floodfill(xx,yy);
//         } 

//     }


//     useEffect(()=>{
//         let newcol = Array(col).fill(2);
//         // console.log("newcol = ",newcol);
//         setColumns([...newcol]);
//         // console.log("matrix in = ",props.x," ",props.mat);
//         // let newMatrix = [...props.mat];
//         // newMatrix.push(newcol);
//         // console.log("newMatrix = ",newMatrix);
//         // props.setMat([...newMatrix]);
//         // console.log("matrix = ",props.mat);
//         // console.log("use effect end");
//     },[])

//     console.log(" outside use effect matrix = ",matrix);


//     return (
//         <div className={styles.column}>
//             {columns.map((c,i) => <Cell x={props.x} color={c} y={i} key={i} handler={() => Floodfill(props.x,i)}></Cell>)}
//         </div>

//     );
// }


// export default Column;
