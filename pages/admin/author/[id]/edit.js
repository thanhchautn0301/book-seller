import {useRouter} from "next/router";
import DashboardLayout from "../../../../layouts/dashboard";
import { useGetAuthor, useUpdateAuthor } from "../../../../actions/author";
import AuthorForm from "../../../../components/form/AuthorForm";
import {toast} from "react-toastify";
import Router from 'next/router'
export default function AuthorEdit({user}){
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
    const account =  {
        photoURL : 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/310613863_1790868551256247_407328907734636743_n.jpg?stp=c0.12.40.40a_cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=uNI8bBHFiSkAX9h4hSi&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfCAZiyHh97YWf4KEqP6eeVchgWV-Hl0MuHBnj87mcfMXQ&oe=636E0B58',
        displayName : 'Admin',
        email: 'Admin'
    }
    return(
        <DashboardLayout user={account}>
            {initialData && <AuthorForm
                initialData = {initialData}
                onSubmit={_updateAuthor}
            />}
        </DashboardLayout>
    )
}
