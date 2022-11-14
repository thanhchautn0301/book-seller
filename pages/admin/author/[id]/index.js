import DashboardLayout from "../../../../layouts/dashboard";
import TopicForm from "../../../../components/form/TopicForm";
import Author from "../../../../lib/api/authors"
import { data } from "autoprefixer";
import { useGetAuthor } from "../../../../actions/author";
import {useRouter} from "next/router";
import TextField from '@mui/material/TextField';
export default function AuthorDetail({author}){
    const account =  {
        photoURL : 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/310613863_1790868551256247_407328907734636743_n.jpg?stp=c0.12.40.40a_cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=uNI8bBHFiSkAX9h4hSi&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfCAZiyHh97YWf4KEqP6eeVchgWV-Hl0MuHBnj87mcfMXQ&oe=636E0B58',
        displayName : 'Admin',
        email: 'Admin'
    }
     const {data: dateU,error,loading} =  useGetAuthor()
    return(
        <DashboardLayout user={account} >
             {author &&<>
            <div className="form-group">
            <TextField  label="Name" variant="outlined" value={author.name}   disabled/>
            </div>
            </>}
        </DashboardLayout>
    )
} 
export async function getStaticProps({params}) {
    const rs = await new Author().getById(params.id)
    const author = rs.data
    return {
        props: {author}
    }
}

export async function getStaticPaths(){
    const rs = await new Author().getAll()
    const authors = rs.data.content
    const paths = authors.map(author=>{
        return {
            params: {id:author.id.toString()}
        }
    })
    return {paths, fallback:true}
}