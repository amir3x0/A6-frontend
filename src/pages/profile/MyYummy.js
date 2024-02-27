import React from "react";
import ProfileSection from "../../components/ProfileSection";


const MyYummy = () => {
    document.title = "My Yummy";
    return (
        <div>
            <ProfileSection />
        </div>
    );
};

export default MyYummy;

{/* <button className="mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
sign in
</button> */}