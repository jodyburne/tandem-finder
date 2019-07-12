const newMessageTemplate = function(messageCreatorName,tandemId) {
return `


<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <title>
      
    </title>
    <!--[if !mso]><!-- -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
      #outlook a { padding:0; }
      .ReadMsgBody { width:100%; }
      .ExternalClass { width:100%; }
      .ExternalClass * { line-height:100%; }
      body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
      table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
      img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
      p { display:block;margin:13px 0; }
    </style>
    <!--[if !mso]><!-->
    <style type="text/css">
      @media only screen and (max-width:480px) {
        @-ms-viewport { width:320px; }
        @viewport { width:320px; }
      }
    </style>
    <!--<![endif]-->
    <!--[if mso]>
    <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    <!--[if lte mso 11]>
    <style type="text/css">
      .outlook-group-fix { width:100% !important; }
    </style>
    <![endif]-->
    
  <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
    <style type="text/css">
      @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
    </style>
  <!--<![endif]-->


    
<style type="text/css">
  @media only screen and (min-width:480px) {
    .mj-column-per-100 { width:100% !important; max-width: 100%; }
.mj-column-per-33 { width:33.33333333333333% !important; max-width: 33.33333333333333%; }
  }
</style>


    <style type="text/css">
    
    

@media only screen and (max-width:480px) {
  table.full-width-mobile { width: 100% !important; }
  td.full-width-mobile { width: auto !important; }
}

    </style>
    
    
  </head>
  <body style="background-color:#d6dde5;">
    
    
  <div
     style="background-color:#d6dde5;"
  >
    
  
  <!--[if mso | IE]>
  <table
     align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
  >
    <tr>
      <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
  <![endif]-->

  
  <div  style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;">
    
    <table
       align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"
    >
      <tbody>
        <tr>
          <td
             style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:20px;padding-top:20px;text-align:center;vertical-align:top;"
          >
            <!--[if mso | IE]>
              <table role="presentation" border="0" cellpadding="0" cellspacing="0">
            
    <tr>
  
        <td
           class="" style="vertical-align:top;width:600px;"
        >
      <![endif]-->
        
  <div
     class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
  >
    
  <table
     border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
  >
    
        <tr>
          <td
             align="center" style="font-size:0px;padding:10px 25px;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px;word-break:break-word;"
          >
            
  <div
     style="font-family:Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif;font-size:16px;line-height:1;text-align:center;color:#000000;"
  >
    <p><span style="color:#F57816;"><span style="font-size: 26px;">${messageCreatorName} sent you a new Message on talkEasy!</span></span>
      </p>
  </div>

          </td>
        </tr>
      
        <tr>
          <td
             align="center" style="font-size:0px;padding:10px 25px;padding-top:0;padding-right:0px;padding-bottom:0px;padding-left:0px;word-break:break-word;"
          >
            
  <table
     border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"
  >
    <tbody>
      <tr>
        <td  style="width:500px;">
          
  <img
     alt="Happy People eating" height="auto" src="https://res.cloudinary.com/db6thgsbb/image/upload/v1562925015/tandem/orange_pic_krkoj9.png" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="500"
  />

        </td>
      </tr>
    </tbody>
  </table>

          </td>
        </tr>
      
        <tr>
          <td
             align="center" vertical-align="middle" style="font-size:0px;padding:15px 30px;padding-top:10px;padding-right:25px;padding-bottom:0px;padding-left:25px;word-break:break-word;"
          >
            
  <table
     border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;"
  >
    <tr>
      <td
         align="center" bgcolor="#F57816" role="presentation" style="border:none;border-radius:3px;cursor:auto;padding:10px 25px;background:#F57816;" valign="middle"
      >
        <a
           href="${process.env.BASE_URL}/tandem/details/${tandemId}" style="background:#F57816;color:#FFFFFF;font-family:Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif;font-size:13px;font-weight:normal;line-height:120%;Margin:0;text-decoration:none;text-transform:none;" target="_blank"
        >
          See Message now
        </a>
      </td>
    </tr>
  </table>

          </td>
        </tr>
      
  </table>

  </div>

      <!--[if mso | IE]>
        </td>
      
    </tr>
  
              </table>
            <![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
    
  </div>

  
  <!--[if mso | IE]>
      </td>
    </tr>
  </table>
  
  <table
     align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
  >
    <tr>
      <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
  <![endif]-->

  
  <div  style="background:#222CCB;background-color:#222CCB;Margin:0px auto;max-width:600px;">
    
    <table
       align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#222CCB;background-color:#222CCB;width:100%;"
    >
      <tbody>
        <tr>
          <td
             style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;padding-top:0;text-align:center;vertical-align:top;"
          >
            <!--[if mso | IE]>
              <table role="presentation" border="0" cellpadding="0" cellspacing="0">
            
    <tr>
  
        <td
           class="" style="vertical-align:top;width:199.99999999999997px;"
        >
      <![endif]-->
        
  <div
     class="mj-column-per-33 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
  >
    
  <table
     border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
  >
    
        <tr>
          <td
             align="center" style="font-size:0px;padding:10px 25px;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px;word-break:break-word;"
          >
            
  <div
     style="font-family:Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:center;color:#ffffff;"
  >
    talk<span style="color:#F57816;">E</span>asy
  </div>

          </td>
        </tr>
      
  </table>

  </div>

      <!--[if mso | IE]>
        </td>
      
        <td
           class="" style="vertical-align:top;width:199.99999999999997px;"
        >
      <![endif]-->
        
  <div
     class="mj-column-per-33 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
  >
    
  <table
     border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
  >
    
  </table>

  </div>

      <!--[if mso | IE]>
        </td>
      
        <td
           class="" style="vertical-align:top;width:199.99999999999997px;"
        >
      <![endif]-->
        
  <div
     class="mj-column-per-33 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
  >
    
  <table
     border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
  >
    
  </table>

  </div>

      <!--[if mso | IE]>
        </td>
      
    </tr>
  
              </table>
            <![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
    
  </div>

  
  <!--[if mso | IE]>
      </td>
    </tr>
  </table>
  <![endif]-->


  </div>

  </body>
</html>

`
}

module.exports = newMessageTemplate;