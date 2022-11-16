import {useGetTopic, useUpdateTopic} from "../../../../actions/topic";
import {useRouter} from "next/router";
import TopicForm from "../../../../components/form/TopicForm";
import DashboardLayout from "../../../../layouts/dashboard";
import Router from 'next/router';
import {toast} from "react-toastify";
import withAuth from "../../../../hoc/withAuth";
 const TopicEdit = ({user})=>{
    const router = useRouter()

    const [updateTopic,{data,error,loading}] =  useUpdateTopic()
    const {data: initialData} =  useGetTopic(router.query.id)
    //useGetData(router.query.id?`/api/v1/posts/${router.query.id}`:null)
    const _updateTopic = async (data) => {
        try{
            await updateTopic(router.query.id, data);
            toast.success('Portfolio has been updated!')
            Router.push("/admin/topic");
        }catch (e) {
            toast.error('Error : '+e)
        }
    }
    const account =  {
        photoURL : 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/310613863_1790868551256247_407328907734636743_n.jpg?stp=c0.12.40.40a_cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=uNI8bBHFiSkAX9h4hSi&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfCAZiyHh97YWf4KEqP6eeVchgWV-Hl0MuHBnj87mcfMXQ&oe=636E0B58',
        displayName : 'Admin',
        email: 'Admin'
    }
    return(
        <DashboardLayout user={account}>
            {initialData && <TopicForm
                initialData = {initialData}
                onSubmit={_updateTopic}
            />}
        </DashboardLayout>
    )
}
export default withAuth(TopicEdit)();