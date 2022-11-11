import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";

export default function TopicForm({onSubmit,initialData={}}) {
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
            <button
                type="submit"
                className="btn btn-primary">Create
            </button>
        </form>
    )
}