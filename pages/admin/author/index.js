import DashboardLayout from "../../../layouts/dashboard";
import {Button, Link, Paper, Table, TableBody, TableCell, TableContainer,  IconButton, TableHead, TableRow} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Author from "../../../lib/api/authors"
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import withAuth from "../../../hoc/withAuth";
import axios from "axios";
import {toast} from "react-toastify";
import Router from "next/router";
const  Authors= ({user,authors})=>{
    return (
        <DashboardLayout user={user}>
              <Link href={`author/new`}>
            <Button variant="text">Create</Button>
            </Link>
            <br/>
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
                   { authors &&  authors.map((item) =>
                        <TableRow key={item.name}>
                            <TableCell align="left">{item.id}</TableCell>
                            <TableCell align="left">{item.name}</TableCell>
                             <TableCell align="right">
                                <Link href={`author/${item.id}/edit`}>
                                    <IconButton aria-label="edit">
                                        <EditIcon />
                                    </IconButton>
                                </Link>
                                 <Link onClick={()=>{
                                     axios.delete(`../api/v2/authors/${item.id}`)
                                     toast.success("Xoá thành công")
                                     Router.push("./author")
                                 }}>
                                    <IconButton aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </Link>
                                <Link href={`author/${item.id}`}>
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
    const rs = await new Author().getAll()
    const authors = rs.data.content
    return {
        props: {authors}
    }
}
export default withAuth(Authors)();