import DashboardLayout from "../../../layouts/dashboard";
import {
    Button,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TopicForm from "../../../components/form/TopicForm";
import {useCreateTopic} from "../../../actions/topic";

import withAuth from "../../../hoc/withAuth";
import {toast} from "react-toastify";
import Router from "next/router";
const CreateTopic = (user)=>{

    const [createTopic,{data,loading,error}] = useCreateTopic()
    const _createTopic = async (data) => {
        try{
            await createTopic(data);
            toast.success('Topic has been created!')
            Router.push("/admin/topic");
        }catch (e) {
            toast.error('Error : '+e)
        }
    }
    return (
        <DashboardLayout user={user}>
            <TopicForm onSubmit={_createTopic}></TopicForm>
        </DashboardLayout>
    )
}
export default withAuth(CreateTopic)();