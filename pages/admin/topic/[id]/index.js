import {useRouter} from "next/router";
import {useGetTopic} from "../../../../actions/topic";
import DashboardLayout from "../../../../layouts/dashboard";
import TopicForm from "../../../../components/form/TopicForm";
import Topic from "../../../../lib/api/topics"

export default function TopicDetail({topic}){
    const router = useRouter()
    const account =  {
        photoURL : 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/310613863_1790868551256247_407328907734636743_n.jpg?stp=c0.12.40.40a_cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=uNI8bBHFiSkAX9h4hSi&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfCAZiyHh97YWf4KEqP6eeVchgWV-Hl0MuHBnj87mcfMXQ&oe=636E0B58',
        displayName : 'Admin',
        email: 'Admin'
    }
     const {data: dateU,error,loading} =  useGetTopic()
    return(
        <DashboardLayout user={account}>
          {topic &&<>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <label  style={{ marginLeft: 20 }}> {topic.name} </label>
            </div>
            </>}
        </DashboardLayout>
    )
}
export async function getStaticProps({params}) {
    const rs = await new Topic().getById(params.id)
    const topic = rs.data
    return {
        props: {topic}
    }
}

export async function getStaticPaths(){
    const rs = await new Topic().getAll()
    const topics = rs.data.content
    console.log(topics)
    const paths = topics.map(topic=>{
        return {
            params: {id: topic.id.toString()}
        }
    })
     return {paths, fallback:true}
}