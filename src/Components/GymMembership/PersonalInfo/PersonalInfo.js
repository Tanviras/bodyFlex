import React from 'react';

const PersonalInfo = () => {

    return (
        <form class="row g-3">

            <div class="col-md-6">
                <label for="firstName" class="form-label">Fist Name</label>
                <input type="text" class="form-control" id="firstName"/>
            </div>
            {/* col-md-6 */}

                <div class="col-md-6">
                    <label for="lastName" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="lastName"/>
                </div>
             {/* col-md-6 */}

             <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Email</label>
                    <input type="password" class="form-control" id="inputPassword4"/>
                </div>
             {/* col-md-6 */}

             <div class="col-md-6">
                    <label for="mobile" class="form-label">Mobile Number</label>
                    <input type="tel" class="form-control" id="mobile"/>
                </div>
             {/* col-md-6 */}

             <div class="col-md-6">
                    <label for="dob" class="form-label">Date of Birth</label>
                    <input type="date" class="form-control" id="dob"/>
                </div>
             {/* col-md-6 */}

             <div class="col-md-6">
                    <label for="gender" class="form-label">Gender</label>
                    <select id="inputState" class="form-select">
                            <option selected>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                    </select>
                </div>
             {/* col-md-6 */}


                    <div class="col-md-6">
                        <label for="inputAddress" class="form-label">Addressline 1: </label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>
                     {/* col-md-12 */}
                      
                        <div class="col-md-6">
                            <label for="country" class="form-label">Country/Region</label>
                            <input type="text" class="form-control" id="country" placeholder="USA"/>
                        </div>
                         {/* col-md-12 */}


                            <div class="col-md-6">
                                <label for="inputCity" class="form-label">City</label>
                                <input type="text" class="form-control" id="inputCity"/>
                            </div>
                             {/* col-md-6 */}
                                 



                                <div class="col-md-6">
                                    <label for="inputZip" class="form-label">Postcode</label>
                                    <input type="text" class="form-control" id="inputZip"/>
                                </div>
                                 {/* col-md-2 */}
</form>

    );
};

export default PersonalInfo;