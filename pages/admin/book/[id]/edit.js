import {useRouter} from "next/router";
import DashboardLayout from "../../../../layouts/dashboard";
import {toast} from "react-toastify";
import Router from 'next/router'
import { useGetBook, useUpdateBook } from "actions/book";
import BookForm from "components/form/BookForm";
import withAuth from "../../../../hoc/withAuth";
const BookEdit= ({user})=>{
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
                onSubmit={_updateBook}
            />}
        </DashboardLayout>
    )
}
export default withAuth(BookEdit)()