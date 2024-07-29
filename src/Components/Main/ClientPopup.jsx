import { Button, Checkbox, Dialog, Divider, FormControlLabel, FormGroup, Grid, IconButton, Popover, Tooltip, Typography, styled, tooltipClasses } from "@mui/material";
import classes from "./ClientPopup.module.css"
import { AddCircle, CancelPresentation, Menu } from "@mui/icons-material";
import { useContext, useEffect, useRef, useState } from "react";
import ReactPaginate from 'react-paginate';
import { ClientSpecific } from "../../Data/ClientSpecific";
import { CustomInputRow } from "./CustomInputRow";
import { BackgroundContext } from "../../Hooks/BackgroundContext";
import AppClasses from '../../App.module.css';
import { SELECT_HOME } from "../../Data/Config";

const MenuTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#daf5fa',
        color: '#8e8e8e',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px'
    },
    [`& .${tooltipClasses.arrow}`]: {
        color: '#daf5fa'
    }
}));

const PopoverItemHeadingSxstyle = {
    fontSize: '0.5em', color: '#002277', fontWeight: 'bold'
}

const PopoverItemContentSxstyle = {
    fontSize: '0.5em', fontWeight: 'bold', my: 1
}


export const ClientPopup = ({ setOpenClientPopup }) => {
    const [page, setPage] = useState(0);
    const [filterData, setFilterData] = useState();
    const [anchorEl, setAnchorEl] = useState(null);
    const [displayCustomInput,setDisplayCustomInput] = useState(false);
    const {value,setValue} = useContext(BackgroundContext);
    const n = 5;

    useEffect(() => {
        setFilterData(
            ClientSpecific.filter((item, index) => {
                return (index >= page * n) & (index < (page + 1) * n);
            })
        );
    }, [page]);

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className={classes.popup}>

            <Button startIcon={<CancelPresentation />} sx={{ justifyContent: 'flex-end', margin: '0 5em 0 auto' }} onClick={() => {
                setOpenClientPopup(false);
                setValue(SELECT_HOME)
            }}
                ></Button>


            <table className={classes.table}>

                <tr>
                    <th>File Name</th>
                    <th>Agreement Number</th>
                    <th>PDF ID</th>
                    <th>PDF Version ID</th>
                    <th>Service Now</th>
                </tr>
                {
                    filterData && filterData.map((item) => <tr>
                        <td>{item.FileName}</td>
                        <td>{item.AgreementNumber}</td>
                        <td>{item.PDFID}</td>
                        <td>{item.PDFVersionID}</td>
                        <td>{item.ServiceNow}</td>
                        <td> <FormGroup>
                            <FormControlLabel
                                control={<Checkbox size="small" />}
                                label="Audit"
                            />
                        </FormGroup></td>
                        <td>
                            <MenuTooltip title={<PopoverContent popoverData={item.Subsidiary} />} placement="right-end" arrow>
                                
                                    <Menu />
                            
                            </MenuTooltip>
                        </td>
                    </tr>)
                }
                {
                    displayCustomInput == true && 
                    <tr>
                    <CustomInputRow setDisplayCustomInput={setDisplayCustomInput}/>
                </tr>
}
            </table>

            <div className={classes.lastRow}>
                <Grid container>
                    <Grid item xs={6}>
                        <Button onClick={() => setDisplayCustomInput(true)} startIcon={<AddCircle />}>Add Row</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" sx={{ borderRadius: '3em', padding: '0.5em 2em' }}>Submit</Button>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.pagination}>
                <div className="paginateText">
                    <Typography variant="p">Showing {page * n + 1} to {((page + 1) * n > ClientSpecific.length ? ClientSpecific.length : (page + 1) * n)}  out of {ClientSpecific.length} entries</Typography>
                </div>
                <div>
                    <ReactPaginate
                        containerClassName={classes.paginationNumbers}
                        pageClassName={classes.pageItem}
                        activeClassName={classes.active}
                        onPageChange={(event) => setPage(event.selected)}
                        pageCount={Math.ceil(ClientSpecific.length / n)}
                        breakLabel="..."
                        previousLabel={
                            <Typography variant="p" className={classes.pageItem} sx={page == 0 && { color: "#8e8e8e" }}>Previous</Typography>
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

const PopoverContent = ({ popoverData }) => {
    return (
        <div className={classes.popoverContent}>
            <div className={classes.popoverItem}>
                <Typography variant="p" sx={PopoverItemHeadingSxstyle}>Modified Date</Typography>
                <Typography variant="p" sx={PopoverItemContentSxstyle}>{popoverData['Modified Date']}</Typography>
            </div>
            <Divider />
            <div className={classes.popoverItem}>
                <Typography variant="p" sx={PopoverItemHeadingSxstyle}>Upload Date</Typography>
                <Typography variant="p" sx={PopoverItemContentSxstyle}>{popoverData['Upload Date']}</Typography>

            </div>
            <Divider />
            <div className={classes.popoverItem}>
                <Typography variant="p" sx={PopoverItemHeadingSxstyle}>Uploaded By</Typography>
                <Typography variant="p" sx={PopoverItemContentSxstyle}>{popoverData['Uploaded By']}</Typography>

            </div>
            <Divider />
            <div className={classes.popoverItem}>
                <Typography variant="p" sx={PopoverItemHeadingSxstyle}>File Status</Typography>
                <Typography variant="p" sx={PopoverItemContentSxstyle}>{popoverData['File Status']}</Typography>
            </div>
            <Divider />
            <div className={classes.popoverItem}>
                <Typography variant="p" sx={PopoverItemHeadingSxstyle}>Review Version</Typography>
                <Typography variant="p" sx={PopoverItemContentSxstyle}>{popoverData['Review Version']}</Typography>

            </div>
            <Divider />
            <div className={classes.popoverItem}>
                <Typography variant="p" sx={PopoverItemHeadingSxstyle}>Contract State</Typography>
                <Typography variant="p" sx={PopoverItemContentSxstyle}>{popoverData['Contract State']}</Typography>

            </div>
            <Divider />
            <div className={classes.popoverItem}>
                <Typography variant="p" sx={PopoverItemHeadingSxstyle}>Request No</Typography>
                <Typography variant="p" sx={PopoverItemContentSxstyle}>{popoverData['Request No']}</Typography>

            </div>
        </div>
    )
}
