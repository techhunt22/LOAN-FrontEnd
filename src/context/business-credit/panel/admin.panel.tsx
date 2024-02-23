import { UserInformationAvatar } from "@/components/admin/user.information.avatar"
import { SquaresPlusIcon, UserGroupIcon, UserIcon, UsersIcon } from "@heroicons/react/24/outline"
import { UserPlusIcon } from "@heroicons/react/24/outline"
import { FaceSmileIcon } from "@heroicons/react/24/outline"
import { Groups2Outlined, PersonAddAltOutlined } from "@mui/icons-material"
import { UserAdd } from "iconsax-react"
import Link from "next/link"

const contentUserAvatar = {
    userName: "Julie Marcos",
    userDescription: "Managing Director",
    userImage: "/userbig.png",
}

interface AdminPanelProps {
    activeState: string,
}

export const AdminPanel: React.FC<AdminPanelProps> = (props) => {
    return (
        <>
            <div className="flex flex-col w-full mt-16">
                <UserInformationAvatar userContents={contentUserAvatar} />
                <div className="h-12"></div>
                <div className={props.activeState === "team" ? "flex flex-row w-full text-gray-700 justify-start mt-20 content-center items-center gap-6 rounded-r-full pl-5" : "flex flex-row w-full justify-start content-center items-center rounded-r-full gap-6 text-gray-200 pl-5 "} >
                    {/* <Groups2Outlined className="flex w-24 h-20 text-white pt-5"/> */}
                    <UserGroupIcon className="flex w-10 h-10" />
                    <div className="flex text-md w-max"><Link href={'#'}>Team</Link></div>
                </div>
                <div className="h-8"></div>
                <div className={props.activeState === "user" ? "flex flex-row w-full text-gray-700 justify-start mt-20 content-center items-center gap-6 rounded-r-full pl-5" : "flex flex-row w-full justify-start content-center items-center rounded-r-full gap-6 text-gray-200 pl-5"} >
                    {/* <Groups2Outlined className="flex w-24 h-20 text-white pt-5"/> */}
                    <UserAdd className="flex w-10 h-10" />
                    <div className="flex text-md w-max"><Link href={'#'}>Active User</Link></div>
                </div>
                <div className="h-8"></div>
                <div className={props.activeState === "dispute" ? "flex flex-row w-full text-gray-700 justify-start mt-20 content-center items-center gap-6 rounded-r-full pl-5" : "flex flex-row w-full justify-start content-center items-center rounded-r-full gap-6 text-gray-200 pl-5"} >
                    {/* <Groups2Outlined className="flex w-24 h-20 text-white pt-5"/> */}
                    <SquaresPlusIcon className="flex w-10 h-10" />
                    <div className="flex text-md w-max"><Link href={'#'}>Active Disputes</Link></div>
                </div>

            </div>
        </>
    )
}