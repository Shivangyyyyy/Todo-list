import React from 'react'
import {Typography , Button ,Paper} from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

 const SingleTask = ({v,i,doneHandler,deHandler}) => {
    return (
            <>
                <Paper 
               elevation ={4}
               style={{
                  display:"flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  margin:"1.5%",
                  color: "rgb(117, 21, 100)",
                  background:v.done? "#0afaca" :"#white",

               }}> 
                  <Typography variant="caption">{i+1}  style={{
                     color: "black",
                  
                  }}    </Typography>{" "}
                  <Typography variant="h4"
                  style={{
                     textDecoration:v.done && "Line-through" , color :v.done && "#d7dbde"
                  }}>
                  {v.title}     </Typography>{" "}

                  <div style={{
                     margin:"3%",
                     padding:"1%", }}>
                     <Button
                        onClick={() => doneHandler (v.id)}
                        color="success"
                        variant="contained"
                        startIcon={v.done? <CheckCircleIcon/> : <CheckCircleOutlineIcon/>} >
                        {" "}
                        {v.done ? "undone" : "done"}

                        </Button>
                        <Button
                        onClick={() => deHandler (v.id)}
                        variant="contained"
                        startIcon={<DeleteIcon/>}
                        color="error"> DELETE
                     </Button>
                  </div>
             </Paper>
            </>
    );
};
export default SingleTask;