import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { style } from "@mui/system";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { max } from "date-fns";

export default function BookForm({onSubmit,initialData={}}) {
    const curentDay = new Date();
    const {register, handleSubmit, setValue} = useForm({defaultValues: initialData})
    useEffect(() => {
        register('startDate');
        register('endDate');
    }, [register])
    
    return (
        <Grid container justifyContent="center" xs={10}>
        <form onSubmit={handleSubmit(onSubmit)  }>
                <div className="form-group">
                    <TextField id="name" label="Name" variant="outlined"  {...register("name")} style={{ marginBottom: 20 }}/>
                </div>
                <div className="form-group">
                    <TextField id="image" label="urlImg" variant="outlined"  {...register("image")} style={{ marginBottom: 20 }}/>
                </div>
                <div className="form-group">
                    <TextField id="description" label="Description" variant="outlined"  {...register("description")} style={{ marginBottom: 20 }}/>
                </div>
                <div className="form-group">
                    <TextField id="price" label="Price" variant="outlined"  {...register("price")} style={{ marginBottom: 20 }}/>
                </div>
                <div className="form-group">
                    <TextField id="quantity" label="Quantity" variant="outlined"  {...register("quantity")} style={{ marginBottom: 20 }}/>
                </div>
                <div className="form-group">
                   
                    <TextField
                            id="publicationDate"
                            label="Publication Date"
                            type="date"
                            defaultValue="2022-11-16"
                            {...register("publicationDate")} style={{ marginBottom: 20}}
                    />
                </div>
                <div className="form-group">
                    <TextField id="page" label="Page" variant="outlined"  {...register("page")} style={{ marginBottom: 20 }}/>
                </div>
            <Button variant="outlined" type="submit">Create</Button>
        </form>
        </Grid>
    )
}