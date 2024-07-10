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
          <th>File Name</th>
          <th>Request Number</th>
          <th>PDF ID</th>
          <th>PDF Version ID</th>
          <th>Service Now</th>
        </tr>
        {
          tableData.map((eachItem) => <tr>
              <td>{eachItem.FileName}</td>
              <td>{eachItem.RequestNumber}</td>
              <td>{eachItem.PDFID}</td>
              <td>{eachItem.PDFVersionID}</td>
              <td>{eachItem.ServiceNow}</td>
              <td></td>
              <td></td>
          </tr>)
        }
    </table>
    </div>
)

}