import { BuildBusinessCredit } from "@/components/form-controller/modules/business-account/build.business.credit";
import { VideoCard } from "@/components/cards/video-card";
import { ImportantInformation } from "@/components/business-account-elements/important.imformation";
import { ArrowLineText } from "@/components/business-account-elements/arrow.line.text";
import { GeneralCard } from "@/components/cards/general.cad";
import { GotoWebsiteCard } from "@/components/cards/goto.website.card";
import { EditableContentRecordInvidual } from "@/components/business-account-elements/editable.content.record.invidual";
import { EditableContentRecord } from "@/components/business-account-elements/edaitable.content.record";
import { SelectCard } from "@/components/cards/select.card";
import { BlogCardRight, BlogCardLeft, BlogCustomCardLeft, BlogCustomCardBoldLeft } from "@/components/cards/blog.card";
import { DownloadCard } from "@/components/business-account-elements/dwonload.card";
import { Alert } from "@/components/business-account-elements/alert";
import { PaymentCard } from "@/components/cards/payment.card";
import { Notes } from "@/components/business-account-elements/notes";
import { AlertCard } from "@/components/cards/alert.card";
import { MonitorCard } from "@/components/cards/monitor.card";
import { MonitorCardGroup } from "@/components/cards/monitor.card.group";
import { MonitorRecord } from "@/components/business-account-elements/monitor.record";
import { TierDetailCard } from "@/components/cards/tier.detail.card";

const videoConten = {
  title: "Watch Video Transcript:",
  videoUrl: "/business-account/Rectangle 115.png",
  content: "BUSINESS CREDIBILITY",
}

const information = {
  title: "INFO",
  content: "There is a lot that goes into a name! There is a lot that goes into a name! There is a lot that goes into a name! There is a lot that goes into a name!There is a lot that goes into a name!There is a lot that goes into a name!",
  color: "green",
}

const invidualRecords = {
  title: "test",
  icon: "/business-account/bank.svg",
  contents: [
    {
      recordName: "Mainga",
      iconName: "edit",
    },
    {
      recordName: "Mainga",
      iconName: "arrow",
    },
    {
      recordName: "Mainga",
      iconName: "date",
    },
  ]
}

const records = {
  title: "Ttile",
  method: "Make Edit",
  invidualRecords: [
    {
      title: "test",
      icon: "/business-account/bank.svg",
      contents: [
        {
          recordName: "Mainga",
          iconName: "edit",
        },
        {
          recordName: "Mainga",
          iconName: "arrow",
        },
        {
          recordName: "Mainga",
          iconName: "date",
        },
      ]
    },
    {
      title: "test",
      icon: "",
      contents: [
        {
          recordName: "Mainga",
          iconName: "edit",
        },
        {
          recordName: "Mainga",
          iconName: "arrow",
        },
        {
          recordName: "Mainga",
          iconName: "date",
        },
      ]
    },
    {
      title: "test",
      icon: "",
      contents: [
        {
          recordName: "Mainga",
          iconName: "edit",
        },
        {
          recordName: "Mainga",
          iconName: "arrow",
        },
        {
          recordName: "Mainga",
          iconName: "date",
        },
      ]
    },
  ]
}

let selectCardProps = {
  content: {
    title: "Please indicate your response(Yes or No) for both of the following questionsbefore proceeding.",
    contents1: "Is the business address and ownership information accurate on your official documents? ",
    contents2: "Are the business address and ownership information accurate on your official documents? ",
  }

}

const contentBlogCardLeft = {
  picture: "",
  title: "FILE A BUSINESS ENTITY",
  content: "It’s important that you have a strong business foundation and it all starts with filing your business entity with your Secretary of State. Each state has a different filing and fee structure. Like a birth certificate is to an individual a business entity is the birth of a business.",
}

const alertContent = "the Coal of Step 2.1 is to apply for your DUNS number if you don't already have it, and to verify the address listed for your D & B account."

const blogCustomContent = {
  picture: "/business-account/Rectangle 115.png",
  title: "ESTABLISH YOUR DUNS#",
  contents: [
    {
      dataString: 'Ti <b>important</b> for a ubusldlf.....',
      dataColor: "text-gray-500",
      dataSize: "",
    },
    {
      dataString: "Ti's important for a ubusldlf.....",
      dataColor: "text-blue-600",
      dataSize: "text-xl",
    },
  ]
}

const paymentTitle = " Need to Set Up D & B Business Credit Report Monitoring?"
const paymentCard1 = {
  title: "Fixed Price",
  price: "35",
  recommeded: true,
  contents: [
    {
      record: "aaaaaaaaa",
    },
    {
      record: "aaaaaaaaa",
    },
    {
      record: "aaaaaaaaa",
    },
    {
      record: "Monitoring Through Bureau Insights",
    },
  ]
}
const paymentCard2 = {
  title: "Fixed Price",
  price: "35",
  recommeded: false,
  contents: [
    {
      record: "aaaaaaaaa",
    },
    {
      record: "aaaaaaaaa",
    },
    {
      record: "aaaaaaaaa",
    },
    {
      record: "Monitoring Through Bureau Insights",
    },
  ]
}

const alertCard = {
  title: "Fixed Price",
  icon: "/report/reports/i-1.svg",
  content: "Get your ChexSystems Report",
  subtitle: "GET REPORTS",
}

