import { UserInformationAvatar } from "@/components/admin/user.information.avatar"

const contentUserAvatar = {
  userName: "Julie Marcos",
  userDescription: "Managing Director",
  userImage: "/userbig.png",
}

export default function Page() {
  return (
    <>
      <div className="flex flex-col justify-center content-center items-center">
        <UserInformationAvatar userContents={contentUserAvatar} /> 
        <div className="mt-10"></div>
      </div >

    </>
  )

}
