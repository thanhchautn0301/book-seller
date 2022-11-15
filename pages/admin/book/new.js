import DashboardLayout from "../../../layouts/dashboard";
import { useCreateBook } from "actions/book";
import BookForm from "components/form/BookForm";

import withAuth from "../../../hoc/withAuth";
const CreateBook = ({user})=>{

    const [createBook,{data,loading,error}] = useCreateBook()
    return (
        <DashboardLayout user={account}>
            <BookForm onSubmit={createBook}></BookForm>
        </DashboardLayout>
    )
}

export default withAuth(CreateBook)()