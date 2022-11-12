import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";

export default function BookForm({onSubmit,initialData={}}) {
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
                    id="title" style={{ marginLeft: 20 }}/>
            </div>
            <div className="form-group">
                <label htmlFor="image">urlImg</label>
                <input
                    {...register("image")}
                    name="image"
                    type="text"
                    className="form-control"
                    id="title" style={{ marginLeft: 20 }}/>
            </div>
            <div className="form-group">
                 <label htmlFor="description">Description</label>
                <textarea
                    {...register("description")}
                    name="description"
                    type="text"
                    className="form-control"
                    id="title" style={{ marginLeft: 20 }}/>
            </div>
            <div className="form-group">
                 <label htmlFor="price">Price</label>
                <input
                    {...register("price")}
                    name="price"
                    type="text"
                    className="form-control"
                    id="title" style={{ marginLeft: 20 }}/>
                     </div>
            <div className="form-group">
                <label htmlFor="quantity">Quantity</label>
                <input
                    {...register("quantity")}
                    name="quantity"
                    type="text"
                    className="form-control"
                    id="title" style={{ marginLeft: 20 }}/>
                     </div>
            <div className="form-group">
                <label htmlFor="publication_date">Publication Date</label>
                <input
                    {...register("publication_date")}
                    name="publication_date"
                    type="text"
                    className="form-control"
                    id="title" style={{ marginLeft: 20 }}/>
                     </div>
            <div className="form-group">
                <label htmlFor="page">Page</label>
                <input
                    {...register("page")}
                    name="page"
                    type="text"
                    className="form-control"
                    id="title" style={{ marginLeft: 20 }}/>  
            </div>
            <button
                type="submit"
                className="btn btn-primary">Create
            </button>
        </form>
    )
}