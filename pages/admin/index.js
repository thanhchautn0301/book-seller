import DashboardLayout from "../../layouts/dashboard";
import Invoice from "../../lib/api/invoices"
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

export default function Admin({invoices}){
    const account =  {
        photoURL : 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/310613863_1790868551256247_407328907734636743_n.jpg?stp=c0.12.40.40a_cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=uNI8bBHFiSkAX9h4hSi&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfCAZiyHh97YWf4KEqP6eeVchgWV-Hl0MuHBnj87mcfMXQ&oe=636E0B58',
        displayName : 'Admin',
        email: 'Admin'
    }
    return (
        <DashboardLayout user={account}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Total</TableCell>
                            <TableCell align="right">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { invoices &&  invoices.map((item) =>
                    
                    <TableRow key={item.id}>
                        <TableCell align="left">{item.id}</TableCell>
                        <TableCell align="left">{item.name}</TableCell>
                        <TableCell align="left">{item.phone}</TableCell>
                        <TableCell align="left">{item.address}</TableCell>
                        <TableCell align="left">{item.total}</TableCell>
                        <TableCell align="left">{item.status}</TableCell>
                    </TableRow>
                )}
                    </TableBody>
                </Table>
            </TableContainer>
        </DashboardLayout>
    )
}

export async function getServerSideProps () {
    const rs = await new Invoice().getAll()
    const invoices = rs.data.content
    return {
        props: {invoices}
    }
}