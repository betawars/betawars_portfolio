import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Snackbar } from "@mui/material";
import emailjs from '@emailjs/browser';
import { Alert } from '@mui/material';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import FadeInWhenVisible from './FadeInWhenVisible';

const Container = styled.div`
    width: 100%;
    min-height: 80vh;
    padding: 4rem 1rem;
    background: ${props => props.theme.body};
    color: ${props => props.theme.text};
`;

const Title = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 3rem;
    text-align: center;
    position: relative;
    
    &:after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: -15px;
        transform: translateX(-50%);
        width: 60px;
        height: 3px;
        background: ${props => props.theme.text};
        border-radius: 2px;
    }
`;

const Content = styled(motion.div)`
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;
`;

const ContactInfo = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
`;

const InfoCard = styled(motion.div)`
    background: rgba(${props => props.theme.textRgba}, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(${props => props.theme.textRgba}, 0.15);
    border-radius: 16px;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        background: rgba(${props => props.theme.textRgba}, 0.1);
        border-color: rgba(${props => props.theme.textRgba}, 0.3);
    }

    svg {
        font-size: 1.5rem;
        color: ${props => props.theme.text};
    }
`;

const InfoContent = styled.div`
    h3 {
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
        color: ${props => props.theme.text};
    }

    p {
        font-size: 0.9rem;
        color: rgba(${props => props.theme.textRgba}, 0.85);
    }
`;

const Form = styled(motion.form)`
    background: rgba(${props => props.theme.textRgba}, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(${props => props.theme.textRgba}, 0.15);
    border-radius: 20px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const Label = styled.label`
    font-size: 0.9rem;
    color: rgba(${props => props.theme.textRgba}, 0.85);
`;

const Input = styled.input`
    width: 100%;
    padding: 0.8rem 1rem;
    border-radius: 12px;
    border: 1px solid rgba(${props => props.theme.textRgba}, 0.3);
    background: rgba(${props => props.theme.textRgba}, 0.08);
    color: ${props => props.theme.text};
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
        outline: none;
        border-color: ${props => props.theme.text};
        background: rgba(${props => props.theme.textRgba}, 0.1);
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    padding: 0.8rem 1rem;
    border-radius: 12px;
    border: 1px solid rgba(${props => props.theme.textRgba}, 0.3);
    background: rgba(${props => props.theme.textRgba}, 0.08);
    color: ${props => props.theme.text};
    font-size: 1rem;
    min-height: 150px;
    resize: vertical;
    transition: all 0.3s ease;

    &:focus {
        outline: none;
        border-color: ${props => props.theme.text};
        background: rgba(${props => props.theme.textRgba}, 0.1);
    }
`;

const SubmitButton = styled(motion.button)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-radius: 12px;
    border: none;
    background: ${props => props.theme.text};
    color: ${props => props.theme.body};
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    svg {
        font-size: 1.2rem;
    }
`;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

const MobileContact = () => {
    const [loading, setLoading] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogMessage, setDialogMessage] = useState("");
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success'
    });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        setErrors(prev => ({
            ...prev,
            [name]: ""
        }));
    };

    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            tempErrors.name = "Name is required";
            isValid = false;
        }

        if (!formData.email.trim()) {
            tempErrors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is invalid";
            isValid = false;
        }

        if (!formData.phone.trim()) {
            tempErrors.phone = "Phone number is required";
            isValid = false;
        } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
            tempErrors.phone = "Phone number must be 10 digits";
            isValid = false;
        }

        if (!formData.message.trim()) {
            tempErrors.message = "Message is required";
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const sendEmail = async () => {
        try {
            const result = await emailjs.send(
                'service_84d6g7j', 
                'template_vtig6qt', 
                {
                    name: formData.name,
                    email: formData.email,
                    number: formData.phone,
                    message: formData.message
                }
            );

            if (result.status === 200) {
                setDialogMessage("Message sent successfully!");
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                throw new Error("Failed to send message");
            }
        } catch (error) {
            setDialogMessage("Failed to send message. Please try again later.");
        }
        setOpenDialog(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setLoading(true);
            await sendEmail();
            setLoading(false);
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    return (
        <Container id="contact">
            <FadeInWhenVisible>
                <Title>Get in Touch</Title>
            </FadeInWhenVisible>
            
            <Content>
                <ContactInfo>
                    <FadeInWhenVisible delay={0.2}>
                        <InfoCard>
                            <FiMail />
                            <InfoContent>
                                <h3>Email</h3>
                                <p>shashnkbetawar24@gmail.com</p>
                            </InfoContent>
                        </InfoCard>
                    </FadeInWhenVisible>

                    <FadeInWhenVisible delay={0.3}>
                        <InfoCard>
                            <FiPhone />
                            <InfoContent>
                                <h3>Phone</h3>
                                <p>+1 (541) 360-1734</p>
                            </InfoContent>
                        </InfoCard>
                    </FadeInWhenVisible>
                </ContactInfo>

                <FadeInWhenVisible delay={0.5}>
                    <Form 
                        variants={itemVariants}
                        onSubmit={handleSubmit}
                    >
                        <InputGroup>
                            <Label>Name</Label>
                            <Input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </InputGroup>

                        <InputGroup>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </InputGroup>

                        <InputGroup>
                            <Label>Phone</Label>
                            <Input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </InputGroup>

                        <InputGroup>
                            <Label>Message</Label>
                            <TextArea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </InputGroup>

                        <SubmitButton
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <FiSend /> Send Message
                        </SubmitButton>
                    </Form>
                </FadeInWhenVisible>
            </Content>
            
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbar.severity}
                    variant="filled"
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>

            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>{"Notification"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {dialogMessage}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)}>Close</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default MobileContact; 