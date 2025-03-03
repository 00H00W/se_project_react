import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  clothingItems,
  onAddButtonClick,
  onCardClicked,
  onCardLike,
  onEditProfile,
  onLogOut,
}) {
  return (
    <div className="profile">
      <SideBar onEditProfile={onEditProfile} onLogOut={onLogOut} />
      <ClothesSection
        clothingItems={clothingItems}
        onAddButtonClick={onAddButtonClick}
        onCardClicked={onCardClicked}
        onCardLike={onCardLike}
      ></ClothesSection>
    </div>
  );
}

export default Profile;
