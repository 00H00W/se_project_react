import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({ clothingItems, onAddButtonClick }) {
  return (
    <div className="profile">
      <SideBar></SideBar>
      <ClothesSection
        clothingItems={clothingItems}
        onAddButtonClick={onAddButtonClick}
      ></ClothesSection>
    </div>
  );
}

export default Profile;
