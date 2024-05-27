import { GoogleLogin } from "@react-oauth/google";

function GoogleRegistration() {
    return (
    <div className="mx-auto mt-8 w-96">
        <GoogleLogin
            onSuccess={credentialResponse => {
                console.log(credentialResponse);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />
    </div>)
    ;
}
export default GoogleRegistration;