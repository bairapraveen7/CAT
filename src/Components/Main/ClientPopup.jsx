import classes from "./ClientPopup.module.css"

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
            </tr>)
        }
    </table>
    
    </div>
)

}