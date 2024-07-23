import Sider from "../../../components/admin/Sider"

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="w-full flex flex-col">
			<div className="w-full h-full flex flex-row">
				<Sider />
				<div className="w-full h-full">{children}</div>
			</div>
			<p className="flex w-full justify-center content-center items-center text-red-400 py-4 bg-white">
				@2024. Official Website
			</p>
		</div>
	)
}
