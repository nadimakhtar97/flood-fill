// import React,{useContext} from 'react';
// import { ApplicationContext } from '../Context/ApplicationContext';



// const {row,col} = useContext(ApplicationContext);
// console.log(row,col);
// let dx = [0,0,1,-1];
// let dy = [1,-1,0,0];
// let visited = new boolean[30][30];
// let gr = [[],[],[]];

// function Floodfill(x,y){

//     visited[row][col] = true;

//     for(let k=0;k<4;k++){
//         let xx = x + dx[k];
//         let yy = y + dy[k];

//         if( xx < row && xx >= 0 && yy < col && yy >= 0 && gr[xx][yy] === 0)
//             Floodfill(xx,yy);
//     }
// }

