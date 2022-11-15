import {useRouter} from "next/router";
import DashboardLayout from "../../../../layouts/dashboard";
import Invoice from "../../../../lib/api/invoices"
import moment from 'moment';
import { useGetInvoice } from "../../../../actions/invoice";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import withAuth from "../../../../hoc/withAuth";
const InvoiceDetail = ({user,invoice})=>{
    const router = useRouter()
    const {data: dateU,error,loading} =  useGetInvoice()
    return(
        <DashboardLayout user={user}>
            {invoice&&<>
                <Grid container justifyContent="center" xs={10}>
                    <div>
            <div className="form-group">
             <TextField  label="Name" variant="outlined" value={invoice.name} style={{ marginBottom: 20, width: 400}}   disabled/>
            </div>
            <div className="form-group">
            <TextField  label="Phone" variant="outlined" value={invoice.phone} style={{ marginBottom: 20, width: 400}}  disabled/>
            </div>
            <div className="form-group">
            <TextField  label="Address" variant="outlined" value={invoice.address} style={{ marginBottom: 20, width: 400}}   disabled/>

            </div>
            
            <div className="form-group">
            <TextField  label="Total" variant="outlined" value={invoice.Total}style={{ marginBottom: 20, width: 400}}   disabled/>
            </div>
            <div className="form-group">
            <TextField  label="Shipping Fee" variant="outlined" value={invoice.shippingFee} style={{ marginBottom: 20, width: 400}}   disabled/>
    
            </div>
            <div className="form-group">
            <TextField  label="Payment Code" variant="outlined" value={invoice.paymentCode} style={{ marginBottom: 20, width: 400}}   disabled/>
               
            </div>
            <div className="form-group">
            <TextField  label="Status" variant="outlined" value={invoice.status} style={{ marginBottom: 20, width: 400}}   disabled/>
            </div>
            <div className="form-group">
            <TextField  label="Created" variant="outlined" value={!invoice.created ? "" : moment(invoice.created).format("DD/MM/YYYY")} style={{ marginBottom: 20, width: 400}}  disabled/>
            </div>
            <div className="form-group">
            <TextField  label="Updated" variant="outlined" value={!invoice.updated ? "" : moment(invoice.updated).format("DD/MM/YYYY")} style={{ marginBottom: 20, width: 400}}   disabled/>
            </div>
            <div className="form-group">
            <TextField  label="isDel" variant="outlined" value={invoice.isDel ? "true":"false"} style={{ marginBottom: 20, width: 400}}  disabled/>
            </div>
            </div>
            </Grid>
            </>}
        </DashboardLayout>
    )
}
export async function getStaticProps({params}) {
    const rs = await new Invoice().getById(params.id)
    const invoice = rs.data
    return {
        props: {invoice}
    }
}

export async function getStaticPaths(){
    const rs = await new Invoice().getAll()
    const invoices = rs.data.content
    const paths = invoices.map(invoice=>{
        return {
            params: {id:invoice.id.toString()}
        }
    })
    return {paths, fallback:true}
}

export default withAuth(InvoiceDetail)()