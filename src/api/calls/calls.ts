import api from "@/api/config/config"
import { Calls } from "@/api/calls/type"

export namespace ApiCalls {
	const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

	export const SignIn = async (
		data: Calls.IRequest.SignIn
	): Promise<Calls.IResponse.SignIn> => {
		return await api
			.post(`${API_BASE_URL}/auth/login`, data)
			.then((res) => res.data)
			.catch((rej) => rej.response.data)
	}
	export const SignOut = async () => {
		return await api
			.get("/logout")
			.then((res) => res.data)
			.catch((rej) => rej.response.data)
	}

	export const SignUp = async (
		data: Calls.IRequest.SignUp
	): Promise<Calls.IResponse.SignUp> => {
		return await api
			.post("/authentication.sign_up", data)
			.then((res) => res.data)
			.catch((rej) => rej.response.data)
	}

	export const Auth = async () => {
		return await api
			.get("/auth")
			.then((res) => res.data)
			.catch((rej) => rej.data)
	}
	export const ForgotPassword = async (
		data: Calls.IRequest.ForgotPassword
	): Promise<Calls.IResponse.SignIn> => {
		return await api
			.post("/authentication.forgot_password", data)
			.then((res) => res.data)
	}

	export const Module = {
		businessName: async (
			data: Calls.IRequest.ModulesBusinessName
		): Promise<Calls.IResponse.BusinessName> => {
			return await api
				.post("/business/name", data)
				.then((res) => res.data)
				.catch((e) => e.response.data)
		},
		businessAddress: async (
			data: Calls.IRequest.ModulesBusinessAddress
		): Promise<Calls.IResponse.BusinessAddress> => {
			return await api
				.post("business/address", data)
				.then((res) => res.data)
				.catch((e) => e.response.data)
		},
		businessEntry: async (
			data: Calls.IRequest.ModulesBusinessEntity
		): Promise<Calls.IResponse.BusinessEntity> => {
			return await api
				.post("/business/entity", data)
				.then((res) => res.data)
				.catch((e) => e.response.data)
		},
		businessEin: async (
			data: Calls.IRequest.ModulesBusinessEin
		): Promise<Calls.IResponse.BusinessEin> => {
			return await api
				.post("/business/ein", data)
				.then((res) => res.data)
				.catch((e) => e.response.data)
		},
		businessPhone: async (
			data: Calls.IRequest.ModulesBusinessPhone
		): Promise<Calls.IResponse.BusinessPhone> => {
			return await api
				.post("/business/phone.detail", data)
				.then((res) => res.data)
				.catch((e) => e.response.data)
		},
		businessEmail: async (
			data: Calls.IRequest.ModulesBusinessEmail
		): Promise<Calls.IResponse.BusinessEmail> => {
			return await api
				.post("/business/email.detail", data)
				.then((res) => res.data)
				.catch((e) => e.response.data)
		},
		businessLicense: async (
			data: Calls.IRequest.ModulesBusinessLicense
		): Promise<Calls.IResponse.BusinessLicense> => {
			return await api
				.post("/business/license", data)
				.then((res) => res.data)
				.catch((e) => e.response.data)
		},
		businessBank: async (
			data: Calls.IRequest.ModulesBusinessBank
		): Promise<Calls.IResponse.BusinessBank> => {
			return await api
				.post("/business/bank", data)
				.then((res) => res.data)
				.catch((e) => e.response.data)
		},
		businessMerchant: async (
			data: Calls.IRequest.ModulesBusinessMerchant
		): Promise<Calls.IResponse.BusinessMerchant> => {
			return await api
				.post("/business/merchant.bank", data)
				.then((res) => res.data)
				.catch((e) => e.response.data)
		},
		businessReport: async (
			data: Calls.IRequest.ModulesBusinessReport
		): Promise<Calls.IResponse.BusinessReport> => {
			return await api
				.post("/business/duns", data)
				.then((res) => res.data)
				.catch((e) => e.response.data)
		},
		businessExperian: async (
			data: Calls.IRequest.ModulesBusinessExperian
		): Promise<Calls.IResponse.BusinessExperian> => {
			return await api
				.post("/business/experian", data)
				.then((res) => res.data)
				.catch((e) => e.response.data)
		},
		businessEquifax: async (
			data: Calls.IRequest.ModulesBusinessEquifax
		): Promise<Calls.IResponse.BusinessEquifax> => {
			return await api
				.post("/business/equifax", data)
				.then((res) => res.data)
				.catch((e) => e.response.data)
		},
		businessStartBuildingTierOne: async (
			data: Calls.IRequest.ModulesBusinessStartBuildingTierOne
		): Promise<Calls.IResponse.BusinessStartBuilding> => {
			return await api
				.post("/business/start.building/tier.one", data)
				.then((res) => res.data)
				.catch((e) => e.response.data)
		},
		businessStartBuildingTierTwo: async (
			data: Calls.IRequest.ModulesBusinessStartBuildingTierTwo
		): Promise<Calls.IResponse.BusinessStartBuilding> => {
			return await api
				.post("/business/start.building/tier.two", data)
				.then((res) => res.data)
				.catch((e) => e.response.data)
		},
		businessStartBuildingTierThree: async (
			data: Calls.IRequest.ModulesBusinessStartBuildingTierThree
		): Promise<Calls.IResponse.BusinessStartBuilding> => {
			return await api
				.post("/business/start.building/tier.three", data)
				.then((res) => res.data)
				.catch((e) => e.response.data)
		},
		businessStartBuildingTierFour: async (
			data: Calls.IRequest.ModulesBusinessStartBuildingTierFour
		): Promise<Calls.IResponse.BusinessStartBuilding> => {
			return await api
				.post("/business/start.building/tier.four", data)
				.then((res) => res.data)
				.catch((e) => e.response.data)
		},
		einFile: async (
			data: Calls.IRequest.ModulesBusinessEinFile
		): Promise<Calls.IResponse.BusinessFile> => {
			const formData = new FormData()
			if (data) {
				formData.append("einFile", data.einFile as File)
			}
			return await api
				.post("/business/ein.file", formData)
				.then((res) => res.data)
				.catch((e) => e.response.data)
		},
		businessReportFile: async (
			data: Calls.IRequest.ModulesBusinessReportFile
		): Promise<Calls.IResponse.BusinessFile> => {
			const formData = new FormData()
			if (data) {
				formData.append("monitorDunsFile", data.monitorDunsFile as File)
			}
			return await api
				.post("business/monitor.duns.file", formData)
				.then((res) => res.data)
				.catch((e) => e.response.data)
		},
		monitorExperianFile: async (
			data: Calls.IRequest.ModulesBusinessExperianFile
		): Promise<Calls.IResponse.BusinessFile> => {
			const formData = new FormData()
			if (data) {
				formData.append(
					"monitorExperianFile",
					data.monitorExperianFile as File
				)
			}
			return await api
				.post("/business/monitor.experian.file", formData)
				.then((res) => res.data)
				.catch((e) => e.response.data)
		},
		monitorEquifaxFile: async (
			data: Calls.IRequest.ModulesBusinessEquifaxFile
		): Promise<Calls.IResponse.BusinessFile> => {
			const formData = new FormData()
			if (data) {
				formData.append(
					"monitorEquifaxFile",
					data.monitorEquifaxFile as File
				)
			}
			return await api
				.post("/business/monitor.equifax.file", formData)
				.then((res) => res.data)
				.catch((e) => e.response.data)
		},
		lexisFile: async (
			data: Calls.IRequest.ModulesBusinessLexisFile
		): Promise<Calls.IResponse.BusinessFile> => {
			const formData = new FormData()
			if (data) {
				formData.append("lexisFile", data.lexisFile as File)
			}
			return await api
				.post("/business/lexis.file", formData)
				.then((res) => res.data)
				.catch((e) => e.response.data)
		},
		chexSystemFile: async (
			data: Calls.IRequest.ModulesBusinessChexSystemFile
		): Promise<Calls.IResponse.BusinessFile> => {
			const formData = new FormData()
			if (data) {
				formData.append("chexSystemFile", data.chexSystemFile as File)
			}
			return await api
				.post("/business/chex.system.file", formData)
				.then((res) => res.data)
				.catch((e) => e.response.data)
		},
		startBuildingTierOneFile: async (
			data: Calls.IRequest.ModulesBusinessStartBuildingTierOneFile
		): Promise<Calls.IResponse.BusinessFile> => {
			const formData = new FormData()
			if (data) {
				formData.append(
					"startBuildingTierOneFile",
					data.startBuildingTierOneFile as File
				)
			}
			return await api
				.post("/business/start.building/tier.one.file", formData)
				.then((res) => res.data)
				.catch((e) => e.response.data)
		},
		startBuildingTierTwoFile: async (
			data: Calls.IRequest.ModulesBusinessStartBuildingTierTwoFile
		): Promise<Calls.IResponse.BusinessFile> => {
			const formData = new FormData()
			if (data) {
				formData.append(
					"startBuildingTierTwoFile",
					data.startBuildingTierTwoFile as File
				)
			}
			return await api
				.post("/business/start.building/tier.two.file", formData)
				.then((res) => res.data)
				.catch((e) => e.response.data)
		},
		startBuildingTierThreeFile: async (
			data: Calls.IRequest.ModulesBusinessStartBuildingTierThreeFile
		): Promise<Calls.IResponse.BusinessFile> => {
			const formData = new FormData()
			if (data) {
				formData.append(
					"startBuildingTierThreeFile",
					data.startBuildingTierThreeFile as File
				)
			}
			return await api
				.post("/business/start.building/tier.three.file", formData)
				.then((res) => res.data)
				.catch((e) => e.response.data)
		},
		startBuildingTierFourFile: async (
			data: Calls.IRequest.ModulesBusinessStartBuildingTierFourFile
		): Promise<Calls.IResponse.BusinessFile> => {
			const formData = new FormData()
			if (data) {
				formData.append(
					"startBuildingTierFourFile",
					data.startBuildingTierFourFile as File
				)
			}
			return await api
				.post("/business/start.building/tier.four.file", formData)
				.then((res) => res.data)
				.catch((e) => e.response.data)
		},

		one: {
			Status: async () => {
				return await api
					.get("/")
					.then((res) => res.data)
					.catch((e) => e.response.data)
			},
			signUp: async (
				data: Calls.IRequest.ModuleOneSignUp
			): Promise<Calls.IResponse.ModulesSignUp> => {
				return await api
					.post("http://54.87.77.177:3001/auth/register", data)
					.then((res) => res.data)
			},
			bureauCredential: async (
				data: Calls.IRequest.PullReport
			): Promise<Calls.IResponse.PullReport> => {
				return await api
					.post(`${API_BASE_URL}/provider`, data)
					.then((res) => res.data)
			},
			meeting: async (): Promise<Calls.IResponse.Meeting> => {
				return await api
					.post("/modules/one.meeting")
					.then((res) => res.data)
			},
			docs: async (
				data: Calls.IRequest.Docs
			): Promise<Calls.IResponse.DocUploaded> => {
				const formData = new FormData()
				if (data) {
					formData.append("identityCard1", data.identityCard1 as File)
					formData.append(
						"proofOfAddress1",
						data.proofOfAddress1 as File
					)
					formData.append(
						"socialSecurityCard1",
						data.socialSecurityCard1 as File
					)
					formData.append("identityCard2", data.identityCard2 as File)
					// formData.append("proofOfAddress2", data.proofOfAddress2 as File);
					formData.append(
						"socialSecurityCard2",
						data.socialSecurityCard2 as File
					)
				}
				return await api
					.postForm("/modules/one.docs", formData)
					.then((res) => res.data)
					.catch((e) => e.response.data)
			},
			plans: async (): Promise<Calls.IResponse.ModuleOnePackageResponse> => {
				return await api
					.get("/modules/one.plans")
					.then((res) => res?.data)
			},
			PFAccount: async (
				data: Calls.IRequest.PFAccount
			): Promise<Calls.IResponse.PFAccount> => {
				return await api
					.post("/modules/one.fp.account", data)
					.then((res) => res?.data)
			}
		},
		three: {
			BusinessDetails: async (
				data: Calls.IRequest.BusinessFundingBusinessDetails
			) => {
				return await api
					.post("/modules/three.lead.business_details", data)
					.then((res) => res?.data)
			},
			ApplicantDetails: async (
				data: Calls.IRequest.IBusinessFundingApplicantDetails
			) => {
				return await api
					.post("/modules/three.lead.applicant_details", data)
					.then((res) => res?.data)
			},
			LoanDetails: async (
				data: Calls.IRequest.IBusinessFundingLoanDetails
			) => {
				return await api
					.post("/modules/three.lead.loan_details", data)
					.then((res) => res?.data)
			},
			Documentation: async (
				data: Calls.IRequest.IBusinessFundingDocumentation
			) => {
				const formData = new FormData()
				if (data) {
					formData.append("application_id", data.application_id)
					formData.append("bankStatement", data.bankStatement as File)
					formData.append("signature", data.signature as File)
					formData.append("ownership", data.ownership)
					formData.append("tAndC", data.tAndC)
				}
				return await api
					.post("/modules/three.lead.documentation", formData)
					.then((res) => res?.data)
			}
		},
		four: {
			lead: async (data: Calls.IRequest.LeadRequestFour) => {
				return await api
					.post("/modules/four.lead.request", data)
					.then((res) => res?.data)
			}
		}
	}
	export const Checkout = async (
		data: Calls.IRequest.Checkout
	): Promise<Calls.IResponse.Checkout> => {
		return await api.post("/checkout", data).then((res) => res.data.data)
	}

	export const CheckOutBilling = async (data: {
		type: "module1" | "module2"
		_id: string
		paytype: "full" | "emi"
	}) => {
		return await api
			.get("/checkout.bill_details", {
				params: { ...data }
			})
			.then((res) => res.data.data).catch((error)=>console.log(error))
	}
	export const Users = async () => {
		try {
			const response = await api.get("/get.all.users")
			return response.data
		} catch (error) {
			console.error("Error fetching users:", error)
			throw error // Rethrow the error to be caught by the caller
		}
	}
}
