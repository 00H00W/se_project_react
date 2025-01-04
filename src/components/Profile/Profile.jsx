import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile() {
  return (
    <div className="profile">
      <SideBar></SideBar>
      <ClothesSection></ClothesSection>
    </div>
  );
}

export default Profile;
