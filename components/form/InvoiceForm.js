import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { style } from "@mui/system";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import {InputLabel, MenuItem, Select} from "@mui/material";

export default function InvoiceForm({onSubmit,initialData={}}) {
    const options = ['Lên Đơn', 'Đang Ship', 'Hoàn Tất'];
    const {register, handleSubmit, setValue,getValues} = useForm({defaultValues: initialData})

    const [status, setStatus] = React.useState(getValues("status")||options[0]);
    return (
        <Grid container justifyContent="center" xs={10}>
        <form onSubmit={handleSubmit(onSubmit)  }>
                <div className="form-group">
                    <TextField id="name" label="Name" variant="outlined"  {...register("name")} style={{ marginBottom: 20 }}/>
                </div>
                <div className="form-group">
                    <TextField id="phone" label="Phone" variant="outlined"  {...register("phone")} style={{ marginBottom: 20 }}/>
                </div>
                <div className="form-group">
                    <TextField id="address" label="Address" variant="outlined"  {...register("address")} style={{ marginBottom: 20 }}/>
                </div>
                <div className="form-group">
                    <TextField id="total" label="Total" variant="outlined"  {...register("total")} style={{ marginBottom: 20 }}/>
                </div>
                <div className="form-group">
                    <TextField id="shippingFee" label="shippingFee" variant="outlined"  {...register("shippingFee")} style={{ marginBottom: 20 }}/>
                </div>
                <div className="form-group">
                    <TextField id="paymentCode" label="Payment Code" variant="outlined"  {...register("paymentCode")} style={{ marginBottom: 20 }}/>
                </div>
                <div className="form-group">

                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Status"
                        {...register("status")}
                        onChange={(data)=>{
                            setValue("status", data)
                            console.log(data)
                            setStatus(data.target.value)
                        }}
                        value={status}
                    >
                        {options && options.map((item)=>
                            <MenuItem value={item}>{item}</MenuItem>
                        )}
                    </Select>
                </div>
            <Button variant="outlined" type="submit">Create</Button>
        </form>
        </Grid>
    )
}