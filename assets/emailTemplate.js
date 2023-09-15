const emailTemplate = (name) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      <title>Document</title>
      <style>
        @font-face {
          font-family: "Raleway";
          font-style: normal;
          font-weight: 400;
          src: url("https://raghadsacademy.com/wp-content/uploads/2021/temp/raleway/Raleway-Regular.ttf")
            format("truetype");
        }
  
        @font-face {
          font-family: "Raleway";
          font-style: normal;
          font-weight: 600;
          src: url("https://raghadsacademy.com/wp-content/uploads/2021/temp/raleway/Raleway-Medium.ttf")
            format("truetype");
        }
  
        @font-face {
          font-family: "Raleway";
          font-style: normal;
          font-weight: bold;
          src: url("https://raghadsacademy.com/wp-content/uploads/2021/temp/raleway/Raleway-SemiBold.ttf")
            format("truetype");
        }
  
        body {
          margin: 0px;
          padding: 0px;
          font-family: Raleway, sans-serif;
        }
  
        .table-1 {
          width: 100%;
          height: 1024px;
          padding: 100px 100px;
          background-color: #efefef;
        }
  
        .table-2 {
          width: 600px;
          height: 822px;
          padding: 20.5px 0 24.7px;
        }
  
        .table-img-1 {
          width: 105.5px;
          height: 18.8px;
          margin: 0 247.7px 24.2px 246.7px;
          object-fit: contain;
        }
  
        .table-content {
          width: 416px;
          height: 419.8px;
        }
  
        .table-img-2 {
          width: 72px;
          height: 72px;
          padding: 7.5px 7.3px 7.5px 7.5px;
          margin-bottom: 24.5px;
        }
  
        .text-1 {
          width: 100%;
          margin: 0 0 12px;
          font-size: 32px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.25;
          letter-spacing: normal;
          text-align: center;
          color: #ffffff;
        }
  
        .text-2 {
          width: 100%;
          margin: 12px 0 0;
          font-size: 18px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.33;
          letter-spacing: normal;
          text-align: center;
          color: #828282;
        }
  
        .text-3 {
          width: 100%;
          margin: 0 0 32px;
          font-size: 16px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.25;
          letter-spacing: normal;
          color: #ffffff;
        }
  
        .text-4 {
          width: 100%;
          margin: 23.5px 0 0;
          font-size: 16px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: #5a5757;
        }
  
        .container-1 {
          width: 290px;
          height: 76.5px;
        }
  
        .password-text {
          width: 200px;
          height: 16px;
          margin-top: 0;
          margin-bottom: 12.5px;
          font-size: 14px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: center;
          color: #ffa726;
        }
  
        .table-border {
          padding: 9.5px 64px;
          border-radius: 8px;
          border: solid 1px #ffa726;
        }
  
        .password-contriner {
          width: 162px;
          height: 29px;
          font-size: 24px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: center;
          color: #ffffff;
        }
      </style>
    </head>
  
    <body style="padding: 0; margin: 0">
      <table
        role="presentation"
        border="0"
        cellpadding="0"
        cellspacing="0"
        class="table-1"
      >
        <tr>
          <td align="center">
            <table
              role="presentation"
              border="0"
              cellpadding="0"
              cellspacing="0"
              bgcolor="#ffffff"
              class="table-2"
            >
              <tr>
                <td align="center">
                  <table
                    role="presentation"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="table-img-1"
                  >
                    <tr>
                      <td align="center">
                        <img
                          src="https://i.ibb.co/c8xwM5h/icons8-logo-50.png"
                          alt="logo-image "
                        />
                      </td>
                    </tr>
                  </table>
                  <table
                    role="presentation"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                  >
                    <tr>
                      <td
                        height="1"
                        bgcolor="#8a8a8a"
                        style="
                          border: none;
                          border-bottom: 1px solid #8a8a8a;
                          font-size: 1px;
                          line-height: 1px;
                          width: 602px;
                        "
                      ></td>
                    </tr>
                  </table>
                  <table
                    role="presentation"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="empty-table-1"
                  >
                    <tr>
                      <td
                        style="width: 600px; height: 100px; margin: 0; padding: 0"
                      >
                        <p
                          style="
                            width: 600px;
                            height: 100px;
                            margin: 0;
                            padding: 0;
                          "
                        ></p>
                      </td>
                    </tr>
                  </table>
                  <table
                    role="presentation"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="table-content"
                  >
                    <tr>
                      <td align="center">
                        <table
                          role="presentation"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="table-img-2"
                        >
                          <tr>
                            <td align="center">
                              <img
                                src="https://i.ibb.co/jDm2T8d/icons8-fist-bump-64.png"
                                alt="email-lock"
                              />
                            </td>
                          </tr>
                        </table>
  
                        <table
                          role="presentation"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="text-1"
                        ></table>
  
                        <table
                          role="presentation"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="text-2"
                        >
                          <tr>
                            <td align="left">
                              Dear ${name},
                              <br />
                              I hope this email finds you well. I wanted to
                              express my sincere gratitude for taking the time to
                              review my portfolio. Your feedback means a lot to
                              me, and I truly appreciate your input.<br />
                              I am eager to hear your thoughts and suggestions
                              about my work. Your insights will be instrumental in
                              helping me improve and refine my portfolio,
                              ultimately helping me to grow as a Software
                              Engineer.<br />
                              Please feel free to share any specific comments or
                              suggestions you may have, whether they pertain to
                              the content, design, or overall presentation of my
                              portfolio. Your constructive criticism is invaluable
                              to me, and I'm eager to make the necessary
                              enhancements based on your recommendations.<br />
                              I understand that your time is valuable, and I want
                              to assure you that I take your feedback
                              seriously.<br />
                              Your perspective will play a pivotal role in my
                              professional development, and I am committed to
                              using it to enhance my portfolio and skills.<br />
                              Once again, thank you for your support and
                              willingness to help me progress in my career.<br />
                              I look forward to hearing from you and am grateful
                              for the opportunity to learn from your expertise.<br />
                              Best regards,
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                  <table
                    role="presentation"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="empty-table-1"
                  >
                    <tr>
                      <td
                        style="
                          width: 600px;
                          height: 100.5px;
                          margin: 0;
                          padding: 0;
                        "
                      >
                        <p
                          style="
                            width: 600px;
                            height: 100.1px;
                            margin: 0;
                            padding: 0;
                          "
                        ></p>
                      </td>
                    </tr>
                  </table>
                  <table
                    role="presentation"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                  >
                    <tr>
                      <td
                        height="1"
                        bgcolor="#8a8a8a"
                        style="
                          border: none;
                          border-bottom: 1px solid #8a8a8a;
                          font-size: 1px;
                          line-height: 1px;
                          width: 602px;
                        "
                      ></td>
                    </tr>
                  </table>
                  <table
                    role="presentation"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="text-4"
                  >
                    <tr>
                      <td align="center">
                        © 2023 ADMIN PANEL. All Right Reserved For Mustafa.
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
};

module.exports = { emailTemplate };
