import { Button, Checkbox, Dialog, Divider, FormControlLabel, FormGroup, Grid, Popover, Typography } from "@mui/material";
import classes from "./ClientPopup.module.css"
import { AddCircle, CancelPresentation, Menu } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import ReactPaginate from 'react-paginate';
import { ClientSpecific } from "../../Data/ClientSpecific";
import { blue, red } from "@mui/material/colors";


export const ClientPopup = ({setOpenClientPopup}) => {
    const [page, setPage] = useState(0);
    const [filterData, setFilterData] = useState();
    const [anchorEl, setAnchorEl] = useState(null);
    const [popoverData,setPopoverData] = useState({});
    const n = 3

    useEffect(() => {
        setFilterData(
            ClientSpecific.filter((item, index) => {
                return (index >= page * n) & (index < (page + 1) * n);
            })
        );
    }, [page]);

    const handleClick = (event,popoverData) => {
        setAnchorEl(event.currentTarget);
        setPopoverData(popoverData);
      };
    
    const handleClose = () => {
        setAnchorEl(null);
        setPopoverData({})
      };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className={classes.popup}>
             
            <Button startIcon={<CancelPresentation />} sx={{justifyContent: 'flex-end', width: '1em', margin: '0 5em 0 auto'}} onClick={() => setOpenClientPopup(false)}></Button>
           
             
            <table className={classes.table}>

                <tr>
                    <th>File Name</th>
                    <th>Request Number</th>
                    <th>PDF ID</th>
                    <th>PDF Version ID</th>
                    <th>Service Now</th>
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
                        <td aria-describedby={id} onClick={(event) => handleClick(event,{...item.Subsidiary,id: item.id})} className={item?.id === popoverData?.id ? classes.popoverIconHighlight : classes.popoverIcon}><Menu /></td>
                        <Popover id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }} >
             <PopoverContent popoverData={popoverData} />
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
                <Button variant="contained" sx={{backgroundColor: '#002277'}}>Submit</Button>
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

const PopoverContent = ({popoverData}) => {
    return (
        <div className={classes.popoverContent}>
            <div className={classes.popoverItem}>
                <Typography variant="p" sx={{color:'#002277', fontWeight: 'bold'}}>Modified Date</Typography>
                <Typography variant="p"sx={{fontSize: '0.6em', my: 1}}>{popoverData['Modified Date']}</Typography>
            </div>
            <Divider />
            <div className={classes.popoverItem}>
                <Typography variant="p" sx={{color:'#002277', fontWeight: 'bold'}}>Upload Date</Typography>
                <Typography variant="p" sx={{fontSize: '0.6em', my: 1}}>{popoverData['Upload Date']}</Typography>
                
            </div>
            <Divider />
            <div className={classes.popoverItem}>
                <Typography variant="p" sx={{color:'#002277', fontWeight: 'bold'}}>Uploaded By</Typography>
                <Typography variant="p" sx={{fontSize: '0.6em', my: 1}}>{popoverData['Uploaded By']}</Typography>
                
            </div>
            <Divider />
            <div className={classes.popoverItem}>
                <Typography variant="p" sx={{color:'#002277', fontWeight: 'bold'}}>File Status</Typography>
                <Typography variant="p" sx={{fontSize: '0.6em', my: 1}}>{popoverData['File Status']}</Typography>
                
            </div>
            <Divider />
            <div className={classes.popoverItem}>
                <Typography variant="p" sx={{color:'#002277', fontWeight: 'bold'}}>Review Version</Typography>
                <Typography variant="p" sx={{fontSize: '0.6em', my: 1}}>{popoverData['Review Version']}</Typography>
                
            </div>
        </div>
    )
}
