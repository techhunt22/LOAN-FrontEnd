
export interface LetterData {
    id: number; // Ensure id is defined as string type
    content: string;
    // Add other properties as needed
  }

  
  export const letterdata: LetterData[]= [
    { id: 1, content: `
     <p>   {client first_name) </p> 
     <p>{client last_name) </p>
     <p>{client_address} </p>
     <p>{bdate} </p>
     <p>{ss_number) </p>
     <p>{bureau_address)</p>
     <p>{curr_date} </p>
     <p>Re: Letter to Remove Inaccurate Credit Information </p>
     <p>To Whom It May Concern: </p>
     <p>I received a copy of my credit report and found the following item(s) to be in error: </p>
     <p>{dispute_item_and_explanation) </p>
     <p>By the provisions of the Fair Credit Reporting Act, I demand that these items be investigated and removed </p>
     <p>from my report It is my understanding that you will recheck these items with the creditor who has posted them. Please remove any information that the creditor cannot verify. I understand that under 15 IJ S.C.  </p>
     <p>Sec 1681 i(a), you must complete this reinvestigation within 30 days of receipt of this letter. Please send an updated copy of my credit report to the above address. According to the act, there shall be 
no charge for this report. I also request that you please send notices of corrections to anyone who 
received my credit report in the past six months. </p>
     <p>Thank you for your time and help in this matter </p>
     <p>Sincerely, </p>
     <p>{client_signature) </p>
     <p>{client first_name) </p>
     <p>{client last_name)</p>
`},

    { id: 2, content: `
      <p>{client_first_name}</p>
<p>{client_last_name}</p>
<p>{client_address}</p>

<p>Annual Credit Report Request Service</p>
<p>PO Box 105281</p>
<p>Atlanta, GA 30348-5281</p>

<p>{curr_date}</p>

<p>Re: Request for Complimentary Annual Credit Reports</p>
<p>To Whom It May Concern,</p>

<p>I am writing to request my complimentary annual credit report from Experian.</p>

<p>Full Name: {client_first_name} {client_last_name}</p>
<p>Date of Birth: {bdate}</p>
<p>Social Security Number: {ss_number}</p>
<p>Address: {client_address}</p>
<p>Telephone Number: {t_no}</p>

<p>Enclosed are copies of documents identifying me by my name and address.</p>

<p>Thank you for your time and help in this matter.</p>

<p>Sincerely yours,</p>
<p>{client_signature}</p>
<p>{client_first_name} {client_last_name}</p>
	` },
    { id: 3, content: `
       <p>{client_first_name}</p>
<p>{client_last_name}</p>
<p>{client_address}</p>
<p>{bureau_address}</p>

<p>Full Name: {client_first_name} {client_last_name}</p>
<p>Date of Birth: {bdate}</p>
<p>Social Security Number: {ss_number}</p>
<p>Address: {client_address}</p>
<p>Telephone Number: {t_no}</p>
<p>Previous Address: {client_previous_address}</p>
<p>{curr_date}</p>

<p>Re: Credit Report Number (ENTER IF AVAILABLE)</p>
<p>Add consumer statement</p>

<p>To Whom It May Concern,</p>

<p>Please add the following personal statement to my credit history report:</p>

<p>(YOUR 100 WORD (OR LESS) STATEMENT GOES HERE)</p>

<p>Enclosed are copies of documents identifying me by my name and address.</p>

<p>Thank you for your time and help in this matter.</p>

<p>Sincerely yours,</p>
<p>{client_signature}</p>
	` },

    { id: 4, content: `
      <p>{client_first_name} {client_last_name}</p>
<p>{client_address}</p>
<p>{bdate}</p>
<p>{ss_number}</p>
<p>{bureau_address}</p>
<p>{curr_date}</p>

<p>To Whom It May Concern,</p>

<p>This letter is a formal complaint that you have ignored my previous request and failed to maintain reasonable procedures in your operations to assure maximum possible accuracy in the credit reports you publish. Credit reporting laws ensure that bureaus report only 100% accurate credit information and every step must be taken to assure the information reported is completely accurate and correct.</p>

<p>Please refer to my previous letter for the information that needs to be reinvestigated.</p>

<p>{dispute_item_and_explanation}</p>

<p>The information must be deleted from my report as soon as possible. The information is inaccurate and misleading and as such represents a very serious error in your reporting.</p>

<p>Under federal law, you have thirty (30) days to complete your reinvestigation. Be advised that the description of the procedure used to determine the accuracy and completeness of the information is hereby requested as well, to be provided within fifteen (15) days of the completion of your reinvestigation.</p>

<p>Sincerely yours,</p>
<p>{client_signature}</p>
<p>{client_first_name} {client_last_name}</p>
	` },
    { id: 5, content: `
        <p>{client_first_name} {client_last_name}</p>
<p>{client_address}</p>
<p>{bdate}</p>
<p>{ss_number}</p>
<p>{bureau_address}</p>
<p>Attn: Customer Relations Department</p>
<p>{curr_date}</p>

<p>To Whom It May Concern,</p>

<p>I am in total disagreement with your investigation response. The incorrect items listed below still appear on my credit report, even after your investigation. I would like these items immediately reinvestigated and for good cause. These inaccuracies are highly injurious to my credit rating.</p>

<p>{dispute_item_and_explanation}</p>

<p>Furthermore, in accordance with The Fair Credit Reporting Act, Public Law 91-506, Title VI, Section 611, Subsection A-D, I demand that you provide actual proof the information was verified, not a computer-generated confirmation.</p>

<p>Please provide:</p>
<ol>
  <li>The names and business addresses of each individual with whom you verified the information above, so that I may follow up.</li>
  <li>The date you contacted the individual furnishers of information.</li>
  <li>The method of communication you used to verify the information.</li>
</ol>

<p>I would also like to know if the furnisher provided you with my SSN, address, or DOB.</p>

<p>Please forward an updated credit report to me after you have completed your investigation and corrections.</p>

<p>Your cooperation and prompt attention are required by law.</p>

<p>Sincerely,</p>
<p>{client_signature}</p>
<p>{client_first_name} {client_last_name}</p>

	` },
    { id: 6, content: `
       <p>{client_first_name}</p>
<p>{client_last_name}</p>
<p>{client_address}</p>
<p>{bdate}</p>
<p>{ss_number}</p>
<p>{bureau_address}</p>
<p>Re: Warning to Remove Incorrect Items from my Credit Report</p>
<p>{curr_date}</p>

<p>To Whom It May Concern:</p>

<p>I recently sent you a request to reinvestigate the information previously disputed. I have attached my previous correspondence for you to revisit.</p>

<p>The computer-generated response I received is unacceptable and I am losing patience. If the information is not immediately reinvestigated and removed, I will be forced to seek legal counsel for relief through the court and file complaints with regulatory enforcement agencies including the CFPB, FTC, and my state attorney general.</p>

<p>Remove this incorrect information at once and send me an updated copy of my credit history report.</p>

<p>{dispute_item_and_explanation}</p>

<p>I also request that you please send notices of corrections to anyone who received my credit report in the past six months.</p>

<p>Sincerely,</p>
<p>{client_signature}</p>
<p>{client_first_name} {client_last_name}</p>

       
       
        ` },
    { id: 7, content: `<p>{client_first_name} {client_last_name}</p>
<p>{client_address}</p>
<p>{client_previous_address}</p>
<p>{bureau_address}</p>
<p>{curr_date}</p>

<p>RE: Request for Investigation of Unauthorized Inquiry</p>

<p>To Whom It May Concern,</p>

<p>I checked my personal credit report, which I acquired from your organization on (INSERT DATE OF REPORT), and I noticed that this unauthorized inquiry had been made:</p>

<p>{dispute_item_and_explanation}</p>

<p>I contacted {CREDITOR/FURNISHERS NAME}, who placed the inquiry, and asked them to remove their credit inquiry from my credit profile. I also asked them to cease their illegal activities immediately, but to date, there have been no responses from their office. Since sending the letter more than 30 business days ago, they have failed to respond and honor my request.</p>

<p>Therefore, I must request your help in resolving this matter. In accordance with the Fair Credit Reporting Act, I request you immediately initiate an investigation into this inquiry on my credit report to determine who authorized the inquiry. If, once your investigation is complete, you find my allegation to be true, please remove the unauthorized inquiry from my credit report and send me an updated copy of my credit report at my address listed above. If you do find the inquiry referenced above to be valid, I request that you please send me a full description of the procedures used in your investigation within 15 business days of the completion of the investigation.</p>

<p>Thank you for your help and assistance.</p>

<p>Sincerely,</p>
<p>{client_signature}</p>
	`},
    { id: 8, content: `<p>{client_first_name} {client_last_name}</p>
<p>{client_address}</p>
<p>{client_previous_address}</p>
<p>{bdate}</p>
<p>{ss_number}</p>
<p>{bureau_address}</p>
<p>Attn.: Consumer Relations</p>
<p>{curr_date}</p>

<p>To Whom It May Concern,</p>

<p>On (DATE), I wrote to you requesting an investigation into items that I believed were (CHOOSE: INACCURATE, OUTDATED, OR OBSOLETE). To date, I have not received a reply from you or any acknowledgment that an investigation has begun. In my previous request, I listed my reasons for disputing the information. I have enclosed it again and request that you reply within a reasonable amount of time.</p>

<p>Since this is my (SECOND, THIRD, FOURTH, ETC.) request, I will also be sending a copy of this letter to the Federal Trade Commission notifying them that I have signed receipts for letters sent to you and you have not complied with my request. I regret that I am forced to take such action.</p>

<p>Please see my reasons for dispute below:</p>

<p>{dispute_item_and_explanation}</p>

<p>I also understand that you are required to notify me of your investigation results within 30 days and provide me with an updated copy of my credit report. My contact information is provided below.</p>

<p>Sincerely,</p>
<p>{client_signature}</p>
	` },
    { id: 9, content: `
        <p>{client_first_name} {client_last_name}</p>
<p>{client_address}</p>
<p>{client_previous_address}</p>
<p>SS#: {client_social_security}</p>
<p>{credit_bureau}</p>
<p>{bureau_address}</p>
<p>{curr_date}</p>

<p>Re: (CREDIT REPORT NUMBER):</p>

<p>To Whom It May Concern,</p>

<p>The below account(s) should all show the following: included in bankruptcy. Accordingly, pursuant to the Fair Credit Reporting Act, please investigate and correct this inaccurate information.</p>

<p>{dispute_item_and_explanation}</p>

<p>Upon completion of this process, please mail an updated report to:</p>

<p>{client_first_name} {client_last_name}</p>
<p>{client_address}</p>
<p>{client_previous_address}</p>

<p>Sincerely,</p>
<p>{client_signature}</p>
	` },
    { id: 10, content: `<p>{client_first_name} {client_last_name}</p>
<p>{client_address}</p>
<p>{t_no}</p>
<p>{bdate}</p>
<p>{ss_number}</p>
<p>{bureau_address}</p>
<p>Attn: Customer Relations Department</p>
<p>{curr_date}</p>

<p>To Whom It May Concern,</p>

<p>I am in disagreement with the items listed below which still appear on my credit report, even after your investigation. I would like these items immediately reinvestigated. These inaccuracies are highly injurious to my credit rating.</p>

<p>{dispute_item_and_explanation}</p>

<p>Furthermore, in accordance with The Fair Credit Reporting Act, Public Law 91-506, Title VI, Section 611, Subsection A-D, please provide the names and business addresses of each individual with whom you verified the above, so that I may follow up.</p>

<p>Please forward me an updated credit report after you have completed your investigation and corrections.</p>

<p>Your cooperation and prompt attention are greatly appreciated.</p>

<p>Sincerely yours,</p>
<p>{client_signature}</p>
` },
    { id: 11, content: `<p>{client_first_name} {client_last_name}</p>
<p>{client_address}</p>
<p>{t_no}</p>
<p>{bdate}</p>
<p>{ss_number}</p>
<p>{bureau_address}</p>
<p>{curr_date}</p>

<p>To Whom It May Concern,</p>

<p>This letter is a formal complaint that you are reporting inaccurate and incomplete credit information on my Credit Report.</p>

<p>I understand that mistakes happen but your inaccurate information could cost me in higher interest rates and I have enough expenses as it is. Please investigate the following information and either remove it or at least send me the information that you used to add it to my report.</p>

<p>Thank You</p>

<p>Sincerely yours,</p>
<p>{client_signature}</p>
<p>{client_first_name} {client_last_name}</p>
` },
    { id: 12, content: `<p>{client_first_name} {client_last_name}</p>
<p>{client_address}</p>
<p>{t_no}</p>
<p>{bdate}</p>
<p>{ss_number}</p>
<p>{bureau_address}</p>
<p>{curr_date}</p>

<p>To Whom It May Concern,</p>

<p>This letter is a formal complaint that you are reporting inaccurate and incomplete credit information. I am distressed that you have included the information below in my credit profile and that you have failed to maintain reasonable procedures in your operations to assure maximum accuracy in the credit reports you publish. Credit reporting laws ensure that bureaus report only 100% accurate credit information. Every step must be taken to assure the information reported is completely accurate and correct. The following information therefore needs to be reinvestigated:</p>

<p>{dispute_item_and_explanation}</p>

<p>I request to be provided proof of this alleged item, specifically the contract, note, or other instrument bearing my signature. Failing that, the item must be deleted from the report as soon as possible. This information is entirely inaccurate and incomplete, and as such represents a very serious error in your reporting. Please delete this misleading information and supply a corrected credit profile to all creditors who have received a copy within the last six months, or the last two years for employment purposes.</p>

<p>Additionally, please provide the name, address, and telephone number of each credit grantor or other subscriber.</p>

<p>Under federal law, you have thirty (30) days to complete your reinvestigation. Be advised that the description of the procedure used to determine the accuracy and completeness of the information is hereby requested as well, to be provided within fifteen (15) days of the completion of your reinvestigation.</p>

<p>Sincerely yours,</p>
<p>{client_signature}</p>
<p>{client_first_name} {client_last_name}</p>
	` },
    { id: 13, content: `
        
       <p>{client_first_name} {client_last_name}</p>
<p>{client_address}</p>
<p>{client_previous_address}</p>
<p>{t_no}</p>
<p>{bdate}</p>
<p>{ss_number}</p>
<p>{bureau_address}</p>
<p>{curr_date}</p>

<p>Re: Letter to Remove Inaccurate Credit Information</p>

<p>To Whom It May Concern:</p>

<p>I received a copy of my credit report and found the following item(s) to be errors. See the attached copy of my credit report; the errors have been highlighted. Here are the items in error:</p>

<p>{dispute_item_and_explanation}</p>

<p>By the provisions of the Fair Credit Reporting Act, I demand that these items be investigated and removed from my report. It is my understanding that you will recheck these items with the creditor who has posted them. Please remove any information that the creditor cannot verify. I understand that under 15 U.S.C. Sec. 1681i(a), you must complete this reinvestigation within 30 days of receipt of this letter.</p>

<p>Sincerely yours,</p>
<p>{client_signature}</p>
<p>{client_first_name} {client_last_name}</p>
	` },
    { id: 14, content: `
     <p>{client_first_name} {client_last_name}</p>
<p>{client_address}</p>
<p>{t_no}</p>
<p>{bdate}</p>
<p>{ss_number}</p>
<p>{bureau_address}</p>
<p>{curr_date}</p>

<p>To Whom It May Concern,</p>

<p>This letter is a formal complaint that you are reporting inaccurate and incomplete credit information. I am distressed that you have included the information below in my credit profile and that you have failed to maintain reasonable procedures in your operations to assure maximum possible accuracy in the credit reports you publish. Credit reporting laws ensure that bureaus report only 100% accurate credit information. Every step must be taken to assure the information reported is completely accurate and correct. The following information therefore needs to be reinvestigated. I respectfully request to be provided proof of this alleged item, specifically the contract, note, or other instrument bearing my signature.</p>

<p>{dispute_item_and_explanation}</p>

<p>Failing that, the item must be deleted from the report as soon as possible. The listed item is entirely inaccurate and incomplete, and as such represents a very serious error in your reporting. Please delete this misleading information and supply a corrected credit profile to all creditors who have received a copy within the last six months, or the last two years for employment purposes.</p>

<p>Additionally, please provide the name, address, and telephone number of each credit grantor or other subscriber.</p>

<p>Under federal law, you have thirty (30) days to complete your reinvestigation. Be advised that the description of the procedure used to determine the accuracy and completeness of the information is hereby requested as well, to be provided within fifteen (15) days of the completion of your reinvestigation.</p>

<p>Sincerely yours,</p>
<p>{client_signature}</p>
<p>{client_first_name} {client_last_name}</p>
	` },
    { id: 15, content: `<p>{client_first_name} {client_last_name}</p>
<p>{client_address}</p>
<p>{t_no}</p>
<p>{bdate}</p>
<p>{ss_number}</p>
<p>{bureau_address}</p>
<p>{curr_date}</p>

<p>To Whom It May Concern,</p>

<p>This letter is formal notice that you have failed to respond in a timely manner to my dispute letter of [insert date], deposited by registered mail with the U.S. Postal Service on that date. Federal law requires you to respond within thirty (30) days, yet you have failed to respond. Failure to comply with these federal regulations by credit reporting agencies is investigated by the Federal Trade Commission (FTC) (see 15 U.S.C. 41, et seq).</p>

<p>I am maintaining a careful record of my communications with you for the purpose of filing a complaint with the FTC. Should you continue in your non-compliance, I further remind you that, as in Wenger v Trans Union Corp., No. 95-6445 (C.D. Cal. Nov. 14, 1995), you may be liable for your willful non-compliance.</p>

<p>Be aware that I am making a final attempt to have you clear up this matter. You have 15 days to cure.</p>

<p>For your benefit and as a gesture of my good faith, I will restate my dispute. The following information needs to be verified and, following failure to verify, deleted from the report as soon as possible:</p>

<p>{dispute_item_and_explanation}</p>

<p>The listed item is entirely inaccurate and incomplete and represents a very serious error in your reporting. Please delete this misleading information and supply a corrected credit profile to all creditors who have received a copy within the last six months, or the last two years for employment purposes.</p>

<p>Additionally, please provide the name, address, and telephone number of each credit grantor or other subscriber.</p>

<p>Under federal law, you had thirty (30) days to complete your reinvestigation, yet you have failed to respond. Do not delay any further.</p>

<p>Be advised that the description of the procedure used to determine the accuracy and completeness of the information is hereby requested as well, to be provided within fifteen (15) days of the completion of your reinvestigation.</p>

<p>Sincerely yours,</p>
<p>{client_signature}</p>
<p>{client_first_name} {client_last_name}</p>
	` },
    { id: 16, content: `<p>{client_first_name} {client_last_name}</p>
<p>{client_address}</p>
<p>{t_no}</p>
<p>{bdate}</p>
<p>{ss_number}</p>
<p>{bureau_address}</p>
<p>{curr_date}</p>

<p>To Whom It May Concern,</p>

<p>I received a letter from your firm stating that my letter requesting verification of erroneous items on my report is classified as 'frivolous' or 'irrelevant'. I assure you that I do not consider a matter of such importance to me as frivolous nor irrelevant. In fact, if you do not honor my original request to verify the items contained in my previous letter, mailed on [DATE SENT] via certified mail, I will file a complaint with the Federal Trade Commission against your company.</p>

<p>I have included my original disputes for your convenience below:</p>

<p>The following information, therefore, needs to be reinvestigated. I respectfully request to be provided proof of this alleged item, specifically the contract, note, or other instrument bearing my signature. Failing that, the items must be deleted from the report as soon as possible:</p>

<p>{dispute_item_and_explanation}</p>

<p>The listed item is completely inaccurate and incomplete and is a very serious error in reporting. Please delete this misleading information and supply a corrected credit profile to all creditors who have received a copy within the last 6 months, or the last 2 years for employment purposes.</p>

<p>Additionally, provide the name, address, and telephone number of each credit grantor or other subscriber.</p>

<p>Under federal law, you have 30 days to complete your reinvestigation. Be advised that the description of the procedure used to determine the accuracy and completeness of the information is hereby requested as well. Please provide this information within 15 days of the completion of your reinvestigation.</p>

<p>Sincerely yours,</p>
<p>{client_signature}</p>
<p>{client_first_name} {client_last_name}</p>
` },
    { id: 17, content: `<p>{client_first_name} {client_last_name}</p>
<p>{client_address}</p>
<p>{t_no}</p>
<p>{bdate}</p>
<p>{ss_number}</p>
<p>{bureau_address}</p>
<p>{curr_date}</p>

<p>To Whom It May Concern,</p>

<p>This letter is a formal complaint that you are reporting inaccurate and incomplete credit information. I am distressed that you have included the below information in my credit profile and have failed to maintain reasonable procedures in your operations to assure maximum possible accuracy in the credit reports you publish.</p>

<p>Credit reporting laws ensure that bureaus report only 100% accurate credit information. Every step must be taken to assure the information reported is completely accurate and correct.</p>

<p>The following information, therefore, needs to be reinvestigated. I respectfully request to be provided proof of this alleged item, specifically the contract, note, or other instrument bearing my signature. Failing that, the items must be deleted from the report as soon as possible.</p>

<p>{dispute_item_and_explanation}</p>

<p>The listed item is completely inaccurate and incomplete and is a very serious error in reporting. Please delete this misleading information, and supply a corrected credit profile to all creditors who have received a copy within the last 6 months, or the last 2 years for employment purposes.</p>

<p>Additionally, please provide the name, address, and telephone number of each credit grantor or other subscriber.</p>

<p>Under federal law, you have 30 days to complete your reinvestigation. Be advised that the description of the procedure used to determine the accuracy and completeness of the information is hereby requested as well. Please provide this information within 15 days of the completion of your reinvestigation.</p>

<p>Sincerely yours,</p>
<p>{client_signature}</p>
<p>{client_first_name} {client_last_name}</p>
	` },
    { id: 18, content: `<p>{client_first_name} {client_last_name}</p>
<p>{client_address}</p>
<p>{bdate}</p>
<p>{ss_number}</p>
<p>{bureau_address}</p>
<p>{curr_date}</p>

<p>To Whom It May Concern,</p>

<p>I mailed you a letter disputing inaccurate information on my credit report over a month ago, and in response I received a letter from your firm stating the ID I submitted was insufficient to verify my address and identity. The identification I submitted is sufficient according to your guidelines, and I demand that you examine the enclosed documents more carefully this time. I have also included my original letter for your convenience in this envelope.</p>

<p>The disputed items must be investigated.</p>

<p>{dispute_item_and_explanation}</p>

<p>I respectfully request you to process the investigation as prescribed by my rights under the FCRA. Under federal law, you have 30 days to complete your reinvestigation. Be advised that the description of the procedure used to determine the accuracy and completeness of the information is hereby requested as well. Please provide this information within 15 days of the completion of your reinvestigation.</p>

<p>Sincerely yours,</p>
<p>{client_signature}</p>
<p>{client_first_name} {client_last_name}</p>
	` },
    { id: 19, content: `	<p>{client_first_name} {client_last_name}</p>
<p>{client_address}</p>
<p>{client_previous_address}</p>
<p>#SS {ss_number}</p>
<p>{bureau_name}</p>
<p>{bureau_address}</p>
<p>{creditor_city}, {creditor_state} {creditor_zip}</p>
<p>{curr_date}</p>

<p><strong>Re: Intent to File Lawsuit for FCRA Violation</strong></p>

<p>To Whom It May Concern,</p>

<p>It is not my intention to threaten frivolously, but rather to emphasize the seriousness of the matter at hand. I have sent {NUMBER OF LETTERS} previous letters to your organization, all by certified mail (receipts enclosed), requesting the removal of inaccurate information from my credit file. Regrettably, these requests have been ignored.</p>

<p>I assert that these accounts contain inaccurate information, and I believe your company has violated the Fair Credit Reporting Act by failing to conduct a proper investigation as requested in my previous communications. Each of my previous letters outlined valid reasons for dispute, supported by evidence.</p>

<p>If this final request does not prompt a proper investigation of the disputed accounts and the provision of proof of their correction, I will have no choice but to file a lawsuit in my county seeking damages. I take my credit integrity seriously, and your lack of professionalism and assistance in this matter is deeply disappointing.</p>

<p>I am well aware of my rights under the Fair Credit Reporting Act, and I am prepared to pursue them to the fullest extent if necessary. I await your prompt response.</p>

<p>Sincerely,</p>

<p>{client_signature}</p>
<p>{client_first_name} {client_last_name}</p>

<p>cc: Federal Trade Commission, Attorney General</p>
` },
    { id: 20, content: `<p>{client_first_name} {client_last_name}</p>
<p>{client_address}</p>
<p>{client_previous_address}</p>
<p>#SS {ss_number}</p>
<p>{bureau_name}</p>
<p>{bureau_address}</p>
<p>{creditor_city}, {creditor_state} {creditor_zip}</p>
<p>{curr_date}</p>

<p><strong>Re: Intent to File Lawsuit for FCRA Violation</strong></p>

<p>To Whom It May Concern,</p>

<p>It is not my intention to threaten frivolously, but rather to emphasize the seriousness of the matter at hand. I have sent {NUMBER OF LETTERS} previous letters to your organization, all by certified mail (receipts enclosed), requesting the removal of inaccurate information from my file. Regrettably, these requests have been ignored.</p>

<p>I assert that these accounts contain inaccurate information, and I believe your company has violated the Fair Credit Reporting Act by failing to conduct a proper investigation as requested in my previous communications. Each of my previous letters outlined valid reasons for dispute, supported by evidence.</p>

<p>If this final request does not prompt a proper investigation of the disputed accounts and the provision of proof of their correction, I will have no choice but to file a lawsuit in my county seeking damages. I take my credit integrity seriously, and your lack of professionalism and assistance in this matter is deeply disappointing.</p>

<p>I am well aware of my rights under the Fair Credit Reporting Act, and I am prepared to pursue them to the fullest extent if necessary. I await your prompt response.</p>

<p>Sincerely,</p>

<p>{client_signature}</p>
<p>{client_first_name} {client_last_name}</p>

<p>cc: Federal Trade Commission, Attorney General</p>
	` },


    {
        id:21,
      content :`<p>{client_first_name} {client_last_name}</p>
<p>{client_address}</p>
<p>{tno}</p>
<p>{bdate}</p>
<p>{ss_number}</p>
<p>{bureau_address}</p>
<p>{cur_date}</p>
<p>To Whom It May Concern,</p>
<p>This content is a formal notice that you have failed to respond in a timely manner to my dispute content deposited by registered mail with the U.S. Postal Service on that date.</p>
<p>Federal law requires you to respond within thirty (30) days, yet you have failed to respond. Failure to comply with these federal regulations by credit reporting agencies are investigated by the Federal Trade Commission (see 15 USC 41, et seq.). I am maintaining a careful record of my communications with you for the purpose of filing a complaint with the FTC should you continue in your non-compliance. I further remind you that, as in Wenger v. Trans Union Corp., No. 95-6445 (C.D. Cal. Nov. 14, 1995), you may be liable for your willful non-compliance.</p>
<p>Be aware that I am making a final goodwill attempt to have you clear up this matter. You have 15 days to cure.</p>
<p>For your benefit, and as a gesture of my goodwill, I will restate my dispute. The following information needs to be verified and, following failure to verify, deleted from the report as soon as possible:</p>
<p>{dispute_item_and_explanation}</p>
<p>The listed item is entirely inaccurate and incomplete and represents a very serious error in your reporting. Please delete this misleading information and supply a corrected credit profile to all creditors who have received a copy within the last six months, or the last two years for employment purposes.</p>
<p>Additionally, please provide the name, address, and telephone number of each credit grantor or other subscriber.</p>
<p>Under federal law you had thirty (30) days to complete your re-investigation, yet you have failed to respond. Do not delay any further.</p>
<p>Be advised that the description of the procedure used to determine the accuracy and completeness of the information is hereby requested as well, to be provided within fifteen (15) days.</p>
<p>Sincerely yours,</p>
<p>{client_signature}</p>
<p>{client_first_name} {client_last_name}</p>
`
      
      },

    { id: 22, content: ` {client first_name} {client_last_name}

{client_address}

{bureau_address)

{cur_date}

To Whom It May Concern

This letter shall serve as formal Notice of my Intent to file a Complaint with the FTC, due to your blatant
disregard of the law.

As indicated by the attached copies of letters and mailing receipts, you have been delivered by registered
mail both a dispute letter, dated 2/1011999. as well as a follow-up letter, dated 3/20/1999. As of this
moment, you have not done your duty mandated under the law. Your inaction in this matter is inexcusable,
and your disregard for the law is contemptible. Rest assured. | will hold you to account

As you are well aware, federal law requires you to respond within 30 days, yet you have failed to respond
Failure to comply vith these federal regulations by credit reporting agencies are investigated by the
Federal Trade Commission (see 15 USC 41, et seq.). | am maintaining a careful record of my
‘communications with you on this matter, for the purpose of fiing a complaint vith the FTC should you
continue in your non-compliance. | further remind you that, as in Wenger v. Trans Union Corp.. No. 95-
6445 (C.D.Cal. Nov. 14, 1995), you may be liable for your willul non-compliance

For the record, the following information is being erroneously included on my credit report, as | have
advised you on two separate occasions, more than 75 days and again 40 days ago:
{dispute_item_and_explanation]

If you do not immediately remove this inaccurate and incomplete information, | il fle a formal complaint
with the FTC. Furthermore, | intend to seek redress in civil action, for recover of damages, costs, and
attorey's fees, should you continue in your deliberate obstruction of the law. For this purpose, | am
carefully documenting these events, including the lack of response REQUIRED under law from you
Additionally, please provids the name, address, and telephone number of each credit grantor or other 
subscriber. ;
Under federal aw you had 30 days to complete your re-investigation, yet you have failed to respond. Your
continued delays are inexcusable. 3
Be advised that the description of the procedure used to dtermine the accuracy and completeness of the
information is hereby requested as well, to be provided within 15 days of the completion of your re investgation.

yours Sincerely , 
{client_signature} ` },



    { id: 23, content: `
        
        {client_first_name} 
        
        
        {client_last_name}
{client_address}
{bdate}
{ss_number}

{bureau_address}
Attn: Customer Relations Department

{curr_date}

Re: Request to describe method of verification

To Whom It May Concern:

I am writing to request the method of verification for dispute initiated on [ENTER DATE HERE] and the subsequent response received on [ENTER CORRECT DATE HERE] enclosed with this letter.

Re: {dispute_item_and_explanation}  [Manually modify this line when you're in the final step of the dispute wizard (editor page)]

Please send the following information used to verify the validity of [Manually type in the items you're wanting them to describe, i.e.; identify item(s) by the name of the source, such as creditor or tax court, and the type of item, such as credit account, judgment, etc.]:

The name of the original creditor
The creditors address and telephone number
The person’s name they verified the dispute with
The documentation used to verify the dispute
In accordance with FCRA, Section 611, I am requesting this information to review for completeness and accuracy and appropriateness. In lieu of sending the information you can reopen the dispute and ensure a proper investigation is performed.

I would appreciate a timely response outlining the steps that will occur to resolve this matter. If I do not receive a response I will have no choice but to exercise my right under FRCA, Section 616, and pursue legal action.

Sincerely,
{client_signature}` },

    { id: 24, content: `{bureau_address}

Attn: Customer Relations Department

{curr_date}

[TodaysDate]

[RecipientName]

Re: {dispute_item_and_explanation}  [Manually modify this line when you're in the final step of the dispute wizard (editor page)]

To Whom It May Concern:

I am concerned about the validity and accuracy of your recent investigation of these accounts that are reporting on my credit report. Last month I requested an investigation because I felt the item was not being reported legally. Couple of days ago I received a letter stating that your investigation was complete. Please explain to me how you conducted your investigation!

     1.Please explain to me what your representatives uncovered to lead them to believe that you are reporting this item as it
        legally should be reported?
     2.What certified documents were reviewed to conclude your investigation?
     3.Please provide a complete copy of all of the information that was transmitted to the data furnisher as part of the investigation.
     4.What did it cost your company to obtain the documents needed to complete your investigation? 
     5.Please provide proof of your timely procurement of certified documents.
     6.Did you speak directly to any agent of the company that was reporting the information to confirm the accuracy of what you are reporting?
     7.If yes to above:
          a.Who did you speak to? 
          b.On what date?
          c.How long was the conversation?
          d.What was their position?
          e.What telephone number did you call?
          f. What is the name of the employee of your company that spoke directly to the above party?
          g.What is the position of the employee of your company that spoke directly to the above party?
          h.How long has that employee been employed by your company?
          i.What formal training was provided to this employee to investigate items of this kind?
          j.Was there any e-mail or written communication between members of your company and the above party?
      8.If so, please provide copies of all correspondence; supply copies of any and all conclusive documentation to prove that
         you have in fact conducted a reasonable investigation of the account in question.
      9.Provide the date of the commencement of delinquency
     10.Provide the SPECIFIC date reporting that these items will cease

Enclosed with your response to the above questions I respectfully request a notarized affidavit confirming the information that is provided is true and correct as per my civil rights granted under several federal laws. This information should not come as a form letter response.

My initial dispute was detailed and directly related to the account in question. A template response will not be an acceptable response. If you cannot supply ALL of the above information in a timely manner as detailed in several laws, including but not limited to the Fair Credit Reporting Act, I must immediately demand the permanent removal of this item from my credit report.

This erroneous entry is detrimental to my overall credit rating and has caused me severe financial and emotional distress. If you choose not to provide the above requested deletion or requested/required documentation of your investigation, I will pursue the enforcements of 
my constitutional rights via federal court proceedings. As you are well aware this information will come out through my formal discovery process, and necessary depositions. I have recently studied constitutional consumer protection laws along with civil/federal court procedures. I will represent myself pro-se and will formally request a jury trial.

Please respond accordingly,
{client_signature}

{client_first_name} {client_last_name}
{client_address}
{bdate}
{ss_number}` },

    { id: 25, content: `{client first_name} {client_last_name}

{client_addess]

{t noy

{dob}

{ss_number)

{bureau_address}

Re: Credit Repair Accusation

To Whom It May Concern

Please be advised that | have received your computer-gensrated lster stating that you have ceased
investigation of my credit reports because, In your opinion, you belleve that | have used a third party credit
tepair agency. Not only do | belleve this to be a sall tactic on your part to grant you an addtional 30 days
to comply with my original request_ but | believe tto be a biatant violation of the FCRA.

‘You were advised by me on (insert date) by certified mail (copy enclosed) that | questioned the accuracy of
a few items on my credit reports. That reques was writien by me and mailed by me-not a tird party
agency. It appears obvious to me that you are abusing your power under the FCRA to escape a complete.
investigation.

Here again s the incorrect informaion being reported:

{dispute._item_and_explanation}

Additionally there is NO la that states a consumer cannot use a tird party, so using that as your excuse
is a irelevant. In fact, the United States Congress has found the whole process so ovenvhelming that they
afford consumers the right o use a third party on their behalf f the consumer 50 chooses. This i why your
statement is 50 shameful

I reserve the right to sue a credit bureau for violations of the Fair Credit Reporting Act and | believe | can
prove that you did not use reasonable measures to insure the accuracy of my credit reports and now you
are stalling the process even further

I realize disputes can be expensive and it s your job to stal them, bt you do so at great isk Please take.
notice that thislefter dated (insert today's date) is formal notics to'you that | am requesfing that you
continue forward vith my original investigation request and piease send the results to me within 15 days. |
therefore legally and lawfuly refuse your form lefter” thus giving you only 15 days not 30 more.

1 am annoyed and outraged at your accusation and | have researched my rights n regards to my credit
fle. Please expedite my original request immediately.

Sincerely yours,

{client_signature)
` },
    { id: 26, content: `{client_first_name} {ciient last_name}

{client_addess]

{pdate]

{ss_number)

{bureau_address}

Re: Identiy Thet Notiication

To Whom It May Concern

“This certiied lette, receipt number_ is to notify you that | believe | nave
been a victm of dentiy theft Please rate the folowing accounts as “unrated” unti this matier has been
fesolved.

1am formally requesting the following:

1) Please place a fraud alert note on my credit immediately.

2) Please notiy all companies that have inquired in the past 12 months that identity theft has occurred.
3) Pleass do not authorize credit in my name wihout caling me firstat () ____ - for verication.
4) Pleass send me 3 complete copy of my credit report as soon as possible 50 | can check it again for
accuracy.

5) Pleass do not release my credit information {o any creditissuer inthe future without my permission
1wl nform you in wriing when the matter has been resolved to remove the fraud alert. Enclosed i a copy.
of the police report (f you have one)

Kind regards.

{client_signature)
` },

    { id: 27, content: `{client_first_name} {ciient last_name}

{client_addess]

{Lnoy

{date}

{ss_number)

{pureau_address}

Attention: Fraud Department

{eurr_date}

Re: Identiy Thet Notiication

To Whom It May Concern

I am a victim of identity theft and have enclosed a copy of my police reportidentiy theft report, a copy of
my drivers license and social security card as proof of my idenity pus proof of my current address. | am
wiiting to request that you place an immediate block on the following fraudulent information in my credit fle
within 4 days upon receipt of this correspondence.

1 have recently obtained a copy of my creditile and the information does not relate to any transactions
that I have mage: therefore, | am requesting that these accounts be complstely removed and blocked from
my credi il This is not 2 regular disputs | have fisd a complaint with the Federal Trade Commission to
document being a victim of identity theft

Please block this fraudulent information per sections 605B, 615(f) and 623(a)(6) of the Fair Credit
Reporiing Act | am requesting that the following fraudulent accounts be deleted and blocked from my
credit fle:

{dispute._item_and_explanation}

Kind regards,

{client_signature)
` },

    { id: 28, content: `{client_first_name} {client_last_name}

{client_address}

{bdate}

{ss_number)

Credit Report Number:

{bureau_address)

{curr_date}

Re: Removal of Incorrect ltems from Credt Report (More than 30 days have passed)

To Whom It May Concern:

On (DATE), | sent you a request to reinvestigate incorrect tems which were listed in my credt history
report

{dispute_item_and_explanation)

I am enclosing a photocopy of that original request. The Fair Credit Reporting Act requires that you
complete your reinvestigation of my request within 30 days. It has now been more than 30 days.

I wil assume that | have not received your reply because you have been unable to veriy this information.
Please remove this incorrect information at once and send me an updated copy of my credit history report
I also request that you please send notices of corrections to anyone who received my credit repor in the
past six months

Thank you time and help n this matter | have also sent a copy of this letter to the Federal Trade
Commission.

Sincerely yours,

{chent_signature}
` },

    { id: 29, content: `{client first_name} {cient_last_name}

{client_address}

{client_previous_address}

{t_no}

{bdate}

{ss_number}

{bureau_address)

{curr_date}

Re: Creditor Verification of incorrect tems on my credit history report.

Credit Report Number.

To Whom It May Concern,

On (DATE), | received my credit report from you. It included the following incorrect information:
{dispute_item_and_explanation}

I am enclosing a copy of my credit report with the incorrect data highiighted.| just received a letter from
that creditor verfying that this information on my credt report is inaccurate and should be removed from
my cred file. | have enciosed a copy of the letter

oR

On (DATE) | spoke with (CONTACT PERSON) from . This person verified that this information on my credit
repor is indeed inaccurate and should be removed from my credit fle.
{dispute_item_and_explanation}

‘You can reach this person at (CONTACT NUMBER)
I am enclosing a copy of my credit report with the incorrect data highlighted This incorrect and negative
information is damaging my credit. Please remove this incorrect information at once and send me an
updated copy of my credit history report | also request that you please send notices of corrections to
anyone who received my credit report in the past six months.

‘Thank you for your time and help in this matter.

Sincerely yours,

{client_signature)

` },

    { id: 30, content:`{client_first_name} {client_last_name}

{client_adaress}

{Lno}

{dob}

{ss_number}

{bureay_address)

Attention: Fraud Department

{curr_date}

Re: Request for Addition of Credit Information

To Whom It May Concemn,

I am writing to request that you please include the addtionsal information attached to my credt history
report. You may verfy this information with the source and | have included their contact details
According to the Fair Credit Reporting Act (FCRA), Section 602(b), | am permitted to have accurate and
true information reflected in my credt report To accomplish this, | am requesting that my positive payment
history with (Creditor's Name) be added. This wil justly reflect my payment history. Therefore, | request
m-mmw verify and add the enclosed payment history fo my credit file. (Enclose proof from
{dispute_item_and_explanation}

Please notfy me within 30 days that the additional credit information has been added by sending an
updated copy of my credit history report fo my address above.

The FCRA states ""a consumer's credt report should reflect completeness and accuracy within a
reasonable time after notiication by the consumer.” By adding this information to my records it will help to
reflect a more accurate cred history report.
if you require that this information be submitted to you directly from the source, please indicate the
procedure and your fee to add this information.

Kind regards,

{client_signature)

` },

    { id: 31, content: `{client_first_name} {client_last_name}

{client_address}

{t_no}

(bdate)

{ss_number}

{bureau_address}

fcur_date}

To Whom it May Concern,

This letter is a formal request for the description of the procedures used to determine the accuracy and
completeness of the disputed information, including the business name, address, and telephone number
of any furnisher of information contacted in connection with this reinvestigation.
{dispute_item_and_explanation}

| am disappointed that you have failed to maintain reasonable procedures to assure complete accuracy in
the information you publish, and insist you comply with the law by providing the requested information
within the 15 days allowed.

As already stated, the listed item is inaccurate and incomplete, and is a very serious error in reporting.
Please supply a corrected credit profile to all creditors who have received a copy within the last 6 months,
or the last 2 years for employment purposes.

Additionally, please provide the name, address, and telephone number of each credit grantor or other
subscriber.

Sincerely,

{client_signature}
` },

{
    id:32,
    content:`
    {client first_name} (cient last_name}
<br>
{cient_address}
<br>
{bureau_address}
<br>
{curr_date}
<br>
To Whom It May Concern,
<br>
‘As my right by law, | am requesting that you merge my spouse's credit history with mine. Piease make the
necessary changes and forward a new copy of my updated credit report to me. Both my spouse and |
have authorized this change.
<br>
My social security number: {ss_number}
<br>
My full name: {client_first_name} {client_middie_name} {client_last_name}
<br>
My address: {cient_address} _
<br>
Spouses social securty number.
<br>
Spouses full name:
<br>
My signature: -—
<br>
Spouses signature:
<br>
Regards,
<br>
{client_signature}
`
}
,
{
    id:33,
    content: `{client_first_name} {client_last_name}<br>{client_address}<br>{bdate}<br>{ss_number}<br>{bureau_address}<br>{curr_date}<br>Dear SirMadam:<br>| recently mailed you acontentdisputing items appearing on my credit report, which you maintain. Your<br>response to mycontentwas to deem mycontent“suspicious”, implying it was not written by me and<br>furthermore in a threatening to report mycontentto law enforcement and/or state and federal regulatory<br>agencies. Your response is ludicrous.<br>Absolutely nothing in mycontentcould reasonably given rise to the suspicion that it was not sent by me. The<br>dassification of mycontentas \"suspicious” is an incredible stretch of the term | did in fact write and send the\contentin question and you are attempting to circumvent the statutory investigation period defined by the<br>FCRA. You are still bound by the 30 day investigation period which has now lapsed. Please remove the<br>following items:<br>{dispute_item_and_explanation}<br>| demand you conclude your investigation by deleting the items in question and sending me a free copy of<br>my credit reporting showing the changes have been made.<br>Sincerely,<br>{client_signature}<br>`,
   
  },
  {
    id:34,
    content: `{client_first_name} {client_last_name}<br>{client_address} ;<br>{bureau_address} <br>{curr_date} |<br><br>To Whom It May Concern, <br>Thiscontentis a formal complaint that you are reporting inaccurate and incomplete credit information |<br>I am distressed that you have included the information below in my credit profile and that you have failed |<br>to maintain reasonable procedures in your operations to assure maximum possible accuracy in the credit }<br>reports you publish. Credit reporting laws ensure that bureaus report only 100% accurate credit 3<br>information. Every step must be taken to assure the information reported is completely accurate and 1<br>correct. The following information therefore needs to be re-investigated. <br>{dispute_item_and_explanation}<br>I respectfull request to be provided proof of this alleged item, specifically the contract, note or other<br>instrument bearing my signature.<br>Failing that, the item must be deleted from the report s soon as possible. The listed item is entirely inaccurate and incomplete, and as such represents a very serious error in your reporting. Please delete this misleading information and supply a corrected credit profile to all credilors who have received a copy within the last six months, or the last two years for employment purposes <br>Additionally, please provide the name, address, and telephone number of each credit grantor or other }<br>subscriber. ;<br>Under federal law, you have thirty (30) days to complete your re-investigation. Be advised that the <br>description of the procedure used to determine the accuracy and completeness of the information is. <br>hereby requested as well, to be provided within fifteen (15) days of the completion of your re-investigation.<br>Sincerely, <br>{client_signature}<br>`,
    
  },
  {
  id:35,
       content: `{client_first_name} {client_last_name}<br>{client_address}<br>{bureau_address}<br>{curr_date}<br>To Whom It May Concern,<br>Thiscontentis a formal complaint that you are reporting inaccurate and incomplete credit information.<br>According to the Fair Credit Reporting Act, Section 609 (a)(1)(A), you are required by federal law to verify,<br>through the physical verification of the original signed consumer contract, any and all accounts that you<br>post on a credit report. Otherwise anyone paying for your reporting services could fax, mail or email in a<br>fraudulent account.<br>| demand to see verifiable proof (i.e.: an original consumer contract with my signature on it) that you have<br>on file for the account listed below.<br>Your failure to positively verify these accounts has hurt my ability to obtain credit. Under the FCRA,<br>unverifiable accounts must be removed and if you are unable to provide me a copy of verifiable proof, you<br>must remove the account listed below.<br>I demand that the following account be verified or removed immediately:<br>{dispute_item_and_explanation}<br>In addition, please remove all non-account holding inquries over 30 days old. Also, please add a<br>promotional suppression to my credit fle.<br>Under federal law, you have thirty (30) days to complete your re-investigation. Be advised that the<br>description of the procedure used to determine the accuracy and completeness of the information is<br>hereby requested as well, to be provided within fifteen (15) days of the completion of your re-investigation.<br>Thank you     ,<br>{client_signature}<br>{client_first_name} {client_last_name}<br>`,
  
  },
  {
  id:36,
     content: `{client_first_name} {client_last_name}<br>{client_address}<br>{bdate}<br>{ss_number}<br>{bureau_address}<br>{curr_date}<br>Dear SirMadam:<br>I am contacting you about the compromising of my social security number. | am a victim of Identity Theft. |<br>contacted the Federal Trade Commission and filed a complaint # and contacted the police department and<br>obiained a police report # which boih are aitached. Please block and remove all information from my.<br>credit report, and send me an updated copy of my credit report. The following items do not belong to me<br>and is a result of fraud that | did not authorize:<br>{dispute_item_and_explanation}<br>Please block and remove all information resulting from Identity Theft pursuant to FCRA 6058 (15 US.C. &<br>1681 c-2) which states that these accounts must be removed within 4 Business Days of receipt.<br>Also, please send an updated copy of my credit report fo the above address. According to the act, there<br>shall be no charge for this updated report. | also request that you please send notices of corrections o<br>anyone who received my credit report in the past six months.<br>Sincerely,<br>{client_signature}<br>`,
  },

     
  {
    id:37,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{baate}<br>{ss_number}<br>{bureau_address}<br>{curr_date}<br>Dear SirMadam<br>|'am a victim of identity theft. Please see the attached documents relating to this case and completed<br>identity theft affidavit. Also, please refrain from reporting and block all information resuiting from this case<br>pursuant to FCRA 605B (15 U.S.C. & 1681 c-2) which states that this information must be removed within<br>four business days of receipt<br>Sincerely,<br>{client_signature}<br>",
    
   },
   {
     id:38,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>Re: Judgment - Case number: XXXXXXXXXXXXX Judgment amount: SXXXXX<br>{curr_date}<br>To Whom It May Concern,<br>Dear Sir,<br>I am aware of the funds due to you and of the judgment placed against me for those funds. | had every<br>intention of taking care of this prior to the entry of the judgment, but unfortunately time constraints made<br>that impossible for me.<br>Today, | am writing to you in the hope that we may put this matter behind us and settle out the judgment<br>for good, under a few conditions. This will save you both time and money trying to collect the judgment<br>and will help me to recover from your negative entry in my credit history reports.<br>| have been offered a loan from a close family member to pay you (amount you are offering) to settie the<br>debt in-full and have the judgment dismissed.<br>As the judgment creditor, you reserve the right to dismiss or vacate the judgment as well as entering it If|<br>pay you from this offer letier saving you immense time, paperwork and fees, you can then file a simple<br>paper with the courts dismissing the judgment.<br>My offer is to pay you (amount you are offering) in exchange for the dismissal so that we have both gained<br>‘something from this unfortunate situation. It is extremely important that you dismiss the judgment rather<br>than safisiying it. The reason behind my request is because a satisfied judgment looks no better on my<br>credit report than a filed judgment. If you agree to dismiss this judgment | can justify payment.<br>UPON your signed approval of this offer, | will forward the full settiement funds to you immediately. |<br>--------- within 5-10 days of your signed confirmation.<br>If you agree to “dismiss\" the judgment upon receiving my full and final payment of $-------- then<br>please sign this offer and acceptance.<br>Sincerely,<br>{client_signature}<br>",
   
   },
   {
     id:39,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>Re: Account number<br>{curr_date}<br>To Whom It May Concern,<br>Court Name and Location<br>Judgment Creditor:<br>Judgment Debtor:<br>Case Number. Amount of Judgment: Date of Entry:<br>We the undersigned Judgment Creditor and Judgment Debtor have both agreed to settle this matter and<br>hereby jointly apply to the court for an order that this judgment involved (court case number and date<br>entered) shall be set aside and dismissed<br>Signed:<br>Judgment Credit---------- Judgment Debtor:-------------------------<br>Name (printed):-------------------- Name (printed):-------------------<br>Date signed:--------------------- Date signed:-----------<br>",
    
   },
   {
     id:40,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{ss_number}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date},<br>Re: Remove Inaccurate Information from my Credit Reports. Account #{account_number}<br>To Whom It May Concern:<br>| received a copy of my credit report and found the following item(s) to be errors. See the attached copy of<br>my credit report. the errors have been highlighied. Here as follows are items in error.<br>{creditor_name}<br>Account #account_number}<br>{dispute_item_and_explanation}<br>By the provisions of the Fair Credit Reporting Act, | demand that these items be investigated and removed<br>from my report. | understand that under 15 U.S.C. Sec. 1681i(a), you must complete this investigation<br>‘within 30 days of receipt of thiscontent<br>Thank you for your time and help in this matter.<br>Sincerely,<br>{client_signature}<br>",
   
   },
   {
     id:41,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date},<br>Re: {client_first_name} {client_last_name} , Account number. {account_number}<br>To Whom It May Concern:<br>Thiscontentconcerns the money I owe you. I have received bills from you stating that I owe (AMOUNT OF<br>BILL). However, I am disputing the amount owed to you because of the following reasons:<br>(LIST REASONS FOR DISPUTE)<br>I feel I owe you no more than S(ENTER AMOUNT). It is obvious that there is a good faith dispute over this<br>bill<br>To settle this debt, I will send you a check for S(ENTER AMOUNT) with a restrictive endorsement, if you<br>cash that check it will constitute an accord and satisfaction. In other words; you will receive from me a<br>check that states \"cashing of this check constituies payment in full \" If you cash this check. that check will<br>clear away any debt that I owe you.<br>If agreed, please sign and return thiscontent<br>Thank you for your time and assistance.<br>Sincerely yours,<br>{client_signature}<br>",
    
   },
   {
     id:42,
     content: "{client_first_name} {client_last_name}<br>{chient_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city), {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: Debtor's Settiement<br>Re: Account number- {account_number}<br>To Whom It May Concern:<br>I understand that I owe a balance to your company. Thiscontentis an offer to settie the debt for less<br>because of my inability to pay the entire balance. Because of dire financial circumstances, [overwhelming<br>debt, loss of job, insurance settiement with limited funds, considering bankruptcy, borrowing the money,<br>illness, loss of family member with income, etc. List your reason here as to why you are offering to pay<br>less] I am only able to pay a portion of this debt.<br>I recognize you may be motivated as well, because of the age of the debt and my financial crisis. Declining<br>to work with me will only make matters worse for both of us.<br>‘You are claiming the amount owed on the account is $_ Please accept my good faith offer to<br>‘settle this account under these following conditions ONLY<br>The parties involved agree to settie the account i full for the sumof S_____ and this amount is<br>accepted as complete and final payment on said debt. Full discharge and settiement of all monies due will<br>be created, provided that the amount agreed upon shall be paid as follows:<br>Payment terms: how debt will be paid, (i.e., three payments of $250.00 to be paid monthly on the 1st of<br>each month, 8 payments of $200.00 on the 1st of each month after execution of this agreement, etc.)<br>Payment address: where you will send payment each month<br>Other terms: list specific arrangements made, such as, creditor agrees to freeze the account without any<br>additional fees or inierest added o the balance eic.<br>Credit reporting: list all account status terms you are requesting such as \"paid in full’, \"deleted, \"settied in<br>full”, “settled for less”, efc.<br>Governing states: This agreement shall be binding under the laws of [list your state and the creditor's<br>state].<br>If your office is in agreement with this settiement, please reply with confirmation on your company<br>Ieiternead and signed by an individual with the authoriy o accept such offers. Time is of he essence<br>because of my financial situation so please reply as soon as possible.<br>Kind regards,<br>{client_signature}<br>",
    
   },
   {
     id:43,
     content: "{client_first_name} {client_last_name}<br>{ctient_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>Alin: Aftn: Seftlement Dept.<br>{curr_date}<br>Re: Debtor's Settlement Offer for Account Number: {account_number}<br>Dear Settiement Dept.<br>This is a settlement offer for {client_first_name} {client_last_name}, (Debtor) concemning a debt owed o<br>(Creditor), who claims the amount to be owed on Account Number:<br>{account_number} is $(AMOUNT).<br>Please accept this offer to settle this account under the following conditions:<br>The parties agree to settle the account in full for the sum of S(AMOUNT) and this amount is accepted as<br>full and total payment on said debt provided the following is met<br>« {client_first_name} (client_last_name} will pay cashiers check of $(AMOUNT) f the debt is<br>considered paid in full and reported as such to the credit reporting agencies.<br>« The creditor agrees to freeze the account without any additional fees or interest being added to the<br>« The account is marked: (list status terms you are requesting such as “paid in full’, “settied in ful\",<br>“Paid as agreed”. ‘settled for less”, “deleted” eic )<br>This agreement shall be govemed under the laws of (STATE), and shall be binding. If the above terms are<br>acceptable to (CREDITOR), please respond in writing, on your companycontentead, acknowledging your<br>acceptance and the terms as you agree to them.<br>As soon as i receive your acceptance of this offer,i will express mail a cashiers’ check.<br>Creditor name<br>Creditor. Tile:<br>i agree to the terms listed above: Yes. No_<br>Creditor's Authorized Signature Date<br>",
     
    
   },
   {
     id:44,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>Re: Account Number {account_number}.<br>Dear {creditor_name},<br>This is to confirm our conversation on______ as fo the offer of the above stated account. As<br>discussed, i will pay your company the amount of $_ as payment in full for the final satisfaction of<br>this account.<br>Upon receipt of the above payment, your company has agreed to change the entry on my credit reports<br>from: to (list status terms you are requesting, such as “paid in ful”, “settied in<br>full, \"Paid as agreed’, “settled for less”, “deleted” etc)<br>If you agree with these terms, please acknowledge with your signature and retum it to me. You agree the<br>terms herein are confidential and you have the authority to make such decisions. No payment will be made<br>without writien confirmation<br>Upon receipt of this signed acknowledgment, i will immediately mail you funds priority mail. This is not a<br>renewed promise to pay but rather a restricted offer only. If no terms can be met, no new amangements will<br>be made and the offer will be void.<br>Name of Creditor<br>Creditor's Authorized Signature                     Date<br>Name Of Creditor's Authorized Representative<br>",
     
   },
   {
     id:45,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state) {creditor_zip}<br>{cumr_date}<br>Re: Debtor's Settiement Offer for Account Number: {account_number}<br>To Whom It May Concern,<br>i am aware that i owe a balance to your company. Thiscontentis an offer to settie the debt for less because<br>of my inability to pay the full balance due to financial circumstances, because of. (LIST HARDSHIPS<br>HERE), i am only able to pay a portion of this debt<br>i realize you may be motivated as well, because of the age of the debt and my financial crisis. Refusing to<br>work with me will only make matters worse for both of us.<br>You claim the amount owed on the account is $._____<br>Please accept this offer to settle this account ONLY under the following conditions:<br>The parties involved agree to settle the account in full for the sum of §_ and this amount is<br>accepted as full and final payment on said debt. Complete discharge and settiement of all monies due will<br>be created, provided that the amount agreed upon shall be paid in the following manner:<br>Payment terms: (i.e., 10 payments of $XXX on the 1st of each month after the execution of this<br>agreement, 3 payments of SXXX to be paid monthly on the 1st of each month, 1 lump sum of SXXXX, etc.)<br>Payment location: (ADDRESS TO SEND THE PAYMENTS<br>Other terms: (list additional arrangements made, such as, creditor agrees to freeze the account without<br>any additional fees or interest added to the balance, etc ) Credit reporting: (list status terms you are<br>requesting such as “paid in full’, “settied in full\", “Paid as agreed\", “setled for less”, “deleted” etc.)<br>This agreement shall be binding under the laws of (LIST YOUR STATE AND THE CREDITOR'S STATE)<br>If your office agrees to this settiement, please send back confirmation on your companycontentead and<br>signed by someone with the authority to accept such offers. Time is of the essence due to my present<br>financial situation so please reply as soon as possible.<br>Sincerely,<br>{client_signature}<br>",
        
    
   },
   {
     id:46,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>To: Judgment Creditor, {creditor_name}<br>From: Judgment Debior, {client_first_name} {client_last_name}<br>Case number: (CASE NUMBER)<br>Judgment amount: (AMOUNT)<br>Date: {cur_date}<br>Dear Sir,<br>i am aware of the money due you and of the judgment placed against me for this money. | had every<br>intention of taking care of this prior to the entry of the judgment, but unfortunately time constraints ended<br>that chance.<br>Today i am writing to you so that we may put this matter behind us and settle out this judgment for good,<br>under a few conditions. This will save you time and money trying to collect the judgment and will help me<br>recover from your negative entry against me.<br>i have been offered an amount from a close family member to pay you S(AMOUNT) to settle the debt in full<br>and have the judgment dismissed.<br>As the judgment creditor, you reserve the right to dismiss or vacate the judgment as well as entering it If |<br>pay you from this offercontentsaving you immense time, fees and paperwork. you can then file a simple<br>paper with the courts dismissing the judgment<br>My offer is to pay you in exchange for the dismissal so that we have both gained something from this<br>unfortunate situation. It is extremely important that you dismiss the judgment rather than satisfying it,<br>because a satisfied judgment really looks no better for me than a filed judgment<br>With a dismissed judgment | can justify paying you. Upon your signed approval of this offer, | will forward<br>the full settlement to you immediately. | understand this offer is void if i do not send you S(AMOUNT) within<br>5-10 days of your signed confirmation<br>if you agree to \"dismiss\" the judgment upon full and final payment of S(AMOUNT), then please sign and<br>retum this offer and acceptance.<br>Offer Accepted and Agreed,<br>Judgment Creditor Signature Date<br>Judgment Creditor Authorized Representative<br><br>",
       
   },
   {
     id:47,
      content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_email)<br>{creditor_city} {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: Account number. {client_ac_no}<br>To Whom It May Concern:<br>I am writing to dispute the following charge(s) that appear on my billing statement dated (STATEMENT<br>DATE).<br>(MERCHANT'S NAME)<br>(AMOUNT IN ERROR)<br>The error is as follows:<br>(REASON FOR COMPLAINT)<br>As required by law, I have tried in good faith to resolve this dispute with the merchant:<br>(ENTER STEPS TAKEN)<br>Furthermore, I wish to point out that this purchase was for more than $50 and was made (CHOOSE ONE:)<br>in the state in which I live [OR] within 100 miles of my home.<br>Please verify this dispute with the merchant and remove this item, and all late and interest charges<br>associated with this item, from my billing statement.<br>Thank you for your time and assistance.<br>Sincerely yours,<br>{client_signature}<br>{client_first_name} {client_last_name}",
     
    
   },
   {
     id:48,
     content:`{client_first_name} {client_last_name}<br>{chient_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>To Whom It May Concern,<br>Your company is currently reporting a negative listing to the three major credit bureaus (Experian, Trans<br>Union, and Equifax) regarding the above referenced account. Based on my recollection and my records, I<br>Can find no reason for you reporting such a history. If you'll review your records I think that you will find<br>The erroneous status of your credit reporting agency records is unacceptable and is preventing me from<br>obtaining necessary financing. Pursuant to Title 15, Section 1666 of the United States Code, I formally<br>request the following documentary evidence pertaining to my account:<br>Asummary of all account activities, including all payments made, late charges, interest, date of payments<br>received, date of payments posted, charges made and date of charges posted.<br>Copies of all documents and financial instruments used to pay the disputed late payments.<br>Copies of all charge slips, invoices, promissory notes, and all other documents proving indebtedness<br>This information and documentation is critical and time is of the essence. Within less than thirty (30) days,<br>I will be damaged partially because of the discrepancy with your reported records. The above noted code<br>requires your response within thirty (30) days. Your prompt attention will be greatly appreciated. I hereby<br>request that your response be mailed to the address listed below.<br>If you find that your information and documentation does not support the negative history reported to the<br>three credit bureaus, I invite you to submit a completed Universal Data Form to said bureaus in order to<br>remove the negative notations. Upon removal of the negative notations, I agree to hold your company<br>harmless from any and all inconvenience and/or damage related thereto.<br>Sincerely,<br>{client_signature}<br>{client_first_name} {client_last_name}<br><br>`,
        
   },
   {
 
   id:49,
     content: "{client_first_name} {client_last_name} <br>{client_address) <br>{creditor_address} <br>{curr_date} <br><br>To Whom It May Concern<br><br>I have recently received a copy of my credit report. The report had an account listed from your company as <br>a credit card. I disputed the account with the credit bureau as \"not mine” but it recently came back as verified <br>{dispute_item_and_explanation}<br>I am writing thiscontentto you in an effort to get this removed. Please delete your information from my credit reports. | have never had an account with your company. If someone has opened an account in my name, please close it immediately before further harm is done. <br>I am requesting that you notify all of credit bureaus that this account is “disputed” or that you delete this <br>account until this matter is resolved. This is required by the Fair Credit Reporting Act. If there is any paperwork that | need to sign to confirm that this account is not mine, please send me the required <br>documents <br>This is a written dispute of the this account per the Fair Credit Reporting Act, the Fair Debt Collection <br>Practices Act and the Fair Credit Billing Act. Please be aware that I am exercising all of my rights per these laws and all other applicable laws protecting me. <br>Sincerely, <br>{client_signature} <br>{client_first_name} {client_last_name} ‘<br>",
    
   },
   {
     id:50,
       content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address)<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: Account number: {account_number}<br>To Whom It May Concern:<br>I am writing to report an error I have discovered on my billing statement<br>dated (STATEMENT DATE):<br>(MERCHANT'S NAME)<br>(AMOUNT IN ERROR)<br>The error is as follows:<br>(REASON FOR COMPLAINT)<br>I understand that the law requires you to acknowledge receipt of thiscontentwithin 30 days unless you<br>correct this billing error before then. Furthermore, I understand that within two billng cycles (but in no<br>event more than 90 days), you must correct the error or explain why you believe the amount to be correct<br>Thank you for your time and assistance.<br>Sincerely yours,<br>{client_signature}<br>",
   
   },
   {
     id:51,
     content: "<br>{client_first_name} {client_last_name}<br>{client_address}<br>{ss_number}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>Re: Remove Inaccurate Information from my Credit Reports.<br>{curr_date}<br>To Whom It May Concern:<br>I received a copy of my credit report and found you are reporting incorrect information to the credit<br>bureaus.<br>Here are the error(s).<br>{dispute_item_and_explanation}<br>Under federal law, as a furnisher of information to consumer reporting agencies, you must conduct a<br>reasonable investigation of my dispute and you must complete this investigation within 30 days of receipt<br>of thiscontent I demand that this information be investigated and either verified or removed from my report.<br>Please send me confirmation the information has been removed from my credit files.<br>Thank you for your time and help in this matter.<br>Sincerely,<br>{client_signature}<br>",
    
   },
   {
     id:52,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{bdate}<br>{ss_number}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>To Whom It May Concern,<br>Thiscontentis a formal complaint that you have reported inaccurate and incomplete credit information to the<br>credit bureaus.<br>Federal laws require furnisher's of information to report accurate credit information to the credit bureaus<br>and in this case, you have failed to do so. Every step must be taken to assure the information reported is<br>completely accurate and correct. I disputed the following information over 30 days ago and you have not<br>yet responded:<br>{dispute_item_and_explanation}<br>This inaccurate information must be deleted from my credit file immediately. Please contact the credit<br>agencies you have reported it to and remove this misleading information from my credit profile.<br>Under federal law, you must complete your re-investigation in a timely manner. Be advised that the<br>description of the procedure used to determine the accuracy and completeness of the information is<br>hereby requested as well, to be provided within fifteen (15) days of the completion of your investigation.<br>Sincerely yours,<br>{client_signature}<br>",
   
   },
   {
    id:53,
        content: "{client_first_name} {client_last_name}<br>{client_address}<br>{bdate}<br>{ss_number}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>Attn: Customer Relations Department<br>{curr_date}<br>To Whom It May Concern,<br>I'am in disagreement with the information listed below which you reported to the credit agencies and still<br>appear on my credit report, even after your investigation. I would like these item(s) immediately re-<br>investigated and removed. These inaccuracies are impacting my credit rating.<br>{dispute_item_and_explanation}<br>Please confirm you have completed your investigation and corrections by notifying by mail. Your<br>cooperation and prompt attention are appreciated.<br>Sincerely yours,<br>{client_signature}<br>",
   
   },
   {
    id:54,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{bdate}<br>{ss_number}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>Re: Warning<br>{curr_date}<br>To Whom It May Concern:<br>I recently sent you a request to reinvestigate incorrect items which you reported to the credit agencies. You<br>ignored my request.<br>Federal law requires that you complete your reinvestigation of my request within 30 days. It has now been<br>more than 30 days and the items remain on my report:<br>{dispute_item_and_explanation}<br>I will assume that I have not received your reply because you have been unable to verify this information.<br>If the information is not immediately reinvestigated and removed, I will be forced to seek legal counsel for<br>relief through the court and file complaints with regulatory enforcement agencies including the CFPB, FTC<br>and my state attorney general.<br>Sincerely yours,<br>{client_signature}<br>",
   },
   { id:55,
        content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: Account number: (Account number)<br>To Whom It May Concern,<br>I have received my credit report, from (Credit Bureau Name). I have contacted (Creditor's name)<br>numerous times and even disputed it with the Credit Bureau. I am requesting a goodwill adjustment to<br>remove the late payment(s ) in order to refinance my home. I know this request is unusual, but it is ruining<br>my good credit standing. I have had a mishap, and realize things happen. If you look at my records, I was<br>always on time. The late payment(s) is reported to Equifax bureau and I am requesting removal of these<br>two late payments, as it has been reported to the bureau's.<br>Also, the account has been paid and closed for (insert number of years closed), why is this reflecting, on<br>my credit report? Is there interest that I am unaware of?<br>Sincerely,<br>{client_signature}<br>",
   
   },
   {
    id:56,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: Account number: (Account number)<br>To Whom It May Concern,<br>I was advised to write to you by your customer service department concerning my credit rating with your<br>company. I have enjoyed a credit account with (company name) for many years. During the course of our<br>business association, I have honored and respected my account agreement to the fullest. I appreciate how<br>wonderful your service has always been.<br>Unfortunately, 2 years ago, I was in a financial dilemma due to (job loss, health issues, new baby, efc ). As<br>aresult 3 of my payments to you were delayed. Because your account with me is extremely important I<br>managed to borrow the money to cover the late payments. I paid those payments 30 days late on three<br>occasions over a nine-month period but | made sure to fulfill my obligation to ensure that your company<br>suffered no loss.<br>I am thankful and appreciative for the years of positive credit history that I have obtained through your<br>company but now those 3 late marks on my credit reports are causing me tremendous stress. I am trying<br>to move up to a better paid position at my work, but the negative remarks are hurting my efforts.<br>This is where my \"Goodwill Request” comes in. I desperately need this promotion and I would be<br>extremely appreciative if you would please complete a UDF - Universal Data Form and fax it to the credit<br>bureaus to remove those entries.<br>",
     
   
   },
   {
     id:57,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{curr_date}<br>Re: [Company] v. [Client's first and last name] [Account Number] Balance: $XXX<br>To Whom It May Concern,<br>Please be advised that I filed a voluntary petition pursuant to Chapter 7 of the Bankruptcy Code. The<br>bankruptcy case number___________ is and it was filed on_____<br>with you listed as one of my creditors.<br>To my knowledge, have never had non-sufficient funds and I am not aware of any negative entries. Kindly<br>forward me a copy of my InformCreditorforBankruptcy record so that I may verify its accuracy.<br>Pursuant to 11 U.S.C. Section 362(a), you are automatically stayed by the filing of this petition from taking<br>any action to collect any debt from me or from enforcing any lien against me. A violation of the stay may be<br>actionable pursuant to 362(h) or as contempt of court and punishable accordingly.<br>Attorney name:<br>Attorney address:<br>Attorney phone number:<br>Kind regards,<br>{client_signature}<br><br>",
   },
   
   {
     id:58,
 
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: Account number: (ENTER ACCOUNT NUMBER)<br>To Whom It May Concern:<br>Please cease and desist all collection activities you have begun or are considering to take against me. I<br>plan on filing a petition in bankruptcy court in the coming months.<br>Sincerely yours,<br>{client_signature}<br>",
    
   },
   { id:59,
   content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: Account number / Debtor's name<br>To Whom It May Concern,<br>Please be advised that I have received yourcontentrequesting money for the above debt. Thiscontent sent<br>certified mail, receipt number_ is to formally advise you that I cannot pay this debt and<br>have no attachable income or assets to levy.<br>I believe that I am judgment proof and I can prove it if necessary in a court of law. Should you attempt to<br>file suit against me | will provide the court with valid proof of my situation.<br>My circumstances are that I am judgment proof because<br>(list reasons:) I have no assets, no home or car (to attach), no income and no prospects and; I am<br>disabled, unemployed, on social security or welfare.<br>I understand the debt is due, however your repeated attempts to collect are causing me much stress and<br>therefore I must also ask you to cease and desist you (if the account is being pursued by a third party debt<br>collector). If my situation changes, I will contact you immediately.<br>Kind regards,<br>{client_signature}<br>",
   
   },
   {
     id:60,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: Account number: {account_number} - Request for Reduced Payments<br>To Whom It May Concern:<br>Due to my desperate financial situation, I am unable to make payments on my account as originally<br>agreed. My financial position is as follows:<br>(STATE REASON; FINANCIAL, MEDICAL, DISABILITY, UNEMPLOYED, ETC)<br>I cannot work sufficient hours to meet my current expenses. My only sources of income are the following:<br>(LIST SOURCES OF INCOME)<br>I am familiar with the law and have been advised that I am “judgment proof.” If I should file for bankruptcy,<br>I will claim all of my property as exempt. If you sue me and obtain judgment, you will not be able to collect<br>any of my property to satisfy the judgment.<br>Please cease all collection activities you have taken or are considering. While I will absolutely present you<br>with reasonable financial or medical information, I must avoid stress (including high-pressure collections<br>activity and lawsuits).<br>I promise to inform you immediately should my financial condition improve and I am able to resume<br>sending you normal payments.<br>Thank you for your consideration and understanding.<br>Sincerely yours,<br>{client_signature}<br><br>",
    
   },
   {
     id:61,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{client_previous_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>{creditor_phone}<br>{curr_date}<br>Dear Collection Manager:<br>It has come to my attention, through my credit report, that you claim I owe a debt to your agency. I can<br>save us both some effort and time by settiing the debt out.<br>Here below is my offer. This is not a renewed promise to pay, nor does it constitute any agreement unless<br>you sign and retum it.<br>Please Note that I have not yet agreed that this debt is indeed mine and I have the option to seek<br>additional proof of this debt from your agency.<br>Because you hold all the rights to report the debt to the credit bureaus as you see fit, you can certainly<br>change that listing at any time as the source reporting the debt.<br>I have no doubt that you are aware of my right to dispute this debt and request full proof of obligation.<br>Paying this unverified debt to you has little value to me if we cannot mutually agree that you will report the<br>debt as outlined below.<br>‘While I realize that your function is to collect debts as a collection agent, I am also aware that a paid<br>collection would not be favorable on my report. That being said, I have determined, through the bureaus,<br>that you have the absolute right to report this debt as you see fit or not report it at all.<br>If you indicate that you are unable to remove the negative listing on my credit report, I will be forced to<br>cease communication and request full verification of the debt.<br>My goal is to arrange a term that is acceptable to us both, since this debt is \"questionable \"<br>My Offer: I will pay your company the amount of $xx as “payment in full for the full satisfaction of this<br>account \" Upon receipt of the above payment, your company will agree to change this entry on my credit<br>reports to “Paid\" immediately. You further agree to remove any and all previous notations of delinquency.<br>If you approve and agree to these terms, please acknowledge with your signature and return thiscontentto<br>me. You agree these terms herein are confidential and that you have the authority to make such decisions.<br>No payment will be made without written confirmation.<br>Upon receipt of this signed acknowledgment, I will immediately mail you funds by priority mail. This is not a<br>renewed promise to pay but rather a restricted offer only. If no terms can be met, no new arrangements will<br>be made, and the offer will be withdrawn.<br>{client_first_name} {client_last_name}<br>{creditor_name}<br>",
    
   },
   {
     id:62,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br><CREDITOR/FURNISHER ADDRESS><br>Dear Collection Manager:<br>It has come to my attention through the credit bureaus that you claim I owe a debt to your agency. While I<br>have never had the debt verified to me as legitimate by your agency, I may be willing to save us both some<br>time and effort by \"settiing the debt out™ with restrictions.<br>I understand that you hold all the rights to report the debt to the credit bureaus as you see fit and you can<br>change that listing at any time, as the source owning the debt. I am sure you are aware of my right to<br>dispute this debt and to request full proof of the obligation as per the FDCPA. Paying this unverified debt<br>means little to me if we cannot mutually agree that you will report the debt as mentioned below.<br>‘While I realize that your purpose is to collect debts as a collection agent, I am also aware of what a paid<br>collection on my report would represent for me, which is not favorable. That being said, I know that you<br>have the absolute right to report this debt as you see fit or not report it at all. It is only unlawful to report<br>false information but you may remove a listing any time at your discretion.<br>Please do not attempt to continue contacting me outside of this offer or I will be forced to cease and desist<br>‘our communication and request full lengthy verification of the debt. My goal is to arrange a term<br>acceptable to both.<br>My financial resources are limited and I am trying to do what's right but I am realistic about my financial<br>ability. I will pay your company the amount of S(AMOUNT) as \"payment in full” for this account. Upon<br>receipt of the above payment, your company has agreed to delete the item on my credit reports.<br>If you agree with these terms please acknowledge thiscontentwith your signature and return it to me. You<br>agree that the terms herein are confidential and that you have the authority to make such decisions. No<br>payment will be made without written confirmation from you.<br>Upon receipt of this signed acknowledgment, I will immediately mail you a cashier's check by priority mail.<br>This is not a renewed promise to pay but rather a restricted offer only. If no terms can be met, no new<br>arrangements will be made and the offer will be void.<br>Name of collection agency<br>Signature of company officer:<br>Name   Title      Date:<br>",
     
   },
   {
     id:63,
         content: "{client_first_name} {client_last_name}<br>{client_address}<br>{client_previous_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>{creditor_phone}<br>{curr_date}<br>To Whom It May Concern,<br>Re: {account_number}<br>Thiscontentis an offer to amicably settle the above account It shall not be misconstrued as an<br>acknowledgment of any liability for this debt in any form.<br>I will pay your company the amount of SXXXX as \"full settlement of this account.”<br>If you accept this agreement, I will send you a money order or certified cashiers check for this settlement<br>amount of $XXXX in exchange for a full deletion of all references regarding this account from my credit<br>reports and full satisfaction of the debt. This agreement is binding and will be void should you not fulfill<br>your end of this agreement. Furthermore, this debt will be deleted from my credit report at all three credit<br>bureaus, as well as any other bureaus that your company regularly reports to.<br>If you agree to the above, please acknowledge with your signature and return a copy to me. Upon receipt<br>of your signed acknowledgment, I will promptly send you a money order or cashiers check in the amount I<br>have stated above.<br>Please note: This agreement is restricted. This is not a renewed promise to pay, but rather a restricted<br>settlement offer only. By not signing below, you agree that the debt has not been renewed nor have any<br>written agreements been exchanged.<br>I look forward to resolving this matter in a speedily manner.<br>{client_first_name} {client_last_name}<br>Creditor's Authorized Signature:<br>Date:<br>Name:<br>Title :<br>",
        
   },
   {
     id:64,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: {client_first_name} {client_last_name} , Account number {account_number}<br>To Whom It May Concern:<br>On (Date), | received a copy of my credit report from (Credit Bureau Name). That report lists my payments<br>to you as being \"delinguent.’<br>My financial problems are now behind me and | am in a position to pay off this debt. | can pay a lump sum<br>amount of S_____ or | can pay instaliments in the amount of S____per month for _____ months if<br>you will agree to one of the following<br>() If I make a lump sum payment, you will agree to remove all negative information from my credit file<br>associated with the debt.<br>() If I agree to pay off the debt in monthly installments, you agree to ‘re-age’ my account - making the<br>current month the first repayment month and showing no late payments as long as I make the agreed<br>upon monthly payments.<br>If this offer is acceptable to you, please check and initial one of the above choices, sign your acceptance<br>below and return thiscontentto me in the enclosed envelope.<br>Thank you for your time and assistance.<br>Sincerely yours,<br>{client_signature}<br>",
     
   },
   {
     id:65,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>Atin: (name of person you are speaking with)<br>{curr_date}<br>Re: Reaffirmation of Debt<br>Dear (name of person you are speaking with)<br>Thiscontentacknowledges and reaffirms to (CREDITOR/FURNISHER), its successors and assignees, that<br>in regards to a certain prior discharged debt, the undersigned agrees to remain bound on this debt in the<br>amount of S(AMOUNT OWED; to the same extent as if the debt was not discharged in the first place.<br>i agree to pay this debt in the following manner:<br>[PROVIDE DETAILS OF THE MANNER THIS WILL BE PAID, TERMS, DOLLAR AMOUNT, ETC]<br>This agreement is binding and i understand what a debt reaffirmation is.<br>{client_signature}<br> |<br>",
   
   },
   { id:66,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>To Whom it May Concern,<br>According to my most recent credit report, your company is currently reporting to the three credit bureaus<br>that I applied for credit with your organization. I did not grant you authorization to review my credit report.<br>The Fair Credit Reporting Act requires that a creditor be able to verify the written authorization of the<br>consumer giving the creditor permission to review their credit. If you can provide a copy of a credit<br>application authorizing the disclosure of my credit files with my signature, I will accept the inquiry. If a<br>signed authorization cannot be found please remove the inquiry from the three main credit bureaus.<br>The presence of this inquiry is adversely affecting my credit report and is impeding my ability to obtain<br>necessary credit. Time is of the essence so I would greatly appreciate a response from you within thirty<br>(30) days.<br>Please mail me the copy of the signed application or acontentindicating your intention to delete the inquiry.<br>Sincerely yours,<br>{client_signature}<br>",
     
   },
   { id:67,
    
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: Unauthorized Credit Inquiry<br>To Whom It May Concern,<br>I received a copy of my credit report today and discovered a hard inquiry from your company. I do not<br>recall authorizing this inquiry and | would like to see the application of credit. Under the Fair Credit<br>Reporting Act, no one may access my credit without my permission for the purpose of extending credit.<br>I.am sending thiscontentcertified mail for my protection as well as yours. Please forward proof to me at your<br>earliest convenience or send a request to the credit bureaus that you report to if you discover this was an<br>emor.<br>It is urgent that I hear from you urgently, as this hard inquiry is impacting my credit score.<br>I anticipate your response.<br>Sincerely,<br>{client_signature}<br>",
     
   },
   {
     id:68,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: {client_first_name} {client_last_name}, Account number: {account_number}<br>To Whom It May Concern:<br>I have been contacted several times by {creditor_name} regarding a past due account with you. I do not,<br>however, wish to discuss this matter with them and | have asked them to cease contact with me.<br>I would prefer to speak directly with the {creditor_name} collections department.<br>Please pass this information to your collections department and indicate my desire to be in touch with<br>them.<br>Thank you for your help.<br>Sincerely yours,<br>_{client_signature}<br>",
    
   },
   {
     id:69,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>(CREDITOR Address)<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>Name(s) on account: {client_first_name} {client_last_name}<br>Account number: {account_number}<br>Re: Request for Reduced Payments<br>To Whom It May Concern:<br>In my current financial situation, I am unable to pay the required monthly payments as originally agreed.<br>My financial position is described below:<br>(STATE REASON)<br>Due to my desperate financial situation, I cannot make any payments for the indefinite future.<br>(DESCRIBE YOUR HARDSHIP)<br>I promise to inform you immediately should my financial condition improve and I am able to resume<br>sending you normal payments.<br>Thank you for your consideration and understanding. Please let me know within 20 days if the foregoing<br>proposal is acceptable.<br>Sincerely yours,<br>{client_signature}<br>",
     
   },
   {
     id:70,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: Account number: {account_number}, Request for Reduced Payments<br>To Whom It May Concern:<br>In my current financial situation, I am unable to pay the required monthly payments as originally agreed.<br>My financial position is described below:<br>(STATE REASON)<br>At the present time, I cannot make any payments. I expect to resume making the full monthly payment<br>when the following occurs:<br>(STATE REASON)<br>If necessary, you may add the unpaid amount to the end of the account period and extend it by the<br>appropriate number of months.<br>Thank you for your consideration and understanding. Please let me know within 20 days if the foregoing<br>proposal is acceptable.<br>Sincerely yours,<br>{client_signature}<br>",
   
   },
   {
     id:71,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: Amount of debt: XXXXX Original creditor: XXXXXXXXXXXXXX Collection agency:<br>XXXXXXXXXX Account ID: XXX<br>To Whom It May Concern,<br>On (insert date) you assigned my debt to (collection agency name). Since that time I believe they have<br>violated the Fair Debt Collection Practices Act.<br>Specifically, violations are: (List all violations: called late at night, refused to allow you to validate it, told<br>other third parties about your debt, left harassing telephone messages, refused to provide proof, harassed<br>or intimidated you, etc. Be sure to include any proof you have).<br>I am aware that | had an outstanding debt with your company but I refuse to make any arrangements with<br>a collection agency, particularly one that does not respect my rights. Now that they have violated the<br>FDCPA, I am requesting to communicate directly with you, otherwise | may be forced to take legal action<br>against this collection agency that represents you.<br>Please reply by mail to advise me if you will take the account back so that I may make arrangements with<br>you. Upon receiving your reply I will immediately contact you.<br>I have forwarded a copy of thiscontentto the collection agency and I am including a cease and desist clause<br>directed towards that agency. From this moment forward I will only correspond with you.<br>I await your reply. Upon receiving it, I will write back to you via certified mail.<br>Kind regards,<br>{client_signature}<br><br>",
   },
   {
     id:72,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>{client_first_name} {client_last_name}, Account number: {account_number}<br>To Whom It May Concern:<br>On (DATE), I received a copy of my credit history report from (CREDIT BUREAU NAME). That Report<br>contained incorrect information reported by you.<br>I contacted the (CREDIT BUREAU NAME) to request deletion of this inaccurate data from my Credit<br>History Report, but they have refused. They insist that your company claims this information to be<br>accurately reported. This is not frue, and here as follows is the correct information:<br>{dispute_item_and_explanation}<br>I am enclosing the following documentation to support my claim that the information you have reported is<br>not correct:<br>(LIST DOCUMENTATION)<br>This negative mark is damaging to my credit. Please contract Experian, Equifax and Trans-Union,<br>immediately to remove this information from my credit file.<br>Please confirm to me within 20 days that you have contacted the credit bureaus to correct this information.<br>Thank you for your time and assistance.<br>Sincerely yours,<br>{client_signature}<br>",
    
   },
   {
     id:73,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_address}<br>{curr_date}<br>To Whom It May Concern,<br>I have recently received a copy of my credit report. The report had an account listed from your company as<br>a credit card. I disputed the account with the credit bureau as \"not mine\" but it recently came back as<br>verified.<br>{dispute_item_and_explanation}<br>I am writing thiscontentto you in an effort to get this removed. Please delete your information from my credit<br>reports. I have never had an account with your company. If someone has opened an account in my name,<br>please close it immediately before further harm is done.<br>I am requesting that you notify all of credit bureaus that this account is \"disputed” or that you delete this<br>account until this matter is resolved. This is required by the Fair Credit Reporting Act. If there is any<br>paperwork that | need to sign to confirm that this account is not mine, please send me the required<br>documents.<br>This is a written dispute of the this account per the Fair Credit Reporting Act, the Fair Debt Collection<br>Practices Act and the Fair Credit Billing Act. Please be aware that I am exercising all of my rights per these<br>laws and all other applicable laws protecting me.<br>Sincerely,<br>{client_signature}<br>",
   
   },
   {
     id:74,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: Account number: {account_number}, Request for Reduced Payments<br>To Whom It May Concern:<br>In my current financial situation, I am unable to pay the required monthly payments as originally agreed.<br>My financial position is described below:<br>(STATE REASON)<br>I am able to pay $_ per month starting on___________ and I expect to resume making the full<br>monthly payment on or before ___________________It would help me so much if you would accept this reduced payment schedule. If necessary, you may add<br>the unpaid amount to the end of the account period and extend it by the appropriate number of months.<br>Thank you for your consideration and understanding. Please let me know within 20 days if the foregoing<br>proposal is acceptable.<br>Sincerely yours,<br>{client_signature}<br>",
   
   },
   {
     id:75,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: Account number: {account_number}, Request for Reduced Payments<br>To Whom It May Concern:<br>In my current financial situation, I am unable to pay the required monthly payments as originally agreed.<br>My financial position is described below:<br>(STATE REASON)<br>l am able to pay $____per month starting on ______ and I expect to resume making the full<br>monthly payment on or before .<br>It would help me so much if you would accept this reduced payment schedule. If necessary, you may add<br>the unpaid amount to the end of the account period and extend it by the appropriate number of months.<br>Thank you for your consideration and understanding. Please let me know within 20 days if the foregoing<br>proposal is acceptable.<br>Sincerely yours,<br>{client_signature}<br>",
    
   },
   {
     id:76,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>Re: Account Number: {account_number}. Balance to be paid: $_<br>Dear {creditor_name}<br>Per our agreement to settle the above mentioned debt, I am requesting that you sign this unilateral release<br>form. This form confirms that we both agreed to settle the debt listed above for the amount indicated.<br>Creditors/Agency Name:<br>We agree that to accept §_ as \"payment in full” for account number: {account_number}.<br>For: {client_first_name} {client_last_name}<br>We will accept this amount as full and final satisfaction and we will have no future claims against this<br>account or debtor. This Unilateral Release ensures that we understand we have accepted a settiement on<br>this debt and will not pursue the debtor later for any deficiency balance.<br>Creditor's Authorized Signature Date<br>Printed name of Creditors Authorized Rep.<br>",
    
   },
   {
     id:77,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: Account number: {account_number}<br>To Whom It May Concern:<br>This certifiedcontent receipt number: XXXXXXXXXXXX is to formally advise you that I believe your<br>company has violated my consumer rights in the following ways.<br>Specifically you: [list all that apply]<br>- Failed to validate a debt at my request- FDCPA violation<br>- Continued to report a disputed debt to the CRA- FCRA violation<br>- Continued to attempt to collect a disputed debt- FDCPA violation<br>- Ignored my cease and desist- FDCPA violation<br>Not only have you ignored my prior requests for validation of debt (see enclosed copies of receiptscontent)<br>but you also continue to report this debt to the credit bureaus causing damage to my character. Thiscontentnwill again request that you follow guidelines of The Fair Debt Collection Practices Act (FDCPA), 15US.C.<br>§ 1692 and please provide the following:<br>Validation of Debt Request<br>- Proof of your right to own/collect this alleged debt -Balance claimed including all fees, interest and<br>penalties<br>-Contract bearing my personal signature -License proof to collect debts in my state<br>As you certainly are aware, \"Admission by Silence” means that you had a legal duty to defend your<br>position but failed to do so and if my claims were untrue you would have been compelled to deny my<br>charges. I will use the Admission by Silence in my defense should | be summoned to court or take action<br>against you.<br>I expect to receive proof requested above, within 15 days of thiscontent Should you continue to ignore my<br>request for this validation of debt I reserve the right to sue your company for violations of my consumer<br>rights as indicated under both the FDCPA and the FCRA. I may also seek damages from you if warranted.<br>Kind regards,<br>{client_signature}<br>",
        
   },
   {
     id:78,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: Account #{account_number}<br>To Whom It May Concern:<br>‘Your company is reporting the below referenced account on my credit report as a collection account.<br>{dispute_item_and_explanation}<br>I have disputed this item with the credit reporting agency and they reported you confirmed the account as<br>valid.<br>In a good faith effort to resolve the matter amicably, I must demand proof of this debt, specifically the<br>alleged contract or other instrument bearing my signature, as well as proof of your authority in this matter.<br>Absent such proof, you must correct any erroneous reports of this past debt as mine.<br>I am writing to request that you please provide the following information:<br>1. Please evidence your authorization under 15 USC 1692(e) and 15 USC 1692(f) in this alleged matter.<br>2. What is your authorization of law for your collection of information?<br>3. What is your authorization of law for your collection of this alleged debt?<br>4. Please evidence your authorization to do business or operate in this state.<br>5. Please evidence proof of the alleged debt, including the alleged contract or other instrument bearing my signature. <br>6. Please provide a complete account history, including any charges added for collection activity.<br>‘You have thirty (30) days from receipt of this notice to respond. Failure to respond in writing, hand-signed,<br>and in a timely manner, will be considered a waiver to any and all of your claims in this matter, and will<br>entitle me to presume you placed this on my credit report(s) in error and that this matter is permanently<br>closed. Provide the proof, or correct the record and remove this invalid debt from all sources to which you<br>have reported it<br>For the purposes of 15 USC 1692 et seq., this Notice has the same effect as a dispute to the validity of the<br>alleged debt and a dispute to the validity of your claims. This Notice is an attempt to correct your records,<br>and any information received from you will be collected as evidence should further action be necessary.<br>This is a request for information only, and is not a statement, election, or waiver of status.<br>{client_first_name} {client_last_name} (DO NOT SIGN)<br><br>",
     
     
   },
   {
     id:79,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address} )<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: Account #{account_number}<br>To Whom It May Concern,<br>Thiscontentis a formal complaint that you are reporting inaccurate and incomplete credit information. I am<br>distressed that you have included the information below in my credit profile and that you have failed to<br>maintain reasonable procedures in your operations to assure maximum possible accuracy in the credit<br>reports you publish.<br>Credit reporting laws ensure that bureaus report only 100% accurate credit information. Every step must<br>be taken to assure the information reported is completely accurate and correct.<br>The following information therefore needs to be re-investigated:<br>{dispute_item_and_explanation}<br>I respectfully request to be provided proof of this alleged item, specifically the contract, note or other<br>instrument bearing my signature. Failing that, the item must be deleted from the report as soon as<br>possible:<br>The listed item is entirely inaccurate and incomplete, and as such represents a very serious error in your<br>reporting. Please delete this misleading information and supply a corrected credit profile to all creditors<br>who have received a copy within the last six months, or the last two years for employment purposes.<br>Additionally, please provide the name, address, and telephone number of each credit grantor or other<br>subscriber.<br>Under federal law, you have thirty (30) days to complete your re-investigation. Be advised that the<br>description of the procedure used to determine the accuracy and completeness of the information is<br>hereby requested as well, to be provided within fifteen (15) days of the completion of your re-investigation.<br>Sincerely,<br>{client_signature}<br>",
   
   },
   {
     id:80,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: Acct # {account_number}<br>To Whom It May Concern:<br>I.am sending thiscontentto you in response to the notice I received from you on (date ofcontent. Please be<br>advised that this is not a refusal to pay, but a notice sent pursuant to the Fair Debt Collection Practices<br>Act, 15 USC 16929 Sec. 809 (b) that your claim is disputed and validation is requested.<br>This is NOT a request for ‘verification’ or proof of my mailing address, but a request for 'VALIDATION'<br>made pursuant to the above named Title and Section. I respectfully request that your office provide me<br>with factual evidence that I have any legal obligation to pay you.<br>Please provide me with the following:<br>-What the money you say I owe is for;<br>-Explain and show me how you calculated what you say I owe;<br>-Provide me with copies of any papers that show | agreed to pay what you say I owe;<br>-Provide a verification or copy of any judgment if applicable;<br>-Identify the original creditor;<br>-Prove the Statute of Limitations has not expired on this account;<br>-Show me that you are licensed to collect in my state; and<br>-Provide me with your license numbers and Registered Agent.<br>If your offices have reported invalidated information to any of the three major Credit Bureau's (Equifax,<br>Experian or TransUnion), said action might constitute fraud under both Federal and State Laws. Due to<br>this fact, if any negative mark is found on any of my credit reports by your company or the company that<br>you represent I will not hesitate to bring legal action against you for the following:<br>-Violation of the Fair Credit Reporting Act<br>-Violation of the Fair Debt Collection Practices Act<br>-Defamation of Character<br>If your offices are able to provide the proper documentation as requested, I will require at least 30 days to<br>investigate this information and during such time all collection activity must cease and desist.<br>Also during this validation period, if any action is taken which could be considered detrimental to any of my<br>credit reports, I will consult with my legal counsel. This includes any information to a credit reporting<br>repository that could be inaccurate or invalidated or verifying an account as accurate when in fact there is<br>no provided proof that it is.<br>If your offices fail to respond to this validation request within 30 days from the date of your receipt, all<br>references to this account must be deleted and completely removed from my credit file and a copy of such<br>deletion request shall be sent to me immediately.<br>I would also like to request, in writing, that no telephone contact be made by your offices to my home or to<br>my place of employment. If your offices attempt telephone communication with me, including but not<br>limited to computer generated calls or correspondence sent to any third parties, it will be considered<br>harassment and I will have no choice but to file suit. All future communications with me MUST be done in<br>writing and sent to the address noted in thiscontent<br>This is an attempt to correct your records, any information obtained shall be used for that purpose.<br>Kind regards,<br>{client_signature}<br>",
  
   },
   {
     id:81,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: {account_number}<br>To Whom It May Concern,<br>I am in receipt of yourcontentclaiming that I owe your company for a debt. According to the Federal Fair<br>Debt Collection Practices Act, I have a right to have the alleged debt validated by you.<br>I have to date, received no proof that I owe your company any debt and I am requesting that you forward<br>to me full and proper documentation as evidence of this alleged debt. As per the FDCPA, it is a violation<br>for any debt collector to pursue collection activity on an account without notifying the debtor in writing<br>within 5 days after any communication. Additionally I am allowed 30 days to dispute the validity of the<br>debt. If you are unable to provide me with proper proof then you must stop attempting to collect this<br>alleged debt.<br>If you continue to claim I owe a debt that you cannot confirm with proof then you will be in direct violation<br>of the FDCPA_ Additionally, any attempt on your part to report this alleged debt to my credit reports will be<br>a violation of the Fair Credit Reporting Act.<br>Please forward your documentation to me upon receipt of this certifiedcontent Please note that proper<br>documentation is not a print out or bill from you but rather actual proof of the debt's existence.<br>Sincerely,<br>{client_signature}<br>",
   
   },
   {
     id:82,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>Re: Remove Inaccurate Information from my Credit Reports. Account #{account_number}<br>{curr_date}<br>To Whom It May Concern,<br>Thiscontentis a formal complaint that you are reporting inaccurate and incomplete credit information.<br>I am distressed that you have included the information below in my credit profile and that you have failed<br>to maintain reasonable procedures in your operations to assure maximum possible accuracy in the credit<br>reports you publish. Credit reporting laws ensure that bureaus report only 100% accurate credit<br>information. Every step must be taken to assure the information reported is completely accurate and<br>correct. The following information therefore needs to be re-investigated.<br>Account #{account_number}<br>{dispute_item_and_explanation}<br>I respectfully request to be provided proof of this alleged item, specifically the contract, note or other<br>instrument bearing my signature.<br>Failing that, the item must be deleted from the report as soon as possible. The listed item is entirely<br>inaccurate and incomplete, and as such represents a very serious error in your reporting. Please delete<br>this misleading information and supply a corrected credit profile to all creditors who have received a copy<br>within the last six months, or the last two years for employment purposes.<br>Additionally, please provide the name, address, and telephone number of each credit grantor or other<br>subscriber.<br>Under federal law, you have thirty (30) days to complete your re-investigation. Be advised that the<br>description of the procedure used to determine the accuracy and completeness of the information is<br>hereby requested as well, o be provided within fifteen (15) days of the completion of your re-investigation.<br>Sincerely,<br>{client_signature}<br>",
      
   },
   {
     id:83,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: Account number: {account_number}<br>To Whom It May Concern:<br>This certifiedcontent receiptnumber: ________is to formally advise you that I befieve your<br>company has violated several of my consumer rights. Specifically:<br>You failed to validate a debt at my request, which is a FDCPA violation and you continued to report a<br>disputed debt to the Credit Bureaus: another FCRA violation<br>Not only have you ignored my prior requests for validation of debt (proof attached: receipt copies orcontentncopies) but you continue fo report this debt to the credit bureaus causing damage to my character. This\contentwill again request that you follow the FDCPA and please provide the following<br>Validation of Debt Request<br>-Proof of your right to own/collect this alleged debt<br>-Balance claimed including all fees, interest and penalties<br>-Contract bearing my personal signature<br>As you may be aware, “Estoppel by Silence” legally means that you had a duty to speak but failed to do so<br>therefore, that must mean you agree with me that this debt is false_ I will use the Estoppel in my defense.<br>I expect to receive the proof requested above within 15 days of thiscontent Should you again ignore my<br>request for validation of debt | reserve the right to sue your company for violations of my consumer rights<br>as specified under both the FDCPA and the FCRA. I may also seek damages from you if waranted.<br>Kind regards,<br>{client_signature}<br>",
        
   },
   {id:84,
         content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: Account # {account_number}<br>To Whom It May Concern,<br>I dispute your claims in their entirety and | am requesting validation from you pursuant to the Fair Debt<br>Collection Practices Act, 15 USC 16929 Sec. 809 (8) (FDCPA).<br>Sincerely,<br>{client_signature}<br>",
   
   },
   {
     id:85,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{client_previous_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>{creditor_phone}<br>{curr_date}<br>Certified Mail No.:<br>Re: Inquiry dated ___: account no. {account_number}<br>To Whom It May Concern,<br>Thank you for your inquiry. This is not a refusal to pay, but a notice that I am disputing your claim and I am<br>requesting validation made pursuant to the Fair Debt Collection Practices Act.<br>Please complete and return the attached disclosure request form.<br>Understand that i am not requesting a “verification” that you have my mailing address, i am requesting a<br>“validation of debt;” i.e.; competent and valid evidence that i have some contractual obligation to pay you.<br>You may be aware that sending unsubstantiated demands for payment through the United States Mail<br>System might constitute mail fraud under federal and state law. As such, you may wish to consult with a<br>legal adviser before your next communication with me.<br>Your failure to satisfy this request within the requirements stated in the Fair Debt Collection Practices Act<br>will be construed as your absolute waiver of any and all claims against me, and your tacit agreement to<br>compensate me for costs and attorney fees.<br>{client_first_name} {client_last_name} (DO NOT SIGN)<br>CREDITOR DISCLOSURE STATEMENT<br>Name and Address of Collector (assignee):<br>Name and Address of Debtor:<br>Account Number(s):<br>What are the terms of assignment for this account? You may attach a facsimile of any records relating to<br>such terms.<br>Have any insurance claims been made by any creditor or assignee regarding this account? Yes / no<br>Has the purported balanced of this account been used in any tax deduction claim? Yes / no<br>Please list the exact products or/or services sold by the collector to the debtor and the dollar amount of<br>each:<br>Upon failure or refusal of collector to validate this collection action, collector agrees to waive all claims<br>against the debtor named herein and pay debtor for all costs and attorney fees involved in defending this<br>collection action.<br>X, — <br>Authorized signature for Collector Date<br>Printed name<br>Please return this completed form and attach all assignment or other transfer agreements that would<br>establish your right to collect this debt.<br>Your claim cannot be considered if any portion of this form is not completed and returned with the required<br>documents. This is a request for validation made pursuant to the Fair Debt Collection Practices Act. If you<br>do not respond as required by this law, your ciaim will not be considered and you may be liable for<br>damages for continued collection efforts.<br>",
    
   },
   {
     id:86,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{client_previous_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>{creditor_phone}<br>{curr_date}<br>To Whom It May Concern:<br>Thiscontentis sent to you in response to a notice sent to me on (Date) or in response to a listing on my<br>credit report (CHOOSE THE ONE APPROPRIATE FOR YOUR SPECIFIC SITUATION). Be advised that<br>this is not a refusal to pay, but a notice sent pursuant to the Fair Debt Collection Practices Act, 15 USC<br>16929 Sec. 809 (8), stating your claim is disputed and validation is requested.<br>This is NOT a request for “verification” or proof of my mailing address, but a request for VALIDATION<br>made pursuant to the above named Titie and Section. I respectfully request your offices provide me with<br>‘competent evidence that I have any legal obligation to pay you.<br>At this time I will also inform you that if your offices have reported invalidated information to any of the 3<br>major Credit Bureaus (Equifax, Experian or TransUnion) this action might constitute fraud under both<br>Federal and State Laws. Due to this fact, if any negative mark is found on any of my credit reports by your<br>ccompany or the company that you represent, I will not hesitate in bringing legal action against you and<br>your client for the following:<br>Violation of the Fair Credit Reporting Act<br>Violation of the Fair Debt Collection Practices Act<br>Defamation of Character<br>If your offices are able to provide the proper documentation as requested in the following Declaration, I will<br>require at least 30 days to investigate this information, during which time all collection activity must cease<br>and desist. Also during this validation period, if any action is taken which could be considered detrimental<br>to any of my credit reports, I will consult with my legal counsel for suit. This includes any listing of any<br>information to a credit reporting repository that could be inaccurate or invalidated. If your office fails to<br>respond to this validation request within 30 days from the date of your receipt, all references to this<br>account must be deleted and completely removed from my credit file and a copy of such deletion request<br>shall be sent to me immediately.<br>(OPTIONAL CEASE & DESIST) I would also like to request, in writing, that no further telephone contact be<br>made by your offices to my home or to my place of employment. If your offices continue to attempt<br>telephone communication with me it will be considered harassment and I will have no choice but to file<br>suit. All future communications with me MUST be done in writing and sent to the address noted in this\content<br>It would be advisable that you and your client assure that your records are in order before I am forced to<br>take legal action.<br>Best Regards,<br>{client_first_name} {client_last_name} (DO NOT SIGN)<br>CREDITOR/DEBT COLLECTOR DECLARATION<br>Please provide all of the following information and submit the appropriate forms and paperwork within 30<br>days from the date of your receipt of this request for validation.<br>Name and Address of Alleged Creditor:<br>Name on File of Alleged Debtor:<br>",
     
   },
   {
     id:87,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{client_previous_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>{creditor_phone}<br>{curr_date}<br>To Whom It May Concern:<br>Re: Acct # XOOOK-X00X-XXXK-XXXX<br>To Whom It May Concern:<br>Thiscontentis sent to you in response to a notice sent to me on (Date) or in response to a listing on my<br>credit report (CHOOSE THE ONE APPROPRIATE FOR YOUR SPECIFIC SITUATION). This is not a<br>refusal to pay, but a notice that your claim is disputed.<br>Pursuant to the Fair Debt Collection Practices Act, 15 USC 16929 Sec. 809 (8) (FDCPA), I have the right<br>to request validation of the debt you say I owe you. I am requesting proof that I am indeed the party you<br>are asking to pay this debt, and there is some contractual obligation which is binding on me to pay this<br>debt.<br>Your attorney or legal staff will agree that compliance with this request is required under State and Federal<br>Statutes.<br>In addition to the questionnaire below, please attach copies of.<br>Agreement with your client that grants you the authority to collect on this alleged debt, or proof of acquisition by purchase or assignment.<br>Agreement that bears the signature of the alleged debtor wherein he or she agreed to pay the creditor.<br>Also, please be advised thiscontentis not only a formal dispute, but a request for you to cease and desist<br>any and all collection activities.<br>I require compliance with the terms and conditions of thiscontentwithin 30 days. or a complete withdrawal,<br>in writing, of any claim.<br>In the event of noncompliance, I reserve the right to file charges and/or complaints with appropriate<br>County, State & Federal authorities the BBB and State Bar associations for violations of the FDCPA,<br>FCRA, and Federal and State statutes on fraudulent extortion<br>I also hereby reserve my right to take private civil action against you to recover damages.<br>Sincerely,<br>{client_first_name} {client_last_name} (DO NOT SIGN)<br>DEBT VALIDATION FORM<br>Please provide all of the following information and submit the appropriate forms and paperwork within 30<br>days from the date of your receipt of this request for validation.<br>Account #:<br>Original Creditor's Name:<br>- Name of Debto-<br>Address of Debtor<br>Balance of Account:<br>Date you acquired this debt:<br>This Debt was: assigned __purchased___<br>Please indicate the credit bureaus which you have reported this account to:<br>Experian:<br>Equifax:<br>TransUnion:<br>Other:<br><br>",
   
   },
   {
     id:88,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>Amount of debt: Date of Service: Provider of Service:<br>To Whom It May Concern,<br>I received a bill from you on [insert date] and as allowable under the Fair Debt Collections Practices Act, I<br>‘am requesting validation of the alleged debt I am aware that there is a debt from [name of doctor, hospital,<br>clinic, etc] but I am unaware of the amount due and your bill does not include a detailed breakdown of any<br>fees.<br>Furthermore, I am allowed under the HIPAA law (Health Insurance Portability and Accountability Act of<br>1996) to protect my privacy and medical records from third parties. I do not recall giving permission to<br>[name of provider] for them to release my medical information to a third party. I understand that the HIPAA<br>does allow for limited information about me but any details may only be revealed with the patients<br>authorization, therefore my request is twofold and as follows:<br>Validation of Debt and HIPAA authorization<br>- Please provide a breakdown of fees including any and all collection costs and medical charges<br>- Please provide a copy of my signature with the provider of service to release my medical information to<br>you<br>- Immediately cease any credit bureau reporting until debt has been validated by me<br>Please send this information to my address listed above and accept thiscontent sent certified mail, as my<br>formal debt validation request, of which I am allowed under the FDCPA.<br>Please note that withholding the information you received from any medical provider in an attempt to be<br>HIPAA compliant will be a violation of the FDCPA because you will be deceiving me after my written<br>request. I am requesting full documentation of what you received from the provider of service in<br>connection with this alleged debt.<br>Furthermore, any reporting of this debt to the credit bureaus prior to allowing me to validate it may be a<br>violation of the Fair Credit Reporting Act, which can allow me to seek damages from a collection agent.<br>I await your reply with the above requested proof. Upon receiving it, I will correspond back with you by<br>certified mail.<br>Kind regards,<br>{client_signature}<br>",
    
   },
   {
     id:89,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>{curr_date}<br>RE: Account number {account_number}<br>To Whom It May Concern,<br>Please be advised that you are attempting to collect on an expired debt. I am invoking my right to cease<br>you, based on factual law that this debt in question is legally expired under the Statute of Limitations.<br>Accordingly, I am requesting that you do not attempt to collect this expired debt, and should you seek legal<br>recourse I will invoke my right of the expired statute as a valid defense.<br>Additionally any attempts to harm my credit rating by updating or changing dates after you have been<br>informed that the debt is expired, are a direct violation of the FDCPA.<br>Any abuse to my credit rating on your part will be met with all recourse available to me.<br>I am aware of how long items may remain on my credit reports and any attempt to extend the reporting<br>time will be investigated by me, and reported to the American Collectors Association and my State<br>Attorney General.<br>I am completely aware of how long the debt is legally collectable and how long it is legally reportable. I<br>realize a debt is allowed to be reported to my credit for 7 years, and my research has shown me that often<br>a collection agency will reset the date of original charge off to the date they purchased it, thus trying to<br>extend the reporting time in an attempt to force a consumer into paying it. I am informing you of this<br>knowiledge so that you may do the right thing.<br>I have no intention of renewing the expired statute of limitations, so please stop wasting your time<br>contacting me.<br>I expect this will be the last time I hear from you.<br>Sincerely,<br>{client_signature}<br>",
       
   },
   {
     id:90,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: {account_number}<br>To Whom It May Concern,<br>Please be apprised that you are in direct violation of the Fair Debt Collections Practices Act. In my opinion<br>you have violated at least three sections of this act by:<br>« Failing to validate a debt as allowed to the debtor under 15 USC 1692 (g) Section 809 (b)<br>« Communicating with a debtor after receiving a cease and desist certified mail under 15 USC 1692<br>(g) Section 805 (c)<br>« Harassment of alleged debtor under the \"abuse & harassment” subsection of the statute, USC 1692<br>(g) Section 806 (5)<br>I have complete and thorough records of your violations and I am prepared to protect myself and my rights<br>from unscrupulous collection agencies.<br>In (EXACT DATE), I sent by certified mail (receipt number: (CERTIFIED MAIL RECEIPT NUMBER), a<br>request for your office to provide me with proof and evidence of the debt you alleged I owed, and I did so<br>within 30 days of receiving your first notice. In that samecontentI also included my cease and desist<br>instructions.<br>After verified delivery of mycontent(via your office’s signature), you proceeded to mail a simple bill which is<br>NOT considered a \"validation of debt” by any means. You may wish to familiarize yourself with what is<br>required when validating a debt.<br>Your office also proceeded to contact me by phone after the delivery and acceptance of my certifiedcontent<br>Contacting a person after a cease and desist can lead to serious trouble for your agency including<br>damages of up to $1000.00 per incident.<br>I highly doubt that this S(ENTER AMOUNT OF DEBT) debt is worth your agency’s license and the fees<br>and penalties for violations of the FDCPA.<br>There is no question that you willfully violated my rights and that I could bring charges against you<br>immediately. However, I am assuming this has been a terrible mistake on your part and that you will take<br>appropriate steps to enlighten yourself and your staff of such dangerous actions.<br>I will also be checking my credit report to see if you have willfully reported an unverified and disputable<br>debt to the credit bureaus. If so, that will be a violation of the Fair Credit Reporting Act. I will state again in<br>this certified mailing that you have failed to verify the debt as accurate, you have provided no proof of this<br>alleged debt, and I must remind you again to not contact me in any way via phone or mail in reference to<br>collecting this debt.<br>If I receive anything other than absolute proof from you, provided by the original creditor, I will assume you<br>are harassing me and ignoring my cease and desist, and I will take action against you for these continued<br>violations and abuse.<br>Sincerely,<br>{client_signature}<br>",
    
   },
   {
     id:91,
     content: "{client_first_name} {client_last_name}<br>{client_address} <br>{creditor_name}<br>{creditor_address} <br>{creditor_city} {creditor_state} {creditor_zip} <br>{curr_date}<br>Re: {account_number}<br>To Whom It May Concern,<br>In reviewing my credit reports, | came across a debt item that was listed incorrectly. | disputed this account<br>1o the credit bureaus and they confirmed it was verified as accurate by you. <br>| am aware of the rights | have and am requesting that you immediately remove the debt from my credit<br>reports or you may face damages by reporting inaccurate data to a credit reporting agency. (See the 3<br>FCRA) This debt is listed as a charge off, with a last date of activityof ___________ You are reporting <br>the charge off date as the date you purchased the debt instead of the actual charge off date. This is a <br>clear violation of the Fair Credit Reporting Act, as it is clearly stated that “no debt may be reported to a <br>consumers’ credit file for any longer than 7 years from the date of first serious delinquency or charge off *<br>Because you have altered the charge off date as the date you purchased it, you are committing fraud. I<br>have informed the credit bureaus of this, and have asked for a second verification. When that verification <br>comes to you, I suggest you follow the law and report the true facts. In addition to this debt being over the <br>allowed time to report (7 years) it has also passed the statute of limitations to collect I have no intention of<br>paying this old expired debt and | am informing you of this now.<br>Should you attempt to report or collect this expired debt, I will contact my Attorney General and fill out a<br>complaint to the Federal Trade Commission, and I will take steps to collect damages from you of up to<br>$1.000.00. I believe | have a case against you for violating sections of the FDCPA and FCRA should you<br>continue.<br>Sincerely,<br>{client_signature}<br>",
     
   },
   {
     id:92,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: {account_number}<br>To Whom It May Concern,<br>Please be advised that you are attempting to collect on an expired debt. I am invoking my right to cease<br>you, based on factual law that this debt in question is legally expired under the Statute of Limitations.<br>Accordingly, I am requesting that you do not attempt to collect this expired debt, and should you seek legal<br>recourse I will invoke my right of the expired statute as a valid defense.<br>Additionally any attempts to harm my credit history and rating by updating or changing dates after you<br>have been informed that the debt is expired, is a direct violation of the FDCPA. Any abuse to my credit<br>rating on your part will be met with all recourse available to me by the law.<br>I.am aware of how long items may remain on my credit reports and any attempt to extend the reporting<br>time will be investigated by me, and reported to my State Attorney General and the American Collectors<br>Association.<br>I am completely aware of how long the debt may be legally collectable and how long it may be legally<br>reportable. I realize a debt is allowed to be reported on my credit history for no longer than 7 years, and<br>my research has shown me that often a collection agency will reset the date of original charge off to the<br>date they purchased it, thus trying to extend the reporting time in an attempt to force a consumer into<br>paying it. I am informing you of this knowledge so that you may do the right thing<br>I have no intentions of renewing the expired statute of limitations, so please stop wasting your time<br>contacting me. I expect this will be the last time I hear from you.<br>Sincerely,<br>{client_signature}<br>",
       
   },
   {
     id:93,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{ss_number}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: Dispute of Collections Action: Case #{account_number}.<br>To Whom It May Concem:<br>| received a copy of my credit report and found the following errors. See the attached copy of my credit<br>report; the errors have been highlighted. Here as follows is error:<br>{creditor_name}<br>Account #{account_number}<br>{dispute_item_and_explanation}<br>I.am hereby requesting that you confirm the fact that I owe this debt as required by any applicable state<br>and federal laws. Please contact the creditor to obtain verification.<br>In addition, under the provisions of state and federal Fair Debt Collection Practices Act (FDCPA), Fair<br>Credit Reporting Act (FCRA), and related consumer statutes, I am hereby instructing you to cease<br>collection of the debt while efforts are made to obtain verification. Until you resolve this error with the<br>creditor, you should neither contact me nor anyone else except the creditor about this collection.<br>Furthermore, any reporting of this matter to credit reporting agencies is premature. Until you have<br>investigated my dispute, you should not relay negative information to a credit reporting agency. If negative<br>information has already been reported, you must notify the agency to remove said report until the<br>investigative process is over so that my credit report remains accurate, or at the very least, my credit<br>report should be updated to reflect my dispute.<br>‘Your next contact with me should be to either notice that the creditor has failed to provide verification of the<br>debt and that the matter has been closed or that you believe that this debt is valid and are providing proof <br>of my responsibility. If the former, please confirm that I am not being held responsible for the debt in writing<br>and also that if the account has already been noted on my credit report, that you wiill contact the bureau(s) I<br>in question to have the account removed. If the latter, I expect that you will provide me with an explanation <br>as to why you have decided not to remove this account from collections and a copy of all documents <br>relevant to the debt such as the application, bills. records of communications and payments, and any other<br>data that indicates my responsibility.<br>I am instructing you not to contact any third parties such as my employer, neighbors, friends or family<br>members. In addition, you may not contact me by phone at work or at my home about this collection <br>activity. All future correspondence should be sent to me in writing. <br>Please acknowledge that you have received this notice within 14 days.<br>Sincerely,<br>{client_signature}<br>",
     
   
   },
   {
     id:94,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>(Collection Agency)<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>Atin: (PERSON OR DEPARTMENT THAT CONTACTED YOU)<br>{curr_date}<br>Re: Notice to Cease Contact, Case # (ENTER CASE NUMBER IF AVAILABLE, PLUS CREDITOR<br>INFORMATION AND ACCOUNT NUMBER)<br>To (PERSON WHOSE NAME APPEARS ON THE AGENCY'S NOTICE TO YOU):<br>(CHOOSE ONE)<br>Since approximately I have received several phone calls andcontent from you<br>concerning an overdue account with the above-named creditor.<br>(OR)<br>On (date) I received written notice of the claimed debt, a copy of which is attached.<br>This is to give you notice to cease all contact with me or anyone else except the creditor about this<br>claimed debt. Accordingly, under 15 U.S.C. Sec. 1692c, this is my formal notice to you to cease all further<br>ccommunications with me. If you must contact me, please do so in writing and not by telephone.<br>I look forward to your acknowledgement that you have received this notice by [insert a date that is two<br>weeks from the date of thiscontent.<br>Sincerely,<br>{client_signature}<br>",
    
   },
   {
     id:95,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{client_previous_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>{creditor_phone}<br>{curr_date}<br>Re: Account # {account_number}<br>To Whom It May Concem,<br>You are hereby notified under provisions of Public Laws 95-109 and 99-361, also known as the Fair Debt<br>Collection Practices Act. that your services are no longer desired.<br>Immediately cease and desist all attempts to collect the above debt. Failure to comply with this law will<br>result in my immediately filing a complaint with the Federal Trade Commission and the Attorney General of<br>[your state here]. Civil and criminal claims will also be pursued against you and your company.<br>Let thiscontentalso serve as your waming that I may utilize telephone recording devices in order to<br>document any telephone conversations that we may have in the future.<br>Furthermore, if any negative information is placed on my credit bureau reports by your agency after receipt<br>of this notice, this will cause me to file suit against you and your organization, both personally and<br>corporately, to seek any and all legal remedies available to me by law.<br>It is my policy neither to recognize nor deal with collection agencies, and I will only settle this account with<br>the original creditor.<br>Sincerely,<br>{client_signature}<br>",
    
   },
   {
     id:96,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{client_previous_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>{creditor_phone}<br>{curr_date}<br>Re: Account # {account_number}<br>To Whom It May Concem,<br>Pursuant to my rights under federal debt collection laws, I am requesting that you cease and desist<br>communication with me, as well as my family, friends or my employer, in relation to this or any other<br>alleged debts you claim I owe.<br>You are hereby notified that if you do not comply with this request, I will immediately file a complaint with<br>the Federal Trade Commission and the Attorney General of [your state here]. Civil and criminal claims will<br>also be pursued.<br>Sincerely,<br>{client_signature}<br>",
    
   },
   {
     id:97,
        content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>Name(s) on account: Test Test test<br>Account number: {account_number}<br>Date loan/debt incurred: (DATE)<br>Original loan/debt amount: (ORIGINAL AMOUNT OF LOAN/DEBT)<br>Amount past due: (AMOUNT CURRENTLY PAST DUE)<br>Re: Collection agency: {creditor_name}<br>To Whom It May Concem:<br>I have been unable to pay the full amount of the loan/debt noted above for the following reason(s):<br>(ENTER REASONS HERE)<br>Although I have an outstanding debt, I have the right to be treated by a collection agency with dignity and<br>respect The collection agency you've hired (as noted above), however, has engaged in the following<br>practices which violate the federal Fair Debt Collection Practices Act:<br>(ENTER COLLECTION AGENCY MISCONDUCT HERE)<br>I am willing to forego the legal remedies I have available, including a lawsuit in small claims court seeking<br>punitive damages against you and the agency, in exchange for your written promise to permanently cease<br>all efforts to collect this debt and remove all negative entries regarding this debt from my credit file. I<br>expect to hear from you immediately.<br>Sincerely.<br>{client_signature}",
     
   },
   {
     id:98,
   content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: Debtor's Settiement<br>Re: Account number: {account_number}<br>To Whom It May Concem:<br>I understand that I owe a balance to your company. Thiscontentis an offer to seftle the debt for less<br>because of my inability to pay the entire balance. Because of dire financial circumstances, [overwhelming<br>debt, loss of job, insurance settiement with limited funds, considering bankruptcy, borrowing the money,<br>iliness, loss of family member with income, etc. List your reason here as to why you are offering to pay<br>less.] I am only able to pay a portion of this debt.<br>I recognize you may be motivated as well, because of the age of the debt and my financial crisis. Dedlining<br>to work with me will only make matters worse for both of us.<br>You are claiming the amount owed on the account is $_ . Please accept my good faith offer to<br>settle this account under these following conditions ONLY:<br>The parties involved agree to settle the account in full for the sum of $_ and this amount is<br>accepted as complete and final payment on said debt. Full discharge and settlement of all monies due will<br>be created, provided that the amount agreed upon shall be paid as follows:<br>Payment terms: how debt will be paid, (i.e., three payments of $250.00 to be paid monthly on the 1st of<br>each month, 8 payments of $200.00 on the 1st of each month after execution of this agreement, etc.)<br>Payment address: where you will send payment each month.<br>Other terms: list specific arangements made, such as, creditor agrees to freeze the account without any<br>additional fees or interest added to the balance etc.<br>Credit reporting: list all account status terms you are requesting such as “paid in full\", \"deleted”, \"settied in<br>fulr’, \"settled for less”, etc.<br>Governing states: This agreement shall be binding under the laws of [list your state and the creditor’s<br>state].<br>If your office is in agreement with this settiement, please reply with confirmation on your company\contentead and signed by an individual with the authority to accept such offers. Time is of the essence<br>because of my financial situation so please reply as soon as possible.<br>Kind regards,<br>{client_signature}<br>",
       
   },
   {
     id:99,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>Altn: Atin: Settiement Dept.<br>{curr_date}<br>Re: Debtor's Settlement Offer for Account Number: {account_number}<br>Dear Settiement Dept.<br>This is a settiement offer for {client_first_name} {client_last_name}, (Debtor) concerning a debt owed to<br>(Creditor), who claims the amount to be owed on Account Number:<br>{account_number} is S(AMOUNT).<br>Please accept this offer to settie this account under the following conditions:<br>The parties agree to settle the account in full for the sum of $(AMOUNT) and this amount is accepted as<br>full and total payment on said debt provided the following is met.<br>. {client_first_name} {client_last_name} will pay cashiers check of S(AMOUNT) if the debt is<br>considered paid in full and reported as such to the credit reporting agencies.<br>. The creditor agrees to freeze the account without any additional fees or interest being added to the<br>balance, provided debtor fulfills the agreed upon settlement obligations.<br>. The account is marked: (list status terms you are requesting such as “paid in full\", “settled in full\",<br>“Paid as agreed\", “settled for less”, “deleted” etc.)<br>This agreement shall be governed under the laws of (STATE), and shall be binding. If the above terms are<br>acceptable to (CREDITOR), please respond in writing, on your companycontentead, acknowledging your<br>acceptance and the terms as you agree to them.<br>As soon as I receive your acceptance of this offer, I will express mail a cashiers’ check.<br>Creditor name<br>Creditor: Title:<br>I agree to the terms listed above:  Yes,  No_<br>Creditor's Authorized Signature     Date<br>",
         
     
   },
   {
     id:100,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>Re: Account Number: {account_number}.<br>Dear {creditor_name},<br>This is to confirm our conversation on as to the offer of the above stated account. As<br>discussed, i will pay your company the amount of $_ as payment in full for the final satisfaction of<br>this account.<br>Upon receipt of the above payment, your company has agreed to change the entry on my credit reports<br>from to (list status terms you are requesting, such as “paid in full’, “settied in<br>fulr, \"Paid as agreed\", “settied for less”, “deleted\" etc.) .<br>If you agree with these terms, please acknowledge with your signature and retum it to me. You agree the<br>terms herein are confidential and you have the authority to make such decisions. No payment will be made<br>without written confirmation.<br>Upon receipt of this signed acknowledgment, I will immediately mail you funds priority mail. This is not a<br>renewed promise to pay but rather a restricted offer only. If no terms can be met, no new arrangements will<br>be made and the offer will be void.<br>Name of Creditor<br>Creditor's Authorized Signature_________Date<br>Name Of Creditor's Authorized Representative<br>",
    
   },
   {
     id:101,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: Debtor’s Settlement Offer for Account Number: {account_number}<br>To Whom It May Concem,<br>I am aware that I owe a balance to your company. Thiscontentis an offer to settle the debt for less because<br>of my inability to pay the full balance due to financial circumstances, because of. (LIST HARDSHIPS HERE), I am only able to pay a portion of this debt.<br>I realize you may be motivated as well, because of the age of the debt and my financial crisis. Refusing to<br>work with me will only make matters worse for both of us.<br>You claim the amount owed on the accountis $____.<br>Please accept this offer to settle this account ONLY under the following conditions:<br>The parties involved agree to settle the account in full for the sum of §_ and this amount is<br>accepted as full and final payment on said debt. Complete discharge and settiement of all monies due will<br>be created, provided that the amount agreed upon shall be paid in the following manner:<br>Payment terms: (i.e., 10 payments of $XXX on the 1st of each month after the execution of this<br>agreement, 3 payments of $XXX to be paid monthly on the 1st of each month, I lump sum of $XXXX, efc)<br>Payment location: (ADDRESS TO SEND THE PAYMENTS<br>Other terms: (list additional arrangements made, such as, creditor agrees to freeze the account without<br>any additional fees or interest added to the balance, etc.) Credit reporting: (list status terms you are<br>requesting such as “paid in full’, “settled in full, \"Paid as agreed\", “settied for less”, “deleted” etc.)<br>This agreement shall be binding under the laws of (LIST YOUR STATE AND THE CREDITOR'S STATE)<br>If your office agrees to this settiement, please send back confirmation on your companycontentead and<br>signed by someone with the authority to accept such offers. Time is of the essence due to my present<br>financial situation so please reply as soon as possible.<br>Sincerely,<br>{client_signature}<br>",
     
   
   },
   {
     id:102,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>To: Judgment Creditor, {creditor_name}<br>From: Judgment Debtor, {client_first_name} {client_last_name}<br>Case number. (CASE NUMBER)<br>Judgment amount: (AMOUNT)<br>Date: {curr_date}<br>Dear Sir,<br>I am aware of the money due you and of the judgment placed against me for this money. I had every<br>intention of taking care of this prior to the entry of the judgment, but unfortunately time constraints ended<br>that chance.<br>Today I am writing to you so that we may put this matter behind us and settle out this judgment for good,<br>under a few conditions. This will save you time and money trying to collect the judgment and will help me<br>recover from your negative entry against me.<br>I have been offered an amount from a close family member to pay you S(AMOUNT) to settle the debt in full and have the judgment dismissed. <br>As the judgment creditor, you reserve the right to dismiss or vacate the judgment as well as entering it. If I pay you from this offercontentsaving you immense time, fees and paperwork, you can then file a simple paper with the courts dismissing the judgment.<br>With a dismissed judgment | can justify paying you. Upon your signed approval of this offer, | will forward<br>the full settlement to you immediately. I understand this offer is void if I do not send you $(AMOUNT) within<br>5-10 days of your signed confirmation.<br>If you agree to \"dismiss\"” the judgment upon full and final payment of S(AMOUNT), then please sign and<br>return this offer and acceptance.<br>Offer Accepted and Agreed,<br>Judgment Creditor Signature_____________ Date<br>Judgment Creditor Authorized Representative<br>On behalf of:<br>Judgment Creditor Company Name<br><br>",
     
     
     
   },
   {
     id:103,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: Dispute of Collections Action: Case # {account_number}.<br>[If a collection agency has sent written notice, your case number is likely in thecontent If you have not<br>received a written notice from the collection agency, tailor this line accordingly. For example, show the date<br>you were contacted by the collection agency and/or identify the creditor by name if you can.]<br>To [person whose name appears on agency's notice to you]<br>On [date] | was contacted by [name of person who called you] of your agency, who informed me that<br>[name of collection agency] is attempting to collect [amount of claimed debt]. This individual is collecting<br>on behalf of [name of creditor]. [OR] This individual would not tell me for whom you are supposed to be<br>collecting.<br>[OR]<br>On [date] | received a written notice of the claimed debt, a copy of which is attached.<br>This is to inform you that I dispute the debt because [insert reason for dispute, e.g. the agency has<br>mistaken you with someone else or the debt has been paid. Include copies, not originals, of any<br>correspondence that support your dispute]. I am hereby requesting that you confirm the fact that I owe this<br>debt as required by any applicable state and federal laws. Please contact the creditor to obtain verification.<br>In addition, under the provisions of state and federal Fair Debt Collection Practices Act (FDCPA), Fair<br>Credit Reporting Act (FCRA), and related consumer statutes, I am hereby instructing you to cease<br>collection of the debt while efforts are made to obtain verification. Until you resolve this error with the<br>creditor, you should neither contact me nor anyone else except the creditor about this collection.<br>Furthermore, any reporting of this matter to credit reporting agencies is premature. Until you have<br>investigated my dispute, you should not relay negative information to a credit reporting agency. If negative<br>information has already been reported, you must notify the agency to remove said report until the<br>investigative process is over so that my credit report remains accurate, or at the very least, my credit<br>report should be updated to reflect my dispute.<br>‘Your next contact with me should be to either notice that the creditor has failed to provide verification of the<br>debt and that the matter has been closed or that you believe that this debt is valid and are providing proof<br>of my responsibility. If the former, please confirm that I am not being held responsible for the debt in writing<br>and also that if the account has already been noted on my credit report, that you will contact the bureau(s)<br>in question to have the account removed. If the latter, I expect that you will provide me with an explanation<br>as to why you have decided not to remove this account from collections and a copy of all documents<br>relevant to the debt such as the application, bills, records of communications and payments, and any other<br>data that indicates my responsibility.<br>I am instructing you not to contact any third parties such as my employer, neighbors, friends or family<br>members. In addition, you may not contact me by phone at work or at my home about this collection<br>activity. Al future correspondence should be sent to me in writing.<br>[If you wish to still speak to a collector by phone, indicate the times when it is okay to contact you or note<br>the name, address, and phone number of your attorney, if you have retained one.]<br>Please acknowledge that you have received this notice by [Pick a date that is two weeks from date of\content.<br>Sincerely,<br>{client_signature}<br>",
       
   },
   {
     id:104,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: Account number: {account_number}<br>To Whom It May Concern:<br>Thiscontentis to formally advise you that I believe your company has violated several of my consumer<br>rights. Specifically, you failed to validate a debt at my request, which is a FDCPA violation and you<br>continued to report a disputed debt to the Credit Bureaus: another FCRA violation. Not only have you<br>ignored my prior requests for validation of debt (proof attached: receipt copies orcontentcopies) but you<br>continue to report this debt to the credit bureaus causing damage to my character.<br>Thiscontentwill again request that you follow the FDCPA and please provide the following validation of debt<br>request:<br>-Proof of your right to own/collect this alleged debt<br>-Balance claimed including all fees, interest and penalties<br>-Contract bearing my personal signature<br>As you may be aware, \"Estoppel by Silence” legally means that you had a duty to speak but failed to do so<br>therefore, that must mean you agree with me that this debt is false. I will use the Estoppel in my defense.<br>I expect to receive the proof requested above within 15 days of thiscontent Should you again ignore my<br>request for validation of debt I reserve the right to sue your company for violations of my consumer rights<br>as specified under both the FDCPA and the FCRA. I may also seek damages from you if warranted.<br>Kind regards,<br>{client_signature}<br>",
       
   },
   {
     id:105,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{curr_date}<br>Re: [Company] v. [Client's first and last name] [Account Number] Balance: $XXX<br>To Whom It May Concern,<br>Please be advised that I filed a voluntary petition pursuant to Chapter 7 of the Bankruptcy Code. The<br>bankruptcy case number is______________ and it was filed on______<br>with you listed as one of my creditors.<br>To my knowledge, have never had non-sufficient funds and I am not aware of any negative entries. Kindly<br>forward me a copy of my InformCreditorforBankruptcy record so that | may verify its accuracy.<br>Pursuant to 11 U.S.C. Section 362(a), you are automatically stayed by the filing of this petition from taking<br>any action to collect any debt from me or from enforcing any lien against me. A violation of the stay may be<br>actionable pursuant to 362(h) or as contempt of court and punishable accordingly.<br>Aftorney name:<br>Aftorney address:<br>Attorney phone number:<br>Kind regards,<br>{client_signature}<br>",
    
   },
   {
     id:106,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: Account number: (ENTER ACCOUNT NUMBER)<br>To Whom It May Concern:<br>Please cease and desist all collection activities you have begun or are considering to take against me. I plan on filing a petition in bankruptcy court in the coming months.<br>Sincerely yours,<br>{client_signature}<br>",
    
   },
   {
     id:107,
     content: "client_first_name; {client_lasi_name;<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: Account number / Debtor's name<br>To Whom It May Concern,<br>Please be advised that I have received yourcontentrequesting money for the above debt. Thiscontent sent<br>certified mail, receipt number_________is to formally advise you that I cannot pay this debt and<br>have no attachable income or assets to levy.<br>I believe that I am judgment proof and | can prove it if necessary in a court of law. Should you attempt to file suit against me I will provide the court with valid proof of my situation.<br>My circumstances are that | am judgment proof because<br>(list reasons:) I have no assets, no home or car (to attach), no income and no prospects and; I am<br>disabled, unemployed, on social security or welfare.<br>I understand the debt is due, however your repeated attempts to collect are causing me much stress and<br>therefore I must also ask you to cease and desist you (if the account is being pursued by a third party debt<br>collector). If my situation changes, I will contact you immediately.<br>Kind regards,<br>{client_signature}<br>",
    
   },
   {
     id:108,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: Account number: {account_number} - Request for Reduced Payments<br>To Whom It May Concern:<br>Due to my desperate financial situation, I am unable to make payments on my account as originally<br>agreed. My financial position is as follows:<br>(STATE REASON; FINANCIAL, MEDICAL, DISABILITY, UNEMPLOYED, ETC.)<br>I cannot work sufficient hours to meet my current expenses. My only sources of income are the following:<br>(LIST SOURCES OF INCOME)<br>I am familiar with the law and have been advised that I am \"judgment proof.” If I should file for bankruptcy,<br>I will claim all of my property as exempt. If you sue me and obtain judgment, you will not be able to collect<br>any of my property to satisfy the judgment.<br>Please cease all collection activities you have taken or are considering. While I will absolutely present you<br>with reasonable financial or medical information, I must avoid stress (including high-pressure collections<br>activity and lawsuits).<br>I promise to inform you immediately should my financial condition improve and I am able to resume<br>sending you normal payments.<br>Thank you for your consideration and understanding.<br>Sincerely yours,<br>{client_signature}",
      
   },
   {
     id:109,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{client_previous_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>{creditor_phone}<br>{curr_date}<br>Dear Collection Manager:<br>It has come to my attention, through my credit report, that you claim I owe a debt to your agency. I can<br>save us both some effort and time by settling the debt out.<br>Here below is my offer. This is not a renewed promise to pay, nor does it constitute any agreement unless<br>you sign and return it.<br>Please Note that I have not yet agreed that this debt is indeed mine and I have the option to seek<br>additional proof of this debt from your agency.<br>Because you hold all the rights to report the debt to the credit bureaus as you see fit, you can certainly<br>change that listing at any time as the source reporting the debt.<br>I have no doubt that you are aware of my right to dispute this debt and request full proof of obligation.<br>Paying this unverified debt to you has little value to me if we cannot mutually agree that you will report the<br>debt as outlined below.<br>While I realize that your function is to collect debts as a collection agent, I am also aware that a paid<br>collection would not be favorable on my report. That being said, I have determined, through the bureaus,<br>that you have the absolute right to report this debt as you see fit or not report it at all.<br>If you indicate that you are unable to remove the negative listing on my credit report, | will be forced to<br>‘cease communication and request full verification of the debt.<br>My goal is to arrange a term that is acceptable to us both, since this debt is \"questionable.”<br>My Offer: I will pay your company the amount of $xx as “payment in full for the full satisfaction of this<br>account.” Upon receipt of the above payment, your company will agree to change this entry on my credit<br>reports to “Paid” immediately. You further agree to remove any and all previous notations of delinguency.<br>If you approve and agree to these terms, please acknowledge with your signature and return thiscontentto<br>me. You agree these terms herein are confidential and that you have the authority to make such decisions.<br>No payment will be made without written confirmation.<br>Upon receipt of this signed acknowledgment, I will immediately mail you funds by priority mail. This is not a<br>renewed promise to pay but rather a restricted offer only. If no terms can be met, no new arrangements will<br>be made, and the offer will be withdrawn.<br>{client_first_name} {client_last_name}<br>{creditor_name}<br>Signature of company officer<br>Print Company Officer name<br>Date:<br>Sincerely,<br>Name<br>Address<br>Social security number<br>",
   
     
     
   },
   {
     id:110,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br><CREDITOR/FURNISHER ADDRESS><br>Dear Collection Manager:<br>It has come to my attention through the credit bureaus that you claim I owe a debt to your agency. While I<br>have never had the debt verified to me as legitimate by your agency, I may be willing to save us both some<br>time and effort by \"settling the debt out™ with restrictions.<br>I understand that you hold all the rights to report the debt to the credit bureaus as you see fit and you can<br>change that listing at any time, as the source owning the debt. I am sure you are aware of my right to<br>dispute this debt and to request full proof of the obligation as per the FDCPA. Paying this unverified debt<br>means little to me if we cannot mutually agree that you will report the debt as mentioned below.<br>‘While I realize that your purpose is to collect debts as a collection agent, I am also aware of what a paid<br>collection on my report would represent for me, which is not favorable. That being said, I know that you<br>have the absolute right to report this debt as you see fit or not report it at all. It is only unlawful to report<br>false information but you may remove a listing any time at your discretion.<br>Please do not attempt to continue contacting me outside of this offer or I will be forced to cease and desist<br>‘our communication and request full lengthy verification of the debt. My goal is to arrange a term<br>acceptable to both.<br>My financial resources are limited and I am trying to do what's right but I am realistic about my financial<br>ability. I will pay your company the amount of S(AMOUNT) as “payment in full” for this account. Upon<br>receipt of the above payment, your company has agreed to delete the item on my credit reports.<br>If you agree with these terms please acknowledge thiscontentwith your signature and return it to me. You<br>agree that the terms herein are confidential and that you have the authority to make such decisions. No payment will be made without written confirmation from you.<br>Upon receipt of this signed acknowledgment, I will immediately mail you a cashier's check by priority mail.<br>This is not a renewed promise to pay but rather a restricted offer only. If no terms can be met, no new<br>arrangements will be made and the offer will be void.<br>Name of collection agency<br>Signature of company officer:<br>",
         
     
   },
   {
     id:111,
        content: "{client_first_name} {client_last_name}<br>{client_address} <br>{client_previous_address}<br>{creditor_name}<br>{creditor_address} <br>{creditor_city} {creditor_state} {creditor_zip} <br>{creditor_phone}<br>{curr_date}<br>To Whom It May Concern,<br>Re: {account_number}<br>Thiscontentis an offer to amicably settle the above account It shall not be misconstrued as an<br>acknowiedgment of any liability for this debt in any form. <br>I will pay your company the amount of SXXXX as \"full settlement of this account <br>If you accept this agreement, I will send you a money order or certified cashiers check for this settiement<br>amount of $XXXX in exchange for a full deletion of all references regarding this account from my credit <br>reports and full satisfaction of the debt. This agreement is binding and will be void should you not fulfill <br>your end of this agreement. Furthermore, this debt will be deleted from my credit report at all three credit <br>bureaus, as well as any other bureaus that your company regularly reports to.<br>If you agree to the above, please acknowiedge with your signature and return a copy to me. Upon receipt<br>of your signed acknowledgment, I will promptly send you a money order or cashiers check in the amount I<br>have stated above. <br>Please note: This agreement is restricted. This is not a renewed promise to pay, but rather a restricted<br>settlement offer only. By not signing below, you agree that the debt has not been renewed nor have any<br>written agreements been exchanged.<br>I look forward to resolving this matter in a speedily manner.<br>{client_first_name} {client_last_name}<br>Creditor's Authorized Signature:<br>Date:<br>Name:<br>Title -<br>",
      
   },
   {
     id:112,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: {client_first_name} {client_last_name} , Account number {account_number}<br>To Whom It May Concern:<br>On (Date), | received a copy of my credit report from (Credit Bureau Name). That report lists my payments<br>1o you as being ‘delinquent.’<br>My financial problems are now behind me and | am in a position to pay off this debt. | can pay a lump sum<br>amount of $___________ or | can pay installments in the amount of $________ per month for _________months if<br>you will agree to one of the following:<br>() If | make a lump sum payment, you will agree to remove all negative information from my credit file<br>associated with the debt.<br>() If 1 agree to pay off the debt in monthly instaliments, you agree to 're-age’ my account - making the<br>current month the first repayment month and showing no late payments as long as | make the agreed<br>upon monthly payments.<br>If this offer is acceptable to you, please check and initial one of the above choices, sign your acceptance<br>below and return thiscontentto me in the enclosed envelope.<br>Thank you for your time and assistance<br>Sincerely yours,<br>{client_signature}<br>",
    
   },
   {
     id:113,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>(Name of Collection Agency)<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>To [person whose name appears on agency's notice to you]<br>Thank you for your recent inquiry. This is not a refusal to pay, but a notice that your claim is being<br>disputed. This is a request for validation made pursuant to the Fair Debt Collection Practices Act<br>Be advised that I am not requesting a \"verification” that you have my mailing address, I am requesting a<br>\"validation;” that is, competent evidence that I have some contractual obligation to pay you.<br>You should also be aware that sending unsubstantiated demands for payment through the United States<br>Mail System might constitute mail fraud under federal and state law. You may wish to consult with a<br>competent legal advisor before your next communication with me.<br>Your failure to satisfy this request within the requirements of the Fair Debt Collection Practices Act will be<br>construed as your absolute waiver of any and all claims against me, and your tacit agreement to<br>compensate me for costs and attorney fees.<br>Sincerely,<br>{client_signature}<br>",
    
   },
   {
     id:114,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>Re: Account Number: {account_number}. Balance to be paid: §_<br>Dear {creditor_name}<br>Per our agreement to settle the above mentioned debt, I am requesting that you sign this unilateral release<br>form. This form confirms that we both agreed to settie the debt listed above for the amount indicated.<br>Creditors/Agency Name:<br>We agree that to accept $_ as \"payment in full” for account number: {account_number}.<br>For: {client_first_name} {client_last_name}<br>We will accept this amount as full and final satisfaction and we will have no future claims against this<br>account or debtor. This Unilateral Release ensures that we understand we have accepted a settiement on<br>this debt and will not pursue the debtor later for any deficiency balance.<br>Creditor's Authorized Signature---------Date<br>Printed name of Creditors Authorized Rep.<br>Position or Title:<br>",
  
   },
   {
     id:115,
     content:`{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>RE: Validation Required<br>{curr_date}<br>Re: Account # {account_number}<br>To Whom It May Concern,<br>I dispute your claim and I am requesting validation from you pursuant to the Fair Debt Collection Practices<br>Act, 15 USC 16929 Sec. 809 (8) (FDCPA).<br>. Provide breakdown of fees including how you calculated what you claim I owe. 2 Provide a copy of<br>my signature on a confract or document that holds me responsible for this alleged debt.<br>. Cease any credit bureau reporting until debt has been validated by me as required under the<br>FCRA.<br>. Send me proof that you are licensed to collect debt in the my state.<br>. Send this information to my address listed above and accept thiscontentsent as my formal debt<br>validation request, which I am allowed under the FDCPA.<br>I will await your reply with above requested proof. Upon receiving it, I will correspond back with you.<br>Sincerely,<br>{client_signature}<br>`,
    
   },
   {
    id:116,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: Account number: {account_number}<br>To Whom It May Concern:<br>This certifiedcontent receipt number: XXXXXXXXXXXX is to formally advise you that I believe your<br>company has violated my consumer rights in the following ways.<br>Specifically you: [list all that apply]<br>- Failed to validate a debt at my request- FDCPA violation<br>- Continued to report a disputed debt to the CRA- FCRA violation<br>- Continued to attempt to collect a disputed debt- FDCPA violation<br>- Ignored my cease and desist- FDCPA violation<br>Not only have you ignored my prior requests for validation of debt (see enclosed copies of receiptscontent)<br>but you also continue to report this debt to the credit bureaus causing damage to my character. Thiscontentnwill again request that you follow guidelines of The Fair Debt Collection Practices Act (FDCPA), 15 U.S.C.<br>§ 1692 and please provide the following:<br>Validation of Debt Request<br>- Proof of your right to own/collect this alleged debt -Balance claimed including all fees, interest and<br>penalties<br>-Contract bearing my personal signature -License proof to collect debts in my state<br>As you certainly are aware, \"Admission by Silence” means that you had a legal duty to defend your<br>position but failed to do so and if my claims were untrue you would have been compelled to deny my<br>charges. I will use the Admission by Silence in my defense should I be summoned to court or take action<br>against you.<br>I expect to receive proof requested above, within 15 days of thiscontent Should you continue to ignore my<br>request for this validation of debt I reserve the right to sue your company for violations of my consumer<br>rights as indicated under both the FDCPA and the FCRA. I may also seek damages from you if warranted.<br>Kind regards,<br>{client_signature}<br>",
       
   },
   {
     id:117,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{client_previous_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>{creditor_phone}<br>{curr_date}<br>Re: Account # XXXXXXXX<br>To Whom It May Concern:<br>‘Your company is reporting the below referenced account on my credit report as a collection account.<br>{dispute_item_and_explanation}<br>I have disputed this item with the credit reporting agency and they reported you confirmed the account as<br>valid.<br>In a good faith effort to resolve the matter amicably, I must demand proof of this debt, specifically the<br>alleged contract or other instrument bearing my signature, as well as proof of your authority in this matter.<br>Absent such proof, you must correct any erroneous reports of this past debt as mine.<br>I am writing to request that you please provide the following information:<br>1. Please evidence your authorization under 15 USC 1692(e) and 15 USC 1692(f) in this alleged matter.<br>2. What is your authorization of law for your collection of information?<br>3. What is your authorization of law for your collection of this alleged debt?<br>4. Please evidence your authorization to do business or operate in this state.<br>5. Please evidence proof of the alleged debt, including the alleged contract or other instrument bearing my<br>signature.<br>6. Please provide a complete account history, including any charges added for collection activity.<br>You have thirty (30) days from receipt of this notice to respond. Failure to respond in writing, hand-signed,<br>and in a timely manner, will be considered a waiver to any and all of your claims in this matter, and will<br>entitie me to presume you placed this on my credit report(s) in error and that this matter is permanently<br>closed. Provide the proof, or correct the record and remove this invalid debt from all sources to which you<br>have reported it<br>For the purposes of 15 USC 1692 et seq, this Notice has the same effect as a dispute to the validity of the<br>alleged debt and a dispute to the validity of your claims. This Notice is an attempt to correct your records,<br>and any information received from you will be collected as evidence should further action be necessary.<br>This is a request for information only, and is not a statement, election, or waiver of status.<br>{client_first_name} {client_last_name} (DO NOT SIGN)<br><br>",
        
     
   },
   {
     id:118,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{curr_date}<br>To Whom It May Concern,<br>Thiscontentis a formal complaint that you are reporting inaccurate and incomplete credit information. I am<br>distressed that you have included the information below in my credit profile and that you have failed to<br>maintain reasonable procedures in your operations to assure maximum possible accuracy in the credit<br>reports you publish.<br>Credit reporting laws ensure that bureaus report only 100% accurate credit information. Every step must<br>be taken to assure the information reported is completely accurate and correct.<br>The following information therefore needs to be re-investigated:<br>{dispute_item_and_explanation}<br>I respectfully request to be provided proof of this alleged item, specifically the contract, note or other<br>instrument bearing my signature. Failing that, the item must be deleted from the report as soon as<br>possible:<br>The listed item is entirely inaccurate and incomplete, and as such represents a very serious error in your<br>reporting. Please delete this misleading information and supply a corrected credit profile to all creditors<br>‘who have received a copy within the last six months, or the last two years for employment purposes.<br>Additionally, please provide the name, address, and telephone number of each credit grantor or other<br>subscriber.<br>Under federal law, you have thirty (30) days to complete your re-investigation. Be advised that the<br>description of the procedure used to determine the accuracy and completeness of the information is<br>hereby requested as well, to be provided within fifteen (15) days of the completion of your re-investigation.<br>Sincerely,<br>{client_signature}",
     
   },
   {
     id:119,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: Acct # {account_number}<br>To Whom It May Concern:<br>I am sending thiscontentto you in response to the notice I received from you on (date ofcontent. Please be<br>advised that this is not a refusal to pay, but a notice sent pursuant to the Fair Debt Collection Practices<br>Act, 15 USC 1692g Sec. 809 (b) that your claim is disputed and validation is requested.<br>This is NOT a request for ‘verification’ or proof of my mailing address, but a request for 'VALIDATION'<br>made pursuant to the above named Title and Section. I respectfully request that your office provide me<br>with factual evidence that I have any legal obligation to pay you.<br>Please provide me with the following:<br>-What the money you say I owe is for;<br>-Explain and show me how you calculated what you say I owe;<br>-Provide me with copies of any papers that show I agreed to pay what you say I owe;<br>-Provide a verification or copy of any judgment if applicable;<br>-Identify the original creditor;<br>-Prove the Statute of Limitations has not expired on this account,<br>-Show me that you are licensed to collect in my state; and<br>-Provide me with your license numbers and Registered Agent.<br>If your offices have reported invalidated information to any of the three major Credit Bureau's (Equifax,<br>Experian or TransUnion), said action might constitute fraud under both Federal and State Laws. Due to<br>this fact, if any negative mark is found on any of my credit reports by your company or the company that<br>you represent I will not hesitate to bring legal action against you for the following:<br>-Violation of the Fair Credit Reporting Act<br>-Violation of the Fair Debt Collection Practices Act<br>-Defamation of Character<br>If your offices are able to provide the proper documentation as requested, I will require at least 30 days to<br>investigate this information and during such time all collection activity must cease and desist.<br>Also during this validation period, if any action is taken which could be considered detrimental to any of my<br>credit reports, I will consult with my legal counsel. This includes any information to a credit reporting<br>repository that could be inaccurate or invalidated or verifying an account as accurate when in fact there is<br>no provided proof that it is.<br>If your offices fail to respond to this validation request within 30 days from the date of your receipt, all<br>references to this account must be deleted and completely removed from my credit file and a copy of such<br>deletion request shall be sent to me immediately.<br>I would also like to request, in writing, that no telephone contact be made by your offices to my home or to<br>my place of employment. If your offices attempt telephone communication with me, including but not<br>limited to computer generated calls or correspondence sent to any third parties, it will be considered<br>harassment and I will have no choice but to file suit. All future communications with me MUST be done in<br>writing and sent to the address noted in thiscontent<br>This is an attempt to correct your records, any information obtained shall be used for that purpose.<br>Kind regards,<br>{client_signature}<br>",
    
   
   },
   {
     id:120,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: {account_number}<br>To Whom It May Concern,<br>I am in receipt of yourcontentclaiming that I owe your company for a debt. According to the Federal Fair<br>Debt Collection Practices Act, I have a right to have the alleged debt validated by you.<br>I have to date, received no proof that I owe your company any debt and I am requesting that you forward<br>to me full and proper documentation as evidence of this alleged debt. As per the FDCPA, it is a violation<br>for any debt collector to pursue collection activity on an account without notifying the debtor in writing<br>within 5 days after any communication. Additionally I am allowed 30 days to dispute the validity of the<br>debt. If you are unable to provide me with proper proof then you must stop attempting to collect this<br>alleged debt.<br>If you continue to claim I owe a debt that you cannot confirm with proof then you will be in direct violation<br>of the FDCPA. Additionally, any attempt on your part to report this alleged debt to my credit reports will be<br>a violation of the Fair Credit Reporting Act.<br>Please forward your documentation to me upon receipt of this certifiedcontent Please note that proper<br>documentation is not a print out or bill from you but rather actual proof of the debt's existence.<br>Sincerely,<br>{client_signature}<br>",
    
   },
   {
     id:121,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{bureau_address}<br>{curr_date}<br>To Whom It May Concern,<br>Thiscontentis a formal complaint that you are reporting inaccurate and incomplete credit information.<br>I am distressed that you have included the information below in my credit profile and that you have failed<br>to maintain reasonable procedures in your operations to assure maximum possible accuracy in the credit<br>reports you publish. Credit reporting laws ensure that bureaus report only 100% accurate credit<br>information. Every step must be taken to assure the information reported is completely accurate and<br>correct. The following information therefore needs to be re-investigated.<br>I respectfully request to be provided proof of this alleged item, specifically the contract, note or other<br>instrument bearing my signature.<br>Failing that, the item must be deleted from the report as soon as possible. The listed item is entirely<br>inaccurate and incomplete, and as such represents a very serious error in your reporting. Please delete<br>this misleading information and supply a corrected credit profile to all creditors who have received a copy<br>within the last six months, or the last two years for employment purposes.<br>Additionally, please provide the name, address, and telephone number of each credit grantor or other<br>subscriber.<br>Under federal law, you have thirty (30) days to complete your re-investigation. Be advised that the<br>description of the procedure used to determine the accuracy and completeness of the information is<br>hereby requested as well, to be provided within fifteen (15) days of the completion of your re-investigation.<br>Sincerely,<br>{client_signature}<br>",
    
   },
   {
     id:122,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: Account number: {account_number}<br>To Whom It May Concern:<br>This certifiedcontent receipt number__________ is to formally advise you that I believe your company has violated several of my consumer rights. Specifically:<br>You failed to validate a debt at my request, which is a FDCPA violation and you continued to report a<br>disputed debt to the Credit Bureaus: another FCRA violation<br>Not only have you ignored my prior requests for validation of debt (proof attached: receipt copies orcontentncopies) but you continue to report this debt to the credit bureaus causing damage to my character. This\contentwill again request that you follow the FDCPA and please provide the following:<br>Validation of Debt Request<br>-Proof of your right to own/collect this alleged debt<br>-Balance claimed including all fees, interest and penalties<br>-Contract bearing my personal signature<br>As you may be aware, \"Estoppel by Silence” legally means that you had a duty to speak but failed to do so<br>therefore, that must mean you agree with me that this debt is false.I will use the Estoppel in my defense.<br>I expect to receive the proof requested above within 15 days of thiscontent Should you again ignore my<br>request for validation of debt I reserve the right to sue your company for violations of my consumer rights<br>as specified under both the FDCPA and the FCRA. I may also seek damages from you if waranted.<br>Kind regards,<br>{client_signature}",
     
   },
   {
     id:123,
         content: "{client_first_name} {client_last_name}<br>{client_address}<br>{client_previous_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>{creditor_phone}<br>{curr_date}<br>Re: Account # {account_number}<br>To Whom It May Concern,<br>I dispute your claims in their entirety and I am requesting validation from you pursuant to the Fair Debt Collection Practices Act, 15 USC 1692g Sec. 809 (8) (FDCPA).<br>Sincerely,<br>{client_signature}<br>",
    
   },
   {
     id:124,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{client_previous_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>{creditor_phone}<br>{curr_date}<br>Certified Mail No.:<br>Re: Inquiry dated __: account no. {account_number}<br>To Whom It May Concern,<br>Thank you for your inquiry. This is not a refusal to pay, but a notice that I am disputing your claim and I am<br>requesting validation made pursuant to the Fair Debt Collection Practices Act.<br>Please complete and return the attached disclosure request form.<br>Understand that I am not requesting a “verification” that you have my mailing address, I am requesting a<br>“validation of debt.” i.e.. competent and valid evidence that I have some contractual obligation to pay you.<br>You may be aware that sending unsubstantiated demands for payment through the United States Mail<br>System might constitute mail fraud under federal and state law. As such, you may wish to consult with a<br>legal adviser before your next communication with me.<br>Your failure to satisfy this request within the requirements stated in the Fair Debt Collection Practices Act<br>will be construed as your absolute waiver of any and all claims against me, and your tacit agreement to<br>compensate me for costs and attorney fees.<br>{client_first_name} {client_ast_name} (DO NOT SIGN)<br>CREDITOR DISCLOSURE STATEMENT<br>Name and Address of Collector (assignee):. -<br>Name and Address of Debtor: -<br>AccountNumber(s)_____ <br>What are the terms of assignment for this account? You may attach a facsimile of any records relating to<br>such terms.<br>Have any insurance claims been made by any creditor or assignee regarding this account? Yes / no<br>Has the purported balanced of this account been used in any tax deduction claim? Yes / no<br>Please list the exact products or/or services sold by the collector to the debtor and the dollar amount of<br>each:<br>Upon failure or refusal of collector to validate this collection action, collector agrees to waive all claims against the debtor named herein and pay debtor for all costs and attorney fees involved in defending this<br>Authorized signature for Collector Date<br>Printed name<br>Please return this completed form and attach all assignment or other transfer agreements that would establish your right to collect this debt.<br>Your claim cannot be considered if any portion of this form is not completed and returned with the required documents. This is a request for validation made pursuant to the Fair Debt Collection Practices Act. If you do not respond as required by this law, your claim will not be considered and you may be liable for<br>damages for continued collection efforts.<br>",
    
     
     
   },
   {
     id:125,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{client_previous_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>{creditor_phone}<br>{curr_date}<br>To Whom It May Concern:<br>Thiscontentis sent to you in response to a notice sent to me on (Date) or in response to a listing on my<br>credit report (CHOOSE THE ONE APPROPRIATE FOR YOUR SPECIFIC SITUATION). Be advised that<br>this is not a refusal to pay, but a notice sent pursuant to the Fair Debt Collection Practices Act, 15 USC<br>16929 Sec. 809 (8), stating your claim is disputed and validation is requested.<br>This is NOT a request for “verification™ or proof of my mailing address, but a request for VALIDATION<br>made pursuant to the above named Title and Section. I respectfully request your offices provide me with<br>competent evidence that I have any legal obligation to pay you.<br>At this time I will also inform you that if your offices have reported invalidated information to any of the 3<br>major Credit Bureaus (Equifax, Experian or TransUnion) this action might constitute fraud under both<br>Federal and State Laws. Due to this fact, if any negative mark is found on any of my credit reports by your<br>company or the company that you represent, I will not hesitate in bringing legal action against you and<br>your client for the following:<br>Violation of the Fair Credit Reporting Act<br>Violation of the Fair Debt Collection Practices Act<br>Defamation of Character<br>If your offices are able to provide the proper documentation as requested in the following Declaration, I will<br>require at least 30 days to investigate this information, during which time all collection activity must cease<br>and desist. Also during this validation period, if any action is taken which could be considered detrimental<br>to any of my credit reports, I will consult with my legal counsel for suit. This includes any listing of any<br>information to a credit reporting repository that could be inaccurate or invalidated. If your office fails to<br>respond to this validation request within 30 days from the date of your receipt, all references to this<br>account must be deleted and completely removed from my credit file and a copy of such deletion request<br>shall be sent to me immediately.<br>(OPTIONAL CEASE & DESIST) I would also like to request, in writing, that no further telephone contact be<br>made by your offices to my home or to my place of employment. If your offices continue to attempt<br>telephone communication with me it will be considered harassment and I will have no choice but to file<br>suit. All future communications with me MUST be done in writing and sent to the address noted in this\content<br>It would be advisable that you and your client assure that your records are in order before I am forced to<br>take legal action.<br>Best Regards,<br>{client_first_name} {client_last_name} (DO NOT SIGN)<br>CREDITOR/DEBT COLLECTOR DECLARATION<br>Please provide all of the following information and submit the appropriate forms and paperwork within 30<br>days from the date of your receipt of this request for validation.<br>Name and Address of Alleged Creditor:<br>Name on File of Alleged Debtor:<br>Alleged Account #<br>Address on File for Alleged Debtor-<br>Amount of alleged debt:<br>Date that this alleged debt became payable:<br>Date of original charge off or delinquency:<br>Was this debt assigned to debt collector or purchased?<br>Amount paid if debt was purchased:<br>Commission for debt collector if collection efforts are successful:<br>Please attach a copy of the agreement with your client that grants (Collection Agency Name) the authority<br>to collect this alleged debt.<br>Also, please attach a copy of any signed agreement debtor has made with debt collector, or other<br>verifiable proof debtor has a contractual obligation to pay debt collector.<br>-<br>Please attach a copy of any agreement that bears the signature of debtor, wherein he/she agreed to pay<br>creditor.<br>Please attach copies of all statements while this account was open.<br>Have any insurance claims been made by any creditor regarding this account? YES or NO (circle one)<br>Have any judgments been obtained by any creditor regarding this account? YES or NO (circle one)<br>Please provide the name and address of the bonding agent for (Name Of Debt Collector), in case legal<br>action becomes necessary:<br>Authorized Signature For Creditor Date<br>Print Name<br>‘You must return this completed form along with copies of all requested information, assignments or other<br>transfer agreements, which would establish your right to collect this alleged debt within 30 days from the<br>date of your receipt of thiscontent Your claim cannot and WILL NOT be considered if any portion of this form<br>is not completed and returned with copies of all requested documents. This is a request for validation<br>made pursuant to the Fair Debt Collection Practices Act. Please allow 30 days for processing after I<br>receive this information back.<br>",
    
   },
   {
     id:126,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{client_previous_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>{creditor_phone}<br>{curr_date}<br>To Whom It May Concern:<br>Re: Acct # XXXXK-XXXX-XXXX-XXXX<br>To Whom It May Concern:<br>Thiscontentis sent to you in response to a notice sent to me on (Date) or in response to a listing on my<br>credit report (CHOOSE THE ONE APPROPRIATE FOR YOUR SPECIFIC SITUATION). This is not a<br>refusal to pay, but a notice that your claim is disputed.<br>Pursuant to the Fair Debt Collection Practices Act, 15 USC 16929 Sec. 809 (8) (FDCPA), I have the right<br>to request validation of the debt you say I owe you. I am requesting proof that I am indeed the party you<br>are asking to pay this debt, and there is some contractual obligation which is binding on me to pay this<br>debt.<br>Your attorney or legal staff will agree that compliance with this request is required under State and Federal<br>Statutes.<br>In addition to the questionnaire below, please attach copies of:<br>Agreement with your client that grants you the authority to collect on this alleged debt, or proof of acquisition by purchase or assignment.<br>Agreement that bears the signature of the alleged debtor wherein he or she agreed to pay the creditor.<br>Also, please be advised thiscontentis not only a formal dispute, but a request for you to cease and desist<br>any and all collection activities.<br>I require compliance with the terms and conditions of thiscontentwithin 30 days. or a complete withdrawal,<br>in writing, of any claim.<br>In the event of noncompliance, I reserve the right to file charges and/or complaints with appropriate<br>County, State & Federal authorities .the BBB and State Bar associations for violations of the FDCPA,<br>FCRA, and Federal and State statutes on fraudulent extortion .<br>I also hereby reserve my right to take private civil action against you to recover damages.<br>Sincerely,<br>{client_first_name} {client_last_name} (DO NOT SIGN)<br>DEBT VALIDATION FORM<br>Please provide all of the following information and submit the appropriate forms and paperwork within 30<br>days from the date of your receipt of this request for validation.<br>Account #:<br>Original Creditor's Name:<br>Name of Debtor:<br>Address of Debtor-<br>Balance of Account:<br>Date you acquired this debt:<br>This Debt was: assigned __purchased___<br>Please indicate the credit bureaus which you have reported this account to:<br>Experian<br>Equifax:<br>TransUnion:<br>Other:<br>",
    
     
     
   },
   {
     id:127,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city}, {creditor_state} {creditor_zip}<br>{curr_date}<br>Amount of debt: Date of Service: Provider of Service:<br>To Whom It May Concern,<br>I received a bill from you on [insert date] and as allowable under the Fair Debt Collections Practices Act, I<br>‘am requesting validation of the alleged debt I am aware that there is a debt from [name of doctor, hospital,<br>clinic, etc ] but I am unaware of the amount due and your bill does not include a detailed breakdown of any<br>fees.<br>Furthermore, I am allowed under the HIPAA law (Health Insurance Portability and Accountability Act of<br>1996) to protect my privacy and medical records from third parties. I do not recall giving permission to<br>[name of provider] for them to release my medical information to a third party. I understand that the HIPAA<br>does allow for limited information about me but any details may only be revealed with the patients<br>authorization, therefore my request is twofold and as follows:<br>Validation of Debt and HIPAA authorization<br>- Please provide a breakdown of fees including any and all collection costs and medical charges<br>- Please provide a copy of my signature with the provider of service to release my medical information to<br>you<br>- Immediately cease any credit bureau reporting until debt has been validated by me<br>Please send this information to my address listed above and accept thiscontent sent certified mail, as my<br>formal debt validation request, of which I am allowed under the FDCPA.<br>Please note that withholding the information you received from any medical provider in an attempt to be<br>HIPAA compliant will be a violation of the FDCPA because you will be deceiving me after my written<br>request. I am requesting full documentation of what you received from the provider of service in<br>connection with this alleged debt.<br>Furthermore, any reporting of this debt to the credit bureaus prior to allowing me to validate it may be a<br>violation of the Fair Credit Reporting Act, which can allow me to seek damages from a collection agent.<br>I await your reply with the above requested proof. Upon receiving it, I will correspond back with you by<br>certified mail.<br>Kind regards,<br>{client_signature}<br>",
       
   },
   {
     id:128,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>{curr_date}<br>RE: Account number {account_number}<br>To Whom It May Concern,<br>Please be advised that you are attempting to collect on an expired debt. I am invoking my right to cease<br>you, based on factual law that this debt in question is legally expired under the Statute of Limitations.<br>Accordingly, I am reguesting that you do not attempt to collect this expired debt, and should you seek legal<br>recourse I will invoke my right of the expired statute as a valid defense.<br>Additionally any attempts to harm my credit rating by updating or changing dates after you have been<br>informed that the debt is expired, are a direct violation of the FDCPA.<br>Any abuse to my credit rating on your part will be met with all recourse available to me.<br>I am aware of how long items may remain on my credit reports and any attempt to extend the reporting<br>time will be investigated by me, and reported to the American Collectors Association and my State<br>Attorney General.<br>I am completely aware of how long the debt is legally collectable and how long it is legally reportable. I<br>realize a debt is allowed to be reported to my credit for 7 years, and my research has shown me that often<br>a collection agency will reset the date of original charge off to the date they purchased it, thus trying to<br>extend the reporting time in an attempt to force a consumer into paying it. I am informing you of this<br>knowledge so that you may do the right thing.<br>I have no intention of renewing the expired statute of limitations, so please stop wasting your time<br>contacting me.<br>I expect this will be the last time I hear from you.<br>Sincerely,<br>{client_signature}<br>",
       
   },
   {
     id:129,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: {account_number}<br>To Whom It May Concern,<br>Please be apprised that you are in direct violation of the Fair Debt Collections Practices Act. In my opinion<br>you have violated at least three sections of this act by:<br>. Failing to validate a debt as allowed to the debtor under 15 USC 1692 (g) Section 809 (b)<br>. Communicating with a debtor after receiving a cease and desist certified mail under 15 USC 1692<br>(g) Section 805 (c)<br>. Harassment of alleged debtor under the \"abuse & harassment” subsection of the statute, USC 1692<br>(g) Section 806 (5)<br>I have complete and thorough records of your violations and I am prepared to protect myself and my rights<br>from unscrupulous collection agencies.<br>In (EXACT DATE), I sent by certified mail (receipt number: (CERTIFIED MAIL RECEIPT NUMBER), a<br>request for your office to provide me with proof and evidence of the debt you alleged I owed, and I did so<br>within 30 days of receiving your first notice. In that samecontentI also included my cease and desist<br>instructions. <br>After verified delivery of mycontent(via your office’s signature), you proceeded to mail a simple bill which is<br>NOT considered a “validation of debt” by any means. You may wish to familiarize yourself with what is<br>required when validating a debt.<br>Your office also proceeded to contact me by phone after the delivery and acceptance of my certifiedcontent<br>Contacting a person after a cease and desist can lead to serious trouble for your agency including<br>damages of up to $1000.00 per incident.<br>I highly doubt that this S(ENTER AMOUNT OF DEBT) debt is worth your agency’s license and the fees<br>and penalties for violations of the FDCPA.<br>There is no question that you willfully violated my rights and that I could bring charges against you<br>immediately. However, I am assuming this has been a terrible mistake on your part and that you will take<br>appropriate steps to enlighten yourself and your staff of such dangerous actions.<br>I will also be checking my credit report to see if you have willfully reported an unverified and disputable<br>debt to the credit bureaus. If so, that will be a violation of the Fair Credit Reporting Act. I will state again in<br>this certified mailing that you have failed to verify the debt as accurate, you have provided no proof of this<br>alleged debt, and I must remind you again to not contact me in any way via phone or mail in reference to<br>collecting this debt.<br>If I receive anything other than absolute proof from you, provided by the original creditor, I will assume you<br>are harassing me and ignoring my cease and desist, and I will take action against you for these continued<br>violations and abuse.<br>Sincerely,<br>{client_signature}<br>",
       
   },
   {
     id:130,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: {account_number}<br>To Whom It May Concern,<br>Please be advised that you are attempting to collect on an expired debt. I am invoking my right to cease<br>you, based on factual law that this debt in question is legally expired under the Statute of Limitations.<br>Accordingly, I am requesting that you do not attempt to collect this expired debt, and should you seek legal<br>recourse I will invoke my right of the expired statute as a valid defense.<br>Additionally any attempts to harm my credit history and rating by updating or changing dates after you<br>have been informed that the debt is expired, is a direct violation of the FDCPA. Any abuse to my credit<br>rating on your part will be met with all recourse available to me by the law.<br>I am aware of how long items may remain on my credit reports and any attempt to extend the reporting<br>time will be investigated by me, and reported to my State Attorney General and the American Collectors<br>Association.<br>I am completely aware of how long the debt may be legally collectable and how long it may be legally<br>reportable. I realize a debt is allowed to be reported on my credit history for no longer than 7 years, and<br>my research has shown me that often a collection agency will reset the date of original charge off to the<br>date they purchased it, thus trying to extend the reporting time in an attempt to force a consumer into<br>paying it. I am informing you of this knowledge so that you may do the right thing.<br>I have no intentions of renewing the expired statute of limitations, so please stop wasting your time<br>contacting me. I expect this will be the last time I hear from you.<br>Sincerely,<br>{client_signature}<br>",
      
   },
   {
     id:131,
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{creditor_name}<br>{creditor_address}<br>{creditor_city} {creditor_state} {creditor_zip}<br>{curr_date}<br>Re: {account_number}<br>To Whom It May Concern,<br>Please be advised that you are attempting to collect on an expired debt. I am invoking my right to cease<br>you, based on factual law that this debt in question is legally expired under the Statute of Limitations.<br>Accordingly, I am requesting that you do not attempt to collect this expired debt, and should you seek legal<br>recourse I will invoke my right of the expired statute as a valid defense.<br>Additionally any attempts to harm my credit history and rating by updating or changing dates after you<br>have been informed that the debt is expired, is a direct violation of the FDCPA. Any abuse to my credit<br>rating on your part will be met with all recourse available to me by the law.<br>I am aware of how long items may remain on my credit reports and any attempt to extend the reporting<br>time will be investigated by me, and reported to my State Attorney General and the American Collectors<br>Association.<br>I am completely aware of how long the debt may be legally collectable and how long it may be legally<br>reportable. I realize a debt is allowed to be reported on my credit history for no longer than 7 years, and<br>my research has shown me that often a collection agency will reset the date of original charge off to the<br>date they purchased it, thus trying to extend the reporting time in an attempt to force a consumer into<br>paying it. I am informing you of this knowledge so that you may do the right thing.<br>I have no intentions of renewing the expired statute of limitations, so please stop wasting your time<br>contacting me. I expect this will be the last time I hear from you.<br>Sincerely,<br>{client_signature}<br>",
       
   },
   {
     id:132,
 
         content: "{client_first_name} {client_last_name}<br>{client_address}<br>{curr_date}<br>ChexSystems<br>Attn: Consumer Relations<br>7805 Hudson Road, Suite 100<br>Woodbury, MN 55125<br>By phone at 800-428-9623 or fax at 602-659-2197<br>To Whom It May Concern,<br>When I recently tried to open a checking account, I was informed that I had negative entries in my<br>ChexSystems record.<br>To my knowledge, have never had non-sufficient funds and I am not aware of any negative entries. Kindly<br>forward me a copy of my ChexSystems record so that I may verify its accuracy.<br>Kind regards,<br>{client_signature}<br>",
    
   },
   {
     id:133,
    
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{curr_date}<br>ChexSystems<br>Aftn: Consumer Relations<br>7805 Hudson Road, Suite 100<br>Woodbury, MN 55125<br>To Whom It May Concern,<br>I received a copy of my ChexSystems record and I have found several inaccuracies in the report.<br>{dispute_item_and_explanation}<br>In detail, you recorded that | had non-sufficient funds with [name of bank] on or around [date]. I am<br>disputing this record because I believe it to be inaccurate. Please request evidence of this unresolved<br>ooutstanding negative record from [bank name] and investigate this item for me.<br>I understand that your repository is required by law to begin an investigation for me because you are a<br>credit-reporting agency and must follow the Fair Credit Reporting Act. I await your results.<br>Kind regards,<br>{client_signature}<br>",
    
   },
   {
     id:134,
  
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{t_no}<br>{creditor_name}<br>{creditor_address}<br>{curr_date}<br>Re:contentof Hardship<br>To Whom It May Concern,<br>I/We are requesting that Lender, Servicer, PMI, Governmental guarantor or insurer, representing lawyer, or<br>other party related to this case review my financial situation to see if I/We qualify for any workout option.<br>I/We are having problems making my monthly payments because of financial difficulties created by.<br>(Unemployment, Reduced Income, Divorce, Medical Bills, Too Much Debt, Death of my Spouse, Payment<br>Increase, Business Failure, Job Relocation, lliness, Military Service, Incarceration or Other - Please<br>Specify)<br>I/We believe that my/our situation is (Choose: Temporary / Permanent)<br>I have recently received a significant pay cut due to the current devastating economy. I used almost all of<br>my savings and it is getting more and more difficult to stay up to date on my mortgage payment. As a<br>result of the outlay in expenses and the bleeding dry of my money, I am struggling to make my mortgage<br>payments. Kindly consider my current situation and consider my request for a short sale. I had every<br>intention on making good on this loan, but at this time it does not like possible.<br>When I received this mortgage, my mortgage broker promised me a low fixed rate mortgage. When I arrived for the closing, my rate was relatively low; however, it was only fixed for a short time. At the closing<br>table, my broker told me the lender would refinance me in before the loan would reset and pressured me<br>into signing the loan documents. At this time, my rate has gone way up and I cannot get a refinance. There<br>is no equity in my home and the value has dropped tremendously. Please consider us for a short sale, as<br>'we see no other option make our housing payments affordable.<br>Thank you for your assistance and cooperation.<br>I/We, state the information provided above to be true and correct to the best of my/our knowledge<br>Sincerely,<br>{client_signature}<br>",
      
   },
   {
     id:135,
   
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{t_no}<br>{creditor_name}<br>{creditor_address}<br>{curr_date}<br>Re:contentof Hardship<br>Borrower. {client_first_name} {client_last_name}<br>Subject Property: (PROPERTY ADDRESS), Loan Number: ##########<br>To Whom It May Concern:<br>We are writing to you to explain our current financial situation that has caused us to default on our loan<br>agreement. We don't want to lose our home and will anything we can to work with you to remedy the<br>situation and find a solution that will benefit us both. We first became delinquent on our morigage<br>payments due to INSERT YOUR REASON HERE BRIEFLY]. We've tried to bring the account current, but<br>haven't been able to catch up by paying the full amount due. The trouble started approximately [INSERT<br>DATE HERE] and we believe that this is a [TEMPORARY or PERMANENT] hardship.<br>We are now in a better position and would like to work out a plan to begin making payments again and<br>stay in our home. We are hard working, responsible individuals willing to work to keep our home. We<br>would appreciate it if you would consider a modification to our existing loan terms in order to lower the<br>monthly payment and include some or all of the past due amount. We've created and implemented a new<br>budget for our family and we are confident that we would be able to meet the new, lower monthly payment<br>‘every month without fail. We'd appreciate any help or suggestions you could give to us regarding this<br>matter. It's an extremely difficult time for our family and we'd really like to get the issue resolved as soon as<br>possible.<br>Sincerely,<br>{client_signature}<br>",
    
   },
   {
     id:136,
     
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{t_no}<br>{creditor_name} |<br>{creditor_address}<br>{curr_date}<br>Re:contentof Hardship |<br>Borrower: {client_first_name} {client_last_name}<br>Subject Property: (PROPERTY ADDRESS), Loan Number: #########<br>To Whom It May Concern,<br>I am writing thiscontentto explain our family's unfortunate situation that has caused us to become <br>delinquent on our mortgage. We have tried everything in our power to keep current on our payments but<br>unfortunately since our interest rate adjusted, we have fallen behind and would like you to consider<br>working with us to reduce our monthly payments. I<br>The main reasons that caused us to become late are a decrease in our income, increase in our monthly I<br>obligations, current market conditions, our adjustable rate mortgage, and our inability to refinance.<br>I work as a waitress and my husband works at a marketing manager for a local screen printing company. I<br>Most of my income has been generated by tips and has decreased dramatically due fo the unfortunate<br>eeconomic situation. My husband job is secure and he has been with the same company for 2 years. We<br>have a 3 year old son and cannot afford daycare in order to get a second job.<br>For the past several months we have been cutting back on our misc. expenses. We no longer have<br>premium cable, go on vacations, or eat out Our credit cards are getting maxed out due to us paying our<br>mortgage on them and can no longer keep that up. We have currently missed 2 payments and wish to<br>work out a payment plan with you after you reduce our rates to something we can afford.<br>My husband and | consulted mortgage professionals regarding a refinance but due to our lack of equity,<br>the falling home prices in our community, and our lack of assets we were denied.<br>I have no other choice but to ask you to please consider my request for a loan modification. My family and<br>I would really be grateful if you can help us work out a payment schedule we could afford. We do not want<br>to lose our home. We wish to continue making mortgage payments on time for the remainder of our loan.<br>Sincerely,<br>{client_signature}<br>",
      
   },
   {
     id:137,
   
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>[Creditor/Fumnisher]<br>[Creditor/Fumisher Address]<br>Re: Agreement to Dismiss Court Judgment<br>Court Name and Location: (COURT NAME AND LOCATION)<br>Judgment Creditor: (CREDITOR NAME)<br>Judgment Debtor: (DEBTOR NAME)<br>Case Number. (CASE NUMBER)<br>Judgment: (JUDGMENT # AND INFO)<br>Date of Entry- (DATE)<br>We, the undersigned Judgment Creditor and Judgment Debtor have agreed to settle this matter and<br>hereby jointly apply to the court for an order that the judgment involved (enter court case number and date<br>entered) be set aside and dismissed.<br>Signed Judgment Credit:            Date signed<br>Judgment Debtor:               Date signed<br>",
   
   },
   {
     id:138,
     
     content: "{client_first_name} {client_last_name}<br>{client_address}<br>{t_no}<br>{creditor_name}<br>{creditor_address}<br>{curr_date}<br>Re: Loan Modification Request- 1st Mortgage Loan # (LOAN NUMBER).<br>To Whom It May Concern,<br>Enclosed with this package, you will find my loan modification request and supporting documentation for a<br>loan modification regarding loan number (LOAN NUMBER). After reviewing my income and the current<br>real estate market, you will find that my loan modification request is necessary. In my current situation, the<br>mortgage payments are not<br>affordable. However, with the proposed loan modification, I will be able to consistently make payments on<br>time and avoid a foreclosure. I would prefer to stay in my home, but if a modification is not possible I will<br>be forced into foreclosure.<br>Please review the enclosed documents outlining my overall financial situation and real estate market<br>conditions. You may contact me with any questions or requests for further documentation.<br>Sincerely,<br>{client_signature}<br>",
     
   
   }
  ]
 