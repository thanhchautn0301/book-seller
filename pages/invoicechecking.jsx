import Author from "../lib/api/authors";

import withAuth from "../hoc/withAuth";
import invoices from "../lib/api/invoices";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Topic from "../components/Topic";
import Book from "../components/Book";
import Pagination from "../components/Pagination";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Invoice from "../lib/api/invoices";
import auth0 from "../utils/auth0";
import {useGetUser} from "../actions/users";
import {useState} from "react";
import axios from "axios";
const Invoicechecking = ({user,invoices}) => {
    let rs = []
    invoices.forEach((item)=> {
        if( item.email == invoices.email){
            rs.push(item)
        }
    })
    return (
        <div className="min-h-[100vh] flex flex-col w-full">
            <Header />
            <SubHeader />
            <div className="content bg-white flex-1 flex flex-col justify-between">
                <div className="flex-0 px-2 sm:px-20 xl:px-36 py-4 flex justify-between gap-4">
                    <Topic />
                    <div className="flex-1">
                        <div className="flex-3 book-list grid gap-4">
                            <TableContainer component={Paper}>
                                <Table sx={{minWidth: 650}} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>#</TableCell>
                                            <TableCell>Name</TableCell>
                                            <TableCell align="left">Phone</TableCell>
                                            <TableCell align="left">Address</TableCell>
                                            <TableCell align="left">Total</TableCell>
                                            <TableCell align="left">Status</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                            {rs.length > 0 &&
                                rs.map((item) => {
                                    return <TableRow key={item.id}>
                                        <TableCell align="left">{item.id}</TableCell>
                                        <TableCell align="left">{item.name}</TableCell>
                                        <TableCell align="left">{item.phone}</TableCell>
                                        <TableCell align="left">{item.address}</TableCell>
                                        <TableCell align="left">{item.total}</TableCell>
                                        <TableCell align="left">{item.status}</TableCell>
                                    </TableRow>;
                                })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer bg-gray-200 px-2 sm:px-20 xl:px-36 min-h-[72px] max-h-[100px] flex items-center">
                Phone number:{" "}
                <a className="block text-blue-500" href="tel:+841234567">
                    &nbsp;+841999999
                </a>
            </footer>
        </div>
    )
}

export async function getServerSideProps () {
    const rs = await new Invoice().getAll()
    const invoices = rs.data.content
    return {
        props: {invoices}
    }
}

export default withAuth(Invoicechecking)();