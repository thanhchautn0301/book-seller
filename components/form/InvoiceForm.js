import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";


export default function InvoiceForm({onSubmit,initialData={}}) {
 
    const {register, handleSubmit, setValue} = useForm({defaultValues: initialData})
    useEffect(() => {
        register('startDate');
        register('endDate');
    }, [register])

    return (
        
        <form onSubmit={handleSubmit(onSubmit)  }>
            <div className="form-group">
                <label htmlFor="name" >Name</label>
                <input
                    {...register("name")}
                    name="name"
                    type="text"
                    className="form-control"
                    id="title" style={{ marginLeft: 20 }}/>
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                    {...register("phone")}
                    name="phone"
                    type="text"
                    className="form-control"
                    id="phone" style={{ marginLeft: 20 }}/>
            </div>
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                    {...register("address")}
                    name="address"
                    type="text"
                    className="form-control"
                    id="address" style={{ marginLeft: 20 }}/>
            </div>
            
            <div className="form-group">
                <label htmlFor="total">Total</label>
                <input
                    {...register("total")}
                    name="total"
                    type="text"
                    className="form-control"
                    id="total" style={{ marginLeft: 20 }}/>
            </div>
            <div className="form-group">
                <label htmlFor="shippingFee">Shipping Fee</label>
                <input
                    {...register("shippingFee")}
                    name="shippingFee"
                    type="text"
                    className="form-control"
                    id="shippingFee" style={{ marginLeft: 20 }}/>
            </div>
            <div className="form-group">
                <label htmlFor="paymentCode">Payment Code </label>
                <input
                    {...register("paymentCode")}
                    name="PaymentCode"
                    type="text"
                    className="form-control"
                    id="PaymentCode" style={{ marginLeft: 20 }}/>
            </div>
            <div className="form-group">
                <label htmlFor="status">Status</label>
                <select name="status" id="status"  {...register("status")} style={{ marginLeft: 20 }}>
                    <option value="Lên Đơn">Lên Đơn</option>
                    <option value="Đang Ship">Đang Ship</option>
                    <option value="Hoàn Tất">Hoàn Tất</option>
                </select>
            </div>
            <button
                type="submit"
                className="btn btn-primary">Create
            </button>
        </form>
    )
}