import {useRouter} from "next/router";
import DashboardLayout from "../../../../layouts/dashboard";
import {toast} from "react-toastify";
import Router from 'next/router'
import { useGetBook, useUpdateBook } from "actions/book";
import BookForm from "components/form/BookForm";
import withAuth from "../../../../hoc/withAuth";
import Book from "../../../../lib/api/books";
import Authors from "../../../../lib/api/authors";
import Topics from "../../../../lib/api/topics";
const BookEdit= ({user,authors, topics})=>{
    const router = useRouter()

    const [updateBook,{data,error,loading}] =  useUpdateBook()
    const {data: initialData} =  useGetBook(router.query.id)
    //useGetData(router.query.id?`/api/v1/posts/${router.query.id}`:null)
    const _updateBook = async (data) => {
        try{
            await updateBook(router.query.id, data);
            toast.success('Author has been updated!')
            Router.push("/admin/book");
        }catch (e) {
            toast.error('Error : '+e)
        }
        console.log(data)
    }
    return(
        <DashboardLayout user={user}>
            {initialData && <BookForm
                initialData = {initialData}
                onSubmit={_updateBook} authors = {authors} topics={topics}
            />}
        </DashboardLayout>
    )
}
export async function getServerSideProps () {
    const rs = await new Authors().getAll()
    const authors = rs.data.content
    const rs1 = await new Topics().getAll()
    const topics = rs1.data.content
    return {
        props: {authors, topics}
    }
}
export default withAuth(BookEdit)()
