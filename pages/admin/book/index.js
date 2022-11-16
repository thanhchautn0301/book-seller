import DashboardLayout from "../../../layouts/dashboard";
import {Button, Link, Paper, Table, TableBody, TableCell, TableContainer,  IconButton, TableHead, TableRow} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Book from "../../../lib/api/books"
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';

import withAuth from "../../../hoc/withAuth";
import axios from "axios";
import Router from "next/router";
import {toast} from "react-toastify";
const Books=({user,books})=>{
    return (
        <DashboardLayout user={user}>
              <Link href={`book/new`}>
            <Button variant="text">Create</Button>
            </Link>
            <br/>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                   { books &&  books.map((item) =>
                    
                        <TableRow key={item.name}>
                            <TableCell align="left">{item.id}</TableCell>
                            <TableCell align="left">{item.name}</TableCell>
                            <TableCell align="left">{item.price}</TableCell>
                            <TableCell align="left">{item.quantity}</TableCell>
                             <TableCell align="right">
                                <Link href={`book/${item.id}/edit`}>
                                    <IconButton aria-label="edit">
                                        <EditIcon />
                                    </IconButton>
                                </Link>
                                <Link onClick={()=>{
                                    axios.delete(`../api/v2/books/${item.id}`)
                                    toast.success("Xoá thành công")
                                    Router.push("./book")
                                }}>
                                    <IconButton aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </Link>
                                <Link href={`book/${item.id}`}>
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
    const rs = await new Book().getAll()
    const books = rs.data.content
    return {
        props: {books}
    }
}
export default withAuth(Books)()