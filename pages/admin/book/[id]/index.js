import {useRouter} from "next/router";
import DashboardLayout from "../../../../layouts/dashboard";
import Book from "../../../../lib/api/books"
import moment from 'moment';
import Image from "next/image";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useGetInvoice } from "../../../../actions/invoice";
import withAuth from "../../../../hoc/withAuth";
const BookDetail = ({user,book})=>{
    const router = useRouter()
    const {data: dateU,error,loading} =  useGetInvoice()
    return(
        <DashboardLayout user={user}>
            
            {book&&<>
                <Grid container justifyContent="center" xs={10}>
                    <div>
            <div className="form-group">
                <TextField  label="Name" variant="outlined" value={book.name} style={{ marginBottom: 20 ,width: 400}}   disabled/>
            </div>
            <div className="form-group">
            <TextField  label="Description" variant="outlined" value={book.description} style={{ marginBottom: 20,width: 400 }}   disabled/>
            </div>
            <div className="form-group">
                <TextField  label="Price" variant="outlined" value={book.price} style={{ marginBottom: 20 ,width: 400}}   disabled/>
            </div> 
            <div className="form-group">
                <TextField  label="Quantity" variant="outlined" value={book.quantity} style={{ marginBottom: 20 ,width: 400}}   disabled/>
            </div>
            <div className="form-group">
            <TextField  label="Publication Date" variant="outlined" value={book.publicationDate  } style={{ marginBottom: 20 ,width: 400}} disabled  />
            </div>
            <div className="form-group">
            <TextField  label="isDel" variant="outlined" value={book.is_del ? "true":"false"} style={{ marginBottom: 20 ,width: 400}}   disabled/>
            </div>
            <div className="form-group">
                <Image width={250} height={250} src="/books/book1.jpg" />
            </div>
            </div>
                </Grid>
            </>}
            
        </DashboardLayout>
    )
}
export async function getStaticProps({params}) {
    const rs = await new Book().getById(params.id)
    const book = rs.data
    console.log(book)
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
export default withAuth(BookDetail)();