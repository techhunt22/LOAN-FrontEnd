interface UserInformationAvatarProps {
    userContents: {
        userImage: string,
        userName: string,
        userDescription: string,
    }
}

export const UserInformationAvatar : React.FC<UserInformationAvatarProps> = (props) => {
    return(
        <>
            <div className="flex flex-row justify-center gap-3">
                <img src={props.userContents.userImage} alt="user_photo" className="flex w-24 h-24 rounded-full" />
                <div className="flex flex-col w-max mt-5">
                    <h1 className="text-xl">{props.userContents.userName}</h1>
                    <b className="text-gray-300 text-xs">{props.userContents.userDescription}</b>
                </div>
            </div>
        </>
    )
}