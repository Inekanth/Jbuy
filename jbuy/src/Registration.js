import React from 'react' ;

import './css/style.css' ;


function Registretion() {
  return (
	<div class="main-grid">
        
		<div class="agile-grids">	
				
			<div class="grids">
				<div class="progressbar-heading grids-heading">
					<h2>JoBuy</h2>
				</div>
					
				<div class="forms-grids">
					<div class="forms3">
					<div class="w3agile-validation w3ls-validation">
						<div class="panel panel-widget agile-validation register-form">
							<div class="validation-grids widget-shadow" data-example-id="basic-forms"> 
								<div class="input-info">
									<h3>Register Form :</h3>
								</div>
								<div class="form-body form-body-info">
									<form data-toggle="validator" action="#" method="post">
										<div class="form-group valid-form">
											<input type="text" class="form-control" id="inputName" name="Username" placeholder="Username" required=""/>
										</div>
										<div class="form-group has-feedback">
											<input type="email" class="form-control" name="Email" placeholder="Email" data-error="That email address is invalid" required=""/>
											<span class="glyphicon form-control-feedback" aria-hidden="true"></span>
											<span class="help-block with-errors">Please enter a valid email address</span>
										</div>
										<div class="form-group">
											<input type="password" data-toggle="validator" data-minlength="6" class="form-control" id="inputPassword" name="Password" placeholder="Password" required=""/>
											<span class="help-block">Minimum of 8 characters</span>
										</div>
										<div class="form-group">
											<input type="password" class="form-control" id="inputPasswordConfirm" data-match="#inputPassword" data-match-error="Whoops, these don't match" name="Confirm password" placeholder="Confirm password" required=""/>
											<div class="help-block with-errors"></div>
										</div>
										<div class="form-group">
											<div class="radio">
												<label>
													<input type="radio" name="gender" required=""/>
													  Female
												</label>
											</div>
											<div class="radio">
												<label>
												    <input type="radio" name="gender" required=""/>
													Male
												</label>
											</div>
										</div>
										<div class="form-group">
											<div class="checkbox">
												<label>
													<input type="checkbox" id="terms" data-error="Before you wreck yourself" required=""/>
														I have read and accept terms of use.
												</label>
												<div class="help-block with-errors"></div>
												</div>
											</div>
											<div class="form-group">
												<button type="submit" class="btn btn-primary disabled">Register</button>
											</div>
										</form>
									</div>
								</div>
							</div>
							
							<div class="panel panel-widget agile-validation">
								<div class="validation-grids validation-grids-right login-form">
									<div class="widget-shadow login-form-shadow" data-example-id="basic-forms"> 
										<div class="input-info">
											<h3>Login form :</h3>
										</div>
										<div class="form-body form-body-info">
											<form data-toggle="validator" action="#" method="post">
												<div class="form-group has-feedback">
													<input type="email" class="form-control" name="Eamil" placeholder="Enter Your Email" data-error="Bruh, that email address is invalid" required=""/>
													<span class="glyphicon form-control-feedback" aria-hidden="true"></span>
												</div>
												<div class="form-group">
													<input type="password" data-toggle="validator" data-minlength="6" class="form-control" id="inputPassword1" name="Password" placeholder="Password" required=""/>
												</div>
												<div class="bottom">
													<div class="form-group">
														<div class="checkbox">
															<label>
																<input type="checkbox" id="terms1" data-error="Before you wreck yourself" required=""/>
																Remember me
															</label>
															<div class="help-block with-errors"></div>
														</div>
													</div>
													<div class="form-group">
													    <button type="submit" class="btn btn-primary disabled">Login</button>
													</div>
													<div class="clearfix"> </div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="clear"> </div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
  );
}

export default Registretion;