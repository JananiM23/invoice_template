const template = (comapanyDeatils, 
  customerData, 
  stateName, 
  stateCode, 
  billNo,
  receiptNo,
  date,
  sampleSpecification,
  colour,
  buyer,
  certicateNo,
  productDetails,
  udyamNumber,
  bookedBy,
  totalAmountBeforeTax,
  cgst,
  sgst,
  igst,
  bankdetails,
  gpayNumber,
) => {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Invocie Template</title>
    <style>
      body {
        font-family: Arial, sans-serif;
      }
      table {
        width: 100%;
        border-collapse: collapse;
      }
      table,
      th,
      td {
        border: 1px solid black;
        padding: 8px;
        text-align: left;
      }
      th,
      td {
        padding: 12px;
      }
      p {
        margin: 4px 0;
      }
      .nested-table {
        width: 100%;
      }
      .nested-table td {
        background-color: #f0f8ff; /* Light blue background for nested table */
        padding: 8px;
        border: 1px solid black;
      }
      .header {
        background-color: #f2f2f2;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <table>
      <tr class="header">
        <td>
          <h2>${comapanyDeatils}</h2>
          <span>ISO 9001: 2015 Certified Labs</span>
          <p>GSTIN :${comapanyDeatils.companyGSTIn}</p>
          <p>State: ${stateName}</p>
          <p>State Code: ${stateCode}</p>
        </td>
        <td colspan="2"><p>${comapanyDeatils.companyAddress}</p></td>
      </tr>
      <tr>
        <td><p>to</p></td>
        <td colspan="2"><p>bill.NO</p></td>
      </tr>
      <tr>
        <td colspan="3">Sample</td>
      </tr>
      <tr>
        <td colspan="3">ASC</td>
      </tr>
      <tr class="header">
        <td>S.NO</td>
        <td>TEXT Detail</td>
        <td>amount</td>
      </tr>
      <tr>
        <td>details</td>
        <td>details</td>
        <td>details</td>
      </tr>
      <tr>
        <td colspan="3">
          <table class="nested-table">
            <tr>
              <td>
                <table>
                  <tr>
                    <td>Nested Cell 1</td>
                    <td>Nested Cell 2</td>
                  </tr>
                </table>
              </td>
              <td>Regular Cell 2</td>
              <td>Regular Cell 2</td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td>details</td>
        <td colspan="2">details</td>
      </tr>
      <tr>
        <td>details</td>
        <td colspan="2">details</td>
      </tr>
    </table>
  </body>
</html>
`
}

module.exports = template;