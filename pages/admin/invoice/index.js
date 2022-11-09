import DashboardLayout from "../../../layouts/dashboard";
import {Button, Link, Paper, Table, TableBody, TableCell, TableContainer,  IconButton, TableHead, TableRow} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';



export default function Admin(){
    const account =  {
        photoURL : 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/310613863_1790868551256247_407328907734636743_n.jpg?stp=c0.12.40.40a_cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=uNI8bBHFiSkAX9h4hSi&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfCAZiyHh97YWf4KEqP6eeVchgWV-Hl0MuHBnj87mcfMXQ&oe=636E0B58',
        displayName : 'Admin',
        email: 'Admin'
    }
    const id = 1;
    return (
        <DashboardLayout user={account}>
            <Link href={`invoice/new`}>
            <Button variant="text">Create</Button>
            </Link>
            <br/>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                        <TableCell component="th" scope="row">1
                            </TableCell>
                            <TableCell >Nguyễn Ngọc Ngạn</TableCell>
                            <TableCell align="right">
                                <Link href={`invoice/${id}/edit`}>
                                    <IconButton aria-label="edit">
                                        <EditIcon />
                                    </IconButton>
                                </Link>
                                <Link href={`invoice/${id}/edit`}>
                                    <IconButton aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </Link>
                            </TableCell>
                        </TableRow>
                        {/*{rows.map((row) => (*/}
                        {/*    <TableRow*/}
                        {/*        key={row.name}*/}
                        {/*        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}*/}
                        {/*    >*/}
                        {/*        <TableCell component="th" scope="row">*/}
                        {/*            {row.name}*/}
                        {/*        </TableCell>*/}
                        {/*        <TableCell align="right">{row.calories}</TableCell>*/}
                        {/*        <TableCell align="right">{row.fat}</TableCell>*/}
                        {/*        <TableCell align="right">{row.carbs}</TableCell>*/}
                        {/*        <TableCell align="right">{row.protein}</TableCell>*/}
                        {/*    </TableRow>*/}
                        {/*))}*/}
                    </TableBody>
                </Table>
            </TableContainer>
        </DashboardLayout>
    )
}