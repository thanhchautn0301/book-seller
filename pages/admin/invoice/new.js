import DashboardLayout from "../../../layouts/dashboard";
import { useCreateInvoice } from "../../../actions/invoice"
import InvoiceForm from "../../../components/form/InvoiceForm"

export default function CreateInvoice(){
    const account =  {
        photoURL : 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/310613863_1790868551256247_407328907734636743_n.jpg?stp=c0.12.40.40a_cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=uNI8bBHFiSkAX9h4hSi&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfCAZiyHh97YWf4KEqP6eeVchgWV-Hl0MuHBnj87mcfMXQ&oe=636E0B58',
        displayName : 'Admin',
        email: 'Admin'
    }
    const [createInvoice,{data,loading,error}] = useCreateInvoice()
    return (
        <DashboardLayout user={account}>
            <InvoiceForm onSubmit={createInvoice}></InvoiceForm>
        </DashboardLayout>
    )
}
