import {useGetTopic, useUpdateTopic} from "../../../../actions/topic";
import {useRouter} from "next/router";
import TopicForm from "../../../../components/form/TopicForm";
import DashboardLayout from "../../../../layouts/dashboard";
import { useGetInvoice, useUpdateInvoice } from "../../../../actions/invoice";
import InvoiceForm from "../../../../components/form/InvoiceForm";
import {toast} from "react-toastify";
import Router from 'next/router'

import withAuth from "../../../../hoc/withAuth";
const TopicEdit=({user})=>{
    const router = useRouter()

    const [updateInvoice,{data,error,loading}] =  useUpdateInvoice()
    const {data: initialData} =  useGetInvoice(router.query.id)
    //useGetData(router.query.id?`/api/v1/posts/${router.query.id}`:null)
    const _updateInvoice = async (data) => {
        try{
            await updateInvoice(router.query.id, data);
            toast.success('invoice has been updated!')
            Router.push("/admin/invoice");
        }catch (e) {
            toast.error('Error : '+e)
        }
    }

    return(
        <DashboardLayout user={user}>
            {initialData && <InvoiceForm
                initialData = {initialData}
                onSubmit={_updateInvoice}
            />}
        </DashboardLayout>
    )
}
export default withAuth(TopicEdit)();