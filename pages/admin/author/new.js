import DashboardLayout from "../../../layouts/dashboard";
import AuthorForm from "../../../components/form/AuthorForm";
import { useCreateAuthor } from "../../../actions/author";

import withAuth from "../../../hoc/withAuth";
import {Typography} from "@mui/material";

const CreateAuthor=({user})=>{
    const [createAuthor,{data,loading,error}] = useCreateAuthor()
    return (
        <DashboardLayout user={user}>
            <Typography variant="h3" component="h4">
                Add new author
            </Typography>
            <AuthorForm onSubmit={createAuthor}></AuthorForm>
        </DashboardLayout>
    )
}
export default withAuth(CreateAuthor)();