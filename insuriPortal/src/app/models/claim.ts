import { Identifier } from './identifier';
import { CodeableConcept } from './codeableConcept';
import { Reference } from './reference';
import { Period } from './period';
import { Coding } from './coding';
import { Quantity } from './quantity';
import { Attachment } from './attachment';
import { Address } from './address';
import { Money } from './money';

export interface Claim {
    // from Resource: id, meta, implicitRules, and language
    // from DomainResource: text, contained, extension, and modifierExtension
    id: string;
    identifier: Identifier; // Claim number
    status: string; // active | cancelled | draft | entered-in-error
    type: CodeableConcept; // Type or discipline
    subType: CodeableConcept[]; // Finer grained claim type information
    use: string; // complete | proposed | exploratory | other
    patient: Reference; // (Patient) }, // The subject of the Products and Services
    billablePeriod: Period; // Period for charge submission
    created: Date; // Creation date
    enterer: Reference; // (Practitioner) }, // Author
    insurer: Reference; // (Organization) }, // Target
    provider: Reference; // (Practitioner) }, // Responsible provider
    organization: Reference; // (Organization) }, // Responsible organization
    priority: CodeableConcept; // Desired processing priority
    fundsReserve: CodeableConcept; // Funds requested to be reserved
    related: { // Related Claims which may be revelant to processing this claimn
        claim: Reference; // (Claim) }, // Reference to the related claim
        relationship: CodeableConcept; // How the reference claim is related
        reference: Identifier; // Related file or case reference
    }[];
    prescription: Reference; // (MedicationRequest|VisionPrescription) }, // Prescription authorizing services or products
    originalPrescription: Reference; // (MedicationRequest) }, // Original prescription if superceded by fulfiller
    payee: { // Party to be paid any benefits payable
        type: CodeableConcept; // R!  Type of party: Subscriber, Provider, other
        resourceType: Coding; // organization | patient | practitioner | relatedperson
        party: Reference; // (Practitioner|Organization|Patient|RelatedPerson) } // Party to receive the payable
    };
    referral: Reference; // (ReferralRequest) }, // Treatment Referral
    facility: Reference; // (Location); // Servicing Facility
    careTeam: { // Members of the care team
        sequence: number; // R!  Number to covey order of careTeam
        provider: Reference; // (Practitioner|Organization) }, // R!  Provider individual or organization
        responsible: boolean; // Billing provider
        role: CodeableConcept; // Role on the team
        qualification: CodeableConcept; // Type, classification or Specialization
    }[];
    information: { // Exceptions, special considerations, the condition, situation, prior or concurrent issues
        sequence: number; // R!  Information instance identifier
        category: CodeableConcept; // R!  General class of information
        code: CodeableConcept; // Type of information
        // timing[x]: When it occurred. One of these 2:
        timingDate: Date;
        timingPeriod: Period;
        // value[x]: Additional Data or supporting information. One of these 4:
        valueString: string;
        valueQuantity: Quantity;
        valueAttachment: Attachment;
        valueReference: Reference; // (Any) },
        reason: CodeableConcept; // Reason associated with the information
    }[];
    diagnosis: { // List of Diagnosis
        sequence: number; // R!  Number to covey order of diagnosis
        // diagnosis[x]: Patient's diagnosis. One of these 2:
        diagnosisCodeableConcept: CodeableConcept;
        diagnosisReference: Reference; // (Condition) },
        type: CodeableConcept[]; // Timing or nature of the diagnosis
        packageCode: CodeableConcept; // Package billing code
    }[];
    procedure: { // Procedures performed
        sequence: number; // R!  Procedure sequence for reference
        date: Date; // When the procedure was performed
        // procedure[x]: Patient's list of procedures performed. One of these 2:
        procedureCodeableConcept: CodeableConcept;
        procedureReference: Reference; // (Procedure) }
    }[];
    insurance: { // Insurance or medical plan
        sequence: number; // R!  Service instance identifier
        focal: boolean; // R!  Is the focal Coverage
        coverage: Reference; // (Coverage) }, // R!  Insurance information
        businessArrangement: string; // Business agreement
        preAuthRef: string[]; // Pre-Authorization/Determination Reference
        claimResponse: Reference; // (ClaimResponse) } // Adjudication results
    }[];
    accident: { // Details about an accident
        date: Date; // R!  When the accident occurred   see information codes
        type: CodeableConcept; // The nature of the accident
        // location[x]: Accident Place. One of these 2:
        locationAddress: Address;
        locationReference: Reference; // (Location) }
    };
    employmentImpacted: Period; // Period unable to work
    hospitalization: Period; // Period in hospital
    item: { // Goods and Services
        sequence: number; // R!  Service instance
        careTeamLinkId: number[]; // Applicable careTeam members
        diagnosisLinkId: number[]; // Applicable diagnoses
        procedureLinkId: number[]; // Applicable procedures
        informationLinkId: number[]; // Applicable exception and supporting information
        revenue: CodeableConcept; // Revenue or cost center code
        category: CodeableConcept; // Type of service or product
        service: CodeableConcept; // Billing Code
        modifier: CodeableConcept[]; // Service/Product billing modifiers
        programCode: CodeableConcept[]; // Program specific reason for item inclusion
        // serviced[x]: Date or dates of Service. One of these 2:
        servicedDate: Date;
        servicedPeriod: Period;
        // location[x]: Place of service. One of these 3:
        locationCodeableConcept: CodeableConcept;
        locationAddress: Address;
        locationReference: Reference; // (Location) },
        quantity: Quantity; // (SimpleQuantity) }, // Count of Products or Services
        unitPrice: Money; // Fee, charge or cost per point
        factor: number; // Price scaling factor
        net: Money; // Total item cost
        udi: Reference[]; // (Device) }], // Unique Device Identifier
        bodySite: CodeableConcept; // Service Location
        subSite: CodeableConcept[] // Service Sub-location
        encounter: Reference[]; // (Encounter) }], // Encounters related to this billed item
        detail: { // Additional items
            sequence: number // R!  Service instance
            revenue: CodeableConcept; // Revenue or cost center code
            category: CodeableConcept; // Type of service or product
            service: CodeableConcept; // Billing Code
            modifier: CodeableConcept[]; // Service/Product billing modifiers
            programCode: CodeableConcept[]; // Program specific reason for item inclusion
            quantity: Quantity; // (SimpleQuantity) }, // Count of Products or Services
            unitPrice: Money; // Fee, charge or cost per point
            factor: number; // Price scaling factor
            net: Money; // Total additional item cost
            udi: Reference[]; // (Device) }], // Unique Device Identifier
            subDetail: { // Additional items
                sequence: number // R!  Service instance
                revenue: CodeableConcept; // Revenue or cost center code
                category: CodeableConcept; // Type of service or product
                service: CodeableConcept; // Billing Code
                modifier: CodeableConcept[]; // Service/Product billing modifiers
                programCode: CodeableConcept[]; // Program specific reason for item inclusion
                quantity: Quantity; // (SimpleQuantity) }, // Count of Products or Services
                unitPrice: Money; // Fee, charge or cost per point
                factor: number; // Price scaling factor
                net: Money; // Net additional item cost
                udi: Reference[]; // (Device) }], // Unique Device Identifier
            }[];
        }[];
    }[];
    total: Money; // Total claim cost
}
