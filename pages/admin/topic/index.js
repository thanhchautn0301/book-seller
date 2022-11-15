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

import withAuth from "../../../hoc/withAuth";
export default function Topics({user,topics}){
    return (
        <DashboardLayout user={user}>
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
export default withAuth(Topics)()