const notesContent = "Received Chex System Report..."


const paymentContents1 = {
  price: "49.95",
  recommeded: true,
  icon: "/monitor/i-check.svg",
  contents:
    [
      {
        record: "D&B and Experian and Equifax",
      },
      {
        record: "One TimePayment Only",
      },
      {
        record: "No Personal Guarantee Required",
      },
      {
        record: "Net will be only $30",
      },
    ]
}

const monitorCardGroup = [
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-credable.svg",
    contents:
      [
        {
          record: "D&B and Experian and Equifax",
        },
        {
          record: "One TimePayment Only",
        },
        {
          record: "No Personal Guarantee Required",
        },
        {
          record: "Net will be only $30",
        },
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-uline.svg",
    contents:
      [
        {
          record: "D&B and Experian and Equifax",
        },
        {
          record: "One TimePayment Only",
        },
        {
          record: "No Personal Guarantee Required",
        },
        {
          record: "Net will be only $30",
        },
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-brex.svg",
    contents:
      [
        {
          record: "D&B and Experian and Equifax",
        },
        {
          record: "One TimePayment Only",
        },
        {
          record: "No Personal Guarantee Required",
        },
        {
          record: "Net will be only $30",
        },
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-murphy.svg",
    contents:
      [
        {
          record: "D&B and Experian and Equifax",
        },
        {
          record: "One TimePayment Only",
        },
        {
          record: "No Personal Guarantee Required",
        },
        {
          record: "Net will be only $30",
        },
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-kum&go.svg",
    contents:
      [
        {
          record: "D&B and Experian and Equifax",
        },
        {
          record: "One TimePayment Only",
        },
        {
          record: "No Personal Guarantee Required",
        },
        {
          record: "Net will be only $30",
        },
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-grainger.svg",
    contents:
      [
        {
          record: "D&B and Experian and Equifax",
        },
        {
          record: "One TimePayment Only",
        },
        {
          record: "No Personal Guarantee Required",
        },
        {
          record: "Net will be only $30",
        },
      ]
  },
]

const monitorRecord = {
  contents: [
    {
      recordName: "Enter Trade Account",
      iconName: "arrow",           //edit, arrow, date
      comment: "",
      important: true,
    },
    {
      recordName: "Enter Date Applied",
      iconName: "date",           //edit, arrow, date
      comment: "",
      important: true,
    },
    {
      recordName: "Enter DAte For Payment",
      iconName: "date",           //edit, arrow, date
      comment: "Date Of First Payment(Or Date First Payment Is Due)",
      important: true,
    },
    {
      recordName: "Enter Approved Amount",
      iconName: "",           //edit, arrow, date
      comment: "",
      important: true,
    },
    {
      recordName: "Personal Guarantee",
      iconName: "arrow",           //edit, arrow, date
      comment: "",
      important: true,
    },
  ],
}

const tierContents = {
  title: "APPLY FOR 3 MORE TRADE ACCOUNTS",
  description: "YOU CURRENTLY HAVE AT LEAST 3 TRADE ACCOUNTS REPORTING, BUT NOW IT IS TIME TO ESTABLISH YOUR BUSINESS CREDIT REPORTS EVEN FURTHER. PLEASE SELECT AND APPLY FOR 3 MORE TRADE ACCOUNTS.",
  details: [
    {
      detail: "Remember to use your correct business information when applying, as all information should match your business records perfectly.",
    },
    {
      detail: "When you make a purchase, do so on your net /credit terms. It is payments on net / credit terms that are reported.",
    },
    {
      detail: " It typically takes <b>30-90 days</b> to complete this step and for your payments to report on your business credit reports. ",
    },
  ],
}
export default function Page() {
  return (
    <>
      <div className="flex flex-col justify-center content-center items-center">
        <TierDetailCard contents={tierContents} />
        {/* <MonitorRecord invidualRecord ={monitorRecord} /> */}
        <MonitorCardGroup paymentContents={monitorCardGroup} />
        <MonitorCard paymentContents1={paymentContents1} />
        <AlertCard alertContents={alertCard} />
        <PaymentCard title={paymentTitle} paymentContents1={paymentCard1} paymentContents2={paymentCard2} />
        <Notes content={notesContent} />
        <VideoCard videoContent={videoConten} />
        <ImportantInformation information={information} />
        <ArrowLineText type="flex flex-col w-[auto] text-center text-gray-700" content="DO YOU HAVE A BUSINESS NAME?" />
        <GeneralCard icon="/business-account/search.svg" content="Search secretary of state records" />
        <GotoWebsiteCard content="Variable" icon="/business-account/MyCorporation svg.svg" />
        <EditableContentRecordInvidual invidualRecord={invidualRecords} />
        <EditableContentRecord records={records} />
        {/* <SelectCard content={selectCardProps.content} /> */}

        {/* <BlogCardRight /> */}
        <Alert icon="/report/init/Shield-DoneVerifiedIcon.svg" content={alertContent} />
        <BlogCardLeft content={contentBlogCardLeft} />
        <BlogCustomCardLeft content={blogCustomContent} />
        <BlogCustomCardLeft content={blogCustomContent} />
        <div className="mt-10"></div>
      </div >

    </>
  )

}
