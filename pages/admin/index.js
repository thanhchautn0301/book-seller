import DashboardLayout from "../../layouts/dashboard";
import Invoice from "../../lib/api/invoices"
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import withAuth from "../../hoc/withAuth";
const Admin= ({user,invoices}) => {
    console.log(user)
    return (
        <DashboardLayout user={user}>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
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
                        {invoices && invoices?.map((item) =>

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

// export const getServerSideProps = withAuth(async ({req, res}, user) => {
//     const rs = await new Invoice().getAll()
//     const invoices = rs.data.content
//     return invoices
// })();
// export default Admin

export async function getServerSideProps () {
    // const user = await new.
    const rs = await new Invoice().getAll()
    const invoices = rs.data.content
    return {
        props: {invoices}
    }
}

export default withAuth(Admin)();