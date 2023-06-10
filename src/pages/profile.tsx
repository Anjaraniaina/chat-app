import React from 'react';
import Profile from "@/components/Profile";
import Protected from "@/components/Protected";

const ProfilePage = () => {
  return (
    <div>
        <Protected>

        </Protected>
      <Profile />
    </div>
  );
};

export default ProfilePage;