import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background: white;
    border-radius: 12px;
    padding: 32px;
    width: 90%;
    max-width: 520px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
`;

const ModalTitle = styled.h2`
    font-size: 24px;
    font-weight: 600;
    color: #111827;
    margin: 0;
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 24px;
    color: #6B7280;
    cursor: pointer;
    padding: 8px;
    border-radius: 6px;
    transition: all 0.2s ease;

    &:hover {
        background-color: #F3F4F6;
        color: #374151;
    }
`;

const FormGroup = styled.div`
    margin-bottom: 24px;
`;

const Label = styled.label`
    display: block;
    font-size: 14px;
    font-weight: 500;
    color: #374151;
    margin-bottom: 8px;
`;

const RequiredAsterisk = styled.span`
    color: #EF4444;
    margin-left: 4px;
`;

const Input = styled.input`
    width: 100%;
    padding: 14px 16px;
    border: 1px solid #D1D5DB;
    border-radius: 8px;
    font-size: 16px;
    color: #111827;
    background: white;
    transition: all 0.2s ease;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: #3B82F6;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    &::placeholder {
        color: #9CA3AF;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 32px;
`;

const Button = styled.button`
    flex: 1;
    padding: 14px 20px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

const CancelButton = styled(Button)`
    background: white;
    color: #374151;
    border: 1px solid #D1D5DB;

    &:hover:not(:disabled) {
        background: #F9FAFB;
        border-color: #9CA3AF;
    }
`;

const SaveButton = styled(Button)`
    background: #10B981;
    color: white;

    &:hover:not(:disabled) {
        background: #059669;
    }
`;

const ErrorText = styled.span`
    color: #EF4444;
    font-size: 12px;
    margin-top: 4px;
    display: block;
`;

const CustomerModal = ({ isOpen, onClose, onSave, initialData = null }) => {
    const [formData, setFormData] = useState({
        companyName: "",
        contactName: "",
        companyAddress: "",
        email: "",
        phoneNumber: "",
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        } else {
            setFormData({
                companyName: "",
                contactName: "",
                companyAddress: "",
                email: "",
                phoneNumber: "",
            });
        }
        setErrors({});
    }, [initialData, isOpen]);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: "" }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.companyName.trim()) {
            newErrors.companyName = "Company name is required";
        }
        
        // Contact name is now optional
        
        if (!formData.companyAddress.trim()) {
            newErrors.companyAddress = "Company address is required";
        }
        
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }
        
        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = "Phone/Mobile number is required";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSave = () => {
        if (validateForm()) {
            onSave(formData);
            onClose();
        }
    };

    const handleCancel = () => {
        setFormData({
            companyName: "",
            contactName: "",
            companyAddress: "",
            email: "",
            phoneNumber: "",
        });
        setErrors({});
        onClose();
    };

    if (!isOpen) return null;

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <ModalHeader>
                    <ModalTitle>Customer Details</ModalTitle>
                    <CloseButton onClick={onClose}>×</CloseButton>
                </ModalHeader>

                <FormGroup>
                    <Label>
                        Company Name <RequiredAsterisk>*</RequiredAsterisk>
                    </Label>
                    <Input
                        type="text"
                        placeholder="ABC Inc."
                        value={formData.companyName}
                        onChange={(e) => handleInputChange("companyName", e.target.value)}
                    />
                    {errors.companyName && <ErrorText>{errors.companyName}</ErrorText>}
                </FormGroup>

                <FormGroup>
                    <Label>
                        Contact Name
                    </Label>
                    <Input
                        type="text"
                        placeholder="Jane Joe"
                        value={formData.contactName}
                        onChange={(e) => handleInputChange("contactName", e.target.value)}
                    />
                    {errors.contactName && <ErrorText>{errors.contactName}</ErrorText>}
                </FormGroup>

                <FormGroup>
                    <Label>
                        Company Address <RequiredAsterisk>*</RequiredAsterisk>
                    </Label>
                    <Input
                        type="text"
                        placeholder="123 Avenue, City, Province, ZIP, Country"
                        value={formData.companyAddress}
                        onChange={(e) => handleInputChange("companyAddress", e.target.value)}
                    />
                    {errors.companyAddress && <ErrorText>{errors.companyAddress}</ErrorText>}
                </FormGroup>

                <FormGroup>
                    <Label>
                        Email <RequiredAsterisk>*</RequiredAsterisk>
                    </Label>
                    <Input
                        type="email"
                        placeholder="example@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                    {errors.email && <ErrorText>{errors.email}</ErrorText>}
                </FormGroup>

                <FormGroup>
                    <Label>
                        Phone/Mobile <RequiredAsterisk>*</RequiredAsterisk>
                    </Label>
                    <Input
                        type="tel"
                        placeholder="+1234567890000"
                        value={formData.phoneNumber}
                        onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                    />
                    {errors.phoneNumber && <ErrorText>{errors.phoneNumber}</ErrorText>}
                </FormGroup>

                <ButtonContainer>
                    <CancelButton onClick={handleCancel}>
                        Cancel
                    </CancelButton>
                    <SaveButton onClick={handleSave}>
                        Save
                    </SaveButton>
                </ButtonContainer>
            </ModalContent>
        </ModalOverlay>
    );
};

export default CustomerModal;