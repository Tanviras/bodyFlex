import {Typography } from '@material-ui/core';
import React from 'react';
import useForm from '../useForm';




const Step1 = ({activeStep,steps,handleNext}) => {
// console.log(`step 1 er activeStep:${activeStep}, ar total steps:${steps.length}`);


    //Define State Schema
    const stateSchema = {
        firstName: { value: '', error: '' },
        lastName: { value: '', error: '' },
        email: { value: '', error: '' },
        mobile: { value: '', error: '' },
        dob: { value: '', error: '' },
        gender: { value: '', error: '' },
        address: { value: '', error: '' },
        country: { value: '', error: '' },
        city: { value: '', error: '' },
        zip: { value: '', error: '' },
    }

    const stateValidatorSchema = {
        firstName: {
            required: true,
            validator: {
                func: value => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
                error: 'First name should have more than 1 letter'
            }
        },

        lastName: {
            required: true,
            validator: {
                func: value => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])*/.test(value),
                error: 'Last name should have more than 3 letters'
            }
        },

        email: {
            required: true,
            validator: {
                func: value => /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value),
                error: 'Invalid email format'
            }
        },

        mobile: {
            required: true
        },

        dob: {
            required: true
        },

        gender: {
            required: true
        },
 
        address: {
            required: true
        },

        country: {
            required: true
        },

        city: {
            required: true
        },

        zip: {
            required: true
        }

    }


    const { values, errors, dirty, handleOnChange } = useForm(stateSchema, stateValidatorSchema)
    const { firstName, lastName, email, mobile, dob, gender, address, country, city, zip } = values;



    return (
        <form className="row">


            <div className="col-md-6">
                 <label for="firstName" class="form-label">First Name</label>
                <input type="text" class="form-control" name="firstName" value={firstName} onChange={handleOnChange}/>

                {errors.firstName && dirty.firstName && (
                    <Typography style={{ marginTop: 0, color: 'red' }}>{errors.firstName}</Typography>
                )}
            </div>
            {/* col-md-6 */}




            <div class="col-md-6">
            <label for="lastName" class="form-label">Last Name</label>
                <input type="text" class="form-control" name="lastName"  value={lastName}
                onChange={handleOnChange}/>

            {errors.lastName && dirty.lastName && (
                <Typography style={{ marginTop: 0, color: 'red' }}>{errors.lastName}</Typography>
            )}


            </div>
            {/* col-md-6 */}



            <div class="col-md-6">
            <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" name="email" value={email}
                onChange={handleOnChange}/>

            {errors.email && dirty.email && (
                <Typography style={{ marginTop: 0, color: 'red' }}>{errors.email}</Typography>
            )}

            </div>
            {/* col-md-6 */}




            <div class="col-md-6">
            <label for="mobile" class="form-label">Mobile Number</label>
                <input type="tel" class="form-control" name="mobile"  value={mobile}
                onChange={handleOnChange} />

            {errors.mobile && dirty.mobile && (
                <Typography style={{ marginTop: 0, color: 'red' }}>{errors.mobile}</Typography>
            )}
            </div>
            {/* col-md-6 */}




            <div class="col-md-6">
            <label for="dob" class="form-label">Date of Birth</label>
                <input type="date" class="form-control" name="dob" value={dob}
                onChange={handleOnChange} />


            {errors.dob && dirty.dob && (
                <Typography style={{ marginTop: 0, color: 'red' }}>{errors.dob}</Typography>
            )}
            </div>
            {/* col-md-6 */}




            <div class="col-md-6">
            <label for="gender" class="form-label">Gender</label>
                {/* <input type="text" class="form-control" name="gender" value={gender}
                onChange={handleOnChange} /> */}

            <select name="gender" class="form-select">
                <option selected>Male</option>
                <option>Female</option>
                <option>Others</option>
            </select>


            {errors.gender && dirty.gender && (
                <Typography style={{ marginTop: 0, color: 'red' }}>{errors.gender}</Typography>
            )}
            </div>
            {/* col-md-6 */}


            <div class="col-md-6">
            <label for="address" class="form-label">Addressline 1: </label>
                <input type="text" class="form-control" name="address" placeholder="1234 Main St" value={address} onChange={handleOnChange} />

            {errors.address && dirty.address && (
                <Typography style={{ marginTop: 0, color: 'red' }}>{errors.address}</Typography>
            )}
            </div>
            {/* col-md-12 */}



            <div class="col-md-6">
            <label for="country" class="form-label">Country/Region</label>
                <input 
                type="text" 
                class="form-control" 
                name="country" 
                placeholder="USA" 
                value={country} 
                onChange={handleOnChange}
                />
         

            {errors.country && dirty.country && (
                <Typography style={{ marginTop: 0, color: 'red' }}>{errors.country}</Typography>
            )}
            </div>
            {/* col-md-12 */}


            <div class="col-md-6">
            <label for="city" class="form-label">City</label>
                <input type="text" class="form-control" name="city" value={city} onChange={handleOnChange}/>



            {errors.city && dirty.city && (
                <Typography style={{ marginTop: 0, color: 'red' }}>{errors.city}</Typography>
            )}
            </div>
            {/* col-md-6 */}




            <div class="col-md-6">
            <label for="zip" class="form-label">Postcode</label>
                <input type="text" class="form-control" name="zip" value={zip} onChange={handleOnChange}/>

            {errors.zip && dirty.zip && (
                <Typography style={{ marginTop: 0, color: 'red' }}>{errors.zip}</Typography>
            )}
            </div>
            {/* col-md-2 */}

            {
                    !firstName ||
                    !lastName ||
                    !email ||
                    // !gender ||
                    !address ||
                    !dob ||
                    !zip ||
                    !city ||
                    !country ?

                    (<div class="col-3" style={{marginTop:10}}>
                        <button type="submit" class="btn btn-secondary" disabled>
                           
                            {activeStep===steps.length? 'Finish': 'Next'}
                            </button>
                    </div>)
                    :
                    (<div class="col-12" style={{marginTop:10}}>
                        <button class="btn btn-primary" onClick={handleNext}>
                        {activeStep===steps.length? 'Finish': 'Next'}
                        </button>
                    </div>)


            }

        </form>

    );
};

export default Step1;