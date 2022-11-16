import DashboardLayout from "../../../layouts/dashboard";
import { useCreateInvoice } from "../../../actions/invoice"
import InvoiceForm from "../../../components/form/InvoiceForm"
import withAuth from "../../../hoc/withAuth";
import {toast} from "react-toastify";
import Router from "next/router";
const CreateInvoice = ({user}) =>{

    const [createInvoice,{data,loading,error}] = useCreateInvoice()
    const _createInvoice = async (data) => {
        try{
            await createInvoice(data);
            toast.success('invoice has been updated!')
            Router.push("/admin/invoice");
        }catch (e) {
            toast.error('Error : '+e)
        }
    }
    return (
        <DashboardLayout user={user}>
            <InvoiceForm onSubmit={createInvoice}></InvoiceForm>
        </DashboardLayout>
    )
}

export default withAuth(CreateInvoice)()