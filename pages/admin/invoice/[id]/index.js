import {useRouter} from "next/router";
import DashboardLayout from "../../../../layouts/dashboard";
import Invoice from "../../../../lib/api/invoices"
import moment from 'moment';
import { useGetInvoice } from "../../../../actions/invoice";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
export default function InvoiceDetail({invoice}){
    const router = useRouter()
    const account =  {
        photoURL : 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/310613863_1790868551256247_407328907734636743_n.jpg?stp=c0.12.40.40a_cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=uNI8bBHFiSkAX9h4hSi&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfCAZiyHh97YWf4KEqP6eeVchgWV-Hl0MuHBnj87mcfMXQ&oe=636E0B58',
        displayName : 'Admin',
        email: 'Admin'
    }
    const {data: dateU,error,loading} =  useGetInvoice()
    return(
        <DashboardLayout user={account}>
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