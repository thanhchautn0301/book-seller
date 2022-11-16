import DashboardLayout from "../../../layouts/dashboard";
import { useCreateBook } from "actions/book";
import BookForm from "components/form/BookForm";

import withAuth from "../../../hoc/withAuth";
import {toast} from "react-toastify";
import Router from "next/router";
import Authors from "../../../lib/api/authors";
import Topics from "../../../lib/api/topics";
const CreateBook = ({user,authors,topics})=>{
    const [createBook,{data,loading,error}] = useCreateBook()
    const _createBook = async (data) => {
        try{
            await createBook(data);
        }catch (e) {
            // toast.error('Error : '+e)
        }
        toast.success('Book has been updated!')
        Router.push("/admin/book");
        // console.log(data)
    }
    return (
        <DashboardLayout user={user}>
            <BookForm onSubmit={_createBook} authors={authors} topics={topics}></BookForm>
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
export default withAuth(CreateBook)()