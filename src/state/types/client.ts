export interface Client {
  id: string;
  primary_poc: string; // ID of PointOfContact
  organization: Organization;
}

interface Organization {
  id: string;
  organization_name: string;
  organization_address: string;
  organization_phone?: string;
  points_of_contact: string[]; // String of IDs of PointOfContacts
}

interface PointOfContact {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
}
