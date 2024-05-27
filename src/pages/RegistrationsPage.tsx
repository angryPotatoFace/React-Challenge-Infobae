import Footer from "../components/Footer";
import HeaderApp from "../components/HeaderApp";
import RegistrationForm from "../components/RegistrationForm";
import GoogleRegistration from "../components/GoogleRegistration";

function RegistrationPage() {
    return (
    <>
        <HeaderApp />
        <div className="border rounded-xl mt-20 max-w-screen-2xl m-auto">
            <div className="flex">
                <img className="flex-auto w-32 ltr rounded-s-lg" src="https://www.infobae.com/new-resizer/ODaGi5u-QNnFuUrU2l_HCn0_fIA=/420x560/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/sandbox.infobae/NNF6NXFLIVEFNHP43Z5XSZQNGQ.jpg" />
                <div className="flex-auto w-16">
                    <RegistrationForm />
                    <GoogleRegistration />
                </div>
            </div>
        </div>
        <Footer />
    </>
);
}

export default RegistrationPage;