import React, { useState } from 'react';
import styled from 'styled-components';
import * as Yup from "yup";
import { Formik } from "formik";

import COLOR_PALETTE from '../constants/colors';
import Button from '../components/Button';
import Input from '../components/Input';
import Select from '../components/Select';
import FormHeader from '../components/FormHeader';
import Header from '../components/Header';
import constantVariables from '../constants/variables';
import ErrorMessage from '../components/ErrorMessage';
import servicesAPI from '../api/servicesAPI';

const validationSchema = Yup.object().shape({
    citizenship: Yup.string().required().label('Citizenship'),
    idNumber: Yup.string().optional().label('Identification Number'),
    passportNumber: Yup.number().optional().label('Passport Number'),
    phoneNumber: Yup.string().matches(/^[0-9]+$/, "Must be only digits").min(9).max(10).label('Phone number'),
    email: Yup.string().email().optional().label('Email Address'),
    ownerAddress: Yup.string().required().label('Business Owner Address'),
    businessType: Yup.string().required().label('Business Type'),
    companyName: Yup.string().required().label('Company name'),
    businessTinNumber: Yup.number().required().label('Business TIN Number'),
    registrationDate: Yup.string().required().label('Business Registration date'),
    businessAddress: Yup.string().required().label('Business Address'),
    importationPurpose: Yup.string().required().label('Importation purpose'),
    productCategory: Yup.string().required().label('Product category'),
    productWeight: Yup.number().required().label('Weight'),
    measurementUnit: Yup.string().required().label('Unit of measurement'),
    productQuantity: Yup.number().required().label('Quantity of product'),
});

