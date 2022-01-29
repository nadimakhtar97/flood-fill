import React,{useContext} from "react";
import Controller from "../Components/Controller/Controller";
import Matrix from "../Components/Matrix/Matrix";
import { ApplicationProvider,ApplicationContext } from "../Context/ApplicationContext";


function Layout(props) {
    // const { row, col } = useContext(ApplicationContext);
    // console.log("row = ",row," col = ",col);
    // let dx = [0, 0, 1, -1];
    // let dy = [1, -1, 0, 0];
    // const visited = new Array(row).fill(0).map(() => new Array(col).fill(0));
    // const matrix = new Array(row).fill(1).map(() => new Array(col).fill(1));

    // function Floodfill(x, y) {

    //     visited[row][col] = 1;

    //     for (let k = 0; k < 4; k++) {
    //         let xx = x + dx[k];
    //         let yy = y + dy[k];

    //         if (xx < row && xx >= 0 && yy < col && yy >= 0 && visited[xx][yy] === 0)
    //             Floodfill(xx, yy);
    //     }
    // }

    


    return (
        <>
                <h1>FLOOD FILL ALGORITHM</h1>
                <Matrix></Matrix>
                {/* <Controller></Controller> */}
        </>
    )
}


export default Layout;