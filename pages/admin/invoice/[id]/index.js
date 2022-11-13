import {useRouter} from "next/router";
import DashboardLayout from "../../../../layouts/dashboard";
import Invoice from "../../../../lib/api/invoices"
import moment from 'moment';
import { useGetInvoice } from "../../../../actions/invoice";
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
                <div className="form-group">
                <label htmlFor="name" >Name</label>
                <label style={{ marginLeft: 20 }}>{invoice.name}</label>
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <label style={{ marginLeft: 20 }}>{invoice.phone}</label>
            </div>
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <label style={{ marginLeft: 20 }}>{invoice.address}</label>
            </div>
            
            <div className="form-group">
                <label htmlFor="total">Total</label>
                <label style={{ marginLeft: 20 }}>{invoice.total}</label>
            </div>
            <div className="form-group">
                <label htmlFor="shippingFee">Shipping Fee</label>
                <label style={{ marginLeft: 20 }}>{invoice.shippingFee}</label>
            </div>
            <div className="form-group">
                <label htmlFor="payment_code">Payment Code </label>
                <label style={{ marginLeft: 20 }}>{invoice.paymentCode}</label>
            </div>
            <div className="form-group">
                <label htmlFor="status">Status</label>
                <label style={{ marginLeft: 20 }}>{invoice.status}</label>
            </div>
            <div className="form-group">
                <label htmlFor="Created">Created</label>
                <label style={{ marginLeft: 20 }}>{!invoice.created ? "" : moment(invoice.created).format("DD/MM/YYYY")}</label>
            </div>
            <div className="form-group">
                <label htmlFor="Updated">Updated</label>
                <label style={{ marginLeft: 20 }}>{!invoice.created ? "" : moment(invoice.updated).format("DD/MM/YYYY")}</label>
            </div>
            <div className="form-group">
                <label htmlFor="isDel">isDel</label>
                <label style={{ marginLeft: 20 }}>{invoice.isDel ? "true":"false"}</label>
            </div>
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