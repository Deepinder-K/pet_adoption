import BreadCrumb from "../../components/BreadCrumb.jsx";
import PageHeading from "../../components/adoption/PageHeading.jsx";
import NewsLetter from "../../components/NewsLetter.jsx";
import PetsTabs from "../../components/adoption/PetsTabs.jsx";

const PetGallery = () => {
    return (
        <>
            <BreadCrumb title="Adoption"/>

            <div className="page container">
                <PageHeading/>

                <PetsTabs/>
            </div>

            <NewsLetter/>
        </>
    )
}
export default PetGallery;