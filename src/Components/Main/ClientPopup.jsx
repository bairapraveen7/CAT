import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import classes from "./ClientPopup.module.css"
import { Menu } from "@mui/icons-material";

export const ClientPopup = () => {
    const tableData = [
        {
            "FileName": "BCBS AZ_ Amended Restated CSA 4.21.23.PDF",
            "RequestNumber": "100130",
            "PDFID": "СРМ#1111",
            "PDFVersionID": "PDF123245",
            "ServiceNow": "XYZ"
        },
        {
            "FileName": "BCBS AZ_ Amended Restated CSA 4.21.23.PDF",
            "RequestNumber": "100130",
            "PDFID": "СРМ#1111",
            "PDFVersionID": "PDF123245",
            "ServiceNow": "XYZ"
        },
        {
            "FileName": "BCBS AZ_ Amended Restated CSA 4.21.23.PDF",
            "RequestNumber": "100130",
            "PDFID": "СРМ#1111",
            "PDFVersionID": "PDF123245",
            "ServiceNow": "XYZ"
        },
        {
            "FileName": "BCBS AZ_ Amended Restated CSA 4.21.23.PDF",
            "RequestNumber": "100130",
            "PDFID": "СРМ#1111",
            "PDFVersionID": "PDF123245",
            "ServiceNow": "XYZ"
        },
        {
            "FileName": "BCBS AZ_ Amended Restated CSA 4.21.23.PDF",
            "RequestNumber": "100130",
            "PDFID": "СРМ#1111",
            "PDFVersionID": "PDF123245",
            "ServiceNow": "XYZ"
        },
        {
            "FileName": "BCBS AZ_ Amended Restated CSA 4.21.23.PDF",
            "RequestNumber": "100130",
            "PDFID": "СРМ#1111",
            "PDFVersionID": "PDF123245",
            "ServiceNow": "XYZ"
        },
        {
            "FileName": "BCBS AZ_ Amended Restated CSA 4.21.23.PDF",
            "RequestNumber": "100130",
            "PDFID": "СРМ#1111",
            "PDFVersionID": "PDF123245",
            "ServiceNow": "XYZ"
        }
    ];

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
            tableData.map((item) => <tr>
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
            <td><Menu /></td>
            </tr>)
        }
    </table>

    <div className={classes.lastRow}>
        <Button>Add Row</Button>
        <Button variant="contained">Submit</Button>
    </div>

    <div className="2">

    </div>
    
    </div>
)

}