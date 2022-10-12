import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    lastemail: '',
    passwordInput: '',
    ConformPasswordInput: '',
    showFirstNameError: false,
    showLastNameError: false,
    showeemailError: false,
    showPasswordError: false,
    showConformPasswordError: false,
    isFormSubmitted: false,
  }

  onBlurConformPassword = () => {
    const isValidConformPassword = this.validateConformPassword()

    this.setState({showConformPasswordError: !isValidConformPassword})
  }

  onChangeConformPassword = event => {
    const {target} = event
    const {value} = target

    this.setState({
      ConformPasswordInput: value,
    })
  }

  renderConformPassword = () => {
    const {ConformPasswordInput, showConformPasswordError} = this.state
    const className = showConformPasswordError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="conformPassword">
          CONFIRM PASSWORD
        </label>
        <input
          type="password"
          id="conformPassword"
          className={className}
          value={ConformPasswordInput}
          placeholder="Confirm Password"
          onChange={this.onChangeConformPassword}
          onBlur={this.onBlurConformPassword}
        />
      </div>
    )
  }

  onBlurPassword = () => {
    const isValidPassword = this.validatePassword()

    this.setState({showPasswordError: !isValidPassword})
  }

  onChangePassword = event => {
    const {target} = event
    const {value} = target

    this.setState({
      passwordInput: value,
    })
  }

  renderPassword = () => {
    const {passwordInput, showPasswordError} = this.state
    const className = showPasswordError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className={className}
          value={passwordInput}
          placeholder="Password"
          onChange={this.onChangePassword}
          onBlur={this.onBlurPassword}
        />
      </div>
    )
  }

  onBluremail = () => {
    const isValidemail = this.validateemail()

    this.setState({showeemailError: !isValidemail})
  }

  onChangeemail = event => {
    const {target} = event
    const {value} = target

    this.setState({
      lastemail: value,
    })
  }

  renderemail = () => {
    const {lastemail, showeemailError} = this.state
    const className = showeemailError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="email">
          EMAIL
        </label>
        <input
          type="email"
          id="email"
          className={className}
          value={lastemail}
          placeholder="Email"
          onChange={this.onChangeemail}
          onBlur={this.onBluremail}
        />
      </div>
    )
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()

    this.setState({showLastNameError: !isValidLastName})
  }

  onChangeLastName = event => {
    const {target} = event
    const {value} = target

    this.setState({
      lastNameInput: value,
    })
  }

  renderLastNameField = () => {
    const {lastNameInput, showLastNameError} = this.state
    const className = showLastNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          className={className}
          value={lastNameInput}
          placeholder="Last name"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
      </div>
    )
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()

    this.setState({showFirstNameError: !isValidFirstName})
  }

  onChangeFirstName = event => {
    const {target} = event
    const {value} = target

    this.setState({
      firstNameInput: value,
    })
  }

  renderFirstNameField = () => {
    const {firstNameInput, showFirstNameError} = this.state
    const className = showFirstNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          className={className}
          value={firstNameInput}
          placeholder="First name"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
      </div>
    )
  }

  validateLastName = () => {
    const {lastNameInput} = this.state

    return lastNameInput !== ''
  }

  validateFirstName = () => {
    const {firstNameInput} = this.state

    return firstNameInput !== ''
  }

  validateemail = () => {
    const {lastemail} = this.state

    return lastemail !== ''
  }

  validatePassword = () => {
    const {passwordInput} = this.state

    return passwordInput !== ''
  }

  validateConformPassword = () => {
    const {passwordInput, ConformPasswordInput} = this.state
    localStorage.setItem('password', JSON.stringify(passwordInput))
    return passwordInput === ConformPasswordInput
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {ConformPasswordInput} = this.state
    const {lastemail} = this.state
    localStorage.setItem('password', JSON.stringify(ConformPasswordInput))
    localStorage.setItem('Username', JSON.stringify(lastemail))
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()
    const isValidemail = this.validateemail()
    const isValidatePassword = this.validatePassword()
    const isValidateConformPassword = this.validateConformPassword()

    if (
      isValidFirstName &&
      isValidLastName &&
      isValidemail &&
      isValidatePassword &&
      isValidateConformPassword
    ) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidLastName,
        showeemailError: !isValidemail,
        showPasswordError: !isValidatePassword,
        showConformPasswordError: !isValidateConformPassword,

        isFormSubmitted: false,
      })
    }
  }

  renderRegistrationForm = () => {
    const {
      showFirstNameError,
      showLastNameError,
      showeemailError,
      showPasswordError,
      showConformPasswordError,
    } = this.state

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        {this.renderFirstNameField()}
        {showFirstNameError && <p className="error-message">Required</p>}
        {this.renderLastNameField()}
        {showLastNameError && <p className="error-message">Required</p>}
        {this.renderemail()}
        {showeemailError && <p className="error-message">Required</p>}
        {this.renderPassword()}
        {showPasswordError && <p className="error-message">Required</p>}
        {this.renderConformPassword()}
        {showConformPasswordError && (
          <p className="error-message">not matched</p>
        )}

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      firstNameInput: '',
      lastNameInput: '',
      lastemail: '',
      passwordInput: '',
      ConformPasswordInput: '',
    }))
  }

  renderSubmissionSuccessView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <Link to="/login">
        <button
          type="button"
          className="submit-button"
          onClick={this.onClickSubmitAnotherResponse}
        >
          Login
        </button>
      </Link>
    </>
  )

  render() {
    const {isFormSubmitted} = this.state

    return (
      <div className="registration-form-container">
        <h1 className="form-title">Registration</h1>
        <div className="view-container">
          {isFormSubmitted
            ? this.renderSubmissionSuccessView()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm