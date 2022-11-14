import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { style } from "@mui/system";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['Lên Đơn', 'Đang Ship', 'Hoàn Tất'];
export default function InvoiceForm({onSubmit,initialData={}}) {
    const [value, setValue1] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');
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
                <Autocomplete
                    
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                    }}
                    id="Status"
                    options={options}
                    sx={{ width: 220 }}
                    renderInput={(params) => <TextField {...params} label="Status" 
                    style={{ marginBottom: 20 }}  {...register("status")} 
                    />}
                />
                </div>
            <Button variant="outlined" type="submit">Create</Button>
        </form>
        </Grid>
    )
}