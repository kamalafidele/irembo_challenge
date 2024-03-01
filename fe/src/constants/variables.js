const variables = {
    CITIZEN_SHIP: [ { value: 'Foreigner', label: 'Foreigner' }, { value: 'Rwandan', label: 'Rwandan' } ],
    PROVINCES: [
        { value: 'Eastern', label: 'Eastern' },
        { value: 'Western', label: 'Western' },
        { value: 'Northern', label: 'Northern' },
        { value: 'Southern', label: 'Southern' },
        { value: 'Kigali City', label: 'Kigali City' },
    ],
    BUSINESS_TYPES: [
        { value: 'Retailer', label:'Retailer' },
        { value: 'Wholesaler', label:'Wholesaler' },
        { value: 'Manufacturer', label:'Manufacturer' },
    ],
    IMPORTATION_PURPOSES: [
        { value: 'Direct Sale', label: 'Direct Sale' },
        { value: 'Personal use', label: 'Personal use' },
        { value: 'Trial use', label: 'Trial use' },
        { value: 'Other', label: 'Other' },
    ],
    PRODUCT_CATEGORIES: [
        { value: 'General Purpose', label: 'General purpose' },
        { value: 'Construction Material', label: 'Construction Material' },
        { value: 'Chemicals', label: 'Chemicals' },
    ],
    MEASUREMENT_UNITS: [
        { value: 'Kgs', label: 'Kgs' },
        { value: 'Tones', label: 'Tones' },
    ],
    serviceRegistrationFeidls: {
        citizenship: '',
        idNumber: '',
        passportNumber: '',
        phoneNumber: '',
        email: '',
        ownerAddress: '',
        businessType: '',
        companyName: '',
        businessTinNumber: '',
        registrationDate: '',
        businessAddress: '',
        importationPurpose: '',
        productCategory: '',
        productWeight: '',
        measurementUnit: '',
        productQuantity: '',
        productDescrition: '',
    }
}

export default variables;
