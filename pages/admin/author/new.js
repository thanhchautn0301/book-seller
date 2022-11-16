import DashboardLayout from "../../../layouts/dashboard";
import AuthorForm from "../../../components/form/AuthorForm";
import { useCreateAuthor } from "../../../actions/author";

import withAuth from "../../../hoc/withAuth";
import {Typography} from "@mui/material";
import {toast} from "react-toastify";
import Router from "next/router";

const CreateAuthor=({user})=>{
    const [createAuthor,{data,loading,error}] = useCreateAuthor()
    const _createAuthor = async (data) => {
        try{
            await createAuthor(data);
            toast.success('Author has been created!')
            Router.push("/admin/author");
        }catch (e) {
            // toast.error('Error : '+e)
        }
    }
    return (
        <DashboardLayout user={user}>
            <Typography variant="h3" component="h4">
                Add new author
            </Typography>
            <AuthorForm onSubmit={_createAuthor}></AuthorForm>
        </DashboardLayout>
    )
}
export default withAuth(CreateAuthor)();