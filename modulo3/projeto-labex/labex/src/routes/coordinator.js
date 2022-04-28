  export const goToListTripPage = (navigate) => {
    navigate("/trips/list")
  }
  export const goToLoginPage = (navigate) =>{
    navigate("/login")
  }
  export const goToApplicationFormPage = (navigate) =>{
    navigate("/trips/application") 
  }
  export const goToHomePage = (navigate) =>{
    navigate("/admin/trips/list")
  }
  export const goToCreateTripPage = (navigate) =>{
    navigate("/admin/trips/create")  
  }
  export const goBack = (navigate) =>{
    navigate(-1)
  }
