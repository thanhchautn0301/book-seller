import DashboardLayout from "../../../layouts/dashboard";
import {Button, Link, Paper, Table, TableBody, TableCell, TableContainer,  IconButton, TableHead, TableRow} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Invoice from "../../../lib/api/invoices"
import moment from 'moment';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import withAuth from "../../../hoc/withAuth";
const Invoices = ({user,invoices})=>{
    return (
        <DashboardLayout user={user}>
            <Link href={`invoice/new`}>
            {/*<Button variant="text">Create</Button>*/}
            </Link>
            <br/>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Created</TableCell>
                            <TableCell>Delete</TableCell>
                            <TableCell align="right">Actions</TableCell>
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
                        <TableCell align="left">{!item.created ? "" : moment(item.created).format("DD/MM/YYYY")}</TableCell>
                        <TableCell align="left">{item.isDel ? "true":"false"}</TableCell>
                         <TableCell align="right">
                            <Link href={`invoice/${item.id}/edit`}>
                                <IconButton aria-label="edit">
                                    <EditIcon />
                                </IconButton>
                            </Link>
                            <Link href={`invoice/${item.id}/edit`}>
                                <IconButton aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </Link>
                            <Link href={`invoice/${item.id}`}>
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
    const rs = await new Invoice().getAll()
    const invoices = rs.data.content
    return {
        props: {invoices}
    }
}
export default withAuth(Invoices)()