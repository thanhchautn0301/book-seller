import DashboardLayout from "../../../layouts/dashboard";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link'
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import Topic from "../../../lib/api/topics"
import {
    Button,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";


export default function Topics({topics}){
    const account =  {
        photoURL : 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/310613863_1790868551256247_407328907734636743_n.jpg?stp=c0.12.40.40a_cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=uNI8bBHFiSkAX9h4hSi&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfCAZiyHh97YWf4KEqP6eeVchgWV-Hl0MuHBnj87mcfMXQ&oe=636E0B58',
        displayName : 'Admin',
        email: 'Admin'
    }
    const id = 1;
    return (
        <DashboardLayout user={account}>
            <Link href={`topic/new`}>
            <Button variant="text">Create</Button>
            </Link>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    { topics &&  topics.map((item) =>
                    
                    <TableRow key={item.name}>
                        <TableCell align="left">{item.id}</TableCell>
                        <TableCell align="left">{item.name}</TableCell>
                         <TableCell align="right">
                            <Link href={`topic/${item.id}/edit`}>
                                <IconButton aria-label="edit">
                                    <EditIcon />
                                </IconButton>
                            </Link>
                            <Link href={`topic/${item.id}/edit`}>
                                <IconButton aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </Link>
                            <Link href={`topic/${item.id}`}>
                                <IconButton aria-label="Detail">
                                    <InfoTwoToneIcon />
                                </IconButton>
                            </Link>
                        </TableCell>
                    </TableRow>
                )}
                    </TableBody>
                </Table>
            </TableContainer>
        </DashboardLayout>
    )
}

export async function getServerSideProps () {
    const rs = await new Topic().getAll()
    const topics = rs.data.content
    return {
        props: {topics}
    }
}