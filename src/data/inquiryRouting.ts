export interface DivisionRecipient {
  name: string;
  designation: string;
  email: string;
  phone: string;
  formattedPhone: string;
}

export const ACADEMIC_DESK_RECIPIENT: DivisionRecipient = {
  name: 'P K Singh',
  designation: 'Founder, Director - Aakash Hajipur & St. Mary\'s',
  email: 'pksinghdec26@gmail.com',
  phone: '917992466601',
  formattedPhone: '+91 7992466601'
};

export const CORPORATE_DESK_RECIPIENT: DivisionRecipient = {
  name: 'Siddhant Dixit',
  designation: 'Executive Secretariat & Operations',
  email: 'siddhantdixit@lifagroup.in',
  phone: '917781881912',
  formattedPhone: '+91 7781881912'
};

export const getDivisionRouting = (division: string): DivisionRecipient => {
  const norm = (division || '').toLowerCase();
  if (
    norm.includes('aakash') ||
    norm.includes('mary') ||
    norm.includes('school') ||
    norm.includes('hajipur') ||
    norm.includes('sonpur')
  ) {
    return ACADEMIC_DESK_RECIPIENT;
  }
  return CORPORATE_DESK_RECIPIENT;
};

export interface InquiryDispatchPayload {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
}

export const createWhatsAppDispatchUrl = (
  recipient: DivisionRecipient,
  data: InquiryDispatchPayload
): string => {
  const text = `*LIFA GROUP - OFFICIAL INQUIRY DISPATCH*
━━━━━━━━━━━━━━━━━━━━
*Target Division:* ${data.topic || 'General Corporate'}
*Direct Officer:* ${recipient.name} (${recipient.designation})

*Enquirer Name:* ${data.name || 'Not provided'}
*Enquirer Email:* ${data.email || 'Not provided'}
*Enquirer Phone:* ${data.phone || 'Not provided'}

*Communication / Brief:*
${data.message || 'General consultation request'}
━━━━━━━━━━━━━━━━━━━━
_Dispatched via official Lifa Group portal (lifagroup.in)_`;

  return `https://wa.me/${recipient.phone}?text=${encodeURIComponent(text)}`;
};

export const createMailtoDispatchUrl = (
  recipient: DivisionRecipient,
  data: InquiryDispatchPayload
): string => {
  const subject = `[Lifa Group Enquiry] ${data.topic || 'General'} - ${data.name || 'Official Dispatch'}`;
  const body = `Official Corporate Communication

Target Division: ${data.topic || 'General Corporate'}
Routing Officer: ${recipient.name} (${recipient.designation})

Sender Details:
• Name: ${data.name || 'Not provided'}
• Email: ${data.email || 'Not provided'}
• Phone: ${data.phone || 'Not provided'}

Message / Enquiry:
${data.message || 'General consultation request'}

---
Dispatched via Lifa Group Official Portal`;

  return `mailto:${recipient.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
