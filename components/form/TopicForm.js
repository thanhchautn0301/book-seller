import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { style } from "@mui/system";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


export default function TopicForm({onSubmit,initialData={}}) {
    const {register, handleSubmit, setValue} = useForm({defaultValues: initialData})
    useEffect(() => {
        register('startDate');
        register('endDate');
    }, [register])

    return (
            <Grid container justifyContent="center" xs={10}>
                <form onSubmit={handleSubmit(onSubmit)  } >
                    <div className="form-group">
                    <TextField id="name" label="Name" variant="outlined"  {...register("name")} style={{ marginBottom: 20 }}/>
                    </div>
                    <Button variant="outlined" type="submit">Create</Button>
                </form>
            </Grid>
    )
}