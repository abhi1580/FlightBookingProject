import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography, FormControl, RadioGroup, FormControlLabel, Radio, FormLabel } from '@mui/material';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        gender: '',
        password: '',
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        mobile: '',
        gender: '',
        password: '',
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
       
        setFormErrors({ ...formErrors, [event.target.name]: '' });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            
            console.log(formData);
            alert("Your Form Has Been Submitted");
        
            setFormData({
                name: '',
                email: '',
                mobile: '',
                gender: '',
                password: '',
            });
        } else {
            console.log('Form has errors can not submit.');
        }
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {
            name: '',
            email: '',
            mobile: '',
            gender: '',
            password: '',
        };

        if (formData.name.trim() === '') {
            newErrors.name = 'Name is required';
            valid = false;
        }

        if (formData.email.trim() === '') {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
            valid = false;
        }

        if (formData.mobile.trim() === '') {
            newErrors.mobile = 'Mobile number is required';
            valid = false;
        } else if (!/^\d{10}$/.test(formData.mobile)) {
            newErrors.mobile = 'Mobile number must be 10 digits';
            valid = false;
        }

        if (formData.gender === '') {
            newErrors.gender = 'Gender is required';
            valid = false;
        }

        if (formData.password.trim() === '') {
            newErrors.password = 'Password is required';
            valid = false;
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long';
            valid = false;
        }

        setFormErrors(newErrors);
        return valid;
    };

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '70vh' }}>
            <Grid item xs={10} sm={8} md={6} lg={4}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography variant="h5" gutterBottom style={{padding:"10px",textAlign:'center',fontWeight:'bold'}} id="text-head">
                        Sign Up
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Name"
                                    variant="outlined"
                                    fullWidth
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    error={!!formErrors.name}
                                    helperText={formErrors.name}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    type="email"
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={!!formErrors.email}
                                    helperText={formErrors.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Mobile Number"
                                    variant="outlined"
                                    fullWidth
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    error={!!formErrors.mobile}
                                    helperText={formErrors.mobile}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl component="fieldset" error={!!formErrors.gender}>
                                    <FormLabel component="legend">Gender</FormLabel>
                                    <RadioGroup row
                                        aria-label="gender"
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                                    </RadioGroup>
                                </FormControl>
                                {formErrors.gender && (
                                    <Typography color="error" variant="caption">
                                        {formErrors.gender}
                                    </Typography>
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    type="password"
                                    label="Password"
                                    variant="outlined"
                                    fullWidth
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    error={!!formErrors.password}
                                    helperText={formErrors.password}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    id="login-btn"
                                    onClick={handleSubmit}
                                >
                                    Sign Up
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default SignUp;
