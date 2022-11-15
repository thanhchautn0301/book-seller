import {useRouter} from "next/router";
import DashboardLayout from "../../../../layouts/dashboard";
import { useGetAuthor, useUpdateAuthor } from "../../../../actions/author";
import AuthorForm from "../../../../components/form/AuthorForm";
import {toast} from "react-toastify";
import Router from 'next/router'
const AuthorEdit = ({user})=>{
    const router = useRouter()

    const [updateAuthor,{data,error,loading}] =  useUpdateAuthor()
    const {data: initialData} =  useGetAuthor(router.query.id)
    //useGetData(router.query.id?`/api/v1/posts/${router.query.id}`:null)
    const _updateAuthor = async (data) => {
        try{
            await updateAuthor(router.query.id, data);
            toast.success('Author has been updated!')
            Router.push("/admin/author");
        }catch (e) {
            toast.error('Error : '+e)
        }
        console.log(data)
    }
    return(
        <DashboardLayout user={user}>
            {initialData && <AuthorForm
                initialData = {initialData}
                onSubmit={_updateAuthor}
            />}
        </DashboardLayout>
    )
}
export default withAuth(AuthorEdit)();