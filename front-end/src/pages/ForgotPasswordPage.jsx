import ForgotPasswordForm from "../components/forms/forgotpasswordform";

export default function ForgotPasswordPage() {


    return (
      <>
        <div style={{ height: "80vh" }}>

        {<ForgotPasswordForm/>}
          <h1>This is the forgot page for email validation & email sending</h1>
        </div>
      </>
    );
  }