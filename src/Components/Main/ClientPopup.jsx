import { Button, Checkbox, Dialog, Divider, FormControlLabel, FormGroup, Grid, Popover, Typography } from "@mui/material";
import classes from "./ClientPopup.module.css"
import { AddCircle, Menu } from "@mui/icons-material";
import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import { ClientSpecific } from "../../Data/ClientSpecific";
import { blue, red } from "@mui/material/colors";


export const ClientPopup = () => {
    const [page, setPage] = useState(0);
    const [filterData, setFilterData] = useState();
    const [anchorEl, setAnchorEl] = useState(null);
    const n = 3

     

    useEffect(() => {
        setFilterData(
            ClientSpecific.filter((item, index) => {
                return (index >= page * n) & (index < (page + 1) * n);
            })
        );
    }, [page]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
    const handleClose = () => {
        setAnchorEl(null);
      };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

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
                        <td aria-describedby={id} onClick={handleClick} className={anchorEl ? classes.popoverIconHighlight : classes.popoverIcon}><Menu /></td>
                        <Popover id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }} >
             <PopoverContent />
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
                <Typography variant="p">Showing {page*n+1} to {((page+1)*n > ClientSpecific.length ? ClientSpecific.length : (page+1)*n)} entries out of {ClientSpecific.length}</Typography>
                </div>
                <div>
                <ReactPaginate
                    containerClassName={classes.paginationNumbers}
                    pageClassName={classes.pageItem}
                    activeClassName={classes.active}
                    onPageChange={(event) => setPage(event.selected)}
                    pageCount={Math.ceil(ClientSpecific.length / n)}
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

const PopoverContent = () => {
    return (
        <div className={classes.popoverContent}>
            <div className={classes.popoverItem}>
                <Typography variant="p" sx={{color:'#002277', fontWeight: 'bold'}}>Modified Date</Typography>
                <Typography variant="p"sx={{fontSize: '0.6em', my: 1}}>04/03/2024</Typography>
            </div>
            <Divider />
            <div className={classes.popoverItem}>
                <Typography variant="p" sx={{color:'#002277', fontWeight: 'bold'}}>Modified Date</Typography>
                <Typography variant="p" sx={{fontSize: '0.6em', my: 1}}>04/03/2024</Typography>
                
            </div>
            <Divider />
            <div className={classes.popoverItem}>
                <Typography variant="p" sx={{color:'#002277', fontWeight: 'bold'}}>Modified Date</Typography>
                <Typography variant="p" sx={{fontSize: '0.6em', my: 1}}>04/03/2024</Typography>
                
            </div>
            <Divider />
            <div className={classes.popoverItem}>
                <Typography variant="p" sx={{color:'#002277', fontWeight: 'bold'}}>Modified Date</Typography>
                <Typography variant="p" sx={{fontSize: '0.6em', my: 1}}>04/03/2024</Typography>
                
            </div>
            <Divider />
        </div>
    )
}
