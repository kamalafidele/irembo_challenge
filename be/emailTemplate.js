const formatEmail = (data) => {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Irembo Business Registration</title>
        <style>
            div.container p {
                color: black;
                font-size: 17px;
            }
    
            div.container span {
                font-weight: bold;
            }
    
            div.info-container {
                width: 70%;
                background-color: #dee0e3;
                border: 1px solid #dee0e3;
                border-radius: 5px;
                padding: 10px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <p>
                Hi there, <br>
                We've successfully registerd your business! <br>
                Below is the information you provided.
            </p>

            <div class="info-container">
               <p><span>Your citizenship</span>: ${data.citizenship}<p>
               <p><span>Your address</span>: ${data.ownerAddress}<p>
               <p><span>Your phone</span>: ${data.phoneNumber}<p>
               <p><span>Business Type</span>: ${data.businessType}<p>
               <p><span>Company Name</span>: ${data.companyName}<p>
               <p><span>Business Address</span>: ${data.businessAddress}<p>
               <p><span>Business TIN number</span>: ${data.businessTinNumber}<p>
               <p><span>Business Registration date</span>: ${data.registrationDate}<p>
               <p><span>Importation purpose</span>: ${data.importationPurpose}<p>
               <p><span>Product category</span>: ${data.productCategory}<p>
               <p><span>Product quantity</span>: ${data.productQuantity}<p>
            <div>
        </div>
    </body>
    </html>
    `;

    return html;
}

module.exports = formatEmail;