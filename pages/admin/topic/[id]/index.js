import {useRouter} from "next/router";
import {useGetTopic} from "../../../../actions/topic";
import DashboardLayout from "../../../../layouts/dashboard";
import TopicForm from "../../../../components/form/TopicForm";
import Topic from "../../../../lib/api/topics"
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import withAuth from "../../../../hoc/withAuth";
const TopicDetail = ({topic}) =>{
    const router = useRouter()
     const {data: dateU,error,loading} =  useGetTopic()
    return(
        <DashboardLayout user={account}>
          {topic &&<>
            <Grid container justifyContent="center" xs={10}>
                <div>
            <div className="form-group">
             <TextField  label="Name" variant="outlined" value={topic.name} style={{ marginBottom: 20, width: 400}}   disabled/>
            </div>
            <div className="form-group">
            <TextField  label="isDel" variant="outlined" value={topic.isDel ? "true":"false"} style={{ marginBottom: 20, width: 400}}  disabled/>
            </div>
            </div>
            </Grid>
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
export default withAuth(TopicDetail)();