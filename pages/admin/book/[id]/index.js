import {useRouter} from "next/router";
import DashboardLayout from "../../../../layouts/dashboard";
import Book from "../../../../lib/api/books"
import moment from 'moment';
import Image from "next/image";
import { useGetInvoice } from "../../../../actions/invoice";
export default function BookDetail({book}){
    const router = useRouter()
    const account =  {
        photoURL : 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/310613863_1790868551256247_407328907734636743_n.jpg?stp=c0.12.40.40a_cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=uNI8bBHFiSkAX9h4hSi&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfCAZiyHh97YWf4KEqP6eeVchgWV-Hl0MuHBnj87mcfMXQ&oe=636E0B58',
        displayName : 'Admin',
        email: 'Admin'
    }
    const {data: dateU,error,loading} =  useGetInvoice()
    return(
        <DashboardLayout user={account}>
            {book&&<>
                <div className="form-group">
                <label htmlFor="name" >Name</label>
                <label style={{ marginLeft: 20 }}>{book.name}</label>
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <label style={{ marginLeft: 20 }}>{book.description}</label>
            </div>
            <div className="form-group">
                <label htmlFor="price">Price</label>
                <label style={{ marginLeft: 20 }}>{book.price}</label>
            </div> 
            <div className="form-group">
                <label htmlFor="quantity">Quantity</label>
                <label style={{ marginLeft: 20 }}>{book.quantity}</label>
            </div>
            <div className="form-group">
                <label htmlFor="publicationDate">Publication Date</label>
                <label style={{ marginLeft: 20 }}>{!book.publication_date ? "" : moment(book.publication_date).format("DD/MM/YYYY")}</label>
            </div>
            <div className="form-group">
                <label htmlFor="isDel">isDel</label>
                <label style={{ marginLeft: 20 }}>{book.is_del ? "true":"false"}</label>
            </div>
            <div className="form-group">
                <Image width={250} height={250} src="/books/book1.jpg" />
            </div>
          
            </>}
        </DashboardLayout>
    )
}
export async function getStaticProps({params}) {
    const rs = await new Book().getById(params.id)
    const book = rs.data
    return {
        props: {book}
    }
}

export async function getStaticPaths(){
    const rs = await new Book().getAll()
    const books = rs.data.content
    const paths = books.map(book=>{
        return {
            params: {id:book.id.toString()}
        }
    })
    return {paths, fallback:true}
}