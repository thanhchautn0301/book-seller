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
                <label htmlFor="name">Name</label>
                <input
                    {...register("name")}
                    name="name"
                    type="text"
                    className="form-control"
                    id="title"/>
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                    {...register("phone")}
                    name="phone"
                    type="text"
                    className="form-control"
                    id="phone"/>
            </div>
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                    {...register("address")}
                    name="address"
                    type="text"
                    className="form-control"
                    id="address"/>
            </div>
            
            <div className="form-group">
                <label htmlFor="total">Total</label>
                <input
                    {...register("total")}
                    name="total"
                    type="text"
                    className="form-control"
                    id="total"/>
            </div>
            <div className="form-group">
                <label htmlFor="shippingFee">Shipping Fee</label>
                <input
                    {...register("shippingFee")}
                    name="shippingFee"
                    type="text"
                    className="form-control"
                    id="shippingFee"/>
            </div>
            <div className="form-group">
                <label htmlFor="paymentCode">Payment Code </label>
                <input
                    {...register("PaymentCode")}
                    name="PaymentCode"
                    type="text"
                    className="form-control"
                    id="PaymentCode"/>
            </div>
            <div className="form-group">
                <label htmlFor="status">Status</label>
                <input
                    {...register("status")}
                    name="status"
                    type="text"
                    className="form-control"
                    id="status"/>
            </div>
            <button
                type="submit"
                className="btn btn-primary">Create
            </button>
        </form>
    )
}