import DashboardLayout from "../../../layouts/dashboard";
import { useCreateInvoice } from "../../../actions/invoice"
import InvoiceForm from "../../../components/form/InvoiceForm"
import withAuth from "../../../hoc/withAuth";
export default function CreateInvoice({user}){

    const [createInvoice,{data,loading,error}] = useCreateInvoice()
    return (
        <DashboardLayout user={user}>
            <InvoiceForm onSubmit={createInvoice}></InvoiceForm>
        </DashboardLayout>
    )
}

export default withAuth(CreateInvoice)()