function HomePage(props) {
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmission = async (values) => { 
        setLoading(true);
        const result = await servicesAPI.registerNewBusiness(values);
        setLoading(false);
    
        if (result.ok) {
            setMessage(result.data.message);
        } else {
            setError(result.data.status || result.data.error)
        };
    }

    return (
        <Container>
            <Formik
                initialValues={{ ...constantVariables.serviceRegistrationFeidls }}
                onSubmit={(values) => handleSubmission(values)}
                validationSchema={validationSchema}
            >
                {({
                    handleChange,
                    handleSubmit,
                    setFieldTouched,
                    touched,
                    errors,
                }) => (
                    <>
                        <FormContainer className="owner-details">
                            <FormHeader content={"Business Owner Details"} />
                            <FormControlsWrapper>
                                <Header content={'Business Owner Details'} fontSize='20px' />
                                <div className="row">
                                    <label htmlFor="citizenship">Applicant CitizenShip</label>
                                    <Select 
                                    data={constantVariables.CITIZEN_SHIP} 
                                    placeHolder={'Select Citizenship'} 
                                    onChange={handleChange("citizenship")}
                                    onBlur={() => setFieldTouched("citizenship")}
                                    />
                                    {touched.citizenship && <ErrorMessage text={errors.citizenship} />}
                                </div>

                                { touched.citizenship}

                                <div className="owner-contacts" style={{ display: 'flex' }}>
                                    <div className="row">
                                        <label htmlFor='phoneNumber'>Phone Number</label>
                                        <Input
                                            type={'number'}
                                            width={90}
                                            placeHolder={'781231567'}
                                            onChange={handleChange("phoneNumber")}
                                            onBlur={() => setFieldTouched("phoneNumber")}
                                        />
                                        {touched.phoneNumber && <ErrorMessage text={errors.phoneNumber} />}
                                    </div>

                                    <div className="row">
                                        <label htmlFor='email'>Email Address</label>
                                        <Input 
                                        type={'email'} width={60} 
                                        placeHolder={'Enter email address'} 
                                        onChange={handleChange("email")}
                                        onBlur={() => setFieldTouched("email")} 
                                        />
                                        {touched.email && <ErrorMessage text={errors.email} />}
                                    </div>
                                </div>

                                <Header content={'Business Owner Address'} fontSize='20px' />
                                <div className="row">
                                    <label htmlFor="ownerAddress">Business owner address</label>
                                    <Select 
                                    data={constantVariables.PROVINCES} 
                                    placeHolder={'Select Province'} 
                                    onChange={handleChange("ownerAddress")}
                                    onBlur={() => setFieldTouched("ownerAddress")}
                                    />
                                    {touched.ownerAddress && <ErrorMessage text={errors.ownerAddress} />}
                                </div>
                            </FormControlsWrapper>
                        </FormContainer>

                        <FormContainer className="business-details">
                            <FormHeader content={"Business Details"} />
                            <FormControlsWrapper>
                                <Header content={'Business Details'} fontSize='20px' />
                                <div className="company-details" style={{ display: 'flex' }}>
                                    <div className="row">
                                        <label htmlFor='businessType'>Business type</label>
                                        <Select 
                                        data={constantVariables.BUSINESS_TYPES} 
                                        placeHolder={'Select business type'}
                                        width={90}
                                        onChange={handleChange("businessType")}
                                        onBlur={() => setFieldTouched("businessType")}
                                        />
                                        {touched.businessType && <ErrorMessage text={errors.businessType} />}
                                    </div>

                                    <div className="row">
                                        <label htmlFor='companyName'>Company name</label>
                                        <Input 
                                        type={'text'} 
                                        width={60} 
                                        placeHolder={'Enter company name'} 
                                        onChange={handleChange("companyName")}
                                        onBlur={() => setFieldTouched("companyName")}
                                        />
                                        {touched.companyName && <ErrorMessage text={errors.companyName} />}
                                    </div>
                                </div>

                                <div className="company-credentials" style={{ display: 'flex' }}>
                                    <div className="row">
                                        <label htmlFor='businessTinNumber'>TIN Number</label>
                                        <Input 
                                        type={'number'} 
                                        width={90} 
                                        placeHolder={'Enter TIN number'} 
                                        onChange={handleChange("businessTinNumber")}
                                        onBlur={() => setFieldTouched("businessTinNumber")}
                                        />
                                        {touched.businessTinNumber && <ErrorMessage text={errors.businessTinNumber} />}
                                    </div>
                                    <div className="row">
                                        <label htmlFor='registrationDate'>Registration Date</label>
                                        <Input 
                                        placeHolder={'Choose date'} 
                                        type={'date'} 
                                        width={60} 
                                        onChange={handleChange("registrationDate")}
                                        onBlur={() => setFieldTouched("registrationDate")}
                                        />
                                        {touched.registrationDate && <ErrorMessage text={errors.registrationDate} />}
                                    </div>
                                </div>

                                <Header content={'Business Address'} fontSize='20px' />
                                <div className="row">
                                    <label htmlFor='businessAddress'>Business Address</label>
                                    <Select 
                                    data={constantVariables.PROVINCES} 
                                    placeHolder={'Select province'} 
                                    onChange={handleChange("businessAddress")}
                                    onBlur={() => setFieldTouched("businessAddress")}
                                    />
                                    {touched.businessAddress && <ErrorMessage text={errors.businessAddress} />}
                                </div>
                            </FormControlsWrapper>
                        </FormContainer>

                        <FormContainer className="product-details">
                            <FormHeader content={"Product Information"} />
                            <FormControlsWrapper>

                                <Header content={'Importation Details'} fontSize='20px' />
                                <div className="row">
                                    <label htmlFor='importationPurpose'>Purpose of Importation</label>
                                    <Select 
                                    data={constantVariables.IMPORTATION_PURPOSES} 
                                    placeHolder={'Enter the purpose of importation'} 
                                    onChange={handleChange("importationPurpose")}
                                    onBlur={() => setFieldTouched("importationPurpose")}
                                    />
                                    {touched.importationPurpose && <ErrorMessage text={errors.importationPurpose} />}
                                </div>

                                <Header content={'Product Details'} fontSize='20px' />
                                <div className="row">
                                    <label htmlFor='productCategory'>Product Category</label>
                                    <Select 
                                    data={constantVariables.PRODUCT_CATEGORIES} 
                                    placeHolder={'Enter product category'}
                                    onChange={handleChange("productCategory")}
                                    onBlur={() => setFieldTouched("productCategory")}
                                    />
                                    {touched.productCategory && <ErrorMessage text={errors.productCategory} />}
                                </div>

                                <div className="row">
                                    <label htmlFor="productWeight">Weight (Kg) </label>
                                    <Input 
                                    type={'number'} 
                                    placeHolder={'Weight (Kg)'} 
                                    onChange={handleChange("productWeight")}
                                    onBlur={() => setFieldTouched("productWeight")}
                                    />
                                    {touched.productWeight && <ErrorMessage text={errors.productWeight} />}
                                </div>

                                <div className="product-metrics" style={{ display: 'flex' }}>
                                    <div className="row">
                                        <label htmlFor='measurementUnit'>Unit of Measurement</label>
                                        <Select 
                                        data={constantVariables.MEASUREMENT_UNITS} 
                                        placeHolder={'Enter unit of measurement'} 
                                        width={90} 
                                        onChange={handleChange("measurementUnit")}
                                        onBlur={() => setFieldTouched("measurementUnit")}
                                        />
                                        {touched.measurementUnit && <ErrorMessage text={errors.measurementUnit} />}
                                    </div>
                                    <div className="row">
                                        <label htmlFor='productQuantity'>Quantity of Product</label>
                                        <Input 
                                        placeHolder={'Enter quantity'} 
                                        type={'number'}
                                        onChange={handleChange("productQuantity")}
                                        onBlur={() => setFieldTouched("productQuantity")}
                                        />
                                        {touched.productQuantity && <ErrorMessage text={errors.productQuantity} />}
                                    </div>
                                </div>
                                <div className="row">
                                    <Button text={loading ? 'Loading.....' : "Submit"} width={30} onClick={handleSubmit}/>
                                </div>
                            </FormControlsWrapper>
                        </FormContainer>
                    </>
                )}
            </Formik>
            <h2 style={{ color: COLOR_PALETTE.GREEN }}> { message || error } </h2>
        </Container>
    );
}

const Container = styled.div`
width: 100%;
background: ${COLOR_PALETTE.WHITE};
padding: 10px;
display: flex;
justify-content: center; /* Horizontally centers the child elements */
flex-direction: column;
align-items: center;
`

const FormContainer = styled.div`
margin: 10px 0px 10px 0px;
border: 2px solid ${COLOR_PALETTE.DODGERBLUE};
border-radius: 5px;
width: 80%;
div.row {
    width: 100%;
}
`

const FormControlsWrapper = styled.div`
padding: 10px;
width: 100%;
`
export default HomePage;