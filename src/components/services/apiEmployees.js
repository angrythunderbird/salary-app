// import API from "../config/api.config";

export async function getEmployeeAndSalary(url) {
  try {
    const response = await fetch(url);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

// const xxx = await getEmployeeAndSalary(API.apiUrl);


// export default xxx;