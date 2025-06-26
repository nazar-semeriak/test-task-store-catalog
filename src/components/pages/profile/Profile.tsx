import PageLayout from "@/components/layout/PageLayuot";
import PageBreadcrumb from "@/components/ui/PageBreadcrumb";
import React from "react";

const Profile: React.FunctionComponent = () => {
  const profileBreadcrumb = [
    { label: "Home", href: "/" },
    { label: "Profile", href: "/profile" },
  ];
  return (
    <PageLayout
      title="Profile"
      breadcrumb={<PageBreadcrumb data={profileBreadcrumb} />}
    >
      <div></div>
    </PageLayout>
  );
};

export default Profile;
