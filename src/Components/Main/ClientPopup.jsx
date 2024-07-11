import { Button, Checkbox, Dialog, FormControlLabel, FormGroup, Grid, Popover, Typography } from "@mui/material";
import classes from "./ClientPopup.module.css"
import { AddCircle, Menu } from "@mui/icons-material";
import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate'
import { blue, red } from "@mui/material/colors";


export const ClientPopup = () => {
    const [page, setPage] = useState(0);
    const [filterData, setFilterData] = useState();
    const [open,setOpen] = useState(false);
    const n = 3

    const tableData = [
        {
            "FileName": "BCBS AZ_ Amended Restated CSA 4.21.23.PDF",
            "RequestNumber": "100130",
            "PDFID": "СРМ#1111",
            "PDFVersionID": "PDF123245",
            "ServiceNow": "XYZ"
        },
        {
            "FileName": "BCBS AZ_ Amended Restated CSA 4.21.24.PDF",
            "RequestNumber": "100130",
            "PDFID": "СРМ#1111",
            "PDFVersionID": "PDF123245",
            "ServiceNow": "XYZ"
        },
        {
            "FileName": "BCBS AZ_ Amended Restated CSA 4.21.25.PDF",
            "RequestNumber": "100130",
            "PDFID": "СРМ#1111",
            "PDFVersionID": "PDF123245",
            "ServiceNow": "XYZ"
        },
        {
            "FileName": "BCBS AZ_ Amended Restated CSA 4.21.26.PDF",
            "RequestNumber": "100130",
            "PDFID": "СРМ#1111",
            "PDFVersionID": "PDF123245",
            "ServiceNow": "XYZ"
        },
        {
            "FileName": "BCBS AZ_ Amended Restated CSA 4.21.27.PDF",
            "RequestNumber": "100130",
            "PDFID": "СРМ#1111",
            "PDFVersionID": "PDF123245",
            "ServiceNow": "XYZ"
        },
        {
            "FileName": "BCBS AZ_ Amended Restated CSA 4.21.28.PDF",
            "RequestNumber": "100130",
            "PDFID": "СРМ#1111",
            "PDFVersionID": "PDF123245",
            "ServiceNow": "XYZ"
        },
        {
            "FileName": "BCBS AZ_ Amended Restated CSA 4.21.29.PDF",
            "RequestNumber": "100130",
            "PDFID": "СРМ#1111",
            "PDFVersionID": "PDF123245",
            "ServiceNow": "XYZ"
        }
    ];

    useEffect(() => {
        setFilterData(
            tableData.filter((item, index) => {
                return (index >= page * n) & (index < (page + 1) * n);
            })
        );
    }, [page]);

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className={classes.popup}>
            <table className={classes.table}>

                <tr>
                    <th>FileName</th>
                    <th>RequestNumber</th>
                    <th>PDFID</th>
                    <th>PDFVersionID</th>
                    <th>ServiceNow</th>
                </tr>
                {
                    filterData && filterData.map((item) => <tr>
                        <td>{item.FileName}</td>
                        <td>{item.RequestNumber}</td>
                        <td>{item.PDFID}</td>
                        <td>{item.PDFVersionID}</td>
                        <td>{item.ServiceNow}</td>
                        <td> <FormGroup>
                            <FormControlLabel
                                size="small"
                                control={<Checkbox />}
                                label="Audit"
                            />
                        </FormGroup></td>
                        <td onClick={() => setOpen(true)}><Menu /></td>
                        <Popover onClose={handleClose} open={open} >
             <h1>Hello</h1>
        </Popover>
                    </tr>)
                }
            </table>

        <div  className={classes.lastRow}>
            <Grid container>
                <Grid item xs={6}>
                <Button startIcon={<AddCircle />}>Add Row</Button>
                </Grid>
                <Grid item xs={6}>
                <Button variant="contained">Submit</Button>
                </Grid>
            </Grid>
        </div>

            <div className={classes.pagination}>
                <div className="paginateText">
                <Typography variant="p">Showing 1 to {n} entries out of {tableData.length}</Typography>
                </div>
                <div>
                <ReactPaginate
                    containerClassName={classes.paginationNumbers}
                    pageClassName={classes.pageItem}
                    activeClassName={classes.active}
                    onPageChange={(event) => setPage(event.selected)}
                    pageCount={Math.ceil(tableData.length / n)}
                    breakLabel="..."
                    previousLabel= {
                        <Typography variant="p" className={classes.pageItem} sx={page == 0 && {color: "#8e8e8e"} }>Previous</Typography>
                    }
                    nextLabel={
                        <Typography variant="p" className={classes.pageItem}>Next</Typography>
                    }
                />
                </div>
            </div>

        </div>
    )

}
